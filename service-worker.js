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

var precacheConfig = [["about/index.html","7f2a337b6747a2cd05561b4f8e1a9cc9"],["apue_file/31.png","532f9b20ca9f2bf5f4ef4325980f5d61"],["apue_file/32.png","1b12654642d1816a9f09ebd4f289ef12"],["apue_file/33.png","4cb6e31b25aa27eed5e94058782c0877"],["apue_file/41.png","bab4bcca5dadd95aa4d144d7614c90d5"],["apue_file/42.png","89a5ec9de09d01918ee11b144fa0cb5c"],["apue_file/index.html","0da5ea22879f7d252ffc3ce1ad6d51ad"],["apue_process/71.png","e3953a6dba12f0de616430c4c2a39564"],["apue_process/81.png","a6fa77d4fc4b5e1ccd5718beabe89f12"],["apue_process/82.png","fa24753bfa4aabd67b8664a0d60fc319"],["apue_process/91.png","8ef5b14a72a8ff64a347387fb1f106d3"],["apue_process/92.png","be169e327c00e609e5ad7ea3d5e24cac"],["apue_process/93.png","37f878a3a46f10d0f3614e674bdc9034"],["apue_process/94.png","641090192ac738b67d68ac55c2c77e70"],["apue_process/index.html","897c21a523792811d0044270829803ec"],["apue_signal/index.html","473488450d35fadfa4b446ab16217278"],["archives/2018/03/index.html","2e6244451308a984cc4cef8d9a857e82"],["archives/2018/04/index.html","388679e618a677d20c7fe16331272f38"],["archives/2018/05/index.html","0daae4ba59fe978b78b31bdcef7576fc"],["archives/2018/07/index.html","e56118353fcbd24e7694dcaa86d98dea"],["archives/2018/08/index.html","be8efb6a9f64a06c085d62871b798d28"],["archives/2018/09/index.html","202223b559f83d671e0659d935680b7d"],["archives/2018/10/index.html","157d4e5590b169e53b7e6be47dc4bd63"],["archives/2018/index.html","188ecd056a3759f84b6cdd5d79619513"],["archives/2018/page/2/index.html","d7dc2b021f2794d6810d56da5509cb4f"],["archives/index.html","40ba0d29e3d641a8e886ee3a04626b7c"],["archives/page/2/index.html","b50c180310855ab3c9d7f344e2e21584"],["categories/C/index.html","6c80328fd9f7662640f682b9bc0128be"],["categories/Linux/index.html","81e48b427d7b65ec403a53c95bdf3afa"],["categories/UNIX编程/index.html","34dd6f2e0e1d717572664084d6af0cd7"],["categories/index.html","4f24e929e4009b6a685ec75967b82694"],["categories/博客搭建/index.html","b2408a6b9e0a18dd6ccfea8bbcba8d60"],["categories/日常随笔/index.html","ef37499a8dfb0dcf70f26e08100e6245"],["categories/机器学习/index.html","56d2c67c89c8ec189fba992c9bf10f80"],["categories/网络编程/index.html","015839a5fdd1be82e80576c573b5600a"],["css/index.css","082896de67b95fca7a4c6024f725b96a"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["effective_stl_note/index.html","6b80c0cfc4828d8bdfa4f84c43f7ba80"],["hexo_github_blog/1.png","92a091b369ba83dae75e45ee17566425"],["hexo_github_blog/2.png","89403c256fff3dcf93ea954c46d85ac8"],["hexo_github_blog/3.png","2d9da10ae971a91197b3f903ba6f6633"],["hexo_github_blog/4.png","e1f5eea72b6cee58317819d82998c8dd"],["hexo_github_blog/5.png","3cf323df261199f8b3bd3ae65bc1291f"],["hexo_github_blog/6.png","a71951921fc64f145683ec406f732f40"],["hexo_github_blog/7.png","95f9f50b6a6213d2f12ec74ff380e79b"],["hexo_github_blog/index.html","452526c856a0e51ce286ee28a57e960d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","2cf0877dd20af695ca75c14f891632ff"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["machine_learning_note/index.html","a24c0051e336653f0f41867ea0969d1e"],["page/2/index.html","264e6b1b4e5d336228603c7999440280"],["scaffold/draft.html","b2aa8a4536bba7c93c53442fd0de9964"],["scaffold/page.html","b2aa8a4536bba7c93c53442fd0de9964"],["scaffold/post.html","b2aa8a4536bba7c93c53442fd0de9964"],["start_bolg_life/index.html","3606b1a6c9d3d1370c963e628b05741a"],["tags/C/index.html","e14be57e8bdf8db142055a0fb6b45074"],["tags/Linux/index.html","45b3d8c97107ab8a0bc00e0889599308"],["tags/Note/index.html","ae8d8fa8eb21311f312f1d82651f6b26"],["tags/STL/index.html","2f180ca5a286e2d69f5ebb26bdcf3276"],["tags/Socket/index.html","406f65f900f799767cf56711827c14b7"],["tags/UNIX/index.html","1b71ee6189363998aaf8fa1d7dab59c1"],["tags/index.html","2c790fd3f421750616e462da94bb1272"],["tags/vim/index.html","19de29a0ae50eb651484e239f8666474"],["tags/信号/index.html","154266f985130b52281f60a244f48d03"],["tags/博客/index.html","d076a8b0cbdf54eb0ec1268327960e94"],["tags/学习/index.html","a8ab97964fce4ac57431e2a2f1513b27"],["tags/操作系统/index.html","4b8d8f4d9bf7892ce42b85b1d06a81b7"],["tags/教程/index.html","320c99e4f2f88f538e90f46e0cc75499"],["tags/文件/index.html","76416d965af57eef0f13c6d0da1ea499"],["tags/算法/index.html","441e5aa6f84d459db3f0ccaf0c91d91d"],["tags/网络编程/index.html","d123cddde4b5be704cfa796257e922f4"],["tags/进程/index.html","d56e29db465e002f2439d9d8ae8c0258"],["unp_note_1/111.png","d141a1532792eaa1272fb5fa6a4102da"],["unp_note_1/112.png","34ccebee079730afe1cea85b68147ef5"],["unp_note_1/113.png","8ae4b92ae873bf63fbcfdbd24ec10719"],["unp_note_1/114.png","62a2033cd04395c00780b3e0e3a84d38"],["unp_note_1/115.png","a71dc74e9ebabdacce7cbd5736c87f56"],["unp_note_1/21.png","11d885993bfcbf546c7d79a8d52a62cc"],["unp_note_1/22.png","f1495e639e985ccd73d4dd551984df8c"],["unp_note_1/31.png","85d46403900bfe2f581dfc5e2e49c586"],["unp_note_1/41.png","b1633e120e27b9f7070643a28f8cc755"],["unp_note_1/61.png","d8a9607d6027be225596fee117f3aa3b"],["unp_note_1/62.png","fc8109e1cb369ee89f11c4f25efc5911"],["unp_note_1/63.png","96b7622b50c10766a6dee3e4e212c2ed"],["unp_note_1/64.png","7ad8155d859e3489ff08ab8c8fcc0250"],["unp_note_1/71.png","6c20e3b64c6841d800a86a28903ae792"],["unp_note_1/72.png","636a8deff1e37471eea5a86454ad0b0d"],["unp_note_1/73.png","0f0c79e2b841b59d023bb224b490f3a8"],["unp_note_1/74.png","7875dfb4bf1329e934b355cdfe3fb26b"],["unp_note_1/75.png","7e8a73045248423c2c5dde556218fe45"],["unp_note_1/76.png","25a86a44fb602a06114a73a42d61a827"],["unp_note_1/77.png","7247448eb011d183a2face03f1a354ec"],["unp_note_1/78.png","af6df4f268b60b741f56905fe1a0473d"],["unp_note_1/81.png","63f1da37cf7f1e219603ca3ab76c1c6d"],["unp_note_1/82.png","31d6812293867ebb410f1033e4c52841"],["unp_note_1/83.png","df2f54152d215d6d3d3e30714b567261"],["unp_note_1/84.png","2d4d61e82b1144d19c33acd0e4e02912"],["unp_note_1/85.png","85bf44e1260d92d347fadd37fc289cf6"],["unp_note_1/index.html","aab4ebb86c01dc06f26bb62c14a378e4"],["unp_note_2/1.png","97412dc33c55c519f6172847f810b898"],["unp_note_2/2.png","55cd83fe91dab1e83c63c9c39f04ab18"],["unp_note_2/3.png","3f246f0bb8257943110ab911103c201b"],["unp_note_2/4.png","cf67bf5b6f9cb5c578bb93bd650a1415"],["unp_note_2/5.png","0f980edeeae49f5b4456ff3b3ee0fcad"],["unp_note_2/6.png","060c17ddf2c3aa99349ca06a9fb55fff"],["unp_note_2/7.png","27b43b3fa0f68f331e9898aa84305792"],["unp_note_2/8.png","ac992133ed7d9598a19c9b2b91ac1bed"],["unp_note_2/index.html","4254ff592727c63db472b2c9a0e9c50a"],["vim_command/index.html","24132e23402f8a4e77b8ec1a91e7e000"]];
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







