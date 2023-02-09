import React from 'react';
import { Login,FullScreen, Waterfall } from '@insaneape/antd-waffle';
import { Button } from 'antd';

const {useFullScreenHandle} =FullScreen;
const dataImages = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/400',
  'https://picsum.photos/300/300',
  'https://picsum.photos/250/300',
  'https://picsum.photos/200/320',
  'https://picsum.photos/300/400',
  'https://picsum.photos/200/300',
  'https://picsum.photos/150/100',
  'https://picsum.photos/100/320',
  'https://picsum.photos/580/320',
  'https://picsum.photos/580/300',
  'https://picsum.photos/580/300',
];

function App() {
  const handle = useFullScreenHandle();
  return (
    <div className="App">
      <Login>
        123
        <Button>
          点击
        </Button>
      </Login>
      <Button>
        点击按需加载
      </Button>
      <Waterfall
        source={dataImages}
        waterFallSetting={{
          margin: { x: 10, y: 30 },
          columns: 3,
        }}
      />
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
    </div>
  );
}

export default App;
