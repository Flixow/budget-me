import React, { Suspense } from 'react';
import { refetchAllQueries } from 'react-query';
import { LoadingIndicator, Button } from 'components';

class SuspenseErrorBoundary extends React.PureComponent {
  static getDerivedStateFromError(error) {
    return { error };
  }
  static defaultProps = {
    error: {},
  }
  state = { status: null };

  componentDidCatch(error, info) {
    // log the error to the server like Rollbar/Sentry
    console.log(error, info);
  }

  tryAgain = async() => {
    await refetchAllQueries({ includeInactive: true });
    this.setState({ error: null });
  };

  render() {
    return (
      <Suspense fallback={<LoadingIndicator />}>
        {this.state.error ? (
          <div>
              There was an error. <Button onClick={this.tryAgain}>Try again</Button>
            <pre style={{ whiteSpace: 'normal' }}>{this.state.error.message}</pre>
          </div>
        ) : (
          this.props.children
        )}
      </Suspense>
    );
  }
}

export default SuspenseErrorBoundary;
