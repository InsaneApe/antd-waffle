import React from "react";
import classnames from 'classnames';
import './video.less';


export interface IVideoComponentProps {
  className?: string;
  src?: string;
}

const VideoComponent = (props: IVideoComponentProps) => {
  const { className, src } = props;

  return (
    <React.Fragment>
      <div
        className={classnames('video-root', className)}
      >
        <video
          controls
          src={src}
          className="video-content"
          autoPlay
        >
        </video>
      </div>
    </React.Fragment>
  );
}

export default VideoComponent;