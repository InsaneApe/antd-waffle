import React from "react";
import classnames from 'classnames';
import { second } from "@constants/common";

export interface IVideoProgressProps {
  progress: number;
}

const VideoProgress = (props: IVideoProgressProps) => {
  const { progress } = props;
  console.log(second(progress));
  return (
    <div 
      className={classnames("antd-waffle-video-control-progress-wrapper")}
      
      >
          <span className="antd-waffle-video-playing-time">
          00:10
          </span>
          <div className="antd-waffle-video-play-line">
            <div className="antd-waffle-video-play-button">
              <div className="antd-waffle-video-has-been-played"></div>
            </div>
          </div>
          <span className="antd-waffle-video-playing-time">
            {
              second(progress)
              
              //  Math.round(progress)
            }
          </span>
    </div>
  );
}

export default VideoProgress;