import React from "react";
import { Result, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
          <Result
            status="error"
            title="Something went wrong"
            subTitle="An unexpected error occurred. Please try refreshing the page."
            extra={
              <Button
                type="primary"
                onClick={() => {
                  this.setState({ hasError: false });
                  window.location.href = "/";
                }}
                icon={<HomeOutlined />}
                className="bg-blue-600"
              >
                Go to Home
              </Button>
            }
          />
        </div>
      );
    }

    return this.props.children;
  }
}
