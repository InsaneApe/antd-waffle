import React, { useRef, useState } from "react";
import demo from '../../../ui/video/dome1.mp4'
import classnames from 'classnames';
import './video.less';
import VideoControl from "./videoControl/videoControl.component";


export interface IVideoComponentProps {
  className?: string;
  src?: string;
}

const VideoComponent = (props: IVideoComponentProps) => {
  const { className } = props;
  const videoRef = useRef<any>(null);
  const [hover, setHover] = useState<boolean>(false);
  const [startPlay, setStartPlay] = useState<boolean>(true);

  // useEffect(()=>{
  //   console.log(videoRef?.current);
  //   console.log(videoRef);
  //   console.log(videoRef?.current?.duration);
  // },[videoRef])
  
  const onMouseLeave = (_event) => {
    setHover(false);
  }

  const onMouseEnter = (_event) => {
    setHover(true)
  }

  const onPlayAndPause = () => {

    if(startPlay){
      videoRef?.current.play();
      setStartPlay(!startPlay);
      return;
    }
    videoRef?.current.pause();
    setStartPlay(!startPlay);
    return;
  }


  return (
    <React.Fragment>
      <div
        className={classnames('antd-waffle-video-root', className)}
        onMouseEnter = {onMouseEnter}
        onMouseLeave = {onMouseLeave}
      >
        <video
          ref={videoRef}
          controls={false}
          src={demo}
          className="antd-waffle-video-content"
        >
        </video>
        <VideoControl
          hovers={hover}
          onPlayAndPause={onPlayAndPause}
          startPlay={startPlay}
          progress={videoRef?.current?.duration}
        />
      </div>
    </React.Fragment>
  );
}

export default VideoComponent;