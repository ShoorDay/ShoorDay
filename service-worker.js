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

var precacheConfig = [["D:/Hexo/public/about/index.html","b63b4795788be24fc8b48623283e2d6e"],["D:/Hexo/public/archives/2017/09/index.html","78cce6d422b688349d2a410049b24041"],["D:/Hexo/public/archives/2017/index.html","330d8cf5e5ef9761fa9256c1d57bc5d9"],["D:/Hexo/public/archives/2018/03/index.html","7977be01e8f173bd772aa0b168d80cb7"],["D:/Hexo/public/archives/2018/06/index.html","e5492643856398598a4c92a968cbc0fc"],["D:/Hexo/public/archives/2018/index.html","61e1f5e05d0656ea6348b11912abf97b"],["D:/Hexo/public/archives/2019/09/index.html","1f2847c7a12fa0f385d73c4c782802aa"],["D:/Hexo/public/archives/2019/10/index.html","d8ffecd1b13df281e2cfd513e3162474"],["D:/Hexo/public/archives/2019/10/page/2/index.html","845edfc5bbd14cf1fb0f02b9d5b57e80"],["D:/Hexo/public/archives/2019/index.html","f453a5bb1c2b3dc23342b3c72e83ebd0"],["D:/Hexo/public/archives/2019/page/2/index.html","a65b9c10870fa8b2227479d682efdeef"],["D:/Hexo/public/archives/index.html","a3c5e31b5c716d16dd6f64ad9bb7a862"],["D:/Hexo/public/archives/page/2/index.html","e44daefe0ff33386ddb59a5a306dc557"],["D:/Hexo/public/categories/Code/Git/index.html","738c1b5a0d99c508efea666eb19fbe0c"],["D:/Hexo/public/categories/Code/Others/index.html","f1800894aac88fd3bf7207b3eb06b163"],["D:/Hexo/public/categories/Code/index.html","06126a31a9c497d211ba8ba8f6788914"],["D:/Hexo/public/categories/Hexo/index.html","070f40176cd68f3a97f271aaa4379f6a"],["D:/Hexo/public/categories/MarkDown/index.html","83026cba17c620e67b4a5b1f78399b1d"],["D:/Hexo/public/categories/MarkDown/实用效率/index.html","437b94282c8566c713ca2b7208d6a1da"],["D:/Hexo/public/categories/Python/index.html","b87668d0a54d456af9a96f40101fe435"],["D:/Hexo/public/categories/Python/基础/index.html","c1fe3af10dc854ac648d282ddd9d9d4e"],["D:/Hexo/public/categories/Python/面向对象/index.html","2b4ec3715a670d65602000517b6f60c4"],["D:/Hexo/public/categories/index.html","5d94552ef01be81e3857022d2ad22817"],["D:/Hexo/public/categories/实用效率/index.html","c19e6cc2b7ead7620f4f2de6efe77aa2"],["D:/Hexo/public/categories/打包与分发/Python/index.html","e068a8f417d792bcbe458f3feb213ed6"],["D:/Hexo/public/categories/打包与分发/index.html","16646e68deb96094ec1acc790cb55179"],["D:/Hexo/public/categories/未分类/index.html","2d94601035ed23e19a922915cb0b5824"],["D:/Hexo/public/categories/算法/index.html","56f8cb4dcfbd86fbfe42b15e0268c96b"],["D:/Hexo/public/categories/算法/函数/index.html","40656f914058b980fb121e37134c9d03"],["D:/Hexo/public/css/index.css","127c87035ce845de76c93d115a1d9631"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Hexo/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Hexo/public/index.html","227fe4f4cbc0e134513efd052fc1be9c"],["D:/Hexo/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/Hexo/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/Hexo/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/Hexo/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Hexo/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/Hexo/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Hexo/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/Hexo/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Hexo/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Hexo/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Hexo/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Hexo/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Hexo/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Hexo/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Hexo/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Hexo/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Hexo/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Hexo/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Hexo/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Hexo/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Hexo/public/page/2/index.html","7c4cc4514ae92a72152838dc9dabacf4"],["D:/Hexo/public/posts/16107/index.html","d87c4a76445e6c842992f4773966e49f"],["D:/Hexo/public/posts/181a9d16/index.html","ca15bf2c67f117aebfe1f0730390e3e1"],["D:/Hexo/public/posts/3baee0e1/index.html","4a8fcb6ebe137110c861ea44c003dd02"],["D:/Hexo/public/posts/4c00b674/index.html","29baa57cc0857e1e1c735d23a87b4946"],["D:/Hexo/public/posts/4d942339/index.html","1621d3fe000035720d5833d3134f4060"],["D:/Hexo/public/posts/536a2cf0/index.html","af92b881eac436bb937ce05e437bc014"],["D:/Hexo/public/posts/53b5426a/index.html","0a53dddd4162d5eaa45cd8df08cb1d08"],["D:/Hexo/public/posts/7611e2b2/index.html","b4bdd0d23013cf46ba52974fd1d31c77"],["D:/Hexo/public/posts/9793/index.html","ab011f2206ac8a0cb2aea582dcc5b6e3"],["D:/Hexo/public/posts/979ba5c0/index.html","4259a35a8769e0e6b052fc39c91ef760"],["D:/Hexo/public/posts/ace0e55c/index.html","986eeef43fcb8a60625736505f673be1"],["D:/Hexo/public/posts/bb04cb3e/index.html","6dfd38530492c36d0e72359bd57be8d0"],["D:/Hexo/public/posts/bda3d30d/index.html","1d1129d7a63888e6156f328de3744a93"],["D:/Hexo/public/posts/c951a1d4/index.html","9ff21d5ba241f80ded3105025dcec11d"],["D:/Hexo/public/posts/ceb060d6/index.html","ce77a94e70db90379dc6d69e948e1a74"],["D:/Hexo/public/posts/d04e1a92/index.html","a8dddb9d8c75c66a0ae1dc5a2f4616b0"],["D:/Hexo/public/posts/dcbe0c49/index.html","7d127da64092a1c5e4cabf6539bf2afb"],["D:/Hexo/public/posts/f2b4268f/index.html","6dd44209acf7f8dfdc2fed403b9cc944"],["D:/Hexo/public/tags/C/index.html","a86fa4703747df83d7c556e6f245e4d9"],["D:/Hexo/public/tags/Git/index.html","9069bff5068102baf5f4ca75e3db8199"],["D:/Hexo/public/tags/Hexo/index.html","f4ae50610c25bd3587971134ad696d04"],["D:/Hexo/public/tags/IO/index.html","0844902d87ff1210f0784d7553bc3973"],["D:/Hexo/public/tags/Markdown/index.html","a254c1f956aebea7b45e95b8760e967a"],["D:/Hexo/public/tags/PyPi/index.html","3583f3c843e86942b4fe0cdbefc982c8"],["D:/Hexo/public/tags/Python/index.html","676287a56858a3ce8066ca5b6f87f35f"],["D:/Hexo/public/tags/index.html","462fd4f0a1a49367b7a55b97f94a4156"],["D:/Hexo/public/tags/setuptools/index.html","e6ac3835628fbbe049005ff1c36739c3"],["D:/Hexo/public/tags/test/index.html","af442c7b6fb8c3300b51c5c711804077"],["D:/Hexo/public/tags/函数/index.html","eaed31ff6df6e94f2b256fc744f370b7"],["D:/Hexo/public/tags/有趣/index.html","e4f973139d685617abcc24c2807cd1af"],["D:/Hexo/public/tags/权限/index.html","4afda4324baa42bb459171667a135881"],["D:/Hexo/public/tags/栈/index.html","a520179f9d3c9c0c8a2bba3ba5be7bfd"],["D:/Hexo/public/tags/算法/index.html","7d1722a6b77978164248c4c07377ca05"],["D:/Hexo/public/tags/装饰器/index.html","00c61acbb79c6d40dccb7b91c51d0b82"],["D:/Hexo/public/tags/诗词/index.html","d0f5725a43ff8736b15669d0f57df856"],["D:/Hexo/public/tags/课件/index.html","1dea1ec450a7ca625eab41b6e883861c"],["D:/Hexo/public/tags/递归/index.html","7d4185ac66425df52d7fc40c93aa4152"],["D:/Hexo/public/tags/闭包/index.html","d5ca301f4e3c6ee4e61d9a173f7d3da5"],["D:/Hexo/public/tags/面向对象/index.html","7467bfb0a8b7d3b93c07aec42729fd4f"]];
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







