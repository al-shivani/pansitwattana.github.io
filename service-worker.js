importScripts('workbox-sw.prod.v2.0.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "94ddd233913e988c72825d3ac9f01fa9"
  },
  {
    "url": "icon.png",
    "revision": "51373ff692cdda03b4c80138b6d919f6"
  },
  {
    "url": "images/user_account_profile_avatar_person_student_male-512.png",
    "revision": "20c749526efa11e1db84cd80cfff5dd4"
  },
  {
    "url": "index.html",
    "revision": "8484709feaf7a6baed23e2b354380803"
  },
  {
    "url": "jquery.min.js",
    "revision": "25a4757b2ef1bec5f437944a7e33ff77"
  },
  {
    "url": "manifest.json",
    "revision": "6d7c488d83ab305a43ec411f7e13a009"
  },
  {
    "url": "mathquill/font\\Symbola-basic.eot",
    "revision": "8df3e41fee3876159737c311ed9b9642"
  },
  {
    "url": "mathquill/font\\Symbola-basic.ttf",
    "revision": "c91d1d52217bb3429936c002ef6df9ed"
  },
  {
    "url": "mathquill/font\\Symbola-basic.woff",
    "revision": "d9f7c9e7d73b84f16563abacddbf1482"
  },
  {
    "url": "mathquill/font\\Symbola-basic.woff2",
    "revision": "5e4d2a2f191cea67bcb285576286adbf"
  },
  {
    "url": "mathquill/font\\Symbola.eot",
    "revision": "e4ae9ff7ac2476ae421fc4278e5d3806"
  },
  {
    "url": "mathquill/font\\Symbola.otf",
    "revision": "4621fcfd9def63c694914f7ec5add610"
  },
  {
    "url": "mathquill/font\\Symbola.ttf",
    "revision": "52a6aac18ae26b6ecbd4f3a0d9579c9f"
  },
  {
    "url": "mathquill/font\\Symbola.woff",
    "revision": "72981090d0240678c5d0a964fe29f082"
  },
  {
    "url": "mathquill/font\\Symbola.woff2",
    "revision": "2bb0421d8c622fb2aa1632b099807402"
  },
  {
    "url": "mathquill/mathquill.css",
    "revision": "d644a8d6117d9552946243a76bcae04b"
  },
  {
    "url": "mathquill/mathquill.js",
    "revision": "b96a12cc1530d084417bd4b4c050f6e3"
  },
  {
    "url": "static/css\\main.71c41aee.css",
    "revision": "98dc3b53fbbe5eb5292b5f99c5756c9c"
  },
  {
    "url": "static/js\\main.1cf27a06.js",
    "revision": "eb483c526f66cebcccc905f5d4573157"
  },
  {
    "url": "static/media\\flags.9c74e172.png",
    "revision": "9c74e172f87984c48ddf5c8108cabe67"
  },
  {
    "url": "static/media\\icons.674f50d2.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "static/media\\icons.912ec66d.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "static/media\\icons.af7ae505.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "static/media\\icons.b06871f2.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "static/media\\icons.fee66e71.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "static/media\\Symbola.4621fcfd.otf",
    "revision": "4621fcfd9def63c694914f7ec5add610"
  },
  {
    "url": "static/media\\Symbola.52a6aac1.ttf",
    "revision": "52a6aac18ae26b6ecbd4f3a0d9579c9f"
  },
  {
    "url": "static/media\\Symbola.b1445a46.woff",
    "revision": "b1445a46ceac48f13cec0860ab1acf5f"
  },
  {
    "url": "static/media\\Symbola.cb8d804a.woff2",
    "revision": "cb8d804a242b86175fdd6cb8e11b1a35"
  },
  {
    "url": "static/media\\Symbola.e4ae9ff7.eot",
    "revision": "e4ae9ff7ac2476ae421fc4278e5d3806"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
