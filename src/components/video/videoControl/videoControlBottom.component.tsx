import React from 'react';
import Icons from '../../icons/icons.component';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
export interface IVideoButtonGroupProps {
  isStartPlay: boolean;
  isFullscreen: boolean;
  onPlayAndPause: () => void;
  onFullscreen: () => void;
}

const VideoControlBottom = (props: IVideoButtonGroupProps) => {
  const { isStartPlay, isFullscreen, onPlayAndPause,onFullscreen } = props;

  const handleClickFullscreen = () => {
    onFullscreen && onFullscreen();
  }

  return (
    <div className={'antd-waffle-video-button-group'}>
      <Space>
        <Icons
          onClick={() => {
            onPlayAndPause();
          }}
          className="play-icon"
          type={isStartPlay ? 'icon-antd-waffleplayfill' : 'icon-antd-wafflestop'}
        />
        <Icons
          className="play-icon"
          type={'icon-antd-waffleweibiaoti-_huaban'}
        />
        <Icons
          className="play-icon"
          type={'icon-antd-waffleweibiaoti-_huaban1'}
        />
      </Space>
      {/* <Input style={{ width: '400px' }} /> */}
      {
        (!isFullscreen)? 
        <FullscreenOutlined onClick={handleClickFullscreen} className="play-icon" />:
         
        <FullscreenExitOutlined onClick={handleClickFullscreen} className="play-icon" />
      }
    
    </div>
  );
};

export default VideoControlBottom;
