import React from "react";

export function withPageParams<P>(
  WrappedComponent: React.ComponentType<P>
) {

  const ComponentWithState = (props: P) => {
    return (
      <WrappedComponent
        {...props}
      />
    )
  };

  return ComponentWithState;
}