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

var precacheConfig = [["D:/Hexo/public/about/index.html","ee083236c591f9f1ea761f202a32c686"],["D:/Hexo/public/archives/2017/09/index.html","99acbd9c744bbec8e04b2997607e2807"],["D:/Hexo/public/archives/2017/index.html","5e7aaaba9be3cae1d46dfb723b3b7827"],["D:/Hexo/public/archives/2018/03/index.html","fa1e7f8ac7daa5fcfec1e4897a3a7db9"],["D:/Hexo/public/archives/2018/04/index.html","6068918b583002be9b1ddf62f95b7d1a"],["D:/Hexo/public/archives/2018/06/index.html","415e50f6a28a5d912ccbdab66a3c9445"],["D:/Hexo/public/archives/2018/08/index.html","604f2d7f562e0792c664847bc50d61e0"],["D:/Hexo/public/archives/2018/10/index.html","aa025320116fe45c82a07287d61d5575"],["D:/Hexo/public/archives/2018/index.html","d24af2f8f8d93c66c56bf005aab3d7c7"],["D:/Hexo/public/archives/2019/09/index.html","6266fce799e27f023f66c3eb203b7696"],["D:/Hexo/public/archives/2019/10/index.html","090b2d5b542bf35c7fd431f8c92a05b9"],["D:/Hexo/public/archives/2019/index.html","d4e1de56e1d4611e2cdb0f3dced64035"],["D:/Hexo/public/archives/index.html","6c0b822e0829a3dde23c775c41795d7c"],["D:/Hexo/public/archives/page/2/index.html","ea13e94d75e34248d18d85958199df80"],["D:/Hexo/public/categories/Code/Git/index.html","8c4e83a5232941bc97189814b93073f0"],["D:/Hexo/public/categories/Code/Others/index.html","6efad80cb52e8aa2115e6852a1a86f1a"],["D:/Hexo/public/categories/Code/index.html","8901de8dd85886b32a7a53c2d96c7823"],["D:/Hexo/public/categories/Hexo/index.html","d6bed7946e7ed5eb1fea3de4095558ab"],["D:/Hexo/public/categories/MarkDown/index.html","63fc4eac2dc2617685fe5e777e0efd01"],["D:/Hexo/public/categories/MarkDown/实用效率/index.html","37fa0a33f6577d16cd59596a75fdce43"],["D:/Hexo/public/categories/index.html","742289c178797b1e0762d618614c3e35"],["D:/Hexo/public/categories/实用效率/index.html","69d8aef94f5df1d4d3a7661ce1cf2ef1"],["D:/Hexo/public/categories/打包与分发/Python/index.html","4b7cc81b2a447dfc85cd077114e99075"],["D:/Hexo/public/categories/打包与分发/index.html","b92987e4e9a1dbb9ef645a5c1789da9b"],["D:/Hexo/public/categories/日志/index.html","e0ffda442ff5be865ca9963177a2abf9"],["D:/Hexo/public/css/index.css","127c87035ce845de76c93d115a1d9631"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Hexo/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Hexo/public/index.html","6a7a9f02198b94f9e1313915d31fe226"],["D:/Hexo/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/Hexo/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/Hexo/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/Hexo/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Hexo/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/Hexo/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Hexo/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/Hexo/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Hexo/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Hexo/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Hexo/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Hexo/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Hexo/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Hexo/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Hexo/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Hexo/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Hexo/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Hexo/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Hexo/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Hexo/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Hexo/public/page/2/index.html","1c402a17469bf350b17d6f4b8c982a51"],["D:/Hexo/public/posts/14417d5f/index.html","4c109bef5591200282da51b4a50d0752"],["D:/Hexo/public/posts/16107/index.html","1c5409273113378602c833f5c275a857"],["D:/Hexo/public/posts/181a9d16/index.html","b3f292256f9f270e90519971d15c53fe"],["D:/Hexo/public/posts/3baee0e1/index.html","e128014b901647f52be4af4ed150cbf4"],["D:/Hexo/public/posts/4d942339/index.html","6ef016eaad7e5a26a4b3bf7a32e9b80b"],["D:/Hexo/public/posts/536a2cf0/index.html","535d644bd16abf08f048f892470e9a6f"],["D:/Hexo/public/posts/5e97c2e7/index.html","620df3e5f6035c86910d39637667eb77"],["D:/Hexo/public/posts/76b6ba61/index.html","a532f48863d0913401bbe090ed46140b"],["D:/Hexo/public/posts/899645000000/index.html","dffd718cb90080174a403aa6c4c30b57"],["D:/Hexo/public/posts/9793/index.html","e26725376cb09875119902baf2ddd174"],["D:/Hexo/public/posts/ace0e55c/index.html","d34ab77046ecb0bd9c307842a73cf8ad"],["D:/Hexo/public/posts/bb04cb3e/index.html","d13da165866435d054c064b592b4dd9b"],["D:/Hexo/public/posts/bda3d30d/index.html","4658f0c4e697358535d23a8bceb3312f"],["D:/Hexo/public/posts/be48b5d4/index.html","0e7ce4bb30a5bc1ac72a5f56698b555e"],["D:/Hexo/public/posts/ceb060d6/index.html","f8b7cf8e0e9e606dc484092263a67b0a"],["D:/Hexo/public/posts/e62ba582/index.html","74f4c06bb6b2ded4fff1f9779e7357b5"],["D:/Hexo/public/tags/Git/index.html","ebb0d8418378b801edf1e94ea11a801f"],["D:/Hexo/public/tags/Hexo/index.html","8e8e0c231f032ccd7173eb81ca587b34"],["D:/Hexo/public/tags/IO/index.html","a6c3670a1d1eaeb25b00efc00fb5222a"],["D:/Hexo/public/tags/Markdown/index.html","efcab01663085da16ddaf2e4b6322b97"],["D:/Hexo/public/tags/PyPi/index.html","747255ffaa3018d41d16093f420c22d3"],["D:/Hexo/public/tags/Python/index.html","56228fbef98bd645293d806f9905f410"],["D:/Hexo/public/tags/index.html","07115bb90e715c77ef94bf69f917b3fe"],["D:/Hexo/public/tags/setuptools/index.html","3df72db026c510d9e11d26c4337c023d"],["D:/Hexo/public/tags/权限/index.html","45ce36626a14ec1e89e1d1343c11a863"],["D:/Hexo/public/tags/诗词/index.html","9e2863eb15c82978182b8e82be0974c9"],["D:/Hexo/public/tags/课件/index.html","aca8f01205dafabe3c1ae02f30bf2638"]];
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







