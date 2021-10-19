import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Flex } from "../../components";
import DesignProvider from "../../components/providers/DesignProvider";

export default {
  title: "Providers/DesignProvider",
  component: DesignProvider,
  argTypes: {
    initial: {
      defaultValue: {
        flexProps: {
          inline: false,
          direction: "row",
          wrap: "wrap",
          justify: "flex-start",
          items: "stretch",
          content: "normal",
          gap: "2rem",
        },
      },
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof DesignProvider>;

const Template: ComponentStory<typeof DesignProvider> = (args) => (
  <DesignProvider {...args}>
    <Flex
      className="w-full p-4 bg-gray-100 rounded-md"
      style={{ minHeight: "280px" }}
    >
      <div
        style={{ minHeight: "50px", minWidth: "100px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        1
      </div>
      <div
        style={{ minHeight: "75px", minWidth: "100px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        2
      </div>
      <div
        style={{ minHeight: "100px", minWidth: "100px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        3
      </div>
      <div
        style={{ minHeight: "50px", minWidth: "50px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        4
      </div>
      <div
        style={{ minHeight: "50px", minWidth: "150px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        5
      </div>
    </Flex>
  </DesignProvider>
);

export const Example = Template.bind({});
Example.args = {
  initial: {
    flexProps: {
      inline: false,
      direction: "row",
      wrap: "wrap",
      justify: "flex-start",
      items: "start",
      content: "normal",
      gap: "2rem",
    },
  },
};
