import React from 'react';
import classnames from 'classnames';
import VideoProgress, { IVideoProgressProps } from './videoProgress.component';
import VideoButtonGroup from './videoButtonGroup.component';

export interface IVideoComponentProps extends IVideoProgressProps {
  hovers: boolean;
  startPlay: boolean;
  onPlayAndPause:()=>void;
}

const VideoControl = (props: IVideoComponentProps) => {
  const { hovers, startPlay,onPlayAndPause,progress } = props;

  return (
    <div
      className={classnames(
        'antd-waffle-video-control',
        hovers ? 'antd-waffle-video-control-hover' : ' '
      )}
    >
      <VideoProgress 
        progress={progress}
      />
      <VideoButtonGroup 
        startPlay={startPlay}
        onPlayAndPause={onPlayAndPause}
      />
    </div>
  );
};

export default VideoControl;
