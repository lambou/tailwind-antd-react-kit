import { PlusOutlined } from "@ant-design/icons";
import { Input, Tag, Tooltip, TooltipProps } from "antd";
import { RuleObject } from "antd/lib/form";
import { InputProps } from "antd/lib/input";
import { TagProps } from "antd/lib/tag";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

export const TagInputValidators = {
  /**
   * Maximum items count validation
   * @param rule validation rule
   * @param value current input value
   */
  maxValidator: (maxItems: number) => {
    return (_rule: RuleObject, value: string[]) => {
      return new Promise((resolve, reject) => {
        if (Array.isArray(value)) {
          if (
            maxItems === null ||
            maxItems === undefined ||
            value.length <= maxItems
          ) {
            resolve(true);
          } else {
            reject(
              `Only ${maxItems} ${maxItems > 1 ? "items" : "item"} can be added`
            );
          }
        } else {
          resolve(true);
        }
      });
    };
  },

  /**
   * Minimum items count validation
   * @param rule validation rule
   * @param value current input value
   */
  minValidator: (minItems: number) => {
    return (_rule: RuleObject, value: string[]) => {
      return new Promise((resolve, reject) => {
        if (Array.isArray(value)) {
          if (
            minItems === null ||
            minItems === undefined ||
            value.length >= minItems
          ) {
            resolve(true);
          } else {
            reject(
              `At least ${minItems} ${
                minItems > 1 ? "items are" : "item is"
              } required`
            );
          }
        } else {
          resolve(true);
        }
      });
    };
  },
};

/**
 * Value tag component
 * @param props properties
 */
const ValueTag: React.FC<TagProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <Tag
      className={clsx([className, "inline-flex items-center cursor-pointer"])}
      {...restProps}
    >
      {children}
    </Tag>
  );
};

export declare type TagInputProps = Omit<
  React.SelectHTMLAttributes<HTMLInputElement>,
  "hidden" | "value" | "multiple" | "onChange" | "max" | "min"
> & {
  /**
   * Initial values
   */
  value?: Array<string | number>;

  /**
   * Minimum items
   */
  min?: number;

  /**
   * Maximum item
   */
  max?: number;

  /**
   * Maximun length of displayed item text
   * @default 15
   */
  itemMaxLength?: number;
  distinct?: boolean;
  onChange?: (newValue: Array<string | number>) => void;
  renderItem?: (item: string | number, reducedValue: string) => React.ReactNode;

  /**
   * Render values before the call of the onChange event
   */
  renderValues?: (items: Array<string | number>) => Array<string | number>;
  addButtonText?: React.ReactNode;
  addButtonProps?: TagProps;
  valueTagProps?: TagProps;
  inputProps?: InputProps;
  tooltipProps?: Omit<TooltipProps, "title">;
};

const TagInput: React.FC<TagInputProps> = React.forwardRef<
  HTMLInputElement,
  TagInputProps
>((props, ref) => {
  // explode main props
  const {
    className,
    inputProps,
    value,
    min,
    max,
    itemMaxLength,
    distinct,
    addButtonProps,
    valueTagProps,
    tooltipProps,
    addButtonText,
    onChange: tagInputOnChange,
    renderItem,
    renderValues,
    ...propsRest
  } = props;

  const [inputVisible, setInputVisible] = useState(false);
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  const [tags, setTags] = useState<Array<string | number>>(value ?? []);
  const [maxItems, setMaxItems] = useState<number | undefined>(max);
  const [minItems, setMinItems] = useState<number | undefined>(min);

  /**
   * Delete a tag
   * @param tag tag
   */
  const handleClose = (tag: number | string) => {
    let newTags = tags.filter((item) => tag !== item);

    // update tags
    setTags(newTags);

    // notify parent
    if (tagInputOnChange)
      tagInputOnChange(renderValues ? renderValues(newTags) : newTags);
  };

  /**
   * Show input
   */
  const showInput = () => {
    setInputVisible(true);
  };

  /**
   * Add tag
   */
  const handleInputConfirm = () => {
    let newTags = tags;
    if (
      inputValue &&
      (!distinct || (distinct && tags.indexOf(inputValue) === -1))
    ) {
      newTags = [...tags, inputValue];
    }
    setInputVisible(false);
    setInputValue("");
    setTags(newTags);

    // notify parent
    if (tagInputOnChange)
      tagInputOnChange(renderValues ? renderValues(newTags) : newTags);
  };

  /**
   * Edit tag
   */
  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setEditInputIndex(-1);
    setEditInputValue("");
    setTags(newTags);

    // notify parent
    if (tagInputOnChange)
      tagInputOnChange(renderValues ? renderValues(newTags) : newTags);
  };

  /**
   * Update min an max values
   */
  useEffect(() => {
    setMinItems(props.min);
    setMaxItems(props.max);
    // eslint-disable-next-line
  }, [props.min, props.max]);

  return (
    <div
      className={clsx([
        className,
        "flex flex-row flex-wrap items-center gap-1",
      ])}
    >
      <input
        multiple={true}
        ref={ref}
        onChange={(e) => {
          const values = e.target.value.split(",");
          if (tagInputOnChange)
            tagInputOnChange(renderValues ? renderValues(values) : values);
        }}
        {...propsRest}
        value={tags.map((i) => `${i}`)}
        max={maxItems}
        min={minItems}
        hidden
      />
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (function (inputProps: InputProps) {
            // inputProps explode
            const {
              type,
              size,
              className: inputClassName,
              placeholder,
              onChange: inputOnChange,
              onBlur,
              onPressEnter,
              style,
              ...inputPropsRest
            } = inputProps;

            // explode style
            const { maxWidth, ...styleRest } = style ?? {};

            return (
              <Input
                ref={(instance) => {
                  instance?.setValue(editInputValue);
                  instance?.focus();
                }}
                key={index}
                size={size ?? "small"}
                className={clsx([inputClassName])}
                onChange={(e) => {
                  // internal process
                  setEditInputValue(e.target.value);
                  // external process
                  if (inputOnChange) inputOnChange(e);
                }}
                onBlur={(e) => {
                  // internal process
                  handleEditInputConfirm();
                  // external process
                  if (onBlur) onBlur(e);
                }}
                onPressEnter={(e) => {
                  // internal process
                  handleEditInputConfirm();
                  // external process
                  if (onPressEnter) onPressEnter(e);
                }}
                style={{
                  maxWidth: maxWidth ?? "220px",
                  ...styleRest,
                }}
                {...inputPropsRest}
              />
            );
          })(inputProps ?? {});
        }

        const isLongTag = `${tag}`.length > (itemMaxLength ?? 15);

        const reducedValue = isLongTag
          ? `${`${tag}`.slice(0, 20)}...`
          : `${tag}`;

        // explode value tag props
        const {
          closable: valueTagClosable,
          onClose: valueTagOnClose,
          style: valueTagStyle,
          ...valueTagRestProps
        } = valueTagProps ?? {};

        // explode value tag style
        const { margin: valueTagStyleMargin, ...valueTagStyleRestProps } =
          valueTagStyle ?? {};

        const tagElem = (
          <ValueTag
            key={index}
            closable={valueTagClosable ?? true}
            style={{
              margin: "0px",
              ...valueTagStyleRestProps,
            }}
            onClose={(ev) => {
              valueTagOnClose?.(ev);
              handleClose(tag);
            }}
            {...valueTagRestProps}
          >
            <span
              onDoubleClick={(e) => {
                setEditInputIndex(index);
                setEditInputValue(`${tag}`);

                e.preventDefault();
              }}
            >
              {renderItem ? renderItem(tag, reducedValue) : reducedValue}
            </span>
          </ValueTag>
        );

        return isLongTag ? (
          <Tooltip title={tag} key={index} {...(tooltipProps ?? {})}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}

      {inputVisible &&
        (function (inputProps: InputProps) {
          // inputProps explode
          const {
            type,
            size,
            className: inputClassName,
            placeholder: inputPlaceholder,
            onChange: inputOnchange,
            onBlur: inputOnBlur,
            onPressEnter: inputOnPressEnter,
            style,
            ...inputPropsRest
          } = inputProps;

          // explode style
          const { maxWidth, ...inputStyleRest } = style ?? {};

          return (
            <Input
              ref={(instance) => {
                instance?.setValue(inputValue);
                instance?.focus();
              }}
              type={type ?? "text"}
              size={size ?? "small"}
              className={clsx([inputClassName])}
              placeholder={inputPlaceholder ?? "Enter a value"}
              onChange={(e) => {
                //internal process
                setInputValue(e.target.value);
                // external process
                if (inputOnchange) inputOnchange(e);
              }}
              onBlur={(e) => {
                // internal process
                handleInputConfirm();
                // external process
                if (inputOnBlur) inputOnBlur(e);
              }}
              onPressEnter={(e) => {
                // internal process
                handleInputConfirm();
                // external process
                if (inputOnPressEnter) inputOnPressEnter(e);
              }}
              style={{
                maxWidth: maxWidth ?? "220px",
                ...inputStyleRest,
              }}
              {...inputPropsRest}
            />
          );
        })(inputProps ?? {})}
      {!inputVisible &&
        editInputIndex === -1 &&
        (!maxItems || maxItems > tags.length) &&
        (function (buttonProps: TagProps, buttonText: React.ReactNode) {
          // explode addButtonProps
          const {
            className: addTagButtonClassName,
            icon,
            onClick,
            ...addButtonPropsRest
          } = buttonProps;

          // render the component
          return (
            <ValueTag
              icon={icon ?? <PlusOutlined />}
              className={clsx([
                addTagButtonClassName,
                "inline-flex flex-row flex-nowrap items-center",
              ])}
              onClick={(e) => {
                // internal process
                showInput();
                // external process
                if (onClick) onClick(e);
              }}
              {...addButtonPropsRest}
            >
              {buttonText}
            </ValueTag>
          );
        })(addButtonProps ?? {}, addButtonText ?? "Add")}
    </div>
  );
});

TagInput.defaultProps = {
  distinct: false,
  itemMaxLength: 15,
};

export default TagInput;
