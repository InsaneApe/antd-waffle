import styles from './index.less';
import { Login } from '@fengbeans/antd-waffle';
import {Button} from 'antd';

export default function IndexPage() {
  return (

    <div>
      <Login>
        <div>
          <h1 className={styles.title}>Page index</h1>
        </div>
        <Button>111</Button>
      </Login>
   
    </div>
  );
};
