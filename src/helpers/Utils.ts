import { RcFile } from "antd/lib/upload";
import { useReducer, Reducer } from "react";
import React from "react";

/**
 * Merge two object with total replacement of choosed side
 *
 * @param left left object
 * @param right right object
 * @param priority merging priority
 */
export const mergeObjectStrict = (
  left: any,
  right: any,
  priority: "left" | "right" = "left"
) => {
  const mergedKeys: string[] = [];

  for (const key of [...Object.keys(left), ...Object.keys(right)]) {
    if (!mergedKeys.includes(key)) {
      mergedKeys.push(key);
    }
  }

  const merged: any = {};

  for (const key of mergedKeys) {
    switch (priority) {
      case "left":
        merged[key] = Object.prototype.hasOwnProperty.call(left, key)
          ? left[key]
          : right[key];
        break;
      case "right":
        merged[key] = Object.prototype.hasOwnProperty.call(right, key)
          ? right[key]
          : left[key];
        break;
    }
  }

  return merged;
};


/**
 * Convert array of object to object
 * @param array array to convert
 */
export const arrayToObject = (array: any[]) => {
  const r: any = {};
  for (const item of array) {
    if (typeof item === "object") {
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          const element = item[key];
          r[key] = element;
        }
      }
    }
  }
  return r;
};

/**
 * Convert RcFile to base64
 * @param img image as RcFile
 * @param callback callback
 */
export function rcFileToBase64(
  img: RcFile,
  callback: (image: any) => void
) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export function useInitReducter<
  StateType = any,
  ActionList extends string = any
>(data: {
  initialState: StateType;
  actionConfig?: {
    [key in ActionList]: (
      state: StateType,
      action: {
        type: "updateState" | ActionList;
        state?: Partial<StateType>;
        stateFn?: (state: StateType) => Partial<StateType>;
        [key: string]: any;
      }
    ) => Partial<StateType>;
  };
}): [
  StateType,
  React.Dispatch<{
    [key: string]: any;
    type: "updateState" | ActionList;
    state?: Partial<StateType> | undefined;
    stateFn?: ((state: StateType) => Partial<StateType>) | undefined;
  }>,
  React.Context<{
    state: StateType;
    dispatch: React.Dispatch<{
      [key: string]: any;
      type: "updateState" | ActionList;
      state?: Partial<StateType> | undefined;
      stateFn?: ((state: StateType) => Partial<StateType>) | undefined;
    }>;
  }>
] {
  /**
   * Reducer method
   * @param state reducer state
   * @param action action
   */
  function reducer(
    state: StateType,
    action: {
      type: "updateState" | ActionList;
      state?: Partial<StateType>;
      stateFn?: (state: StateType) => Partial<StateType>;
      [key: string]: any;
    }
  ) {
    const newState =
      action.state ?? (action.stateFn ? action.stateFn(state) : undefined);

    if (action.type === "updateState") {
      return mergeObjectStrict(state, newState, "right");
    } else if (data.actionConfig && data.actionConfig[action.type]) {
      return mergeObjectStrict(
        state,
        data.actionConfig[action.type](state, action),
        "right"
      );
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer<
    Reducer<
      StateType,
      {
        type: "updateState" | ActionList;
        state?: Partial<StateType>;
        stateFn?: (state: StateType) => Partial<StateType>;
        [key: string]: any;
      }
    >
  >(reducer, data.initialState);
  return [state, dispatch, React.createContext({ state, dispatch })];
}

/**
 * Extend object of values to a form data
 * @param obj object
 * @param filters filters to be applied on attributes
 */
export const extendToFormData = (
  obj: any,
  filters?: {
    [key: string]: (value: any) => any | [(value: any) => any];
  }
) => {
  const form = new FormData();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let element = obj[key];
      if (filters && filters[key]) {
        const func = filters[key];
        if (Array.isArray(func)) {
          for (const f of func) {
            element = f(element);
          }
        } else {
          element = func(element);
        }
      }
      form.set(key, element);
    }
  }
  return form;
};