import React from 'react';
import Icons from '../../icons/icons.component';
export interface IVideoButtonGroupProps {
  startPlay: boolean;
  onPlayAndPause: () => void;
}

const VideoControlBottom = (props: IVideoButtonGroupProps) => {
  const { startPlay, onPlayAndPause } = props;

  return (
    <div className={'antd-waffle-video-button-group'}>
      <Icons
        onClick={() => {
          onPlayAndPause();
        }}
        className="play-icon"
        type={startPlay ? 'icon-antd-waffleplayfill' : 'icon-antd-wafflestop'}
      />
    </div>
  );
};

export default VideoControlBottom;
