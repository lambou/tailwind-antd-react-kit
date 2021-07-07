import { RcFile } from 'antd/lib/upload'
import { useReducer, Reducer } from 'react'
import React from 'react'
import moment from 'moment'
import { Obj } from '@noreajs/common'

/**
 * Convert array of object to object
 * @param array array to convert
 */
export const arrayToObject = (array: any[]) => {
  const r: any = {}
  for (const item of array) {
    if (typeof item === 'object') {
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          const element = item[key]
          r[key] = element
        }
      }
    }
  }
  return r
}

/**
 * Convert RcFile to base64
 * @param img image as RcFile
 * @param callback callback
 */
export function rcFileToBase64(img: RcFile, callback: (image: any) => void) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

/**
 * Initialize reducer
 * @param data reducer initialization data
 */
export function useInitReducer<
  StateType = any,
  ActionList extends string = any
>(data: {
  initialState: StateType
  actionConfig?: {
    [key in ActionList]: (
      state: StateType,
      action: {
        type: 'updateState' | ActionList
        state?: Partial<StateType>
        stateFn?: (state: StateType) => Partial<StateType>
        [key: string]: any
      }
    ) => Partial<StateType>
  }
}): [
  StateType,
  React.Dispatch<{
    [key: string]: any
    type: 'updateState' | ActionList
    state?: Partial<StateType> | undefined
    stateFn?: ((state: StateType) => Partial<StateType>) | undefined
  }>,
  React.Context<{
    state: StateType
    dispatch: React.Dispatch<{
      [key: string]: any
      type: 'updateState' | ActionList
      state?: Partial<StateType> | undefined
      stateFn?: ((state: StateType) => Partial<StateType>) | undefined
    }>
  }>
] {
  // /**
  //  * Merge two objects; it replace as soon as the key exists in the priority object
  //  * @param left left object
  //  * @param right right object
  //  * @param priority left or right
  //  */
  // function mergeStrict(left: any, right: any, priority = 'left') {
  //   const mergedKeys: any[] = []
  //   for (const key of [...Object.keys(left), ...Object.keys(right)]) {
  //     if (!mergedKeys.includes(key)) {
  //       mergedKeys.push(key)
  //     }
  //   }
  //   const merged: any = {}
  //   for (const key of mergedKeys) {
  //     switch (priority) {
  //       case 'left':
  //         merged[key] = Object.prototype.hasOwnProperty.call(left, key)
  //           ? left[key]
  //           : right[key]
  //         break
  //       case 'right':
  //         merged[key] = Object.prototype.hasOwnProperty.call(right, key)
  //           ? right[key]
  //           : left[key]
  //         break
  //     }
  //   }
  //   return merged
  // }

  /**
   * Reducer method
   * @param state reducer state
   * @param action action
   */
  function reducer(
    state: StateType,
    action: {
      type: 'updateState' | ActionList
      state?: Partial<StateType>
      stateFn?: (state: StateType) => Partial<StateType>
      [key: string]: any
    }
  ) {
    const newState =
      action.state ?? (action.stateFn ? action.stateFn(state) : undefined)

    if (action.type === 'updateState') {
      return Obj.mergeStrict(state, newState, 'right')
    } else if (data.actionConfig && data.actionConfig[action.type]) {
      return Obj.mergeStrict(
        state,
        data.actionConfig[action.type](state, action),
        'right'
      )
    } else {
      return state
    }
  }

  const [state, dispatch] = useReducer<
    Reducer<
      StateType,
      {
        type: 'updateState' | ActionList
        state?: Partial<StateType>
        stateFn?: (state: StateType) => Partial<StateType>
        [key: string]: any
      }
    >
  >(reducer, data.initialState)
  return [state, dispatch, React.createContext({ state, dispatch })]
}

/**
 * Extend object of values to a form data
 * @param obj object
 * @param filters filters to be applied on attributes
 */
export const extendToFormData = (
  obj: any,
  filters?: {
    [key: string]: (value: any) => any | [(value: any) => any]
  }
) => {
  const form = new FormData()
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let element = obj[key]
      if (filters && filters[key]) {
        const func = filters[key]
        if (Array.isArray(func)) {
          for (const f of func) {
            element = f(element)
          }
        } else {
          element = func(element)
        }
      }
      form.set(key, element)
    }
  }
  return form
}

/**
 * Group date by calendar day
 * @param data array of item with a date property
 * @param dateProperty date property
 * @param dateFormat date form
 */
export function groupDate<T = any>(
  data: T[],
  dateProperty: keyof T,
  dateFormat?: string
) {
  const r: {
    [date: string]: T[]
  } = {}

  for (const item of data) {
    // only if the date property exist
    if (item[dateProperty]) {
      const date = moment(item[dateProperty], dateFormat)

      const dateWithoutTime = moment(date.format('DD/MM/YYYY'), 'DD/MM/YYYY')

      // extract map key
      const mapKey = dateWithoutTime.calendar({
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
      })

      // get map item
      let mapItem = r[mapKey]

      if (mapItem) {
        // push the new item
        mapItem.push(item)
      } else {
        // initiate de list
        r[mapKey] = [item]
      }
    }
  }

  return r
}

/**
 * Order array by the given date property following the given order
 * @param params parameters
 */
export function orderByDate<T = any>(params: {
  data: T[]
  dateProperty: keyof T
  order?: 'asc' | 'desc'
  dateFormat?: string
}) {
  return params.data.sort((a, b) => {
    if (params.order === 'asc') {
      return moment(a[params.dateProperty], params.dateFormat).isAfter(
        moment(b[params.dateProperty], params.dateFormat)
      )
        ? 1
        : -1
    } else {
      return moment(a[params.dateProperty], params.dateFormat).isBefore(
        moment(b[params.dateProperty], params.dateFormat)
      )
        ? 1
        : -1
    }
  })
}
