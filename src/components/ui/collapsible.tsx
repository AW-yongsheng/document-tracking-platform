import React, { ReactNode, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';

type Collapsible = {
  className?: string;
  children: ReactNode;
  collapsedChildren?: ReactNode;
  propIsExpanded?: boolean;
};

const Component = ({
  className,
  children,
  collapsedChildren,
  propIsExpanded,
}: Collapsible) => {
  const { getCollapseProps, isExpanded, setExpanded } = useCollapse();

  useEffect(() => {
    if (isExpanded !== propIsExpanded) {
      setExpanded(!!propIsExpanded);
    }
  }, [isExpanded, propIsExpanded, setExpanded]);

  return (
    <div className={className}>
      {children}
      <section {...getCollapseProps()}>{collapsedChildren}</section>
    </div>
  );
};

export { Component };
