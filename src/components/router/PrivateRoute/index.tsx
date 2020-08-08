import React from 'react'
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps
} from 'react-router-dom'

export declare type PrivateRouteProps = RouteProps & {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
  authenticated: () => boolean
  redirectUrl?: string
}
//React.FC<PrivateRouteProps>
const PrivateRoute = React.forwardRef<Route, PrivateRouteProps>(
  (props, ref) => {
    // explode props
    const { component: Component, authenticated, redirectUrl, ...rest } = props

    return (
      <Route
        ref={ref}
        {...rest}
        render={(routeProps) =>
          authenticated() ? (
            <Component {...routeProps} />
          ) : (
            <Redirect to={redirectUrl ?? '/login'} />
          )
        }
      />
    )
  }
)

export default PrivateRoute
