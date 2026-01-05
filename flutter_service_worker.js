'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b92ad145cd8517dfbb1b56edb6c9104a",
".git/config": "9ed494205e8059e7dc3c136e1464bc9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e4874043c63803ab6867104848497984",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1604a675649d1fd5bda6ff3f1210836d",
".git/logs/refs/heads/gh-pages": "58763e9ad2858087b6757fb6389eeb47",
".git/logs/refs/heads/master": "b36af56afafd0e54f7046cb4e649578c",
".git/logs/refs/remotes/origin/gh-pages": "d05d625d28a481f458107c621895ebfa",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/05/848c393a63c83eef8ea8a8e74721ba50d97a90": "c19475592aaedf2dbf7992a195f13284",
".git/objects/07/d998440f508b3972cfe9006f6b5cc83ae32c40": "499271ad06d8808cb6c34ee96ae32b6f",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/10/6a30a8282c909e46eff9324ae3ea6eba167d67": "17d99f170fd040a5e1e6cd7a8be8bcf7",
".git/objects/14/147b6cf10e2279b6174dd72df0d0e8cd91c0b9": "8d1b618cca79ba1e3a117c981348293e",
".git/objects/15/ba7bf3511edf072d8f403922731efb35e6d82e": "cd49b596143aab14afe9101073135788",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/2c/612da2ae589dc264deb683f90baf75c8e18e03": "03a0c91f7a95581dd48bc3075b6203c6",
".git/objects/30/963f8960da41597f848809a483b1aba4c9c03c": "242e231dd4256a28fcb6de1f33d07f49",
".git/objects/34/be17182e4410c234bd371cdb831a33bb2e1ef3": "86a19d648a063bdec1306c52329eecaa",
".git/objects/35/a837ad3cc64d22da2d99f2ce095e3611d13c33": "e8f5dc5abc9dbfafed94c19b60684c11",
".git/objects/39/3fe216013031edc462e044ed8075fb8611b12e": "ddc4bfd8e5e127fa9a88c55efb7964fb",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/a2ca124451de262aee3d444addcf88e6560ea5": "6ea5ebcee02f0c0309c87dc3b81d31e6",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/45/bc0a83061c3bee6d6cd873f0457f5f0239acfb": "436e0a8e4dd15e3537c592b5ceb557fa",
".git/objects/46/81908c38d76963f5c4ea875477b2fd9018ae0c": "cb37b919e5e8c1605d8f7a6f1eafd6e6",
".git/objects/4f/ac5af19e7b7eca7439a1fc638b916922d22540": "3a14bae98c34bb4790f533f367e59a9c",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/16ef9f6923ebd5f278fabae8c66226bd3520fe": "bb26fe05a0cb8b83818904866250345e",
".git/objects/58/48334f5b1c720ce8b6a77d523982560e9cf9c4": "2b53d803e263e7ddd75c35f6f3af3888",
".git/objects/5f/e94246d294ad4ebc27bd1173fc2501b71f089d": "fd72fc2ce7a13d2cf460936058c69d78",
".git/objects/60/ac82d65b962207aef7b300eba19764d27352fe": "fda26a433b20cf4eefccd0b962fa1ded",
".git/objects/62/a6282870a969cd33f42bad57a403ec9f63fa4b": "75d0d74f0811c0598cdf5f3414ff12c3",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/b64009820c1360a9a668e76de3f8ad9327dce2": "b8b43ac2a8fab1c6eca8bcff64d5a0af",
".git/objects/7d/c6e25f0cafac7dd8615e19fe5a548f121c525e": "4daa3d7df52ab52cea4396adcae10629",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/9e5d3931a06e64427e2ffcb4e0154377c2233b": "c89bd5e35c8415a8a2724b44490a241e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/033b951af0cda62a6b644a26c29f67677bb30f": "08fd5cd633b487cf684171c022359ebb",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b1/a205a7eddfbec33465a9ddece7d7d48251678a": "ab8c8328b98fb75f8a9be059bfee349f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/8f79cb66bfbe63b3fccb587badaf060a7cf3aa": "99fd47640ae044e86259759532586599",
".git/objects/c0/dcb4d22692aa721dac4747b93a0719e01f7722": "c0fa9fca8d5ee26636bd4bb1d0810f71",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/6e110b3f1aa765555f1dba8ba8408192cedb2b": "0008ae2a4cfafd6239cf7045e91c2bd3",
".git/objects/cf/86e72623078a99ab5207a4e75292e3ca716001": "d206acffcf0c810c3d6880572715dc3d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c24d03025803ffc97ae035e57275b1572a44a5": "1da70e6878f50f84ca1bb86bb2227c28",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/fd65fb11356f5604098c6b4288f73fecf0eca7": "25708042224006922e3097be94e5a565",
".git/objects/db/5c2de051e799eeeacf7d8143c51d435d3d51f0": "120c9d5e1581ba20a858a252e3a0a56a",
".git/objects/df/6c5bf28edc21b362d8616ae22844650804c4ca": "4082aab16201361e528f8a5e603f165f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d6a75c5e56fe65063dca6a1a973f6c67c66b78": "60df779878ccad582163fbe515cb7575",
".git/objects/ed/21e31f5c41a66d9c816f0406883562de3c7b2b": "e58e62a0211dd93ca3872be3f1e86c8e",
".git/objects/ed/9565740b028341c0483cb1cf0518c76e172f0c": "36e34021a12a84fb1839f3441395e05e",
".git/objects/f0/9d407a8cb43a8ca62d044dc6ef8d0c2573664f": "095f2f1b939e0a8bdf30f9cf1e3abd61",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/b5d76eac960034a1c052eae478168575153698": "d2f2db69c561771f6c3ee8b1115ba7f0",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/0a0529c3916cb42ccda0c48d655dcac673803b": "5e9163b34a0e5a102c2539d5053477a8",
".git/refs/heads/gh-pages": "5649d40962897201ff9da76d9c926942",
".git/refs/heads/master": "5649d40962897201ff9da76d9c926942",
".git/refs/remotes/origin/gh-pages": "5649d40962897201ff9da76d9c926942",
"assets/AssetManifest.bin": "18d64cc4f744eed74acf94ae3eabfe28",
"assets/AssetManifest.bin.json": "acdb85fcac1ea0d11850aa5cd04355b5",
"assets/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-Medium.ttf": "863b7dcd5ec2c3923122af25ce0f7e4c",
"assets/assets/fonts/Lato-Semibold.ttf": "3c6cfb1aebd888a0eb4c8fba94140fa6",
"assets/assets/images/2-User.svg": "a2f730e4932f0836e874884bfe524120",
"assets/assets/images/align-justify.svg": "c2aad448dd1776b75e98c5d10320e56d",
"assets/assets/images/Download.svg": "aeaad163291407a8985fb4e594d762ff",
"assets/assets/images/flutter-dev.svg": "12ac5fd78d5eac7f40bd1e5b92de5385",
"assets/assets/images/Frame-10.png": "59a6fcb5072002c54e0959c873f42fc8",
"assets/assets/images/logo_design.png": "50ffafde71d8c9e16b7218eef02b62da",
"assets/assets/images/mail.svg": "abcc3e347b10fe3477f91ad95b6cb5de",
"assets/assets/images/me.png": "63d7075d727d1659d1c99d29a0d36f38",
"assets/assets/images/phone.svg": "b9d0427b2f444429990f4a1f87cd45c0",
"assets/assets/images/Vector.png": "ba9595febe64f30c1662a903801fea48",
"assets/assets/translations/ar.json": "942007032ad9f75c7e193b1ec9d0adb8",
"assets/assets/translations/en.json": "ed4c7f0d94978ce6e307d4011b2a87b6",
"assets/FontManifest.json": "cb634b1d371ca7d6049e4f28f35f9de9",
"assets/fonts/MaterialIcons-Regular.otf": "95829baa2c9975ce6cc699645ae380a2",
"assets/NOTICES": "abef9250f6fcd097f9e7b14f6b308570",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a96eb2260ca81f6ab63444ce9bb78432",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8681d5f0445f6ef9342925be2b7e6707",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14af5a4ecf77643fbb3b483ba846b13e",
"/": "14af5a4ecf77643fbb3b483ba846b13e",
"main.dart.js": "31c238d5ca10435e8f6c7a52980e0838",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
