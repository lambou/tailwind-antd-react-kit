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
      defaultValue: "overlay",
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
    <div className="flex flex-row">
      <div className="flex flex-col gap-2 w-1/2">
        <h1 className="text-5xl font-bold">Content wrapped</h1>
        <p className="text-2xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          consequuntur facilis nisi optio magnam molestiae, tempore quo veniam
          expedita est rerum, a neque odit quibusdam nostrum. Id impedit
          adipisci ullam! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Culpa aliquam vel ipsam ex? Voluptas assumenda cupiditate
          nostrum magnam saepe, incidunt natus eum repellat voluptatem fugiat in
          dolorum! Nisi, non asperiores!
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          className="rounded-md"
          height="280"
          width="500"
          src="https://picsum.photos/500/280?grayscale"
          alt="random picture"
        />
      </div>
    </div>
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
