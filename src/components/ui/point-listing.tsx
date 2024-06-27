import { CSSProperties, ReactNode } from 'react';

type PointListing = {
  className?: string;
  style?: CSSProperties;
  list: { children: ReactNode; value?: string }[];
  type?: `list-disc` | `lower-alphabet` | `lower-roman` | `number`;
  startFrom?: number;
};

const Component = ({
  className,
  style,
  list = [],
  type = `list-disc`,
  startFrom = 1,
}: PointListing) => {
  let newType = `list-disc`;

  if (type === `lower-alphabet`) {
    newType = `list-lower-alphabet`;
  }

  if (type === `lower-roman`) {
    newType = `list-lower-roman`;
  }

  if (type === `number`) {
    newType = `list-decimal`;
  }

  return (
    <ol
      className={`${newType} list-inside ${className}`}
      style={style}
      start={startFrom}
    >
      {list.map((item, index) => {
        return (
          <li key={item.value ?? `row-${index}`} className={``}>
            {item.children}
          </li>
        );
      })}
    </ol>
  );
};

export { Component };
