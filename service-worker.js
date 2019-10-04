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

var precacheConfig = [["D:/Hexo/public/about/index.html","570b27eb4fa92cb4d5cc6a6f815ece96"],["D:/Hexo/public/archives/2017/09/index.html","2a1079b3573f4081b50bb7d051315dde"],["D:/Hexo/public/archives/2017/index.html","e5c20231b5201fce999dcb661db724df"],["D:/Hexo/public/archives/2018/03/index.html","076c3f16227a00912e19256f5a933877"],["D:/Hexo/public/archives/2018/04/index.html","ad1d1506f4e4878569fff19176437873"],["D:/Hexo/public/archives/2018/06/index.html","1b1d047234b6f058af246c2fa58fbc8a"],["D:/Hexo/public/archives/2018/08/index.html","2f78d60573ff59c1201f634da9b8e6bb"],["D:/Hexo/public/archives/2018/10/index.html","34bb91b240fe8a0645d4ed286a875280"],["D:/Hexo/public/archives/2018/index.html","ee99ade67be990659ada822a57e55cd4"],["D:/Hexo/public/archives/2019/09/index.html","01bcfd5ae99af65913dcd499f1f07830"],["D:/Hexo/public/archives/2019/10/index.html","f3f756bbbafc4b1f6713aeb45bb5657d"],["D:/Hexo/public/archives/2019/index.html","030b81046f379075d0bb014c09a75d76"],["D:/Hexo/public/archives/index.html","319ea2d19fecd61c0ebee78e38a1f717"],["D:/Hexo/public/archives/page/2/index.html","8deb71121a48df4b2692b65c15c160ee"],["D:/Hexo/public/categories/Hexo/index.html","c7221997ec49b604a41aa883ac72ee25"],["D:/Hexo/public/categories/index.html","3a1bd54a969d7fe6698fc40314ff4e3f"],["D:/Hexo/public/categories/实用-效率/MarkDown/index.html","dea1e07021af4f67c6fc8a8577661026"],["D:/Hexo/public/categories/实用-效率/index.html","80b32590a8ec96beb4f6a86a0824c915"],["D:/Hexo/public/categories/实用-效率/电脑软件/index.html","52957d67438071e28752e249b08f98b0"],["D:/Hexo/public/categories/日志/index.html","289b108877760cca7291e887242fdd7d"],["D:/Hexo/public/css/index.css","127c87035ce845de76c93d115a1d9631"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Hexo/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Hexo/public/index.html","506e14995ea338c7c4f50ffb2f836dce"],["D:/Hexo/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/Hexo/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/Hexo/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/Hexo/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Hexo/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/Hexo/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Hexo/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/Hexo/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Hexo/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Hexo/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Hexo/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Hexo/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Hexo/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Hexo/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Hexo/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Hexo/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Hexo/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Hexo/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Hexo/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Hexo/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Hexo/public/page/2/index.html","50996924f931cf62f8b97e4b7d4f994c"],["D:/Hexo/public/posts/0/index.html","2b4e6a3c2891c7a994dec3ba5e5f088f"],["D:/Hexo/public/posts/14417d5f/index.html","2e0c1140247a4131eb87489f5e5074cf"],["D:/Hexo/public/posts/16107/index.html","75814c9b17414c5c2ffe7e2054c8e63d"],["D:/Hexo/public/posts/3baee0e1/index.html","846178f2ed285bd6552bc1af84a41932"],["D:/Hexo/public/posts/4d942339/index.html","35eab4439f1fc2815da205c363e2c1d1"],["D:/Hexo/public/posts/536a2cf0/index.html","d93864ad462d1fe08dc8af28cfd94d90"],["D:/Hexo/public/posts/5e97c2e7/index.html","0ba07dede11f4154671cd5924eb33244"],["D:/Hexo/public/posts/76b6ba61/index.html","839fa2a470d8fae1e2b4a609163c53b4"],["D:/Hexo/public/posts/899645000000/index.html","f03000f7078ec953ae07b963c2d99750"],["D:/Hexo/public/posts/9793/index.html","328ed469dd8ef70df8bb80dcafdb3877"],["D:/Hexo/public/posts/ace0e55c/index.html","7b3cdf08904c398fa5ed6e3a90ebc2e2"],["D:/Hexo/public/posts/bda3d30d/index.html","61a4a26f9a2291e52690a6f4be511cd0"],["D:/Hexo/public/posts/be48b5d4/index.html","20b5552c7de104bff7c86aa6af70eb51"],["D:/Hexo/public/posts/e62ba582/index.html","564e7ce5c0bc55fa152c60ac110cfad6"],["D:/Hexo/public/tags/Hexo/index.html","28ffd013e6d3d85253ff2dd9c80c210e"],["D:/Hexo/public/tags/Markdown/index.html","a616a7dc7e4c910e34125324301043f7"],["D:/Hexo/public/tags/index.html","6ba402195f68d6b48e3007adae51623d"],["D:/Hexo/public/tags/诗词/index.html","c1e76a56d0c3d9526a3ff032090561a7"],["D:/Hexo/public/tags/课件/index.html","9ee0743c525a6d3d3536e320ac461cc6"]];
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







