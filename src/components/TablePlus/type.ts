
import {ReactNode} from 'react';
import {ButtonProps } from 'antd';


interface TablePlusOperatingLeftOptionChildren {
  label: string | ReactNode;
  value: string;
}

type ButtonTypeProps = Pick<ButtonProps, 'type'>;
 
export interface TablePlusOperatingLeftOptions {
  label:string;
  type:'button' | 'input' | 'select' | 'export' | 'import';
  buttonType?:{
    type?:ButtonTypeProps,
    danger?:'danger'
  };
  onClick?: (value?:any) => void;
  onChange?:(value: any) => void;
  option?:TablePlusOperatingLeftOptionChildren[];
  disabled?: boolean;
}

export interface TablePlusOperatingLeftProps {
  placeholder?: string ;
  onSearch?: (search: any) =>void;
  children?: ReactNode;
  size?: "large" | "middle" | "small"
  option?: TablePlusOperatingLeftOptions[];
}
