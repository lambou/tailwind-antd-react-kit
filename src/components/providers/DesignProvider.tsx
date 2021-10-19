import React from "react";
import { useInitReducer } from "..";
import IDesignProviderContext from "../interfaces/IDesignProviderContext";

export type IDesignProviderActionType = "updateState";

export type IDesignProvider = IDesignProviderContext & {
  /**
   * Reducer dispatch function to update design global props
   */
  dispatch?: React.Dispatch<{
    [key: string]: any;
    type: IDesignProviderActionType;
    state?: Partial<IDesignProviderContext> | undefined;
    stateFn?:
      | ((state: IDesignProviderContext) => Partial<IDesignProviderContext>)
      | undefined;
  }>;
};

/**
 * Define default context
 */
const defaultContext: IDesignProviderContext = {
  avatarsProps: {
    as: "div",
    stackDirection: "left",
    hoveredItemOnTop: false,
    initialZIndex: 0,
  },
  flexProps: {
    as: "div",
    inline: false,
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    items: "stretch",
    content: "normal",
  },
  flexItemProps: {
    as: "div",
    order: 0,
    grow: 0,
    shrink: 1,
    self: "auto",
    basis: "auto",
  },
  spaceProps: {
    gap: "0.5rem",
  },
  tagInputProps: {
    distinct: false,
    itemMaxLength: 15,
  },
};

export const designContext = React.createContext<IDesignProvider>(
  defaultContext
);

export type IDesignProviderProps = {
  /**
   * Initial components properties
   */
  initial: IDesignProviderContext;
};

/**
 * The design provider is used to set the default properties of all components globally
 * @param props properties
 * @returns
 */
const DesignProvider: React.FC<IDesignProviderProps> = (props) => {
  // explode props
  const { initial, children } = props;
  /**
   * States management
   */
  const [state, dispatch] = useInitReducer<
    IDesignProviderContext,
    IDesignProviderActionType
  >({
    initialState: initial,
    actionConfig: {
      updateState: (_state, action) => {
        return action.state ?? (action.stateFn ? action.stateFn(_state) : {});
      },
    },
  });
  return (
    <designContext.Provider
      value={{
        ...state,
        dispatch: dispatch,
      }}
    >
      {children}
    </designContext.Provider>
  );
};

// default context value
DesignProvider.defaultProps = {
  initial: defaultContext,
};

export default DesignProvider;
