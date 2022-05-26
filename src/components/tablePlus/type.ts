
import {ReactNode} from 'react';
import {ButtonProps,TableProps } from 'antd';


interface TablePlusOperatingOptionChildren {
  label: string | ReactNode;
  value: string;
}

type ButtonTypeProps = Pick<ButtonProps, 'type'>;

export interface TablePlusProps<RecordType>
  extends Omit<TableProps<RecordType>, 'title' | 'size'> {
  title?: ReactNode | string;
  className?: string;
  leftOption?: TablePlusOperateOptions[];
  rightOption?: TablePlusOperateOptions[];
  size?: 'small' | 'middle' | 'large' | undefined;
  onSearch?: (value: string) => void;
  onSelect?: (value: any) => void;
  reverse?: boolean;
  prefixClsTablePlus?: string;
}
export interface TablePlusOperateRootProps extends TablePlusOperateProps {
  reverse:boolean;
  rightOption?:any;
  onSelect?: (value: any) => void;
}

export type TablePlusOperateProps = TablePlusRightOperateProps & TablePlusLeftOperateProps
 
export interface TablePlusTitleProps {
  title?: string | React.ReactNode
}

export interface TablePlusOperateOptions {
  label:string;
  styleType:'button' | 'input' | 'select' | 'export' | 'import';
  buttonType?:ButtonTypeProps;
  onClick?: (value?:any) => void;
  onChange?:(value: any) => void;
  option?:TablePlusOperatingOptionChildren[];
  disabled?: boolean;
  size?: 'small' | 'middle' | 'default';
}

export interface TablePlusRightOperateProps {
  size?: "large" | "middle" | "small"
  operateRightOption?: TablePlusOperateOptions[];
  placeholder?: string;
  onSelect?: (value: any) => void;
  rightOperateClassName?:string;
}
export interface TablePlusLeftOperateProps {
  searchPlaceholder?: string ;
  onSearch?: (search: any) =>void;
  size?: "large" | "middle" | "small"
  operateLeftOption?: TablePlusOperateOptions[];
  searchWidth?: string | number;
  leftOperateClassName?: string;
  
}
