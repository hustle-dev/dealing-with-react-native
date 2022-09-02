/**
 * 프로젝트의 엔트리 파일
 */

/**
 * Prettier와 관련되어 있음
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/**
 * @description App이라는 컴포넌트를 불러와서 이 registerComponent를 이용해 네이티브 시스템에 해당 컴포넌트를 등록한다.
 */
AppRegistry.registerComponent(appName, () => App);
