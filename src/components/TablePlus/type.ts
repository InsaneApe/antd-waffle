
import {ReactNode} from 'react';
import {ButtonProps } from 'antd';


interface TablePlusOperatingOptionChildren {
  label: string | ReactNode;
  value: string;
}

type ButtonTypeProps = Pick<ButtonProps, 'type'>;
 
export interface TablePlusOperatingOptions {
  label:string;
  type:'button' | 'input' | 'select' | 'export' | 'import';
  buttonType?:{
    type?:ButtonTypeProps,
    danger?:'danger',
  };
  onClick?: (value?:any) => void;
  onChange?:(value: any) => void;
  option?:TablePlusOperatingOptionChildren[];
  disabled?: boolean;
  size?: "large" | "middle" | "small";
}

export interface TablePlusOperatingProps {
  placeholder?: string ;
  onSearch?: (search: any) =>void;
  children?: ReactNode;
  size?: "large" | "middle" | "small"
  option?: TablePlusOperatingOptions[];
}
