import {
  WarningOutlined,
  LeftOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorWrapper from "../../components/error/ErrorWrapper";

export default {
  title: "Errors/ErrorWrapper",
  component: ErrorWrapper,
  decorators: [(Story) => <BrowserRouter>{Story()}</BrowserRouter>],
  argTypes: {
    errors: {
      defaultValue: [],
    },
    loading: {
      defaultValue: false,
    },
    spinProps: {},
    mode: {
      defaultValue: "replace",
    },
    renderError: {},
    customize: {
      defaultValue: {
        errorIcon: (className, style) => {
          return <WarningOutlined className={className} style={style} />;
        },
      },
    },
    actionOptions: {
      defaultValue: {
        actionType: "page_reload",
        defaultIcons: {
          gotToHomeButton: <LeftOutlined />,
          refreshButton: <ReloadOutlined />,
          reloadPageButton: <ReloadOutlined />,
        },
        defaultTexts: {
          gotToHomeButton: "Goto home page",
          refreshButton: "Refresh",
          reloadPageButton: "Reload the page",
        },
      },
    },

    overlayClassName: {},
    refreshButtonText: {},
    goToHomePageButtonText: {},
  },
} as ComponentMeta<typeof ErrorWrapper>;

const Template: ComponentStory<typeof ErrorWrapper> = (args) => (
  <ErrorWrapper {...args}>
    <h1>Content wrapped</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
      consequuntur facilis nisi optio magnam molestiae, tempore quo veniam
      expedita est rerum, a neque odit quibusdam nostrum. Id impedit adipisci
      ullam!
    </p>
  </ErrorWrapper>
);
export const WithErrors = Template.bind({});
WithErrors.args = {
  errors: [
    {
      type: "INTERNAL",
      name: "error name",
      reloadPage: false,
      message:
        "This is an error message for test, don't take it seriously sir.. please.",
    },
  ],
  label: "ErrorWrapper",
};

export const WithoutErrors = Template.bind({});
WithoutErrors.args = {
  errors: [],
  label: "ErrorWrapper",
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  errors: [
    {
      type: "INTERNAL",
      name: "error name",
      reloadPage: false,
      message:
        "This is an error message for test, don't take it seriously sir.. please.",
    },
  ],
  label: "ErrorWrapper",
  loading: true,
};
