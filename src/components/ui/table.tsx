import React, { CSSProperties, ReactNode } from 'react';
import { utils } from '@/lib';
import { ScrollArea } from '..';
import { useTheme } from '@/contexts';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
  const theme = useTheme();
  return (
    <table
      ref={ref}
      className={utils.cn(`w-full`, className)}
      // style={{ background: theme.colors.background }}
      {...props}
    />
  );
});
Table.displayName = `Table`;

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  const theme = useTheme();
  return (
    <thead
      ref={ref}
      className={utils.cn(`sticky top-0`, className)}
      // style={{ backgroundColor: theme.colors.tableHeaderBackground }}
      {...props}
    />
  );
});
TableHeader.displayName = `TableHeader`;

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return <tbody ref={ref} className={className} {...props} />;
});
TableBody.displayName = `TableBody`;

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return <tfoot ref={ref} className={className} {...props} />;
});
TableFooter.displayName = `TableFooter`;

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  const theme = useTheme();
  return (
    <tr
      ref={ref}
      className={className}
      // style={{ backgroundColor: theme.colors.tableRowBackground }}
      {...props}
    />
  );
});
TableRow.displayName = `TableRow`;

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  return (
    <th
      ref={ref}
      className={utils.cn(`py-2 text-left font-semibold`, className)}
      {...props}
    />
  );
});
TableHead.displayName = `TableHead`;

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  return <td ref={ref} className={className} {...props} />;
});
TableCell.displayName = `TableCell`;

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => {
  return <caption ref={ref} className={className} {...props} />;
});
TableCaption.displayName = `TableCaption`;

type Data = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  colspan?: number;
}[][];

type Table = {
  className?: string;
  style?: CSSProperties;
  headers: Data;
  content: Data;
  classNameTable?: string;
};

const Component = ({
  className,
  classNameTable,
  style,
  headers = [],
  content = [],
}: Table) => {
  return (
    <ScrollArea className={utils.cn(`w-full`, className)} style={style}>
      <Table className={classNameTable}>
        <TableHeader>
          {headers.map((row, index) => {
            return (
              <TableRow key={`row-${index}`}>
                {row.map(({ children, className, style, colspan }, index1) => {
                  return (
                    <TableHead
                      key={`col-${index1}`}
                      className={utils.cn(
                        `py-0 pb-2 align-top`,
                        index !== 0 && `pt-2`,
                        index1 !== 0 && `pl-2`,
                        className,
                      )}
                      style={style}
                      colSpan={colspan}
                    >
                      {children}
                    </TableHead>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>
        <TableBody>
          {content.map((row, index) => {
            return (
              <TableRow key={`row-${index}`}>
                {row.map(({ children, className, style, colspan }, index1) => {
                  return (
                    <TableCell
                      key={`col-${index1}`}
                      className={utils.cn(
                        `align-top`,
                        index !== 0 && `pt-2`,
                        index1 !== 0 && `pl-2`,
                        className,
                      )}
                      style={style}
                      colSpan={colspan}
                    >
                      {children}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export { Component };
