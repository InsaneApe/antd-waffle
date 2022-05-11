
import {ReactNode} from 'react';
import {ButtonProps } from 'antd';


interface TablePlusOperatingOptionChildren {
  label: string | ReactNode;
  value: string;
}

type ButtonTypeProps = Pick<ButtonProps, 'type'>;
 
export interface TablePlusOperateOptions {
  label:string;
  type:'button' | 'input' | 'select' | 'export' | 'import';
  buttonType?:ButtonTypeProps;
  onClick?: (value?:any) => void;
  onChange?:(value: any) => void;
  option?:TablePlusOperatingOptionChildren[];
  disabled?: boolean;
  size?: "large" | "middle" | "small";
}

export interface TablePlusOperateProps {
  searchPlaceholder?: string ;
  onSearch?: (search: any) =>void;
  children?: ReactNode;
  size?: "large" | "middle" | "small"
  option?: TablePlusOperateOptions[];
  placeholder?: string;
}


export interface TablePlusLeftOperateProps {
  searchPlaceholder?: string ;
  onSearch?: (search: any) =>void;
  children?: ReactNode;
  size?: "large" | "middle" | "small"
  option?: TablePlusOperateOptions[];
  width?: string | number;
  leftOperateClassName?: string;
  placeholder?: string;
}

