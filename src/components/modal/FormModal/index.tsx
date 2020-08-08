import React from "react";
import { Modal } from "antd";
import { ModalProps } from "antd/lib/modal";
import CustomSpace from "../../disposition/FlexSpace";
import styled from "styled-components";
import tw from "twin.macro";

const SModal = styled(Modal)`
  .ant-modal-content {
    ${tw`rounded-lg!`}
  }

  .ant-modal-content .ant-modal-header {
    ${tw`rounded-t-lg!`}
  }
`;

export declare type FormModalProps = ModalProps & {
  title?: React.ReactNode;
  titleIcon?: React.ForwardRefExoticComponent<any>;
};
const FormModal: React.FC<FormModalProps> = (props) => {
  // explose props
  const {
    title,
    titleIcon,
    centered,
    keyboard,
    children,
    okButtonProps,
    cancelButtonProps,
    maskClosable,
    ...propsRest
  } = props;
  return (
    <SModal
      centered={centered ?? true}
      keyboard={keyboard ?? false}
      maskClosable={maskClosable ?? false}
      title={
        <CustomSpace className="items-center">
          {titleIcon &&
            React.createElement(titleIcon, {
              className: "text-xl text-blue-500",
            })}
          <span className="font-semibold text-xl">{title}</span>
        </CustomSpace>
      }
      okButtonProps={
        okButtonProps ?? {
          className: "rounded-full",
        }
      }
      cancelButtonProps={
        cancelButtonProps ?? {
          className: "rounded-full",
        }
      }
      {...propsRest}
    >
      {children}
    </SModal>
  );
};

export default FormModal;
