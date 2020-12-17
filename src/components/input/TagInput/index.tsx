import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Tag, Input, Tooltip } from "antd";
import { TagProps } from "antd/lib/tag";
import { PlusOutlined } from "@ant-design/icons";
import { InputProps } from "antd/lib/input";
import { Obj } from "@noreajs/common";
import { RuleObject } from "antd/lib/form";

export const TagInputValidators = {
  /**
   * Maximum items count validation
   * @param rule validation rule
   * @param value current input value
   */
  maxValidator: (maxItems: number) => {
    return (_rule: RuleObject, value: string[]) => {
      return new Promise((resolve, reject) => {
        if (!maxItems || value.length <= maxItems) {
          return resolve(true);
        } else {
          return reject(
            `Only ${maxItems} ${maxItems > 1 ? "items" : "item"} can be added`
          );
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
        if (!minItems || value.length >= minItems) {
          resolve(true);
        } else {
          reject(
            `At least ${minItems} ${
              minItems > 1 ? "items are" : "item is"
            } required`
          );
        }
      });
    };
  },
};

export declare type TagInputProps = Omit<
  React.SelectHTMLAttributes<HTMLInputElement>,
  "hidden" | "value" | "multiple" | "onChange" | "max" | "min"
> & {
  value?: string[];
  min?: number;
  max?: number;
  distinct?: boolean;
  onChange?: (newValue: string[]) => void;
  renderItem?: (item: string) => React.ReactNode;
  addButtonText?: React.ReactNode;
  addButtonProps?: TagProps;
  valueTagProps?: TagProps;
  inputProps?: InputProps;
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
    distinct,
    addButtonProps,
    valueTagProps,
    addButtonText,
    onChange,
    renderItem,
    ...propsRest
  } = props;

  const [inputVisible, setInputVisible] = useState(false);
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  const [tags, setTags] = useState<string[]>(value ?? []);
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
    if (onChange) onChange(newTags);
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
    if (onChange) onChange(newTags);
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
    if (onChange) onChange(newTags);
  };

  /**
   * Update min an max values
   */
  useEffect(() => {
    setMinItems(props.min);
    setMaxItems(props.max);
    // eslint-disable-next-line
  }, [props.min, props.max]);

  /**
   * Value tag component
   * @param props properties
   */
  const ValueTag: React.FC<TagProps> = (props) => {
    const { children, className, ...restProps } = Obj.merge(
      valueTagProps ?? {},
      props,
      "right"
    );

    return (
      <Tag
        className={clsx([
          className,
          "inline-flex items-center cursor-pointer mr-1 mb-1",
        ])}
        {...restProps}
      >
        {children}
      </Tag>
    );
  };

  return (
    <div>
      <input
        multiple={true}
        ref={ref}
        onChange={(e) => {
          if (onChange) onChange(e.target.value.split(","));
        }}
        {...propsRest}
        value={tags}
        max={maxItems}
        min={minItems}
        hidden
      />
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (() => {
            // inputProps explode
            const {
              type,
              size,
              className,
              placeholder,
              onChange,
              onBlur,
              onPressEnter,
              style,
              ...inputPropsRest
            } = inputProps ?? {};

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
                className={clsx([className])}
                onChange={(e) => {
                  // internal process
                  setEditInputValue(e.target.value);
                  // external process
                  if (onChange) onChange(e);
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
          })();
        }

        const isLongTag = tag.length > 20;

        const tagElem = (
          <ValueTag key={index} closable onClose={() => handleClose(tag)}>
            <span
              onDoubleClick={(e) => {
                setEditInputIndex(index);
                setEditInputValue(tag);

                e.preventDefault();
              }}
            >
              {renderItem
                ? renderItem(tag)
                : isLongTag
                ? `${tag.slice(0, 20)}...`
                : tag}
            </span>
          </ValueTag>
        );
        return !renderItem && isLongTag ? (
          <Tooltip title={tag} key={index}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}

      {inputVisible &&
        (() => {
          // inputProps explode
          const {
            type,
            size,
            className,
            placeholder,
            onChange,
            onBlur,
            onPressEnter,
            style,
            ...inputPropsRest
          } = inputProps ?? {};

          // explode style
          const { maxWidth, ...styleRest } = style ?? {};

          return (
            <Input
              ref={(instance) => {
                instance?.setValue(inputValue);
                instance?.focus();
              }}
              type={type ?? "text"}
              size={size ?? "small"}
              className={clsx([className])}
              placeholder={placeholder ?? "Enter a value"}
              onChange={(e) => {
                //internal process
                setInputValue(e.target.value);
                // external process
                if (onChange) onChange(e);
              }}
              onBlur={(e) => {
                // internal process
                handleInputConfirm();
                // external process
                if (onBlur) onBlur(e);
              }}
              onPressEnter={(e) => {
                // internal process
                handleInputConfirm();
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
        })()}
      {!inputVisible &&
        editInputIndex === -1 &&
        (!maxItems || maxItems > tags.length) &&
        (() => {
          // explode addButtonProps
          const { icon, onClick, ...addButtonPropsRest } = addButtonProps ?? {};

          // render the component
          return (
            <ValueTag
              icon={icon ?? <PlusOutlined />}
              onClick={(e) => {
                // internal process
                showInput();
                // external process
                if (onClick) onClick(e);
              }}
              {...addButtonPropsRest}
            >
              {addButtonText ?? "Add"}
            </ValueTag>
          );
        })()}
    </div>
  );
});

TagInput.defaultProps = {
  distinct: false,
};

export default TagInput;
