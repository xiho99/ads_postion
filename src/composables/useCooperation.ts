import { reactive, ref } from "vue";
import { submitCooperate } from "../api/cooperation";
import EnumApiErrorCode from "../models/enums/enumApiErrorCode";
import notificationHelper from "../libraries/elementUiHelpers/notificationHelper";
import EnumMessageType from "../models/enums/enumMessageType";
import { ICooperation } from "../models/ICooperation";

export default function useCooperation() {
    const isLoading = ref(false);
    const formInput = reactive({
        name: '',
        cat_id: 0,
        type: '',
        address: '',
        aircraft: '',
        message: '',
    })
    const onSubmit = async () => {
        const request: ICooperation = {
            name: formInput.name,
            type: formInput.type,
            address: formInput.address,
            aircraft: formInput.aircraft,
            message: formInput.aircraft,
            cat_id: 0,
        }
        const response = await submitCooperate(request);
        if (response['code'] === EnumApiErrorCode.success) {
            notificationHelper.notification('Success', EnumMessageType.Success);
        }
    };
    return {
        onSubmit,
    }
}