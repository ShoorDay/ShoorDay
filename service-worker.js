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

var precacheConfig = [["D:/Hexo/public/about/index.html","83e6270edaeab24a1e40e7fe0507d452"],["D:/Hexo/public/archives/2017/09/index.html","3ebdcc4671a66c6db950fcd97350b0a7"],["D:/Hexo/public/archives/2017/index.html","3e0039093ac629ce452e2393a9f0f383"],["D:/Hexo/public/archives/2018/03/index.html","e2140179d7b3af659110149c550c6216"],["D:/Hexo/public/archives/2018/06/index.html","103ab99e0e1849f972b20cb73830809d"],["D:/Hexo/public/archives/2018/index.html","c0c9355dbb8db30f896be89732e51e07"],["D:/Hexo/public/archives/2019/09/index.html","c246de0b309a9aaf2cc78f529d2bada2"],["D:/Hexo/public/archives/2019/10/index.html","ae62dd285a1e7cfbe0f58681b23a63f1"],["D:/Hexo/public/archives/2019/index.html","433d1d47e4115682a5557abb8b9b93d2"],["D:/Hexo/public/archives/2019/page/2/index.html","60f2d9e95b18cd033751ef27d668145c"],["D:/Hexo/public/archives/index.html","68fee405baff072add4456c5e5d697d6"],["D:/Hexo/public/archives/page/2/index.html","33d0a6815edbb85d1f5da4cf48d89dd4"],["D:/Hexo/public/categories/Code/Git/index.html","6aa833a6455aeb1da9ec746f12d774cf"],["D:/Hexo/public/categories/Code/Others/index.html","81e97a54a2243efa2bec02c27dd9e62c"],["D:/Hexo/public/categories/Code/index.html","325e67a3a0ce22d2ee68af25ebe7cfdb"],["D:/Hexo/public/categories/Hexo/index.html","a49e854381cbf89474fd58c350f99591"],["D:/Hexo/public/categories/MarkDown/index.html","1534f55c362781e0e8a8cb45ea94e34f"],["D:/Hexo/public/categories/MarkDown/实用效率/index.html","a60c5266fcc115c2ac133ec453109dcd"],["D:/Hexo/public/categories/Python/index.html","0822d7a9f591fd5e8de29ff1bae10f47"],["D:/Hexo/public/categories/Python/面向对象/index.html","d0282d353cbe1a794859cbbd78845139"],["D:/Hexo/public/categories/index.html","3927ca87e94ff2e820baca7154194c66"],["D:/Hexo/public/categories/实用效率/index.html","83192ce485ca1d8a5179cddb9bb0b9f7"],["D:/Hexo/public/categories/打包与分发/Python/index.html","478382275f3f590087cd58e99684cb2f"],["D:/Hexo/public/categories/打包与分发/index.html","f496ac0e08e41613bd401667444160bd"],["D:/Hexo/public/categories/未分类/index.html","c8035af4e256b4eb9af5ff423d6f7c0d"],["D:/Hexo/public/categories/算法/index.html","d4c4b2442a3eb5f6dfaf24ce9ca885a0"],["D:/Hexo/public/categories/算法/函数/index.html","a0836a0ec6595c7ee58dd12624b39b27"],["D:/Hexo/public/css/index.css","127c87035ce845de76c93d115a1d9631"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Hexo/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Hexo/public/index.html","46e63782ee0a144749c3a73ad406bfcf"],["D:/Hexo/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/Hexo/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/Hexo/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/Hexo/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Hexo/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/Hexo/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Hexo/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/Hexo/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Hexo/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Hexo/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Hexo/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Hexo/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Hexo/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Hexo/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Hexo/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Hexo/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Hexo/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Hexo/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Hexo/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Hexo/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Hexo/public/page/2/index.html","ffc2082d0bd5ad400294c5c787eadace"],["D:/Hexo/public/posts/16107/index.html","16d04adec772ce171c58c5983ca202e3"],["D:/Hexo/public/posts/181a9d16/index.html","dc17922c8008da6111488369384b5bf3"],["D:/Hexo/public/posts/3baee0e1/index.html","a9bc2751115bb0363e26cfa0cb9c63f7"],["D:/Hexo/public/posts/4d942339/index.html","58dd302857e4ea663a8ece461e57f766"],["D:/Hexo/public/posts/536a2cf0/index.html","d52a34b7ec38856439bab5b3edfae3f1"],["D:/Hexo/public/posts/53b5426a/index.html","b7a3fd5683c08dad1874364ca3fc775a"],["D:/Hexo/public/posts/9793/index.html","9e0997030d0ee6a4c27905b2d801c089"],["D:/Hexo/public/posts/979ba5c0/index.html","5168f813c9c4f4af0d5b581df2bcf091"],["D:/Hexo/public/posts/ace0e55c/index.html","660bb517821962388af2c0e187aa5962"],["D:/Hexo/public/posts/bb04cb3e/index.html","515ae150f5e7c0750b8f857becdcb9ba"],["D:/Hexo/public/posts/bda3d30d/index.html","b61f4547e08dcd53ccf323378c395ad6"],["D:/Hexo/public/posts/c951a1d4/index.html","061569836b58c28e181261f112188ee8"],["D:/Hexo/public/posts/ceb060d6/index.html","f169d11c26ec503bbbda33c53f02e1bc"],["D:/Hexo/public/posts/d04e1a92/index.html","7bebdebd019e732fca4e99a442dc40e8"],["D:/Hexo/public/posts/dcbe0c49/index.html","d9b6ab8e96ca72eb213bffb7f31d6a2f"],["D:/Hexo/public/posts/f2b4268f/index.html","0f979f6121dcadcded6f953c18537f79"],["D:/Hexo/public/tags/C/index.html","cab74040f29be159836cdecd7d3ed1c3"],["D:/Hexo/public/tags/Git/index.html","afb400e6915b810ad81477a6d58b003d"],["D:/Hexo/public/tags/Hexo/index.html","d772063948b8bd60d8d5483526840db6"],["D:/Hexo/public/tags/IO/index.html","348b0d26efd485f9d72adf66fd273566"],["D:/Hexo/public/tags/Markdown/index.html","c3a20538918368003a922d48f26ba1fb"],["D:/Hexo/public/tags/PyPi/index.html","23540f7921934a49baa8e78e601e428a"],["D:/Hexo/public/tags/Python/index.html","1ed5edf11c68c857334f475fc5084888"],["D:/Hexo/public/tags/index.html","b59ad78d767af24ba749693402b38c86"],["D:/Hexo/public/tags/setuptools/index.html","e61da86dc1c3ae1d733965ebb5c641ad"],["D:/Hexo/public/tags/test/index.html","c0532ee0ead5210a285ca8a3b323bb64"],["D:/Hexo/public/tags/函数/index.html","7a8707fea3f13b9f13e2186b9727e326"],["D:/Hexo/public/tags/有趣/index.html","1992b038b1eac5cf2c524242b5041d5e"],["D:/Hexo/public/tags/权限/index.html","d18966cccfd25467c8f686e89e6aad56"],["D:/Hexo/public/tags/栈/index.html","d4f5b6b0e5e578a65a2810460a7a2579"],["D:/Hexo/public/tags/算法/index.html","08f83e4ee9c2cd737cfa9f89eafa9b5c"],["D:/Hexo/public/tags/装饰器/index.html","e640ddaa0df6e39a33039974161b5d19"],["D:/Hexo/public/tags/诗词/index.html","7b550d75b2800c6c07426c9f0e3991a8"],["D:/Hexo/public/tags/课件/index.html","0492c8cf112fd5a33935e220687fe7e0"],["D:/Hexo/public/tags/递归/index.html","83a4b40cfb29517b9b9176d2efb72fd8"],["D:/Hexo/public/tags/闭包/index.html","d6f12102912f705441a131fb662b3df5"],["D:/Hexo/public/tags/面向对象/index.html","a8d47d3b7f8b6092aa5fab90f19f1694"]];
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







