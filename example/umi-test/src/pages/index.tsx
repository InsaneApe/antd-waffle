import styles from './index.less';
import { Login ,FullScreen, Waterfall } from '@fengbeans/antd-waffle';
import {Button} from 'antd';

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
const { useFullScreenHandle } = FullScreen;

export default function IndexPage() {
  const handle = useFullScreenHandle();
  return (
    <div>
      <Login>
        <div>
          <h1 className={styles.title}>Page index</h1>
        </div>
        <Button>111</Button>
      </Login>
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
      <Waterfall
        source={dataImages}
        waterFallSetting={{
          margin: { x: 10, y: 30 },
          columns: 3,
        }}
      />
      <FullScreen handle={handle}>
        <div style={{color:(handle.active)?'white':'black',fontSize:'48px'}}>
          我是需要放大全屏的文字
        </div>
      </FullScreen>
    </div>
  );
};
