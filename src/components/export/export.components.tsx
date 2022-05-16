import React from "react";
import { Button } from "antd";
import { CSVLink } from "react-csv";
import { DownloadOutlined } from '@ant-design/icons';
import { BaseButtonProps } from "antd/lib/button/button";
import classnames from 'classnames';
import { FileType } from "@constants/common";
import './export.less';


export interface IExportProps extends BaseButtonProps {
  className?: string;
  label: string;
  data?: any[];
  headers?: any[];
  fileName?: string;
  fileType?: string;
  exportToXlsx?: () => void;
}

const Export = (props: IExportProps) => {
  const { className, data, label, headers, fileName, fileType, exportToXlsx, ...other } = props;

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
        className={classnames('download-btn',className)}
        onClick={exportToXlsx}
        icon={<DownloadOutlined />}  
        {...other}
      >
        {downloadType()}
      </Button>
    </React.Fragment>
  );
}

export default Export;