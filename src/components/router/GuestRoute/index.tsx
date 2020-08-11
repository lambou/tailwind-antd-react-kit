import React, { useState, useEffect } from 'react'
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps
} from 'react-router-dom'

export declare type GuestRouteProps = RouteProps & {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
  authenticated: boolean
  redirectUrl?: string
}

const GuestRoute = React.forwardRef<Route, GuestRouteProps>((props, ref) => {
  // explode props
  const { component: Component, authenticated, redirectUrl, ...rest } = props

  const [connected, setConnected] = useState<boolean>(authenticated)

  useEffect(() => {
    setConnected(props.authenticated)
    // eslint-disable-next-line
  }, [props.authenticated])

  return (
    <Route
      ref={ref}
      {...rest}
      render={(routeProps) =>
        connected ? (
          <Redirect to={redirectUrl ?? '/'} />
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  )
})

export default GuestRoute
