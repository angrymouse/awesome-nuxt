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
    "revision": "b394332ecaf44c1f83140c05f5a7f7aa"
  },
  {
    "url": "assets/css/0.styles.af924474.css",
    "revision": "db6225e1478e310774e076568e9b2ab0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f2a5d10e.js",
    "revision": "b3fb2cb6bee45035bced19e2be47baf5"
  },
  {
    "url": "assets/js/11.98a157be.js",
    "revision": "0fccb5174c9aa16336149f7d8e660990"
  },
  {
    "url": "assets/js/12.2a892011.js",
    "revision": "644825acb1b1c36ddb5b8899125a1664"
  },
  {
    "url": "assets/js/13.9e30fcb5.js",
    "revision": "34f2c2e8932326b937bf40710c58a0f8"
  },
  {
    "url": "assets/js/14.0f03cb13.js",
    "revision": "77af72c780682827187786ad75a7f915"
  },
  {
    "url": "assets/js/15.2534b723.js",
    "revision": "749c9fc381624ad939d7b29586d20364"
  },
  {
    "url": "assets/js/16.d41b75b8.js",
    "revision": "7cef00da22c1f97a9372f4791df148fe"
  },
  {
    "url": "assets/js/17.3ca0fb1b.js",
    "revision": "0b66f53748aa5fdf87c60831d9c5299e"
  },
  {
    "url": "assets/js/18.f373f85a.js",
    "revision": "35f3f89421cf0836603dd98717467271"
  },
  {
    "url": "assets/js/19.29f0a860.js",
    "revision": "bdcb1ac82f222e922db8deae6fe89309"
  },
  {
    "url": "assets/js/20.5af25036.js",
    "revision": "ed595e2ccd8730e3adb028d41dc6971e"
  },
  {
    "url": "assets/js/21.78cc5520.js",
    "revision": "dc478d2f1e28584467a34f6b2ba47459"
  },
  {
    "url": "assets/js/22.6dc34dfc.js",
    "revision": "d5568acfaf6980529d6c0b4ee944be89"
  },
  {
    "url": "assets/js/23.467599a0.js",
    "revision": "9d757b58d72dea75e40c519fb49666ac"
  },
  {
    "url": "assets/js/24.a22d1c83.js",
    "revision": "96a72d34f292131b99c5a7a83f5e83b9"
  },
  {
    "url": "assets/js/3.b78636a2.js",
    "revision": "0d12da5ad4980238b6c88de553fc4577"
  },
  {
    "url": "assets/js/4.8455ef2a.js",
    "revision": "4011a70c75518da2abe7f5cdc0257077"
  },
  {
    "url": "assets/js/5.3fa8d341.js",
    "revision": "22e8d55c1213aba5c3ce8e4963b959ae"
  },
  {
    "url": "assets/js/6.3f950c43.js",
    "revision": "abb85effed4450af942d8d0b412f70ca"
  },
  {
    "url": "assets/js/7.37aba1fd.js",
    "revision": "f60080f04c913f52920f4be30aa1adae"
  },
  {
    "url": "assets/js/8.f7ce4051.js",
    "revision": "9cf78d537e063e30605ada932544c26b"
  },
  {
    "url": "assets/js/9.390ab42b.js",
    "revision": "427f828389240668ee232fffa6e31e7d"
  },
  {
    "url": "assets/js/app.12f2cf74.js",
    "revision": "e9a2c7a447b5082a79c16f23a8bf3f8e"
  },
  {
    "url": "assets/js/vendors~docsearch.f5ec23e1.js",
    "revision": "bb4214174887d0058ef2ede135dde60b"
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
    "revision": "ca4cc3d7e4b502f8682188acb04802f4"
  },
  {
    "url": "logo.png",
    "revision": "9211627441c4938eb8650b4bdf14630d"
  },
  {
    "url": "resources/blog.html",
    "revision": "a2e32fc91868593a4aff169e8d91c23b"
  },
  {
    "url": "resources/books.html",
    "revision": "3ca608980c8904b516d5ae9e0865372b"
  },
  {
    "url": "resources/community.html",
    "revision": "8901d2168f66ad2faa92103de5928590"
  },
  {
    "url": "resources/conferences.html",
    "revision": "38d384f366aeb710ea7b2064ff65e650"
  },
  {
    "url": "resources/docker.html",
    "revision": "7777af20eaab0b2866afb1b42b27bb3d"
  },
  {
    "url": "resources/examples.html",
    "revision": "d016b40c63419862891aba4ef12fac74"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "5a014b4ffed1c8c57bb7e9cc6bb12b76"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "4f190592e195fbd4a01318a70e55c073"
  },
  {
    "url": "resources/mention-of-nuxtjs.html",
    "revision": "3ca479c349a4724721add3ac8e71279d"
  },
  {
    "url": "resources/modules.html",
    "revision": "37d68df95111702b8006bfb57e6a54fe"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6809b66b0559a153751f4e9aaa0e68dc"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "631cec0339c1aefc774923d99089eadc"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "2ef199d8247c958c8bec8c599f7df417"
  },
  {
    "url": "resources/projects-using-nuxtjs.html",
    "revision": "a7201dbaacca52048a9b30caec8517b8"
  },
  {
    "url": "resources/showcase.html",
    "revision": "a39f116717e2bfc3c7bf46257a81ee3d"
  },
  {
    "url": "resources/starter-template.html",
    "revision": "2626261b35ada14061c85ea832503183"
  },
  {
    "url": "resources/tools.html",
    "revision": "ab926d1e33e2363d0c263ba2e8bf97b8"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "f259d99ac6b6f40b5d63c2416c7b8127"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "dec400aab396e9518874688a7fc78ba5"
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
