import React from 'react'

export default function VideoPaintedEggShell(props) {

  const {paintedEggshell,code} =props;

  return (
    <>
     {paintedEggshell && (
      <div className="antd-waffle-video-paintedEggshell">
          <pre
          style={{
            fontSize: '10px',
            lineHeight: '8px',
            fontFamily: 'Courier New',
          }}
        >
          {code}
        </pre>
      </div>
    )}
    </>
  )
}
