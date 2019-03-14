/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5ec93804f402e9e75c06d47b82a4239a"
  },
  {
    "url": "assets/css/0.styles.638cba85.css",
    "revision": "5c1f997f030fdc21ecb4427ad02da890"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1264c7a5.js",
    "revision": "551784eedcd511aa9dbce7da38295fff"
  },
  {
    "url": "assets/js/11.051cdd82.js",
    "revision": "f1a40ea555757fe2a687da771fe7b807"
  },
  {
    "url": "assets/js/12.eb1c3a2f.js",
    "revision": "4faea70bc7e4e689e683fe7e48636c3d"
  },
  {
    "url": "assets/js/13.813d1337.js",
    "revision": "35df1c61eb9f18eba87f018a9b86e721"
  },
  {
    "url": "assets/js/14.55f242e2.js",
    "revision": "4941ed1753342a33d7cb06b13123acb0"
  },
  {
    "url": "assets/js/15.c47bca57.js",
    "revision": "965c9784e537e81717168783d945cf14"
  },
  {
    "url": "assets/js/16.563ec6ce.js",
    "revision": "552f7a95afabfee476abe4a3e8302f30"
  },
  {
    "url": "assets/js/17.2776f8a6.js",
    "revision": "5cc038cfc47f56aace1397e4faaae918"
  },
  {
    "url": "assets/js/18.6506914b.js",
    "revision": "f53f6effd12ad0eb6a62d5b0d4663e24"
  },
  {
    "url": "assets/js/19.7d8aa8ee.js",
    "revision": "97cfe7db32a6fc921b61273b1f50f144"
  },
  {
    "url": "assets/js/20.69c53764.js",
    "revision": "ed2585ef5ee08e56725b0a48c3552af2"
  },
  {
    "url": "assets/js/21.51ab0cfd.js",
    "revision": "5dce88d688b5efa422d0419b1c356d19"
  },
  {
    "url": "assets/js/22.97a5eab6.js",
    "revision": "d46f14049857614b6d1872b08a22bb4b"
  },
  {
    "url": "assets/js/23.3533065d.js",
    "revision": "db01b447045317f80b85a83af568ac02"
  },
  {
    "url": "assets/js/24.0f3dbf93.js",
    "revision": "96a72d34f292131b99c5a7a83f5e83b9"
  },
  {
    "url": "assets/js/3.b42d743f.js",
    "revision": "60ba1619b1b53d257026eb5cd5595b9b"
  },
  {
    "url": "assets/js/4.033af17a.js",
    "revision": "a5d66e4ebbd113c3771b2448bbea65da"
  },
  {
    "url": "assets/js/5.b866da95.js",
    "revision": "376d4f7c5c114f993e1f534ee738df52"
  },
  {
    "url": "assets/js/6.00de48a9.js",
    "revision": "f6763ac506517cc92a8fc97abd00484c"
  },
  {
    "url": "assets/js/7.0a6e11d3.js",
    "revision": "ad414c7a1b60af20b665c05297d29272"
  },
  {
    "url": "assets/js/8.3780772f.js",
    "revision": "42b100ea0acad78e84c50f256b8566db"
  },
  {
    "url": "assets/js/9.bf3168bb.js",
    "revision": "f2c5f2821af2899729b1bafa1ce9b745"
  },
  {
    "url": "assets/js/app.1c8ea820.js",
    "revision": "793f9afb9a59be4bec29d76d7996d9a3"
  },
  {
    "url": "assets/js/vendors~docsearch.12d3b6b4.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "google80e84fabb895736c.html",
    "revision": "563e229d19ded39e6065aa2059e87364"
  },
  {
    "url": "hero.png",
    "revision": "dd2078e66324b5927fe4525d06af1287"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5f6b5c3647efb003f844b362140e6d50"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "f17729bc05612a117136a4825e6df2a8"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "73481864ed4f84a6e048a0151ab3259e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0240aae057b307db2563cc9ca82ef33"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "001a3e0f7ce1039c66ee4b467345c681"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "a3fbd53052c98628c98f0c984bade80b"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "88bae38ca7ddda2d0f167057fff6bc39"
  },
  {
    "url": "index.html",
    "revision": "aece6e231acedf1c1f6987bcb737403f"
  },
  {
    "url": "logo.png",
    "revision": "9211627441c4938eb8650b4bdf14630d"
  },
  {
    "url": "resources/blog.html",
    "revision": "996b1006e79e914088f21708c198e403"
  },
  {
    "url": "resources/books.html",
    "revision": "81feaf6ae271dc9171d2f887ac9fb215"
  },
  {
    "url": "resources/community.html",
    "revision": "71b4249e6fb543fb1c4f7d7727c1f6a5"
  },
  {
    "url": "resources/conferences.html",
    "revision": "240deb767d7052aec9e16ddbb418ea90"
  },
  {
    "url": "resources/docker.html",
    "revision": "161abac64ad516f7c17cb3de8aba9074"
  },
  {
    "url": "resources/examples.html",
    "revision": "e3bc7f4c1b7f996e3f91b5d4ecd741ea"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "1a429a70a2c1df2fcfad667dfccbf51d"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7086ba89906070bb6cfff7a3503994ab"
  },
  {
    "url": "resources/mention-of-nuxtjs.html",
    "revision": "641d7479f31cbc17e15adbb347b3cdf3"
  },
  {
    "url": "resources/modules.html",
    "revision": "9f8874f75a5fb8d9d92c16c37e9ac12a"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "650bf69c52b0efd3354d54ec8d0694cd"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "68467f193faa4ab1ed6fec3be62ffbce"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "fb1441498fc16c257c9f617cefeb5f09"
  },
  {
    "url": "resources/projects-using-nuxtjs.html",
    "revision": "0502928f6efd1ceb6440ffcc0f236adc"
  },
  {
    "url": "resources/showcase.html",
    "revision": "bee89fdb6d31c159b302169a85eccd05"
  },
  {
    "url": "resources/starter-template.html",
    "revision": "fd0841f7e9df4ddd63891715f6d28a77"
  },
  {
    "url": "resources/tools.html",
    "revision": "b05979a241d3a604f5117a22d00c164d"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "8b2538c27a1df141b76878155ef9be9b"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "6f6c37d6f57f660c9b5f9d6ddc088347"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
