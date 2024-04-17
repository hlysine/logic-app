import './webview';
import { SizeHint, Webview } from 'webview-bun';

const webview = new Webview(false, {
  width: 1366,
  height: 768,
  hint: SizeHint.NONE,
});

webview.title = 'Logic Pad';
webview.navigate('https://logic-pad.vercel.app/');
webview.run();
