import React from "react";
import Dashboard from "./dashboard";

const isClassComponent = (Component) =>
  Boolean(Component.prototype && Component.prototype.isReactComponent);

function wrapComponent(WrappedComponent) {
  //The Wrapped Component is a class Component
  if (isClassComponent(WrappedComponent)) {
    return class extends WrappedComponent {
      render() {
        const { user } = this.props;

        if (user) {
          //return below is the same as super.render()
          return <WrappedComponent {...this.props} />;
        }
        return (
          <div>
            Hi guest...Your dashboard will be limited to a few operations
          </div>
        );
      }
    };
  } else {
    //The Wrapped Component is a functional Component
    return class extends React.Component {
      render() {
        const { user } = this.props;
        if (user) {
          return <WrappedComponent {...this.props} />;
        }
        return (
          <div>
            Hi guest...Your dashboard will be limited to a few operations
          </div>
        );
      }
    };
  }
}

const withUser = () => wrapComponent(Dashboard);

export const AppHOCWrapperDashboard = withUser(wrapComponent);
