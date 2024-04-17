switch (process.platform) {
  case 'win32':
    process.env.WEBVIEW_PATH = 'libwebview.dll';
    break;
  case 'linux':
    process.env.WEBVIEW_PATH = 'libwebview.so';
    break;
  case 'darwin':
    process.env.WEBVIEW_PATH = `libwebview.${process.arch}.dylib`;
    break;
  default:
    throw 'unsupported platform: ' + process.platform;
}
export {};
