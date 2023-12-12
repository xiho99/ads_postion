import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import createPersistedState from "vuex-persistedstate";

export interface State {
  appVersion: string;
  token: string;
  init: boolean;
  windowInfo: any;
  lexInfo: any;
  test: string;
  app_config: Object;
  userInfo: any;
  click: number;
}

export const key: InjectionKey<Store<State>> = Symbol("Copy From Vuex Doc");

// 创建一个新的 store 实例
export default createStore<State>({
  state() {
    let defaultBaseUrl = "";
    if (import.meta.env.NODE_ENV == "development") {
      defaultBaseUrl = import.meta.env.VUE_APP_DEFAULT_URL;
    } else if (import.meta.env.VUE_APP_FLAVOR == "pc") {
      defaultBaseUrl = "/api";
    }
    return {
      // 原生app的版本号
      appVersion: "",
      token: "",
      init: false,
      windowInfo: {} as any,
      lexInfo: {} as any,
      test: "hello world",
      app_config: {},
      userInfo: {} as any,
      click: 0,
    };
  },
  mutations: {
    SET_APP_VERSION(state, data: string) {
      state.appVersion = data;
    },
    SET_LEX_INFO(state, lex: any) {
      state.lexInfo = lex;
    },
    SET_WINDOW_INFO(state, windowInfo: any) {
      state.windowInfo = windowInfo;
    },
    SET_USERINFO(state, userInfo: object) {
      state.userInfo = userInfo;
    },
    SET_CLICK(state, click = 1) {
      if (state.click === 10) return;
      state.click += click;
    },
  },
  actions: {
    // 设置app信息
    setAppInfo({ commit }, data) {
      if (data.version) {
        commit("SET_APP_VERSION", data.version);
      }
      if (data.lexInfo) {
        commit("SET_LEX_INFO", data.lexInfo);
      }
      if (data.windowInfo) {
        commit("SET_WINDOW_INFO", data.windowInfo);
      }
    },
  },
  getters: {},
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage:
        import.meta.env.VUE_APP_FLAVOR == "app"
          ? localStorage
          : (window as any).cookies, //存储到cookie
      // storage:window.sessionStorage 存储到sessionStorage
      // 如果不写默认存储到localStorage
      // 存储的 key 的key值
      key: "store",
      // paths: []
    }),
  ],
});
// export default store;
export function useStore(): Store<State> {
  return baseUseStore(key);
}
