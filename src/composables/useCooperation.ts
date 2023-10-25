import { reactive, ref } from "vue";
import { submitCooperate } from "@/api/cooperation";
import EnumApiErrorCode from "@/models/enums/enumApiErrorCode";
import notificationHelper from "@/libraries/elementUiHelpers/notificationHelper";
import EnumMessageType from "@/models/enums/enumMessageType";

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
      const response = await submitCooperate();
      if (response['code'] === EnumApiErrorCode.success) {
          notificationHelper.notification('Success', EnumMessageType.Success);
      }
    };
    return {
        onSubmit,
    }
}