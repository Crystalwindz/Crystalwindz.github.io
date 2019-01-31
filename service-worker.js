/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","991124b6c3014257bfb2492c343ecb80"],["apue_advio/141.png","7b76d793436f97a0fddfc3bbbc173b5b"],["apue_advio/index.html","82d89d4788dd048c374c4c92e0dbd606"],["apue_file/31.png","532f9b20ca9f2bf5f4ef4325980f5d61"],["apue_file/32.png","1b12654642d1816a9f09ebd4f289ef12"],["apue_file/33.png","4cb6e31b25aa27eed5e94058782c0877"],["apue_file/41.png","bab4bcca5dadd95aa4d144d7614c90d5"],["apue_file/42.png","89a5ec9de09d01918ee11b144fa0cb5c"],["apue_file/index.html","130f39e3e6270eaf3e74aa9d878b3ea1"],["apue_ipc/151.png","ca1d737bce47710b6dd3a4db578d045e"],["apue_ipc/152.png","d2a2f30453449c59e939b5afae35f058"],["apue_ipc/153.png","0b2830c41c8be21b4923839b8bbef2ac"],["apue_ipc/154.png","32d38054c80709ce78467c5368fa9d8f"],["apue_ipc/155.png","69fb4fa96e4114921b6898f79a440a4d"],["apue_ipc/171.png","ad4d4e11c9c223ea71481d690f2185f6"],["apue_ipc/172.png","fc4ee6648de15c5ca84f9b2c6254ab23"],["apue_ipc/index.html","bb9c1c093d2897e4a577ca6415bbb701"],["apue_process/71.png","e3953a6dba12f0de616430c4c2a39564"],["apue_process/81.png","a6fa77d4fc4b5e1ccd5718beabe89f12"],["apue_process/82.png","fa24753bfa4aabd67b8664a0d60fc319"],["apue_process/91.png","8ef5b14a72a8ff64a347387fb1f106d3"],["apue_process/92.png","be169e327c00e609e5ad7ea3d5e24cac"],["apue_process/93.png","37f878a3a46f10d0f3614e674bdc9034"],["apue_process/94.png","641090192ac738b67d68ac55c2c77e70"],["apue_process/index.html","99e16e2098ac68124443c54004ce0c07"],["apue_signal/index.html","9e8cfffb3776f10844d5ce07f7882e03"],["apue_thread/111.png","b20f5f69d6423eb54a67601ae47fd34c"],["apue_thread/121.png","dab46cc0d689a027b8a93e6616ce9036"],["apue_thread/index.html","69bc01fe99884544d570b84eace33fdc"],["archives/2018/03/index.html","0b76d42e83a58c442a402c5620e8ca12"],["archives/2018/04/index.html","3b9184d8a191c4956cadcc557b7223d2"],["archives/2018/05/index.html","8a2d4ec18ff524b32c3424af6d96597b"],["archives/2018/07/index.html","018fc31521d66b78b9827defa1f65bf4"],["archives/2018/08/index.html","aefe5f80c2eda5c7760cd7b94d3b65f6"],["archives/2018/09/index.html","fe3b38566f74c7029d859e256259604e"],["archives/2018/10/index.html","554cfeb976a52597a8acd4947089b464"],["archives/2018/11/index.html","61ddd79d475c0aba5b7110fac4631b0c"],["archives/2018/12/index.html","6e8fab77c100a4b9d1366abce357ba4e"],["archives/2018/index.html","f13779ff6458dc584679995b7fbe685f"],["archives/2019/01/index.html","009fd1f96ccd68cbd2fc0d6beecf38de"],["archives/2019/index.html","b2f02b3285a1f92fb871a878b28d02c3"],["archives/index.html","64f9bfeecf3a05d4a4ef544b25712b6b"],["categories/APUE总结/index.html","c9794481a4f8a70eff0f5e2f17c32c1a"],["categories/C/index.html","a0f3ce2f54c28d7e7cccca864cd2f535"],["categories/Linux/index.html","c19ae8f3fed415b10d4e48354188eb7e"],["categories/UNP总结/index.html","391f929fa9d704b4c6e0004695ab2027"],["categories/index.html","adbfdc9521d3aae3986a7173b94586d0"],["categories/开拓视野/index.html","3dddbd5578ba2c7b3d147f561e5b365a"],["categories/技术教程/index.html","e805190cf24d4bd144f9ae88d4881c8c"],["categories/数据库/index.html","9caef464b540219e06e290373397b685"],["categories/日常随笔/index.html","6fa26745e8a48b126790535fc6a08a92"],["categories/计算机网络/index.html","eaf2cc4b6deb9709850e7752e8a5ef9d"],["categories/软件工程/index.html","471270d8b3e56fcfdf71cd0d239dcdb3"],["css/index.css","082896de67b95fca7a4c6024f725b96a"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["effective_stl_note/index.html","a1a6684860bb587a041f78cdc1692cef"],["google_code_style/1.jpg","d021c463e593b8c1d398b6b739d1c25a"],["google_code_style/index.html","05fdc976e04afa9161d69e85f3ff1aff"],["haskell_obsession/1.jpg","4b3ad2f008dbec5ff0564149700a70bb"],["haskell_obsession/haskell-logo.svg","ba47f7160efe755121a43b36753958f7"],["haskell_obsession/index.html","fc73a7ecec21c782dc738b7d0627ccb6"],["hexo_github_blog/1.png","92a091b369ba83dae75e45ee17566425"],["hexo_github_blog/2.png","89403c256fff3dcf93ea954c46d85ac8"],["hexo_github_blog/3.png","2d9da10ae971a91197b3f903ba6f6633"],["hexo_github_blog/4.png","e1f5eea72b6cee58317819d82998c8dd"],["hexo_github_blog/5.png","3cf323df261199f8b3bd3ae65bc1291f"],["hexo_github_blog/6.png","a71951921fc64f145683ec406f732f40"],["hexo_github_blog/7.png","95f9f50b6a6213d2f12ec74ff380e79b"],["hexo_github_blog/index.html","ba23166b41a7af6aa3ab97840002e7d9"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","99aa42a8217e3583a2be4481172c7390"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["load_balance/0.png","ca7abba5eb07d747bf99b16736aa93bb"],["load_balance/1.png","f602d7ae264d8d38111408bee940e226"],["load_balance/2.png","f4bfc79d1c76be39e6705e24b2d931c0"],["load_balance/3.png","ff0b5c3eecfb43a176dd6fdf16f7c8cc"],["load_balance/4.png","0ea60d353e7db8791f9d953decbe6afa"],["load_balance/5.png","0f9e49a1516ecd05ca1d6dac789f4946"],["load_balance/index.html","70c4ea6e320d8443b56f8e390b35ca9b"],["machine_learning_note/index.html","8a59a904e02d44973360a00ccfda90c1"],["page/2/index.html","33e1283faa234897ab45f1c7966dddea"],["page/3/index.html","d95b559b9cc0536ab9261aee9aaf528d"],["redis_db/1.png","428e6ac4ab1f75a8a1acab281cae214d"],["redis_db/2.png","01d148aff3a88afe9217b8bd5f9496b4"],["redis_db/3.png","d8f4ac7d7498719175b909763e61fcca"],["redis_db/4.png","9849e5335393f43fba41ed1d58057dc1"],["redis_db/5.png","20625c298df62193942e8803f729e975"],["redis_db/6.png","77b01351e09e3d84e9692741eb41ce7b"],["redis_db/index.html","22b8d301f84330c4820e761fe3de365a"],["redis_learn/1.png","eb29ca18e6983ba1992b3a8ee0ad94b6"],["redis_learn/2.png","69df05e55f9804817b2b5501db252c98"],["redis_learn/3.png","1df7d98fca9ed97e0b86a83071394083"],["redis_learn/4.png","e2d073eeea52f11a3e6ee644e4a327b8"],["redis_learn/5.png","baa8562e3dd8791c5bcc23868fdf5213"],["redis_learn/61.png","70667e45204eb0622362f2d726f3299a"],["redis_learn/62.png","e2955824d67d2d23eb14c71e742365cd"],["redis_learn/71.png","ecd3118817ee40754a8979833bbc2be0"],["redis_learn/710.png","f8975a3530bd74e31710b24897c1254f"],["redis_learn/710_.png","364209bdc0e24753eb4bf30701a3592d"],["redis_learn/711.png","e1bc42c16e33d156ce95ad456a896c58"],["redis_learn/711_.png","5c524fa602695911df6342ada793f906"],["redis_learn/72.png","fe169b04d79a967872891319d8e5e2e3"],["redis_learn/73.png","c2a89428bd9e8684951d1b8f0b9d784a"],["redis_learn/74.png","4c5a895b907d2ac3a0530954870bd977"],["redis_learn/75.png","962d9a29a098b55a4ad67906c9f96aa6"],["redis_learn/76.png","879da5f13225cffaeb2acb89b5836633"],["redis_learn/76_.png","5804c3b0bb40f85d9020a0fb7d60e35d"],["redis_learn/77.png","c8a4b9244bf43bd96d6667beb42c8af1"],["redis_learn/78.png","d64c704391de8eab95989c8f098b16af"],["redis_learn/79.png","61209b64313331409de15566ee8c3cda"],["redis_learn/index.html","7dee77f8633917d99bb0bda364d57016"],["scaffold/draft.html","ec38f2bec510c2e457f52503f05e0c77"],["scaffold/page.html","ec38f2bec510c2e457f52503f05e0c77"],["scaffold/post.html","ec38f2bec510c2e457f52503f05e0c77"],["start_bolg_life/index.html","c26b81eb7f4c6324d64177e1c4a25be5"],["tags/C/index.html","dc81e624ae575b51ccd592ff4449969d"],["tags/Google/index.html","fe5fda275f399fc4c930d23673ad8efc"],["tags/Haskell/index.html","ce004fa401b4242ff047e5bf046c1fdf"],["tags/I-O/index.html","ae2c6766537c1d7fb1a8b1c6e1593d22"],["tags/IPC/index.html","e68884067a402b3ab9dc66ea0527a7d1"],["tags/Linux/index.html","3399180be05dd2607404282e5a259af6"],["tags/Redis/index.html","658fec2b5441f7d216a422334d58eed1"],["tags/STL/index.html","013e6aa3cb61c204a97e1f37d792a007"],["tags/UNIX/index.html","ecac2a5754317df98dd36f5933fffaea"],["tags/vim/index.html","aa8096ace6cc9d7a9b82dff5ca35ea8d"],["tags/信号/index.html","cdecf68214d34559286bdfa4aef20272"],["tags/博客/index.html","d3dbe1eeedaa4267049aa7da2169a8f8"],["tags/学习/index.html","3ca683a9b65e1770faae3c9d5e699056"],["tags/并发/index.html","0074ddb4899b611510038eceaa1463e3"],["tags/操作系统/index.html","6776b3979d540bfda7c5b0ea49fa5283"],["tags/教程/index.html","fbbc0f64f1f0ba1faf184733bed36ccb"],["tags/文件/index.html","db6a264574ead11dfce971f1b7f85461"],["tags/算法/index.html","770d87517f8eb13bbf8d4ecbd9fea48f"],["tags/线程/index.html","5abb0e363149d558728f6dfe9aa5f338"],["tags/网络编程/index.html","8ab6737ffc057f59181c51af4314e8d1"],["tags/负载均衡/index.html","f500fa84e6eafa499aa7599cdf9cc215"],["tags/进程/index.html","a39824f1e57298eaccf263ae17ca4b69"],["unp_note_1/111.png","d141a1532792eaa1272fb5fa6a4102da"],["unp_note_1/112.png","34ccebee079730afe1cea85b68147ef5"],["unp_note_1/113.png","8ae4b92ae873bf63fbcfdbd24ec10719"],["unp_note_1/114.png","62a2033cd04395c00780b3e0e3a84d38"],["unp_note_1/115.png","a71dc74e9ebabdacce7cbd5736c87f56"],["unp_note_1/21.png","11d885993bfcbf546c7d79a8d52a62cc"],["unp_note_1/22.png","f1495e639e985ccd73d4dd551984df8c"],["unp_note_1/31.png","85d46403900bfe2f581dfc5e2e49c586"],["unp_note_1/41.png","b1633e120e27b9f7070643a28f8cc755"],["unp_note_1/61.png","d8a9607d6027be225596fee117f3aa3b"],["unp_note_1/62.png","fc8109e1cb369ee89f11c4f25efc5911"],["unp_note_1/63.png","96b7622b50c10766a6dee3e4e212c2ed"],["unp_note_1/64.png","7ad8155d859e3489ff08ab8c8fcc0250"],["unp_note_1/71.png","6c20e3b64c6841d800a86a28903ae792"],["unp_note_1/72.png","636a8deff1e37471eea5a86454ad0b0d"],["unp_note_1/73.png","0f0c79e2b841b59d023bb224b490f3a8"],["unp_note_1/74.png","7875dfb4bf1329e934b355cdfe3fb26b"],["unp_note_1/75.png","7e8a73045248423c2c5dde556218fe45"],["unp_note_1/76.png","25a86a44fb602a06114a73a42d61a827"],["unp_note_1/77.png","7247448eb011d183a2face03f1a354ec"],["unp_note_1/78.png","af6df4f268b60b741f56905fe1a0473d"],["unp_note_1/81.png","63f1da37cf7f1e219603ca3ab76c1c6d"],["unp_note_1/82.png","31d6812293867ebb410f1033e4c52841"],["unp_note_1/83.png","df2f54152d215d6d3d3e30714b567261"],["unp_note_1/84.png","2d4d61e82b1144d19c33acd0e4e02912"],["unp_note_1/85.png","85bf44e1260d92d347fadd37fc289cf6"],["unp_note_1/index.html","911b5a8a4f842145327278a983ac98f6"],["unp_note_2/1.png","97412dc33c55c519f6172847f810b898"],["unp_note_2/2.png","55cd83fe91dab1e83c63c9c39f04ab18"],["unp_note_2/3.png","3f246f0bb8257943110ab911103c201b"],["unp_note_2/4.png","cf67bf5b6f9cb5c578bb93bd650a1415"],["unp_note_2/5.png","0f980edeeae49f5b4456ff3b3ee0fcad"],["unp_note_2/6.png","060c17ddf2c3aa99349ca06a9fb55fff"],["unp_note_2/7.png","27b43b3fa0f68f331e9898aa84305792"],["unp_note_2/8.png","ac992133ed7d9598a19c9b2b91ac1bed"],["unp_note_2/index.html","93330072416c774a649840d788ca90be"],["vim_command/index.html","4eaf8d548775796c1417ab5227bc647f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







