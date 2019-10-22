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

var precacheConfig = [["D:/Hexo/public/about/index.html","1e3f9e75a4eba60c6fce4d166a745e38"],["D:/Hexo/public/archives/2017/09/index.html","77e37c58ce4ea2b5c8538e96f67ae8dd"],["D:/Hexo/public/archives/2017/index.html","cfa53401c3d40dabfb8fb4e5f932d571"],["D:/Hexo/public/archives/2018/03/index.html","6f11d81ceb1745f3537f23984763a650"],["D:/Hexo/public/archives/2018/06/index.html","27e2160c030d701ccf324fdc28ba6965"],["D:/Hexo/public/archives/2018/index.html","9614f21032be4b2f6fdcc93a2c4080c9"],["D:/Hexo/public/archives/2019/09/index.html","445cf6fbb7a31d8844a01323ba142c76"],["D:/Hexo/public/archives/2019/10/index.html","886fc8a8d8cc9ec92cf1c739ccae84e1"],["D:/Hexo/public/archives/2019/10/page/2/index.html","1398ff6ff33ebecdb4c9bbd493c48440"],["D:/Hexo/public/archives/2019/index.html","2f390e910f19644577c04e67f70ba8eb"],["D:/Hexo/public/archives/2019/page/2/index.html","a9c721ab5010f835274f450262258e31"],["D:/Hexo/public/archives/index.html","7beb232cd26cb2b387a04db788cf5f07"],["D:/Hexo/public/archives/page/2/index.html","d47733054e23ff88088e98fcd13a22c9"],["D:/Hexo/public/categories/Code/Git/index.html","e289356822835e8e4d39f98ba0fcde7a"],["D:/Hexo/public/categories/Code/Others/index.html","7f3b2efb5f733358e8f210a519c9de8c"],["D:/Hexo/public/categories/Code/index.html","ec0a560ad71c54243e328e1a3790a805"],["D:/Hexo/public/categories/Hexo/index.html","609484aec58bb3d901ccdd64698a48f6"],["D:/Hexo/public/categories/MarkDown/index.html","c7707d7c5615f18dfe0f7a8bd5614cb1"],["D:/Hexo/public/categories/MarkDown/实用效率/index.html","1e84d555412367e23f87dce2a106d125"],["D:/Hexo/public/categories/Python/index.html","9e91bc66d4eed3757afa5d26e4feb263"],["D:/Hexo/public/categories/Python/基础/index.html","f7c4b3e43270e01fa31c5e2dd4e232a9"],["D:/Hexo/public/categories/Python/面向对象/index.html","12486a75bdc65e71dc878ed095ed9e0a"],["D:/Hexo/public/categories/index.html","8546bc4d7021139554e87dc8db06398a"],["D:/Hexo/public/categories/实用效率/index.html","da87167690a52401d3b5cdcfcd1e7586"],["D:/Hexo/public/categories/打包与分发/Python/index.html","66d758e5fa4ebd6779d39194761bf8d0"],["D:/Hexo/public/categories/打包与分发/index.html","fee4df359f0fb4d4c4580d6429b37682"],["D:/Hexo/public/categories/未分类/index.html","b890cabbc8d86cad8587bbaf37333564"],["D:/Hexo/public/categories/算法/index.html","4ed2b172366bebeeab08bd9bfc07ff28"],["D:/Hexo/public/categories/算法/函数/index.html","46f177ad65a8bb8b5a32b7cb7f75b2fd"],["D:/Hexo/public/css/index.css","127c87035ce845de76c93d115a1d9631"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Hexo/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Hexo/public/index.html","a9e97ae1a882fd3c66a40a003f5be7a1"],["D:/Hexo/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/Hexo/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/Hexo/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/Hexo/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Hexo/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/Hexo/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Hexo/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/Hexo/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Hexo/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Hexo/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Hexo/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Hexo/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Hexo/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Hexo/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Hexo/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Hexo/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Hexo/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Hexo/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Hexo/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Hexo/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Hexo/public/page/2/index.html","d2e94096bb5ca3e8e08332d98eec3edc"],["D:/Hexo/public/posts/16107/index.html","a1282d7fb786c0ee0907635952debe60"],["D:/Hexo/public/posts/181a9d16/index.html","9842d78d4af3220f1f338b6f112d1b8c"],["D:/Hexo/public/posts/3baee0e1/index.html","30bb4c8a9b57dd47b8b7b6aae1d69001"],["D:/Hexo/public/posts/4c00b674/index.html","d21d4f9dd3bf6df0cd048febf440a73a"],["D:/Hexo/public/posts/4d942339/index.html","2d25e0bf4dc07a36131597013b33aa1f"],["D:/Hexo/public/posts/536a2cf0/index.html","e5b5b3538b22122dadf129eb2eed1440"],["D:/Hexo/public/posts/53b5426a/index.html","19099279d9d747c5c9566c8b1cd0f24a"],["D:/Hexo/public/posts/9793/index.html","a5e8b5e287ceb537d39358042863e499"],["D:/Hexo/public/posts/979ba5c0/index.html","6dc6777520c962e0b243f536fe6d49a6"],["D:/Hexo/public/posts/ace0e55c/index.html","d8b82b707289f323ae242fea7e76ce03"],["D:/Hexo/public/posts/bb04cb3e/index.html","3ed1574b4943182bee15546a431f1be6"],["D:/Hexo/public/posts/bda3d30d/index.html","69c4c240d2166fd3126f3e0a38a79a52"],["D:/Hexo/public/posts/c951a1d4/index.html","cb510b50e85541f2b14e9ce7c1057f3f"],["D:/Hexo/public/posts/ceb060d6/index.html","01b2c2b8b437c0a930c65bc824c6edb3"],["D:/Hexo/public/posts/d04e1a92/index.html","261a4d8c31b52d70dc586279aa7e5d74"],["D:/Hexo/public/posts/dcbe0c49/index.html","7fedb6020da0cb2ac741e98646e88b65"],["D:/Hexo/public/posts/f2b4268f/index.html","c4f6f31a1a6212d1dae3b490fbd0b872"],["D:/Hexo/public/tags/C/index.html","72f3a59617fee7f3526485ae426e2054"],["D:/Hexo/public/tags/Git/index.html","50501570305c9dda08f19f336d2eddcb"],["D:/Hexo/public/tags/Hexo/index.html","9fe364796966098147a1a4816c92f2aa"],["D:/Hexo/public/tags/IO/index.html","f9219662e306d87ce150f98ac028cde5"],["D:/Hexo/public/tags/Markdown/index.html","7423b74dc4581477517fa1aa3fa96265"],["D:/Hexo/public/tags/PyPi/index.html","e38412f7262d135ae6d019f6a8a67c11"],["D:/Hexo/public/tags/Python/index.html","61bcb1bc4390f6091275e4799b6d8694"],["D:/Hexo/public/tags/index.html","994d59b1858adc1c908a08534d533559"],["D:/Hexo/public/tags/setuptools/index.html","34938eac210cd9bb374c011904531c95"],["D:/Hexo/public/tags/test/index.html","d99b2b2721eb77f9a5712c0b7c6ff451"],["D:/Hexo/public/tags/函数/index.html","005c0af3ceb3715c40e165e73c35ef40"],["D:/Hexo/public/tags/有趣/index.html","827452de2920873a6fb79035dd9e9c56"],["D:/Hexo/public/tags/权限/index.html","6d2420dfe08b65ab0982db87cfac0d54"],["D:/Hexo/public/tags/栈/index.html","27819255092dde82c3d14c2ff8d9ab9f"],["D:/Hexo/public/tags/算法/index.html","47fb5d05f8ad4e22783a29e05712fa6f"],["D:/Hexo/public/tags/装饰器/index.html","33119edf6d17157dc915a83374b5df16"],["D:/Hexo/public/tags/诗词/index.html","5c00beb40c541bb9f3ee7c34f1d1fc31"],["D:/Hexo/public/tags/课件/index.html","e273cbab10fc35adcda3dea275fd9980"],["D:/Hexo/public/tags/递归/index.html","cb51f8838d3d69846e0ffec75b7f9398"],["D:/Hexo/public/tags/闭包/index.html","3ff85f27a3dc2e2545c71e297df47ac9"],["D:/Hexo/public/tags/面向对象/index.html","cf46820d231594d4e1c0511a6008ab7e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







