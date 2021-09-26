import { ComponentMeta, ComponentStory } from "@storybook/react";
import TagInput from "../../components/input/TagInput";

export default {
  title: "Inputs/TagInput",
  component: TagInput,
  argTypes: {
    value: {
      defaultValue: [],
    },
    min: {},
    max: {},
    distinct: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    onChange: {},
    renderItem: {},
    addButtonText: {},
    addButtonProps: {},
    valueTagProps: {},
    inputProps: {},
  },
} as ComponentMeta<typeof TagInput>;

const Template: ComponentStory<typeof TagInput> = (args) => (
  <div>
    <TagInput {...args} />
  </div>
);

export const DefaultTagInput = Template.bind({});
DefaultTagInput.args = {
  value: [
    "first item",
    "second item",
    "other item",
    "very long items! but for a reason that you have to guest, we can display it as it is... The item max length is defined by the attribute `itemMaxLength`",
  ],
  label: "Default tag input",
};

export const CustomizedTagInput = Template.bind({});
CustomizedTagInput.args = {
  value: [
    "first item",
    "second item",
    "other item",
    "very long items! but for a reason that you have to guest, we can display it as it is... The item max length is defined by the attribute `itemMaxLength`",
  ],
  valueTagProps: {
    className: "px-2 py-1 border bg-white rounded-full",
  },
  addButtonProps: {
    className: "rounded-full py-1 px-2 bg-blue-500 text-white border-blue-500",
  },
  inputProps: {
    size: "middle",
    className: "rounded-full",
  },
  renderItem: (_item: string, reducedValue: string) => {
    return <span className="font-bold">{reducedValue}</span>;
  },
  label: "Customzed tag input",
};
