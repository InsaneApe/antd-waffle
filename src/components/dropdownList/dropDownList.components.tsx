import React from "react";
import classnames from 'classnames';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { DropdownListModel } from "./type";
import demo3 from '@ui/image/demo3.jpg';
import './dropdownList.less';

export interface IDropdownListProps {
  className?: string
  data: DropdownListModel[];
}

const DropdownList = (props: IDropdownListProps) => {
  const { className, data } = props;

  const renderAction = (item: DropdownListModel) => {
    return (
      <div className="antd-waffle-dropdown-list-item-action">
        <div className="antd-waffle-space">
          <div className="ant-space-item">
            <span className="action-star">
              <StarOutlined />
            </span>
          </div>
          <div className="ant-space-item">
            {item.starCount}
          </div>
        </div>
        <div className="antd-waffle-space">
          <div className="ant-space-item">
            <span className="action-star">
              <LikeOutlined />
            </span>
          </div>
          <div className="ant-space-item">
            {item.likeCount}
          </div>
        </div>
        <div className="antd-waffle-space">
          <div className="ant-space-item">
            <span className="action-star">
              <MessageOutlined />
            </span>
          </div>
          <div className="ant-space-item">
            {item.messageCount}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classnames('antd-waffle-dropdown-list-root', className)} >
      <ul className="antd-waffle-dropdown-list-items">
        {data.map((item: DropdownListModel) => {
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
                  <img className='antd-waffle-img' src={demo3} />
                </div>
              </div>
            </li>);
        })}
      </ul>
    </div>
  );
}

export default DropdownList;