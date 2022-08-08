import React from 'react'
import { PlayCircleOutlined,PauseCircleOutlined } from '@ant-design/icons';

interface VideoPlayAndPauseIconsProps {
  startPlay:boolean;
}

export default function VideoPlayAndPauseIcons(props:VideoPlayAndPauseIconsProps) {
  const {startPlay} = props;
  return (
    <div className='antd-waffle-playAndPause-icons'>
      {
        startPlay?
        <PlayCircleOutlined 
          style={{color: 'white'}}
        />
        :
        <PauseCircleOutlined 
          style={{color: 'white'}}
        />
      }
    </div>
  )
}
