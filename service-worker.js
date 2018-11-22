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
    "revision": "32da1c80a07f06e72561abd247b182df"
  },
  {
    "url": "assets/css/0.styles.f356e462.css",
    "revision": "5c1f997f030fdc21ecb4427ad02da890"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b7dd6d05.js",
    "revision": "d38f41dc38d4022b305055abb57fbe7d"
  },
  {
    "url": "assets/js/11.200bb198.js",
    "revision": "18ad86ac504271be07fa1712bc7e6c33"
  },
  {
    "url": "assets/js/12.25343b43.js",
    "revision": "b45dcdeef1d5ceaa95ed9a6a025a185b"
  },
  {
    "url": "assets/js/13.c115b6e5.js",
    "revision": "b13f7153428b42074b26f71d7feee67b"
  },
  {
    "url": "assets/js/14.16789056.js",
    "revision": "a2eae42606b0e4a5c4030cdb5df47aa0"
  },
  {
    "url": "assets/js/15.c8c32f8f.js",
    "revision": "8d6290bca927232c34f8e99d0178f1be"
  },
  {
    "url": "assets/js/16.b0a7e66a.js",
    "revision": "13b83346fa179d62048e21fe512fd6be"
  },
  {
    "url": "assets/js/17.13226151.js",
    "revision": "e576581afb9877b3dc1b3d11ec607475"
  },
  {
    "url": "assets/js/18.c26ca31d.js",
    "revision": "976ec3d8e5b626af27d0ab3abc6f8998"
  },
  {
    "url": "assets/js/19.6acf11eb.js",
    "revision": "48269f8d4e64c1ce2fb5c32d7667df81"
  },
  {
    "url": "assets/js/20.55dcc264.js",
    "revision": "f4739a6b12032a0a5867ba7154155fef"
  },
  {
    "url": "assets/js/21.9aaf3cdc.js",
    "revision": "7a53add4ad3c17a6e56b819da7e0e10a"
  },
  {
    "url": "assets/js/22.52abce0a.js",
    "revision": "ee0381c0189987ad7d32715af756d1db"
  },
  {
    "url": "assets/js/23.343fb9d8.js",
    "revision": "44233ef8fadfacb5b3f8a2be584546a3"
  },
  {
    "url": "assets/js/24.a57a8fb0.js",
    "revision": "573680347fc41d5f2d24c8d41f5fa730"
  },
  {
    "url": "assets/js/3.494d6d83.js",
    "revision": "f7bd63cc68bc8c6ee22b4a8ef0b7fded"
  },
  {
    "url": "assets/js/4.f388f0c5.js",
    "revision": "faf6a9165f4706f99931a80c04f2545e"
  },
  {
    "url": "assets/js/5.eeaa5bd1.js",
    "revision": "b61394a964d3d625a0b0b417bb01089f"
  },
  {
    "url": "assets/js/6.faa2f209.js",
    "revision": "de5fda8bce089786acf813d238339945"
  },
  {
    "url": "assets/js/7.a2018691.js",
    "revision": "d95e025db00e45b8d78d4b4ab78090d7"
  },
  {
    "url": "assets/js/8.f13cadfa.js",
    "revision": "9ba830a4d2e58aba7bbf49693cda6c99"
  },
  {
    "url": "assets/js/9.6c3aa996.js",
    "revision": "b9c0179997062cfb283f70d912e0cc68"
  },
  {
    "url": "assets/js/app.221072ad.js",
    "revision": "09dd3d031100baff9fcd2c2b41f6e8ec"
  },
  {
    "url": "assets/js/vendors~docsearch.fb7d639f.js",
    "revision": "121b3a196de4c4a41361b1cc3de9cd15"
  },
  {
    "url": "google80e84fabb895736c.html",
    "revision": "563e229d19ded39e6065aa2059e87364"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
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
    "revision": "33befbb178cab7544c71059fb21f9bac"
  },
  {
    "url": "logo.png",
    "revision": "3280fc6ebe1c0cb9e2599af0864dad95"
  },
  {
    "url": "resources/blog.html",
    "revision": "1fee9cccf1139c73305d71ea9ae270f0"
  },
  {
    "url": "resources/books.html",
    "revision": "658ae7a19666eb5fc2e5030beba056b3"
  },
  {
    "url": "resources/community.html",
    "revision": "45593a37794f00a209065de3b66ff48c"
  },
  {
    "url": "resources/conferences.html",
    "revision": "dac4c7f6b24b494d43a1abd82b36f5aa"
  },
  {
    "url": "resources/docker.html",
    "revision": "969ff9416b351d52cfe5b4950d3d492f"
  },
  {
    "url": "resources/examples.html",
    "revision": "28d4692289b3418df216f4dbfeef7e93"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "a1a2842cd5ba6ac16d67f392f35816cd"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "0e228fa798861325fc79b4c17cb46161"
  },
  {
    "url": "resources/mention-of-nuxtjs.html",
    "revision": "5d3779278f3315225de460e87eb2a705"
  },
  {
    "url": "resources/modules.html",
    "revision": "25e117a1b5118b231692e9ae0ed7f730"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f51ecaa678a965240e923f8162c726b3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "5da150835190b4fd8b632d57aa3bc235"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b2d74673f52149d1e48db979298dfb3a"
  },
  {
    "url": "resources/projects-using-nuxtjs.html",
    "revision": "65394760a89d8030f3fd60f2e1e0d269"
  },
  {
    "url": "resources/showcase.html",
    "revision": "5cb0bd57a9052a59a463e2a09e70aee6"
  },
  {
    "url": "resources/starter-template.html",
    "revision": "c3ab636c00f10ed7b9585f0808eda21a"
  },
  {
    "url": "resources/tools.html",
    "revision": "2c14e3866f22cdbb9413e9a5797f243a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "abbf465c2794f1094f15c289e9d3abcc"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0130a3fd7c89e80048f22e79e34dc8ad"
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
