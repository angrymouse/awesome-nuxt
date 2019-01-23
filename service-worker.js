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
    "revision": "6de0fe299ba01875881194bedba8ee3e"
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
    "url": "assets/js/14.37ad0f54.js",
    "revision": "95fcb4616e17c7d38303922d1017707d"
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
    "url": "assets/js/18.22254e25.js",
    "revision": "303f9d881e8ef3a2dde0193090357d60"
  },
  {
    "url": "assets/js/19.8e68c66e.js",
    "revision": "e9f3ecccf07cc92ec7ee971d2c66239a"
  },
  {
    "url": "assets/js/20.881e7775.js",
    "revision": "2cb6b51ee63fa4eb2f5348c2ec9f74b7"
  },
  {
    "url": "assets/js/21.9aaf3cdc.js",
    "revision": "7a53add4ad3c17a6e56b819da7e0e10a"
  },
  {
    "url": "assets/js/22.c807c236.js",
    "revision": "b5af324c70076cf24eaf759871419b20"
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
    "url": "assets/js/app.8d70cb8e.js",
    "revision": "cae197c08529c8d5b1e45e9c4f71948a"
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
    "revision": "bc4e935a2a9e85b175dcf40959b290a0"
  },
  {
    "url": "logo.png",
    "revision": "9211627441c4938eb8650b4bdf14630d"
  },
  {
    "url": "resources/blog.html",
    "revision": "10aa505d7ec1d197d6697cd544a24392"
  },
  {
    "url": "resources/books.html",
    "revision": "d3f5bf4fa89009eba7f8013a2b55739b"
  },
  {
    "url": "resources/community.html",
    "revision": "ec31d6ff23b804f14f3b1f371b39bd4d"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0d565df3c3a3f8e47463289b80414d8f"
  },
  {
    "url": "resources/docker.html",
    "revision": "5daf2e0175f4bb1db9915fd9ae851330"
  },
  {
    "url": "resources/examples.html",
    "revision": "7e10435c2234a04ed1c0f15e8af0b6b0"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "cec4e3aca9ae6819ca798e076c800935"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "be31cb83430ac6c67d9201abc4beb9d9"
  },
  {
    "url": "resources/mention-of-nuxtjs.html",
    "revision": "f4b68ce36a3d99936cffcd9919136f29"
  },
  {
    "url": "resources/modules.html",
    "revision": "1eb04077cd7d4a54039b59d88717498f"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "3ba5a922a2aedc762ea2d635e050b8aa"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "88e5ed786b0a03791f0325d3fa9138f1"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "d3c7066095e3c959ff2cae68581984df"
  },
  {
    "url": "resources/projects-using-nuxtjs.html",
    "revision": "49be33e44082fde42b8179d1d8277506"
  },
  {
    "url": "resources/showcase.html",
    "revision": "53f5756597dae7f15690006c2e739b55"
  },
  {
    "url": "resources/starter-template.html",
    "revision": "559c79f82d3fd4469cf28d29f508213c"
  },
  {
    "url": "resources/tools.html",
    "revision": "d48d3d2a45bc36e6c38024052fa249e9"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "057cb68b0756a7c2cf094e209e89bef9"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "077409ac2d56ab986741c3e4e706fd54"
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
