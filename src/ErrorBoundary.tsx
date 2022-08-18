import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@mui/material";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public handleNavigate () {
    window.location.href = '/'
  }

  public render() {
    if (this.state.hasError) {
      return (
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#808080'
          }}
        >
          <h1 style={{ color: 'white' }}>Sorry... There was error in application</h1>
          <Button onClick={() => this.handleNavigate()} style={{ color: 'white' }}>Back</Button>
        </section>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
