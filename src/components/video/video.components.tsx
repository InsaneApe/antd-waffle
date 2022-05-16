import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { Spin } from 'antd';
import classnames from 'classnames';
import { toCharts } from '../../constants/common';
import './video.less';
import mp from '../../../ui/video/badapple.mp4';
import VideoPaintedEggShell from './videoPaintedEggShell/index.component';
import VideoControl from './videoControl/videoControl.component';

export interface VideoProps {
  source?: string | ReactNode;
  paintedEggshell?: boolean;
}

const VideoComponent = (props: VideoProps) => {
  const { source, paintedEggshell = false } = props;
  const videoRef = useRef<any>(null);
  const cavRef = useRef<any>(null);
  const [loadWaiting, setLoadingWaiting] = useState(true);

  const [code, setCode] = useState('');
  const playWidth = 500;
  const playHeight = 300;
  let timer: any = null;

  useEffect(() => {
    videoRef.current.addEventListener('play', beginCapture);
    videoRef.current.addEventListener('pause', endCapture);
    videoRef.current.addEventListener('ended', endCapture);
    videoRef.current.addEventListener('playing', () => {
      endCapture();
      beginCapture();
    });
  });

  const captureImage = () => {
    let ctx = null;
    cavRef.current.width = videoRef.current.videoWidth;
    cavRef.current.height = videoRef.current.videoHeight;
    if (cavRef.current.width) {
      ctx = cavRef.current.getContext('2d');
      ctx.clearRect(
        0,
        0,
        videoRef.current.videoWidth,
        videoRef.current.videoHeight
      );
      ctx.drawImage(
        videoRef.current,
        0,
        0,
        videoRef.current.videoWidth,
        videoRef.current.videoHeight
      );
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
          width: cavRef.current.width,
          height: cavRef.current.height,
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

  return (
    <>
      <video
        ref={videoRef}
        style={{ width: '200px', height: '200px' }}
        src={mp}
        controls
      />
      <div className={classnames('antd-waffle-video-container')}>
        {
          loadWaiting && 
          <div className='antd-waffle-video-loading'>
            <Spin/>
          </div>
        }
        <canvas width={playWidth} height={playHeight} ref={cavRef} />
        <VideoControl
          hovers={false}
          startPlay={false}
          onPlayAndPause={beginCapture}
          progress={0}
          currentTime={0}
        />
        <VideoPaintedEggShell code={code} paintedEggshell={paintedEggshell} />
      </div>
    </>
  );
};

export default VideoComponent;
