import React from "react";
import classnames from 'classnames';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import './dropdownList.less';

export interface IDropdownListProps {
  className?: string
  data: any[];
}

const DropdownList = (props: IDropdownListProps) => {
  const { className, data } = props;

  const renderAction = (item: any) => {
    return (
      <div className="antd-waffle-dropdown-list-item-action">
        <div className="antd-waffle-space">
          <div className="ant-space-item">
            <span className="action-star">
              <StarOutlined />
            </span>
          </div>
          <div className="ant-space-item">
            {item.star}
          </div>
        </div>
        <div className="antd-waffle-space">
          <div className="ant-space-item">
            <span className="action-star">
              <LikeOutlined />
            </span>
          </div>
          <div className="ant-space-item">
            {item.like}
          </div>
        </div>
        <div className="antd-waffle-space">
          <div className="ant-space-item">
            <span className="action-star">
              <MessageOutlined />
            </span>
          </div>
          <div className="ant-space-item">
            {item.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classnames('antd-waffle-dropdown-list-root', className)} >
      <ul className="antd-waffle-dropdown-list-items">
        {data.map(item => {
          return (
            <li className="antd-waffle-dropdown-list-item">
              <div className="antd-waffle-dropdown-list-item-container">
                <div className="antd-waffle-dropdown-list-left-container">
                  <div className="antd-waffle-dropdown-list-meta">
                    <div className="antd-waffle-dropdown-list-meta-avatar">
                      <span className="antd-waffle-dropdown-list-meta-avatar-img">
                        <img className="avatar-img" src={item.avatar} />
                      </span>
                    </div>
                    <div className="antd-waffle-dropdown-list-meta-content">
                      <h4 className="antd-waffle-dropdown-list-meta-title">
                        <a href={item.href}>{item.title}</a>
                      </h4>
                      <div className="antd-waffle-dropdown-list-meta-description">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <div className="antd-waffle-dropdown-list-meta-other-description">
                    {item.content}
                  </div>
                  {renderAction(item)}
                </div>
                <div className="antd-waffle-dropdown-list-right-container">
                  
                </div>
              </div>
            </li>);
        })}
      </ul>
    </div>
  );
}

export default DropdownList;