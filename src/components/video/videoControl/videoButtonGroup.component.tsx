import React from 'react';
import Icons from '../../icons/icons.component';
import QueueAnim from 'rc-queue-anim';

export interface IVideoButtonGroupProps {
  startPlay: boolean;
  onPlayAndPause: () => void;
}

const VideoButtonGroup = (props: IVideoButtonGroupProps) => {
  const { startPlay, onPlayAndPause } = props;

  return (
    <div className={'antd-waffle-video-button-group'}>
      <QueueAnim
        animConfig={[
          { opacity: [1, 0], translateY: [0, 50] },
          { opacity: [1, 0], translateY: [0, -50] },
        ]}
      >
        <Icons
          onClick={() => {
            onPlayAndPause();
          }}
          className="play-icon"
          type={startPlay ? 'icon-antd-waffleplayfill' : 'icon-antd-wafflestop'}
        />
      </QueueAnim>
    </div>
  );
};

export default VideoButtonGroup;
