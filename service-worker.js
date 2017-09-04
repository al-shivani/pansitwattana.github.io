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
    "revision": "161be75335f4b55b627478a7526502d8"
  },
  {
    "url": "icon.png",
    "revision": "2273f47e97a9239724f1cfb269f3ed6c"
  },
  {
    "url": "index.html",
    "revision": "e764a89dcae90b88539b36b9f32ddc1c"
  },
  {
    "url": "manifest.json",
    "revision": "3b8ffc788323e2f158c5eded6d23d6c9"
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
    "url": "static/css\\main.9ed6c276.css",
    "revision": "a56a563f2e0b3147ff09b9f848c9ef3a"
  },
  {
    "url": "static/js\\main.13ec03e7.js",
    "revision": "759f7b38a4034bd4a24a33d667154a9a"
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
