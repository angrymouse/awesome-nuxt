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
    "revision": "667d6aad6077c0a607a29f659f0fe779"
  },
  {
    "url": "assets/css/0.styles.71d5800d.css",
    "revision": "50710e2074fa05e4bc6c43285b807c8f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0f8d1756.js",
    "revision": "d12cf3d6d39c7a513b119526fad476f4"
  },
  {
    "url": "assets/js/11.8b80e712.js",
    "revision": "4566644cb9baa609c7bfd7f0d995a4a4"
  },
  {
    "url": "assets/js/12.9002d96b.js",
    "revision": "fc6d531d4449ab9e4645330b7709165e"
  },
  {
    "url": "assets/js/13.6b26d2f7.js",
    "revision": "d29cefaea0a95d2f99ba9989f909adc3"
  },
  {
    "url": "assets/js/14.5a31ca00.js",
    "revision": "9270649c0385fe4298417c9f8af69d73"
  },
  {
    "url": "assets/js/15.0193b17b.js",
    "revision": "afcbc342581ede32e302572a94fa3fb1"
  },
  {
    "url": "assets/js/16.2865e7de.js",
    "revision": "b9c5efb05ec0524bede0d41366ade137"
  },
  {
    "url": "assets/js/17.d03d87f6.js",
    "revision": "3d4a5b30779a6768c9cc828b3152f882"
  },
  {
    "url": "assets/js/18.5614f1c9.js",
    "revision": "482f42e3ce2c4a18942d9a2d5d57169a"
  },
  {
    "url": "assets/js/19.60f4e721.js",
    "revision": "156b6256b9b443fbbc28543dd5714f36"
  },
  {
    "url": "assets/js/2.c932bc04.js",
    "revision": "38eb3c7e6a659e22fa9771999a19f345"
  },
  {
    "url": "assets/js/20.5962a614.js",
    "revision": "98c8abe95aeb319370b468cd7679d883"
  },
  {
    "url": "assets/js/21.0c448dc5.js",
    "revision": "a6cda4310f3cf77e3b790960bc3ca537"
  },
  {
    "url": "assets/js/22.cf5d4fbf.js",
    "revision": "252e53bab95f7994f7540efb4cb4bf0c"
  },
  {
    "url": "assets/js/23.3d02da04.js",
    "revision": "11bd797ac10e8521fb46e5689c04ef12"
  },
  {
    "url": "assets/js/3.af19a12c.js",
    "revision": "2ebc993c887994e107d5d66ecd35e2a7"
  },
  {
    "url": "assets/js/4.53376ffd.js",
    "revision": "63b8a1549575bb64e1aba7d9166f2f5e"
  },
  {
    "url": "assets/js/5.3ea08d07.js",
    "revision": "cb13c13dc155c6cb4473154320219ecd"
  },
  {
    "url": "assets/js/6.a4afa6da.js",
    "revision": "2b246f3cb8fb861a3eda7478232ae5a5"
  },
  {
    "url": "assets/js/7.0fea8054.js",
    "revision": "d32bb8244b8e647ad96e967e1c15fabb"
  },
  {
    "url": "assets/js/8.ff9dec01.js",
    "revision": "43aa719d846deb0105d50142a3540049"
  },
  {
    "url": "assets/js/9.a4160c21.js",
    "revision": "f02ba29b95d6239754596ad5255540c9"
  },
  {
    "url": "assets/js/app.aed4ccda.js",
    "revision": "17ab62caea0f00be565b0fd1078aab9e"
  },
  {
    "url": "assets/js/vendors~docsearch.86890080.js",
    "revision": "23766bbf11f138c08a899b4ff6e148de"
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
    "revision": "44b801730e0bf379930e59cc6d13c441"
  },
  {
    "url": "logo.png",
    "revision": "9211627441c4938eb8650b4bdf14630d"
  },
  {
    "url": "resources/blog.html",
    "revision": "a345a7659fa30ca23c7a598bc19c3d54"
  },
  {
    "url": "resources/books.html",
    "revision": "26ed921962cd185d2c341f2156000a56"
  },
  {
    "url": "resources/community.html",
    "revision": "d934845cb22a8afaae0aed0628cddaa4"
  },
  {
    "url": "resources/conferences.html",
    "revision": "ece7b62e2f52daaea3d6d19928dbed8f"
  },
  {
    "url": "resources/docker.html",
    "revision": "fdf82b13093144557f116783719cca00"
  },
  {
    "url": "resources/examples.html",
    "revision": "5b1bb5530cedf40c60f950f71586b498"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "fa0ec9da7522c5fba62305cd23305516"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "eb6d2a35b89fe513da9b65915357ee45"
  },
  {
    "url": "resources/mention-of-nuxtjs.html",
    "revision": "13653899ed88809cd53df6fe63075e46"
  },
  {
    "url": "resources/modules.html",
    "revision": "8f0efb79a203800cbe8e667e264cd99a"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "0519cb5c70948cdb6ba7af013e9b4715"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "693b22048337ddbd51ba937f510e8026"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "82484e96dac09aa4ec55e0004cdd7c3c"
  },
  {
    "url": "resources/projects-using-nuxtjs.html",
    "revision": "18f5526304311072bf98f86181d637ea"
  },
  {
    "url": "resources/showcase.html",
    "revision": "9f723dce0dd70affc69dbd616b16dab6"
  },
  {
    "url": "resources/starter-template.html",
    "revision": "620d7d6b1460b89f38dd5c21ff9e7b28"
  },
  {
    "url": "resources/tools.html",
    "revision": "5bc4b4c8dac930ad6d92b901d7563cdc"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ef9abe6374261f1ba7d8bac2ac53784d"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2bdbb7d8498cf0952386550eb3af560e"
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
