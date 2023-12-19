import { onMounted, reactive, ref } from "vue";
import { getConfiguration, getGroupCategory, getMenu, getMoreSite } from "@/api/home";


export default function useIndex() {
    const isLoading = ref(false);

    return {
        isLoading,

    }
}