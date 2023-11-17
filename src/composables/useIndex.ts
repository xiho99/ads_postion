import { onMounted, reactive, ref } from "vue";
import { getAds, getConfiguration, getGroupCategory, getMenu, getMoreSite } from "../api/home";
import { IConfiguration } from "../models/IConfiguration";
import { IMenu } from "../models/IMenu";
import store from "../store";
import EnumApiErrorCode from "../models/enums/enumApiErrorCode";
import { IMoreSite } from "../models/IMoreSite";
import { IAds } from "../models/IAds";
import Cookies from "js-cookie";

export default function useIndex() {
    const isLoading = ref(false);
    const configurations = ref<IConfiguration[]>([])
    const getConfigItem = async () => {
        isLoading.value = true;
        const response = await getConfiguration();
        if (response.code === EnumApiErrorCode.success) {
            configurations.value = response.data;
            store.commit('setConfiguration', response.data);
        }
        isLoading.value = false;
    }
    const menus = reactive<any>({
        Icon: [],
        Button: []
    });
    const getMenuItem = async () => {
        isLoading.value = true;
        const response = await getMenu();
        if (response.code === EnumApiErrorCode.success) {
            menus.Icon = response.data.filter((item: IMenu) => item.type === 'icon');
            menus.Button = response.data.filter((item: IMenu) => item.type === 'button');
        }
        isLoading.value = false;
    }
    const groupItems = ref<any>({});
    const getGroupItem = async () => {
        isLoading.value = true;
        const response = await getGroupCategory();
        if (response.code !== EnumApiErrorCode.success) {
        } else {            
            response.data.forEach((e: any) => {
                store.commit('setCategory', response.data);
                // Cookies.set('groupCategory', 'expires: after24H', { expires: 1 });
                // if (Cookies.get('groupCategory')) return;
                groupItems.value[e.key] = e.group.map((data: any) => ({...data, isSaved: false}));
                store.commit('setCategoryGroup', groupItems.value);
            });
        }
    };
    const moreSites = ref<IMoreSite[]>([]);
    const getMoreSiteItem = async () => {
        isLoading.value = true;
        const response = await getMoreSite();
        if (response.code === EnumApiErrorCode.success) {
            moreSites.value = response.data;
        }
        isLoading.value = false;
    }
    const ads = ref<IAds[]>([]);
    const getAdsItem = async () => {
        isLoading.value = true;
        const response = await getAds();
        if (response.code === EnumApiErrorCode.success) {
            ads.value = response.data;
        }
        isLoading.value = false;
    }
    onMounted(() => {
        getConfigItem();
        getMenuItem();
        getGroupItem();
        // getMoreSiteItem();
        getAdsItem();
    })
    return {
        isLoading,
        menus,
        moreSites,
        ads,
    }
}