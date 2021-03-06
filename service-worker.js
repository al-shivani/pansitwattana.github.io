importScripts('workbox-sw.prod.v2.1.1.js');

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
    "revision": "d26526034698527bc7dd213b9a62a067"
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
    "revision": "7b9ab06612c2bc07ebc41a1aa3dd4bb8"
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
    "url": "mathquill/font/Symbola-basic.eot",
    "revision": "8df3e41fee3876159737c311ed9b9642"
  },
  {
    "url": "mathquill/font/Symbola-basic.ttf",
    "revision": "c91d1d52217bb3429936c002ef6df9ed"
  },
  {
    "url": "mathquill/font/Symbola-basic.woff",
    "revision": "d9f7c9e7d73b84f16563abacddbf1482"
  },
  {
    "url": "mathquill/font/Symbola-basic.woff2",
    "revision": "5e4d2a2f191cea67bcb285576286adbf"
  },
  {
    "url": "mathquill/font/Symbola.eot",
    "revision": "e4ae9ff7ac2476ae421fc4278e5d3806"
  },
  {
    "url": "mathquill/font/Symbola.otf",
    "revision": "4621fcfd9def63c694914f7ec5add610"
  },
  {
    "url": "mathquill/font/Symbola.ttf",
    "revision": "52a6aac18ae26b6ecbd4f3a0d9579c9f"
  },
  {
    "url": "mathquill/font/Symbola.woff",
    "revision": "72981090d0240678c5d0a964fe29f082"
  },
  {
    "url": "mathquill/font/Symbola.woff2",
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
    "url": "static/css/main.5facb18e.css",
    "revision": "03e4825777400b57b1f9693638ba4485"
  },
  {
    "url": "static/media/dummy.20c74952.png",
    "revision": "20c749526efa11e1db84cd80cfff5dd4"
  },
  {
    "url": "static/media/flags.9c74e172.png",
    "revision": "9c74e172f87984c48ddf5c8108cabe67"
  },
  {
    "url": "static/media/icons.263bfe56.eot",
    "revision": "263bfe56755cefdc9e6c3d8070e0868d"
  },
  {
    "url": "static/media/icons.27c88389.woff2",
    "revision": "27c88389f00e0d8bfeebebae81f240b6"
  },
  {
    "url": "static/media/icons.7bc63d50.woff",
    "revision": "7bc63d50d4158c6bfd4b30a99c9f9460"
  },
  {
    "url": "static/media/icons.b42b4467.svg",
    "revision": "b42b446772f84a277ee29a0615b38800"
  },
  {
    "url": "static/media/icons.d3490a32.ttf",
    "revision": "d3490a32350db6c9c41e69cc9ce99cd0"
  },
  {
    "url": "static/media/Symbola.4621fcfd.otf",
    "revision": "4621fcfd9def63c694914f7ec5add610"
  },
  {
    "url": "static/media/Symbola.52a6aac1.ttf",
    "revision": "52a6aac18ae26b6ecbd4f3a0d9579c9f"
  },
  {
    "url": "static/media/Symbola.b1445a46.woff",
    "revision": "b1445a46ceac48f13cec0860ab1acf5f"
  },
  {
    "url": "static/media/Symbola.cb8d804a.woff2",
    "revision": "cb8d804a242b86175fdd6cb8e11b1a35"
  },
  {
    "url": "static/media/Symbola.e4ae9ff7.eot",
    "revision": "e4ae9ff7ac2476ae421fc4278e5d3806"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
