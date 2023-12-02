import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
interface TableProps extends HTMLAttributes<HTMLTableElement> {
}
interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
}
interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
}
interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {
}
interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
}
interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
}
interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
}
declare const Table: import("react").ForwardRefExoticComponent<TableProps & import("react").RefAttributes<HTMLTableElement>>;
declare const TableHeader: import("react").ForwardRefExoticComponent<TableHeaderProps & import("react").RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: import("react").ForwardRefExoticComponent<TableBodyProps & import("react").RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: import("react").ForwardRefExoticComponent<TableFooterProps & import("react").RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: import("react").ForwardRefExoticComponent<TableRowProps & import("react").RefAttributes<HTMLTableRowElement>>;
declare const TableHead: import("react").ForwardRefExoticComponent<TableHeadProps & import("react").RefAttributes<HTMLTableCellElement>>;
declare const TableCell: import("react").ForwardRefExoticComponent<TableCellProps & import("react").RefAttributes<HTMLTableCellElement>>;
export { Table, TableBody, type TableBodyProps, TableCell, type TableCellProps, TableFooter, type TableFooterProps, TableHead, TableHeader, type TableHeaderProps, type TableHeadProps, type TableProps, TableRow, type TableRowProps, };
