import React from 'react'
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps
} from 'react-router-dom'

type GuestRouteProps = RouteProps & {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
  authenticated: () => boolean
  redirectUrl?: string
}

const GuestRoute = React.forwardRef<Route, GuestRouteProps>((props, ref) => {
  // explode props
  const { component: Component, authenticated, redirectUrl, ...rest } = props

  return (
    <Route
      ref={ref}
      {...rest}
      render={(routeProps) =>
        authenticated() ? (
          <Redirect to={redirectUrl ?? '/'} />
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  )
})

export default GuestRoute
