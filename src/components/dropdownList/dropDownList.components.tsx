import React from "react";
import classnames from 'classnames';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from "antd";
import './dropdownList.less';

export interface IDropdownListProps {
  className?: string
  data: any[];
  footerChildren: React.ReactNode;
  img: JSX.Element;
}

const DropdownList = (props: IDropdownListProps) => {
  const { className, data, footerChildren, img, ...config } = props;

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div className={classnames('antd-waffle-dropdown-list-root', className)} >
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={data}
        footer={footerChildren}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={img}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
}

export default DropdownList;