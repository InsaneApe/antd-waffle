import React, { useRef, useEffect, useState, useMemo, ReactNode } from 'react';
import { Spin } from 'antd';
import classnames from 'classnames';
import { toCharts } from '../../constants/common';
import './video.less';
// import mp from '../../../ui/video/badapple.mp4';
import VideoPaintedEggShell from './videoPaintedEggShell/index.component';
import VideoControl from './videoControl/videoControl.component';
import { PlayCircleOutlined } from '@ant-design/icons';
import FullScreen,{ useFullScreenHandle } from '../fullScreen/fullScreen.component';
import ResizeObserver from 'resize-observer-polyfill';
import Animate from 'rc-animate';
export interface VideoProps {
  source?: string | ReactNode;
  paintedEggshell?: boolean;
  width?: number;
  height?: number;
  className: string;
}

const Video = (props: VideoProps) => {
  const { paintedEggshell = false, width = 900, height = 600,className } = props;
  const videoRef = useRef<any>(null);
  const cavRef = useRef<any>(null);
  const rootRef = useRef<any>(null);
  const [loadWaiting, setLoadingWaiting] = useState(false);
  const [isStartPlay, setIsStartPlay] = useState(true);
  const handle = useFullScreenHandle();
  const [code, setCode] = useState('');
  const initWidthAndHeight = {
    width: width,
    height: height
  }
  const [playWidthAndHeight, setPlayWidthAndHeight] = useState<any>({
    ...initWidthAndHeight
  });
  const [rootWidthAndHeight, setRootWidthAndHeight] = useState<any>({
    ...initWidthAndHeight
  });

  let timer: any = null;

  useEffect(() => {
    videoRef.current.addEventListener('play', beginCapture);
    videoRef.current.addEventListener('pause', endCapture);
    videoRef.current.addEventListener('ended', endCapture);
    videoRef.current.addEventListener('playing', () => {
      endCapture();
      beginCapture();
    });
    videoRef.current.addEventListener('onwaiting', () => {
      console.log('onwaiting');
    });
    videoRef.current.addEventListener('onseeking', () => {
      console.log('onseeking');
    });
    videoRef.current.addEventListener('oncanplaythrough', () => {
      setLoadingWaiting(false);
      console.log('oncanplaythrough');
    });
  });

  const ResizeRootAttribute = () => {
    const root = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // const { left, top } = entry.contentRect;
        const rootWidth = entry.contentRect.width;
        const rootHeight = entry.contentRect.height;
        setRootWidthAndHeight({
          width: rootWidth,
          height: rootHeight
        })
      }
    });

    root.observe(handle.node?.current);
  }

  useEffect(() => {
    if (handle.active) {
      ResizeRootAttribute();
      const widthAndHeight = {
        width:'100%',
        height:'100vh'
      }
      setPlayWidthAndHeight({...widthAndHeight})
    } else {
      setPlayWidthAndHeight({...initWidthAndHeight})
    }
  }, [handle.active]);

  const currentTime = useMemo(() => {
    return videoRef.current?.currentTime;
  }, [videoRef.current?.currentTime]);

  const captureImage = () => {
    let ctx = null;
    cavRef.current.width = playWidthAndHeight.width;
    cavRef.current.height = playWidthAndHeight.height;

    if (cavRef.current.width) {
      ctx = cavRef.current.getContext('2d');
      ctx.clearRect(0, 0, playWidthAndHeight.width, playWidthAndHeight.height);
      ctx.drawImage(videoRef.current, 0, 0, playWidthAndHeight.width, playWidthAndHeight.height);
      if (paintedEggshell) {
        openPaintedEggShell(ctx);
      }
    }
  };

  const openPaintedEggShell = (ctx) => {
    if (paintedEggshell) {
      setCode(
        toCharts({
          context: ctx,
          width: playWidthAndHeight.width as number,
          height: playWidthAndHeight.height as number,
          rowChars: 100,
        })
      );
    }
  };

  const animate = () => {
    captureImage();
    timer = requestAnimationFrame(animate);
  };

  const beginCapture = function () {
    animate();
  };
  const endCapture = function () {
    cancelAnimationFrame(timer);
  };

  const handleClickStartPlay = () => {
    if (isStartPlay) {
      videoRef?.current.play();
      setIsStartPlay(false);
    } else {
      setIsStartPlay(true);
      videoRef?.current.pause();
    }
  };

  const handleClickFullscreen = () => {
    if (handle.active) {
      handle.exit();
    } else {
      handle.enter();
    }
  };

  const renderVideo = useMemo(() => {
    return (
      <video
        style={{ width: rootWidthAndHeight.width, height: rootWidthAndHeight.height,display:'none' }}
        ref={videoRef}
        src={'./'}
        controls
      />
    );
  }, [videoRef,rootWidthAndHeight]);

  return (
    <>
      {renderVideo}
      <FullScreen handle={handle}>
        <div
          ref={rootRef}
          className={classnames('antd-waffle-video-container',className)}
          style={{ width: playWidthAndHeight.width, height: playWidthAndHeight.height }}
        >
          {loadWaiting && (
            <div className="antd-waffle-video-loading">
              <Spin />
            </div>
          )}

          <div className="antd-waffle-playAndPause-icons">
            <Animate transitionName="fade">
              {isStartPlay ? (
                <PlayCircleOutlined
                  onClick={handleClickStartPlay}
                  style={{ color: '#fff' }}
                />
              ) : null}
            </Animate>
          </div>
          {console.log(rootWidthAndHeight.width)}
          {console.log(rootWidthAndHeight.height)}
          <canvas width={rootWidthAndHeight.width} height={rootWidthAndHeight.height} ref={cavRef} />
          <VideoControl
            hovers={false}
            isFullscreen={handle.active}
            isStartPlay={isStartPlay}
            onPlayAndPause={handleClickStartPlay}
            onFullscreen={handleClickFullscreen}
            progress={0}
            currentTime={currentTime}
          />
          <VideoPaintedEggShell code={code} paintedEggshell={paintedEggshell} />
        </div>
      </FullScreen>

      {/* <button onClick={currentTime}>点击</button>
      <button onClick={handleClickFullscreen}>Enter fullscreen</button> */}
    </>
  );
};

export default Video;
