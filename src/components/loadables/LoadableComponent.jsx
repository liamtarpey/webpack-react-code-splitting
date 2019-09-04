import React, { PureComponent, Suspense, Fragment, lazy } from 'react';
import LoadableErrorBoundary from './LoadableErrorBoundary.jsx';
import LoadableConstants from './loadable.constants.js';

// Private vars
const filename = 'LoadableComponent.jsx';

/**
 * Our render for any loading state
 * (Visible whilst the component is being fetched)
 */
const loadingState = (
    <div>LOADING...</div>
);

const CreateComponent = (comp) => {

    if (!LoadableConstants[comp]) {
        throw `${filename} - '${comp}' cannot be found in the loadables list.`;
    }

    return class CreateComponent extends PureComponent {
        constructor(props) {
            super();

            this.hasMounted = false;
            this.state = { component: null };

            this.loadChunk = this.loadChunk.bind(this);
            this.stateSetter = this.stateSetter.bind(this);
        }

        componentDidMount() {
            this.hasMounted = true;
            this.loadChunk();
        }

        componentWillUnmount() {
            this.hasMounted = false;
        }

        loadChunk() {
            this.stateSetter({ component: lazy(LoadableConstants[comp]) });
        }

        stateSetter(stateParams) {
            this.hasMounted && this.setState(stateParams);
        }

        render() {
            if (!this.state.component) {
                return (null);
            }

            return (
                <LoadableErrorBoundary onRetry={this.loadChunk}>
                    <Suspense fallback={loadingState}>
                        <this.state.component {...this.props} />
                    </Suspense>
                </LoadableErrorBoundary>
            );
        }
    }
};

const LoadComponent = (comp) => CreateComponent(comp);
export default LoadComponent;
