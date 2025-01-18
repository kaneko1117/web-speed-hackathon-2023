import 'core-js';
import 'setimmediate';
// IE11のためのものなので一旦削除
// import 'date-time-format-timezone';
import './temporal';

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    setImmediate: <T extends unknown[]>(callback: (...args: T) => void, ...args: T) => number;
    clearImmediate: (handle: number) => void;
  }
}
