import confirm from "antd/lib/modal/confirm";
import Backend, { BackendCallFuncProps } from "./Backend";
import { ModalFuncProps } from "antd/lib/modal";

export declare type BackendCallConfirmFunProps = {
  callParams?: BackendCallFuncProps;
  confirmProps: ModalFuncProps;
};

/**
 * Confirm with backend call
 * @param props parameters
 */
export default function useBackendCallConfirm(
  props: BackendCallConfirmFunProps
): [() => void] {
  // delete process
  async function deleteProcess() {
    if (props.callParams) {
      await Backend.getInstance().call(props.callParams);
    }
  }

  // explode confirmProps
  const { onOk, ...confirmPropsRest } = props.confirmProps;

  function process() {
    confirm({
      ...confirmPropsRest,
      onOk() {
        if (onOk) onOk();
        return new Promise(async (resolve) => {
          await deleteProcess();
          resolve(true);
        });
      },
      onCancel() {},
    });
  }

  return [process];
}
