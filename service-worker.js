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
    "revision": "8a9020aa4594be74166842b14eb881fa"
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
    "url": "assets/js/10.81eba627.js",
    "revision": "d38f41dc38d4022b305055abb57fbe7d"
  },
  {
    "url": "assets/js/11.12768ede.js",
    "revision": "18ad86ac504271be07fa1712bc7e6c33"
  },
  {
    "url": "assets/js/12.841a8c38.js",
    "revision": "b45dcdeef1d5ceaa95ed9a6a025a185b"
  },
  {
    "url": "assets/js/13.6c1024ba.js",
    "revision": "b13f7153428b42074b26f71d7feee67b"
  },
  {
    "url": "assets/js/14.e48a0edd.js",
    "revision": "95fcb4616e17c7d38303922d1017707d"
  },
  {
    "url": "assets/js/15.952ea9f6.js",
    "revision": "8d6290bca927232c34f8e99d0178f1be"
  },
  {
    "url": "assets/js/16.7905d6b1.js",
    "revision": "13b83346fa179d62048e21fe512fd6be"
  },
  {
    "url": "assets/js/17.f3925856.js",
    "revision": "e576581afb9877b3dc1b3d11ec607475"
  },
  {
    "url": "assets/js/18.3cfd4de2.js",
    "revision": "303f9d881e8ef3a2dde0193090357d60"
  },
  {
    "url": "assets/js/19.f09ca272.js",
    "revision": "e9f3ecccf07cc92ec7ee971d2c66239a"
  },
  {
    "url": "assets/js/20.6b9e95f9.js",
    "revision": "2cb6b51ee63fa4eb2f5348c2ec9f74b7"
  },
  {
    "url": "assets/js/21.aac26d68.js",
    "revision": "7a53add4ad3c17a6e56b819da7e0e10a"
  },
  {
    "url": "assets/js/22.4636ed6c.js",
    "revision": "b5af324c70076cf24eaf759871419b20"
  },
  {
    "url": "assets/js/23.a69a319e.js",
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
    "url": "assets/js/4.ddbefe07.js",
    "revision": "faf6a9165f4706f99931a80c04f2545e"
  },
  {
    "url": "assets/js/5.a46f313e.js",
    "revision": "b61394a964d3d625a0b0b417bb01089f"
  },
  {
    "url": "assets/js/6.1443ab3d.js",
    "revision": "de5fda8bce089786acf813d238339945"
  },
  {
    "url": "assets/js/7.8d0a0608.js",
    "revision": "d95e025db00e45b8d78d4b4ab78090d7"
  },
  {
    "url": "assets/js/8.2c85903c.js",
    "revision": "9ba830a4d2e58aba7bbf49693cda6c99"
  },
  {
    "url": "assets/js/9.c17db29d.js",
    "revision": "b9c0179997062cfb283f70d912e0cc68"
  },
  {
    "url": "assets/js/app.eb8078c7.js",
    "revision": "c1a1e175531bd01993dfc2fb52392176"
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
    "revision": "fea278b1ac88bb96013e5dacd08958d6"
  },
  {
    "url": "logo.png",
    "revision": "9211627441c4938eb8650b4bdf14630d"
  },
  {
    "url": "resources/blog.html",
    "revision": "f756396edcc1f37a22ce1ded2f007760"
  },
  {
    "url": "resources/books.html",
    "revision": "aad1210419f3213b8f2b87f0e07b95b7"
  },
  {
    "url": "resources/community.html",
    "revision": "31c90e6f11453c9867e624096e19fc76"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0e97c0f0ecd0dac11bdf641f72e943f9"
  },
  {
    "url": "resources/docker.html",
    "revision": "a0ebf7d6ed6cebe3b24a563dd4eace0d"
  },
  {
    "url": "resources/examples.html",
    "revision": "b3c91e86d092cb7cd0479883da9279c0"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "dcafcf5b08296a7902cd9528920aec27"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "7583460af4de9af5d8d6d55f662836af"
  },
  {
    "url": "resources/mention-of-nuxtjs.html",
    "revision": "20211c50aa71ed73ac15b86144e6a50d"
  },
  {
    "url": "resources/modules.html",
    "revision": "cd4d509fe083d1f24adb4ced5ba971da"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "a1accb5e79058324d796d188e42bc590"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "5e58e69d22e4a98ee4e2967c4c605b83"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "1c09587ebc6ecab689b2c178da572432"
  },
  {
    "url": "resources/projects-using-nuxtjs.html",
    "revision": "f72281f357e19b8db3c4813dcfdef86b"
  },
  {
    "url": "resources/showcase.html",
    "revision": "c40ebf8c68f7774395d886a3df384ce5"
  },
  {
    "url": "resources/starter-template.html",
    "revision": "0bfae17cd7066c0ee1d40a4cfd8cf2f7"
  },
  {
    "url": "resources/tools.html",
    "revision": "d3a5287400bf6743f7bc168772c1ee48"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "5ef2ea014d6d5fb988736f6892e00316"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "c0e2439a4c2dd7fd7f82ee539a0cfa1e"
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
