import React, { Component, PropsWithChildren } from 'react'

interface Props{
  children: React.ReactNode
}
interface State{
  hasError: boolean,
}

export default class ErrorBoundries extends Component<Props, State> {
  
  public state: State = {hasError: false}

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
   console.log(`Error: ${error.message} \n info: ${errorInfo}`)
  }

  render() {
    return this.state.hasError ? <h1>Sorry have an error</h1> : this.props.children
  }
}
