import { Platform, NativeModules } from 'react-native';
import { call, takeLatest } from 'redux-saga/effects';

const inAppBrowser = Platform.select({
  ios: NativeModules.InAppBrowser,
});

const OPEN_IN_APP_BROWSER = 'OPEN_IN_APP_BROWSER';

export function openInAppBrowser(url) {
  return {
    type: OPEN_IN_APP_BROWSER,
    payload: { url },
  };
}

function* openInAppBrowserTask(action) {
  try {
    const { url } = action.payload;
    yield call(inAppBrowser.show, url);
  } catch (e) {
    //
  }
}

export function* subscribeOpenInAppBrowser() {
  yield takeLatest(OPEN_IN_APP_BROWSER, openInAppBrowserTask);
}