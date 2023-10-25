import store from "./store";

export default class Bridge {

    // 请求队列
    private static requestQueue: any = {};

    // 事件回调
    private static listener: any = {};

    // 是否完成初始化
    static initFlag = false;

    static genrateId(): string {
        return Bridge.randomStn(8);
    }

    // 添加回调
    static on(id: string, name: string, callback: (data) => any) {
        this.listener[id] = { name, callback }
    }

    // 移除回调
    static off(id: string) {
        delete this.listener[id];
    }

    static init() {
        if (window["bridge"]) {
            window["bridge"].onresponse = Bridge.onresponse;
        } else if (window["webkit"] && window["webkit"].messageHandlers) {
            window["onresponse"] = Bridge.onresponse;
        }

        let element = window.document.documentElement;
        let width = element.clientWidth;
        let height = element.clientHeight;
        if (process.env.VUE_APP_FLAVOR == 'app') {
            Bridge.request({
                name: 'getAppInfo',
            }).then(rep => {
                store.dispatch("setAppInfo", {
                    version: rep?.data?.version
                });
                Bridge.initFlag = true;
            })

            Bridge.request({ name: 'getSafeArea' })
                .then(rep => {
                    let data = rep?.data;
                    store.dispatch("setAppInfo", {
                        lexInfo: {
                            left: data?.left || 0,
                            right: data?.right || 0,
                        }
                    });
                });

            Bridge.request({ name: 'getWindowSize' })
                .then(rep => {
                    let data = rep?.data;
                    store.dispatch("setAppInfo", {
                        windowInfo: {
                            deviceWidth: data?.width || 0,
                            deviceHeight: data?.height || 0,
                            windowWidth: width,
                            windowHeight: height,
                        }
                    });
                });
        } else {
            console.log('初始化bridge');
            setTimeout(() => {
                store.dispatch("setAppInfo", {
                    windowInfo: {
                        deviceWidth: 0,
                        deviceHeight: 0,
                        windowWidth: width,
                        windowHeight: height,
                    }
                });
                Bridge.initFlag = true;
            }, 0);
        }
    }

    /**
     * 请求原生
     */
    static async request(param: any): Promise<any> {
        // let {name, id, responsive, timeout, data} = param;
        let name = param.name;
        let id = param.id;
        let responsive = (param.responsive == null || param.responsive == undefined) ? true : param.responsive;
        let timeout = param.timeout;
        let data = param.data;

        id = id || Bridge.randomStn(8);

        return await new Promise<any>((resolve) => {
            if (!responsive) {
                // 不需要响应，直接返回
                console.log('不需要响应，直接返回', param);
                resolve(true);
                return;
            }

            let hasTask = Bridge.requestQueue[id];
            if (hasTask) {
                // 对应id已经存在任务，返回错误
                console.log('对应id已经存在任务，返回错误', param);
                resolve({ code: 201, msg: 'request id not unique' });
                return;
            }

            // 超时返回失败
            let timing = timeout == null ? null : setTimeout(() => {
                console.log('超时返回失败', param);
                resolve({ code: 201, msg: 'timeout' });
                Bridge.requestQueue[id] = null;
            }, timeout);

            let platform = Bridge.getPlatform();

            if (platform == 'pc') {
                resolve({ code: 201, msg: 'platform not support' });
                return;
            }

            // 添加任务队列
            Bridge.requestQueue[id] = {
                param: param,
                callback: resolve,
                timing: timing,
            };

            let dataStr = JSON.stringify({ id: id, name: name, data: data });
            if (platform == "ios") {
                window["webkit"]?.messageHandlers.bridge.postMessage(dataStr);
            } else if (platform == "android") {
                window["bridge"]?.postMessage(dataStr);
            }
        });
    }

    /**
     * 原生返回的响应
     */
    private static onresponse(res: any) {
        let id;
        try {
            if (typeof res == "string") {
                res = JSON.parse(res);
            }

            id = res.id;
            let task = Bridge.requestQueue[id];

            if (!task) {
                // 回调事件
                for (const key in Bridge.listener) {
                    let element = Bridge.listener[key];
                    if (element.name == id) {
                        element.callback(res.data);
                    }
                }
                return;
            }

            // 取消原本的超时响应
            clearTimeout(task.timing);

            task.callback(res);
        } catch (e) {
            console.log('交互异常', e, res.code);
        } finally {
            if (id) {
                delete Bridge.requestQueue[id];
            }
        }
    }

    /*
     * 产生任意长度随机字母数字组合
     */
    private static randomStn(len: number) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQROSTWXYLZabcdefhijkOlmnprstwxyz12345678';
        var maxPos = $chars.length;
        var pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    /**
     * 获取平台
     * ps: 非本地包一律返回pc
     */
    static getPlatform() {
        if (process.env.VUE_APP_FLAVOR != 'app') {
            return 'pc';
        }
        if (window["webkit"] && window["webkit"].messageHandlers) {
            return 'ios';
        } else if (window["bridge"]) {
            return 'android';
        } else {
            return 'pc';
        }
    }
}