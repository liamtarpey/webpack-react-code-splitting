import React, { PureComponent, Fragment } from 'react';

const filename = 'MyErrorBoundary.jsx';

const logError = (error) => {
    console.log(filename, error);
};

class LoadableErrorBoundary extends PureComponent {
    constructor() {
        super();

        this.state = { 
            hasError: false,
            error: null
        };

        this.retryLoad = this.retryLoad.bind(this);
    }

    static getDerivedStateFromError(error) {
        logError(error);
        return { 
            hasError: true, 
            error 
        };
    }

    retryLoad() {
        this.setState({ hasError: false, error: null });
        this.props.onRetry();
    }

    render() {
        if (this.state.hasError) {
            return (
                <Fragment>
                    <p>An error occured</p>
                    <button onClick={this.retryLoad}>Retry</button>
                </Fragment>
            );
        }

        return this.props.children; 
    }
}

export default LoadableErrorBoundary;
