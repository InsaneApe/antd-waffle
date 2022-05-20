import React from 'react';
import classnames from 'classnames';
import VideoProgress, { IVideoProgressProps } from './videoProgress.component';
import VideoControlBottom, { IVideoButtonGroupProps } from './videoControlBottom.component';

export interface IVideoComponentProps extends IVideoComponentChildProps {
  hovers: boolean;
}
type IVideoComponentChildProps = IVideoProgressProps & IVideoButtonGroupProps

const VideoControl = (props: IVideoComponentProps) => {
  const { hovers, isStartPlay,onPlayAndPause,progress,currentTime,isFullscreen,onFullscreen } = props;

  return (
    <div
      className={classnames(
        'antd-waffle-video-control',
        hovers ? 'antd-waffle-video-control-hover' : ' '
      )}
    >
      <VideoProgress 
        progress={progress}
        currentTime={currentTime}
      />
      <VideoControlBottom 
        isFullscreen={isFullscreen}
        isStartPlay={isStartPlay}
        onPlayAndPause={onPlayAndPause}
        onFullscreen={onFullscreen}
      />
    </div>
  );
};

export default VideoControl;
