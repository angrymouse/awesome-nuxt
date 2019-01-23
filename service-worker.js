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
    "revision": "98d0dd5a95386c5bb0c4cf45214995cf"
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
    "url": "assets/js/app.5a9ac84c.js",
    "revision": "d63810fdfd13cc9374d898083f75a8f1"
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
    "revision": "32bb19691ed37b708626c893650f23ab"
  },
  {
    "url": "logo.png",
    "revision": "9211627441c4938eb8650b4bdf14630d"
  },
  {
    "url": "resources/blog.html",
    "revision": "59c1a758d05fa97a36bad722f1abf42f"
  },
  {
    "url": "resources/books.html",
    "revision": "cd03d855a1f2c032f8d26e87f7454699"
  },
  {
    "url": "resources/community.html",
    "revision": "3f1d279f6eadf61795284fbaff4f8a4f"
  },
  {
    "url": "resources/conferences.html",
    "revision": "49f52d1d7099a487b7dddb95dbaa25b3"
  },
  {
    "url": "resources/docker.html",
    "revision": "601d91200f0d7589f881ea96734608ce"
  },
  {
    "url": "resources/examples.html",
    "revision": "e10f6a31e01525f3e8c561f90edef4b1"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "f170e70de46d46a11d6a8211132e5c9d"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "dfdf8e7e37b7812b0f88df64ab6de65a"
  },
  {
    "url": "resources/mention-of-nuxtjs.html",
    "revision": "d06e6f37af7f01792703324b4df3a747"
  },
  {
    "url": "resources/modules.html",
    "revision": "37766555fe6124a06bf2b0b2578b8032"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "63828ee81a976977a324dd0abc266196"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "6f9c9f8512eaf7bd88f7568b88508f13"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b57690aa7090951cff270f92a531bf50"
  },
  {
    "url": "resources/projects-using-nuxtjs.html",
    "revision": "a7ca1a5f7199ae14540484240f1669e1"
  },
  {
    "url": "resources/showcase.html",
    "revision": "62343afdcbf8d18d0b5c4ef9020ec14a"
  },
  {
    "url": "resources/starter-template.html",
    "revision": "91eaa6fc64dce3a2204f6ce51a30322c"
  },
  {
    "url": "resources/tools.html",
    "revision": "aa2062f8c131e3b3967daf805d82f967"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "61b1168d9c38d2dce0944898223bac48"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "79c7f939d7e460cc8948a1322a964072"
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
