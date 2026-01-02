
import React, { Component } from 'react';

/**
 * ErrorBoundary component to catch rendering errors and display a graceful fallback UI.
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  // Lifecycle method to update state when a child component throws an error
  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  // Lifecycle method for side-effects when an error occurs
  componentDidCatch(error, errorInfo) {
    // Log the error for monitoring and debugging
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    // Check if an error has occurred in the child component tree
    if (this.state.hasError) {
      // Fallback UI to show when the component tree crashes
      return (
        <div className="p-8 text-center bg-cream min-h-[300px] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-deep mb-4">Something went wrong.</h2>
          <button 
            className="px-6 py-2 bg-primary text-white rounded-lg"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children || null;
  }
}
