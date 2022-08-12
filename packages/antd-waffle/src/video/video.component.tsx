import React, { useRef, useState, useMemo } from 'react';
import { Spin } from 'antd';
import classnames from 'classnames';
import './style/index.less';
import VideoControl from './videoControl/videoControl.component';
import { PlayCircleOutlined } from '@ant-design/icons';
import Animate from 'rc-animate';

export interface VideoProps {
  src?: string ;
  width?: number;
  height?: number;
  className: string;
  prefixClsVideo?: string;
}

const prefixCls = 'antd-waffle';

const Video = (props: VideoProps) => {
  const { width = 900, height = 600, className, prefixClsVideo, src } = props;
  const videoRef = useRef<any>(null);
  const rootRef = useRef<any>(null);
  const [loadWaiting, setLoadingWaiting] = useState(false);
  const [isStartPlay, setIsStartPlay] = useState(true);

  const handleClickStartPlay = () => {
    if (isStartPlay) {
      videoRef?.current.play();
      setIsStartPlay(false);
    } else {
      setIsStartPlay(true);
      videoRef?.current.pause();
    }
  };

  const renderVideo = useMemo(() => {
    return (
      <video
        style={{ width: width, height: height }}
        ref={videoRef}
        src={src}
        controls={false}
      />
    );
  }, [videoRef]);

  return (
    <>
      <div
        ref={rootRef}
        className={classnames(`${prefixClsVideo}-container`, className)}
        style={{ width: width, height: height }}
      >
        {loadWaiting && (
          <div className={`${prefixClsVideo}-loading`}>
            <Spin />
          </div>
        )}

        <div className={`${prefixClsVideo}-playAndPause-icons`}>
          <Animate transitionName="fade">
            {isStartPlay ? (
              <PlayCircleOutlined
                onClick={handleClickStartPlay}
                style={{ color: '#fff' }}
              />
            ) : null}
          </Animate>
        </div>
        {renderVideo}
        <VideoControl
          hovers={false}
          isStartPlay={isStartPlay}
          onPlayAndPause={handleClickStartPlay}
          progress={0}
        />
      </div>
    </>
  );
};

Video.defaultProps = {
  prefixClsVideo: `${prefixCls}-video`,
};

export default Video;

