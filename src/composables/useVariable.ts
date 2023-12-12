import { ref } from 'vue';
import { FormInstance } from 'element-plus';
import useApi from "../api/api";
import { useRoute, useRouter } from 'vue-router';

const useVariable = () => {
    const route = useRoute();
    const router = useRouter();
    const isLoading = ref( false );
    const isProcessing = ref( false );
    const ruleFormRef = ref<FormInstance>();
    const dialog = ref(false);
    const api = useApi();
    // const { width, height } = useWindowSize();
    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.resetFields();
    };
    const openDialogRef = ref();
    const onOpenAddDialog = (type: string) => {
        openDialogRef.value.openDialog(type);
    };
    const onOpenEditDialog = (type: string, row: object) => {
        openDialogRef.value.openDialog(type, row);
    };
    const fileList = ref([]);
    const renderFunc = ref();
    return {
        isLoading,
        isProcessing,
        ruleFormRef,
        dialog,
        resetForm,
        openDialogRef,
        fileList,
        onOpenAddDialog,
        onOpenEditDialog,
        api,
        renderFunc,
        route,
        router,
    };
};

export default useVariable;
