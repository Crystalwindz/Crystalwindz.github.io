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

var precacheConfig = [["about/index.html","5044d08846e36c91f8e7b2449b1c3aad"],["apue_advio/141.png","7b76d793436f97a0fddfc3bbbc173b5b"],["apue_advio/index.html","31674638a6a4ad00afc82f96643de78f"],["apue_file/31.png","532f9b20ca9f2bf5f4ef4325980f5d61"],["apue_file/32.png","1b12654642d1816a9f09ebd4f289ef12"],["apue_file/33.png","4cb6e31b25aa27eed5e94058782c0877"],["apue_file/41.png","bab4bcca5dadd95aa4d144d7614c90d5"],["apue_file/42.png","89a5ec9de09d01918ee11b144fa0cb5c"],["apue_file/index.html","f48535f7dd5c020a716c060bd9d66d79"],["apue_ipc/151.png","ca1d737bce47710b6dd3a4db578d045e"],["apue_ipc/152.png","d2a2f30453449c59e939b5afae35f058"],["apue_ipc/153.png","0b2830c41c8be21b4923839b8bbef2ac"],["apue_ipc/154.png","32d38054c80709ce78467c5368fa9d8f"],["apue_ipc/155.png","69fb4fa96e4114921b6898f79a440a4d"],["apue_ipc/171.png","ad4d4e11c9c223ea71481d690f2185f6"],["apue_ipc/172.png","fc4ee6648de15c5ca84f9b2c6254ab23"],["apue_ipc/index.html","38f41100bafaf8e25a70e4c8989e8984"],["apue_process/71.png","e3953a6dba12f0de616430c4c2a39564"],["apue_process/81.png","a6fa77d4fc4b5e1ccd5718beabe89f12"],["apue_process/82.png","fa24753bfa4aabd67b8664a0d60fc319"],["apue_process/91.png","8ef5b14a72a8ff64a347387fb1f106d3"],["apue_process/92.png","be169e327c00e609e5ad7ea3d5e24cac"],["apue_process/93.png","37f878a3a46f10d0f3614e674bdc9034"],["apue_process/94.png","641090192ac738b67d68ac55c2c77e70"],["apue_process/index.html","f6f25f228992f03b0748f756ee1da17f"],["apue_signal/index.html","ef898d9bbe9570441de182472317f852"],["apue_thread/111.png","b20f5f69d6423eb54a67601ae47fd34c"],["apue_thread/121.png","dab46cc0d689a027b8a93e6616ce9036"],["apue_thread/index.html","f123e5956a4f2981be16ce4d95a16f57"],["archives/2018/03/index.html","fd282145a21a1b94c435e3f17dc9c381"],["archives/2018/04/index.html","5fb12288d693618772801de0ded39eac"],["archives/2018/05/index.html","4bf82be4dff4c48d52c4e9cc32bd9f1b"],["archives/2018/07/index.html","dbc6c874a916e4f9070aabcb1b4ecc06"],["archives/2018/08/index.html","8b25907831488ba06bc74cfad196aac7"],["archives/2018/09/index.html","c5474d26df49ec4f510d6842b327b23e"],["archives/2018/10/index.html","0779cb4ff716f2da516f829bf49ac0ce"],["archives/2018/11/index.html","faa35025166d27668fccf5f56c4d4271"],["archives/2018/index.html","bca9e7f369c980cf816dfc90998f934e"],["archives/index.html","c20f4767cebf735c6104f571aa3395ad"],["categories/APUE总结/index.html","22d1ee01deefa240f594b839d4c6b6bd"],["categories/C/index.html","935872c5118c15d71888dd042f3d0947"],["categories/Linux/index.html","bc2c86a6c366417c48d186bb90000e82"],["categories/UNP总结/index.html","4ba3a42704e846b76fb927965b13f45b"],["categories/index.html","304b9dba425be1422f31e0ef2f58c36b"],["categories/开拓视野/index.html","64acda08557d169d1a6e26559c77dc99"],["categories/技术教程/index.html","eae1dbe95f591e6844d065c21d8ebf22"],["categories/日常随笔/index.html","a25ec086339815e16ae2714536d17b74"],["categories/网络相关/index.html","84437acfb421f2a721320ba85f7a86e9"],["categories/软件工程/index.html","7335cd4bbac330440e9687074c212adc"],["css/index.css","082896de67b95fca7a4c6024f725b96a"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["effective_stl_note/index.html","879b1c051a7892265f12fbba18efb913"],["google_code_style/1.jpg","d021c463e593b8c1d398b6b739d1c25a"],["google_code_style/index.html","dbea354a9b7d9c6acd9db394a0ac22bc"],["haskell_obsession/1.jpg","4b3ad2f008dbec5ff0564149700a70bb"],["haskell_obsession/haskell-logo.svg","ba47f7160efe755121a43b36753958f7"],["haskell_obsession/index.html","660ac6e8abc9257527cab7a6aefb466f"],["hexo_github_blog/1.png","92a091b369ba83dae75e45ee17566425"],["hexo_github_blog/2.png","89403c256fff3dcf93ea954c46d85ac8"],["hexo_github_blog/3.png","2d9da10ae971a91197b3f903ba6f6633"],["hexo_github_blog/4.png","e1f5eea72b6cee58317819d82998c8dd"],["hexo_github_blog/5.png","3cf323df261199f8b3bd3ae65bc1291f"],["hexo_github_blog/6.png","a71951921fc64f145683ec406f732f40"],["hexo_github_blog/7.png","95f9f50b6a6213d2f12ec74ff380e79b"],["hexo_github_blog/index.html","e0ad185d04e6eeb9a0aebcba29d7c450"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","c6b3899bde6f89bef36035a8f7cacfda"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["load_balance/0.png","ca7abba5eb07d747bf99b16736aa93bb"],["load_balance/1.png","f602d7ae264d8d38111408bee940e226"],["load_balance/2.png","f4bfc79d1c76be39e6705e24b2d931c0"],["load_balance/3.png","ff0b5c3eecfb43a176dd6fdf16f7c8cc"],["load_balance/4.png","0ea60d353e7db8791f9d953decbe6afa"],["load_balance/5.png","0f9e49a1516ecd05ca1d6dac789f4946"],["load_balance/index.html","8d6eef99ba8021344a5f0cf1797ab764"],["machine_learning_note/index.html","36f8a032b7e6003a41940748e6a55f28"],["page/2/index.html","438695735a39543de4068fa7e910e368"],["scaffold/draft.html","add2ba06b4a4a315aa629e915d088034"],["scaffold/page.html","add2ba06b4a4a315aa629e915d088034"],["scaffold/post.html","add2ba06b4a4a315aa629e915d088034"],["start_bolg_life/index.html","f67c833d92f51dfa4f38d63f72a0d03e"],["tags/C/index.html","4ea34c1c716a0832c4bd1a4e0d4ff531"],["tags/Google/index.html","f51268ba627cd5388612eba81ef142c6"],["tags/I-O/index.html","4a6eb720e0a549b1b7fae4d3190a8a44"],["tags/IPC/index.html","0308394f15b18b96c3153ba519b65be0"],["tags/Linux/index.html","54fbf89161762e4746b3e3f5ef8045c0"],["tags/STL/index.html","1279de3fec42edd38435fbf511f1a96b"],["tags/UNIX/index.html","80b880bb4b528dfbd298e8ecc5e6d916"],["tags/haskell/index.html","e727e9caeba2b0299cccc7b99717a405"],["tags/vim/index.html","f47aeebef5900f1c3cb21d15bdaeff9b"],["tags/信号/index.html","ed6c91182dc19ee6858d3e0dcf11f91c"],["tags/博客/index.html","1fd5150c63787eeb95fb7c8dad7fc55c"],["tags/学习/index.html","d87d5e8e90879cd59444e3e920bdf7f2"],["tags/并发/index.html","adeeee76f18aba349ef1685c593be175"],["tags/操作系统/index.html","711a022495576de89660dee3c6019420"],["tags/教程/index.html","d03b012973796230abd0ba95c8718f74"],["tags/文件/index.html","d5351d914c346cd6467b6720a6d0f299"],["tags/算法/index.html","e791050523c16a404974ffdc52101cd0"],["tags/线程/index.html","55e24bce810cf151a7f29172c2e26fbd"],["tags/网络编程/index.html","d2cf6fed476c1f7d3673a5d8ffcfcb3e"],["tags/负载均衡/index.html","6f49ad77615867f60786d8fc6de9705c"],["tags/进程/index.html","65a14903ab4eefb09a6682eba4de443d"],["unp_note_1/111.png","d141a1532792eaa1272fb5fa6a4102da"],["unp_note_1/112.png","34ccebee079730afe1cea85b68147ef5"],["unp_note_1/113.png","8ae4b92ae873bf63fbcfdbd24ec10719"],["unp_note_1/114.png","62a2033cd04395c00780b3e0e3a84d38"],["unp_note_1/115.png","a71dc74e9ebabdacce7cbd5736c87f56"],["unp_note_1/21.png","11d885993bfcbf546c7d79a8d52a62cc"],["unp_note_1/22.png","f1495e639e985ccd73d4dd551984df8c"],["unp_note_1/31.png","85d46403900bfe2f581dfc5e2e49c586"],["unp_note_1/41.png","b1633e120e27b9f7070643a28f8cc755"],["unp_note_1/61.png","d8a9607d6027be225596fee117f3aa3b"],["unp_note_1/62.png","fc8109e1cb369ee89f11c4f25efc5911"],["unp_note_1/63.png","96b7622b50c10766a6dee3e4e212c2ed"],["unp_note_1/64.png","7ad8155d859e3489ff08ab8c8fcc0250"],["unp_note_1/71.png","6c20e3b64c6841d800a86a28903ae792"],["unp_note_1/72.png","636a8deff1e37471eea5a86454ad0b0d"],["unp_note_1/73.png","0f0c79e2b841b59d023bb224b490f3a8"],["unp_note_1/74.png","7875dfb4bf1329e934b355cdfe3fb26b"],["unp_note_1/75.png","7e8a73045248423c2c5dde556218fe45"],["unp_note_1/76.png","25a86a44fb602a06114a73a42d61a827"],["unp_note_1/77.png","7247448eb011d183a2face03f1a354ec"],["unp_note_1/78.png","af6df4f268b60b741f56905fe1a0473d"],["unp_note_1/81.png","63f1da37cf7f1e219603ca3ab76c1c6d"],["unp_note_1/82.png","31d6812293867ebb410f1033e4c52841"],["unp_note_1/83.png","df2f54152d215d6d3d3e30714b567261"],["unp_note_1/84.png","2d4d61e82b1144d19c33acd0e4e02912"],["unp_note_1/85.png","85bf44e1260d92d347fadd37fc289cf6"],["unp_note_1/index.html","8d92fdaee29b3455d9cee43eb213b7c9"],["unp_note_2/1.png","97412dc33c55c519f6172847f810b898"],["unp_note_2/2.png","55cd83fe91dab1e83c63c9c39f04ab18"],["unp_note_2/3.png","3f246f0bb8257943110ab911103c201b"],["unp_note_2/4.png","cf67bf5b6f9cb5c578bb93bd650a1415"],["unp_note_2/5.png","0f980edeeae49f5b4456ff3b3ee0fcad"],["unp_note_2/6.png","060c17ddf2c3aa99349ca06a9fb55fff"],["unp_note_2/7.png","27b43b3fa0f68f331e9898aa84305792"],["unp_note_2/8.png","ac992133ed7d9598a19c9b2b91ac1bed"],["unp_note_2/index.html","35e5a45371c07f5ec1724768087d0210"],["vim_command/index.html","7cdbd85671614f2b3a68e31356a46f5f"]];
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







