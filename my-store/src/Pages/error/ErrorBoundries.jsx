import React from 'react'

export default class ErrorBoundary extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      hasError: false
    };

  }
   static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    //Can be used to log to any logging service like sentry
     console.log("Catched error", errorInfo);
  }

  render(){
    if(this.state.hasError){
      return(
        <h1>Errorr</h1>
      );
    }

    return this.props.children;
  }
}