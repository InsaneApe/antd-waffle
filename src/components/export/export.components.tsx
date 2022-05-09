import React from "react";
import { Button } from "antd";
import { CSVLink } from "react-csv";
import { DownloadOutlined } from '@ant-design/icons';
import { BaseButtonProps } from "antd/lib/button/button";
import classnames from 'classnames';
import './export.less';


export interface IExportComponentProps extends BaseButtonProps {
  className?: string;
  data?: string[][]
}

const ExportComponent = (props: IExportComponentProps) => {
  const { className, data, ...other } = props;

  return (
    <React.Fragment>
      <Button
        className={classnames('download-btn',className)}
        icon={<DownloadOutlined />}
        {...other}
      >
        <CSVLink data={data} className="download-link">Download</CSVLink>
      </Button>
    </React.Fragment>
  );
}

export default ExportComponent;