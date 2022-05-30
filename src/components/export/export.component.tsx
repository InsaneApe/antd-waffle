import React from "react";
import { Button, ButtonProps } from "antd";
import { CSVLink } from "react-csv";
import { DownloadOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { FileType } from "../../constants/common";
import './index';

export interface IExportProps extends ButtonProps {
  PrefixCls:string;
  className?: string;
  label: string;
  data?: any[];
  headers?: any[];
  fileName?: string;
  fileType?: string;
  exportToXlsx?: () => void;
}

const PrefixCls = `antd-waffle`;

const Export = (props: IExportProps) => {
  const {PrefixCls, className, data, label, headers, fileName, fileType, exportToXlsx, ...other } = props;

  const downloadType = () => {
    if (fileType === FileType.CSV) {
      return (
        <CSVLink data={data} headers={headers} filename={fileName} className="download-link">
          {label}
        </CSVLink>
      );
    }
    return <>{label}</>;
  };

  return (
    <React.Fragment>
      <Button
        className={classnames('download-btn',className,PrefixCls)}
        onClick={exportToXlsx}
        icon={<DownloadOutlined />}  
        {...other}
      >
        {downloadType()}
      </Button>
    </React.Fragment>
  );
}

Export.defaultProps = {
  PrefixCls:`${PrefixCls}-export`
}

export default Export;