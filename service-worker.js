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
    "revision": "c377a1ae412cfb8dc560cd5cb145c4d7"
  },
  {
    "url": "assets/css/0.styles.638cba85.css",
    "revision": "e2f16868f5a250ae81c315cb01a2900a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4766ca52.js",
    "revision": "b3fb2cb6bee45035bced19e2be47baf5"
  },
  {
    "url": "assets/js/11.196d7909.js",
    "revision": "0fccb5174c9aa16336149f7d8e660990"
  },
  {
    "url": "assets/js/12.6ad6b6b7.js",
    "revision": "644825acb1b1c36ddb5b8899125a1664"
  },
  {
    "url": "assets/js/13.1bbe952b.js",
    "revision": "34f2c2e8932326b937bf40710c58a0f8"
  },
  {
    "url": "assets/js/14.686fb658.js",
    "revision": "77af72c780682827187786ad75a7f915"
  },
  {
    "url": "assets/js/15.91f537aa.js",
    "revision": "749c9fc381624ad939d7b29586d20364"
  },
  {
    "url": "assets/js/16.3770b370.js",
    "revision": "7cef00da22c1f97a9372f4791df148fe"
  },
  {
    "url": "assets/js/17.b9c22c6a.js",
    "revision": "0b66f53748aa5fdf87c60831d9c5299e"
  },
  {
    "url": "assets/js/18.3ab2cb22.js",
    "revision": "35f3f89421cf0836603dd98717467271"
  },
  {
    "url": "assets/js/19.435a44a4.js",
    "revision": "e21e30c3949dfd6d9e4d6fc096c0d8fe"
  },
  {
    "url": "assets/js/20.5ab19608.js",
    "revision": "ed595e2ccd8730e3adb028d41dc6971e"
  },
  {
    "url": "assets/js/21.bfa5cc00.js",
    "revision": "dc478d2f1e28584467a34f6b2ba47459"
  },
  {
    "url": "assets/js/22.da06f2ef.js",
    "revision": "d5568acfaf6980529d6c0b4ee944be89"
  },
  {
    "url": "assets/js/23.5f9444ab.js",
    "revision": "9d757b58d72dea75e40c519fb49666ac"
  },
  {
    "url": "assets/js/24.0f3dbf93.js",
    "revision": "96a72d34f292131b99c5a7a83f5e83b9"
  },
  {
    "url": "assets/js/3.42139fd5.js",
    "revision": "0d12da5ad4980238b6c88de553fc4577"
  },
  {
    "url": "assets/js/4.b31592cd.js",
    "revision": "4011a70c75518da2abe7f5cdc0257077"
  },
  {
    "url": "assets/js/5.87cfa3d8.js",
    "revision": "22e8d55c1213aba5c3ce8e4963b959ae"
  },
  {
    "url": "assets/js/6.3c00ed76.js",
    "revision": "abb85effed4450af942d8d0b412f70ca"
  },
  {
    "url": "assets/js/7.4fd9e4ff.js",
    "revision": "f60080f04c913f52920f4be30aa1adae"
  },
  {
    "url": "assets/js/8.8d0b128a.js",
    "revision": "9cf78d537e063e30605ada932544c26b"
  },
  {
    "url": "assets/js/9.b30fa6b0.js",
    "revision": "427f828389240668ee232fffa6e31e7d"
  },
  {
    "url": "assets/js/app.a88d84a5.js",
    "revision": "5d6835a70293b5d2dec2a5b2da55b4f8"
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
    "revision": "d4424691ac84bdfbab2c228ea087199a"
  },
  {
    "url": "logo.png",
    "revision": "9211627441c4938eb8650b4bdf14630d"
  },
  {
    "url": "resources/blog.html",
    "revision": "27fd986e831e63385725e6a6d82de402"
  },
  {
    "url": "resources/books.html",
    "revision": "1ef6d853edf026ded07dc332e85b876c"
  },
  {
    "url": "resources/community.html",
    "revision": "61160416eb0e3d2ff280d55ac1bc1aba"
  },
  {
    "url": "resources/conferences.html",
    "revision": "a72454d1e148676032d0544280160986"
  },
  {
    "url": "resources/docker.html",
    "revision": "1e31a4673dadf21d86b766191bc3034a"
  },
  {
    "url": "resources/examples.html",
    "revision": "a2c3787ed2517e5e439486ada34e0f9d"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e5563419626bd79791cba7a02b95d19d"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "6ad135e711b03025545af655c158ef41"
  },
  {
    "url": "resources/mention-of-nuxtjs.html",
    "revision": "11753c2aa1503b89f18b71e6e3b4944b"
  },
  {
    "url": "resources/modules.html",
    "revision": "44e7a3e6c1ada9fd2f3ae826a4948c5c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "63304d20ebeee6b963a38d9875a35356"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "50a91f4aa81001fcc974f064b7044035"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "bf1991d48c548c1952914c66fd146f19"
  },
  {
    "url": "resources/projects-using-nuxtjs.html",
    "revision": "30b8fbf8159454e09911deebc68afbdf"
  },
  {
    "url": "resources/showcase.html",
    "revision": "aa99260c847787492686adf9d76b1a54"
  },
  {
    "url": "resources/starter-template.html",
    "revision": "88e2fca4ab6061da88387b5d55dbefc8"
  },
  {
    "url": "resources/tools.html",
    "revision": "de3e5a446f37258618d052e3dbcc41f4"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "06f28bc61770339bbd199ea4bc7bf4c8"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "42f599c15bbe60b3e44da628ca52339c"
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
