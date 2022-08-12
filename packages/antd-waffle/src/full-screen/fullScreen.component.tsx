import React, {
  useCallback,
  useState,
  useRef,
  useEffect,
  useMemo,
  ReactNode,
  useContext
} from 'react';
import fscreen from 'fscreen';
import classnames from 'classnames';
import { ConfigContext } from '../constants/config-provide';

interface FullScreenHandle {
  active: boolean;
  enter: () => Promise<void>;
  exit: () => Promise<void>;
  node: React.MutableRefObject<HTMLDivElement | null>;
}

interface FullScreenProps {
  handle: FullScreenHandle;
  onChange?: (state: boolean, handle: FullScreenHandle) => void;
  className?: string;
  children?: ReactNode;
}

function useFullScreenHandle(): FullScreenHandle {
  const [active, setActive] = useState<boolean>(false);
  const node = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleChange = () => {
      setActive(fscreen.fullscreenElement === node.current);
    };
    fscreen.addEventListener('fullscreenchange', handleChange);
    return () => fscreen.removeEventListener('fullscreenchange', handleChange);
  }, []);

  const enter = useCallback(() => {
    if (fscreen.fullscreenElement) {
      return fscreen.exitFullscreen().then(() => {
        return fscreen.requestFullscreen(node.current);
      });
    } else if (node.current) {
      return fscreen.requestFullscreen(node.current);
    }
  }, []);

  const exit = useCallback(() => {
    if (fscreen.fullscreenElement === node.current) {
      return fscreen.exitFullscreen();
    }
    return Promise.resolve();
  }, []);

  return useMemo(
    () => ({
      active,
      enter,
      exit,
      node,
    }),
    [active, enter, exit],
  );
}

const FullScreen = (props:FullScreenProps) => {
  const { handle, onChange, children, className } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const fullscreenPrefixCls = getPrefixCls('fullscreen');

  useEffect(() => {
    if (onChange) {
      onChange(handle.active, handle);
    }
  }, [handle.active]);

  return (
    <div
      className={classnames(`${fullscreenPrefixCls}`,`${fullscreenPrefixCls}-enabled`,className)}
      ref={handle.node}
      style={handle.active ? { height: '100%', width: '100%' } : undefined}
    >
      {children}
    </div>
  );
};


FullScreen.useFullScreenHandle = useFullScreenHandle;

export default FullScreen;
