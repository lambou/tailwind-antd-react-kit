import { ComponentMeta, ComponentStory } from "@storybook/react";
import TagInput, { TagInputValidators } from "../../components/input/TagInput";
import { Form, Button, Input } from "antd";
import { useForm } from "antd/lib/form/Form";

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

const FormTemplate: ComponentStory<typeof TagInput> = (args) => {
  const [formInstance] = useForm();
  return (
    <div className="flex flex-row flex-nowrap">
      <div className="w-1/2">
        <Form
          onValuesChange={(_changedValues, values) => {
            console.log("Submitted values", values);
          }}
          layout="vertical"
          form={formInstance}
        >
          <div className="text-xl font-bold mb-2">Create blog a post</div>
          <div className="text-base font-thin mb-3">
            Check the <code>console logs</code> to see submitted values
          </div>
          <Form.Item
            label="Tags"
            name="tags"
            rules={[
              { required: true, message: "The post tags field is required" },
              args.min
                ? {
                    message: `at least ${args.min} tag(s) required`,
                    validator: TagInputValidators.minValidator(args.min),
                  }
                : undefined,
            ]}
            required
            hasFeedback
          >
            <TagInput {...args} />
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "The post title is required" }]}
            required
            hasFeedback
          >
            <Input type="text" placeholder="Post title" />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[
              { required: true, message: "The post content is required" },
            ]}
            required
            hasFeedback
          >
            <Input.TextArea
              className="resize-none w-full"
              placeholder="post content"
              style={{ minHeight: "75px" }}
            />
          </Form.Item>
          <Button
            type="primary"
            className="mt-2"
            onClick={() => {
              formInstance.submit();
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

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

export const TagInputInForm = FormTemplate.bind({});
TagInputInForm.args = {
  min: 2,
  max: 5,
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
  label: "Form example",
};
