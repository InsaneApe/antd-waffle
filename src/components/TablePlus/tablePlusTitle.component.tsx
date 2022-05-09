import React, { ReactNode } from 'react';
import { isString } from 'lodash';

interface TablePlusTitleProps {
  title?: string | ReactNode
}

const TablePlusTitle = (props:TablePlusTitleProps) => {

  const { title } = props;

  return (
    <div className="AntdPrivate-title">
      {
        isString(title)?
        <div className="AntdPrivate-title-content">
          {title}
        </div>:
        <>{title}</>
      }
    </div>
  )
};

export default TablePlusTitle;


