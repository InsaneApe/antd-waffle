import React from 'react';
import {FullScreen} from "@fengbeans/antd-waffle";
import {Button} from 'antd';

const FullScreenExample = () => {
  const { useFullScreenHandle } = FullScreen;
  const handle = useFullScreenHandle();
  return (
    <>
      <Button 
        onClick={()=>{
          if(handle.active){
            handle.exit();
          }else{
            handle.enter();
          }

        }}
      >
        放大
      </Button>
      <FullScreen handle={handle}>
        <div style={{color:(handle.active)?'white':'black',fontSize:'48px'}}>
          我是需要放大全屏的文字
        </div>
      </FullScreen>
    </>
  )
}

export default FullScreenExample;