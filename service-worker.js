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

var precacheConfig = [["D:/Hexo/public/about/index.html","61db24406948498b686e5598b653b2e6"],["D:/Hexo/public/archives/2017/09/index.html","cf858b15359be296d19256bf58b53187"],["D:/Hexo/public/archives/2017/index.html","62cee4b800cfd30463f465e6ce1ba45f"],["D:/Hexo/public/archives/2018/03/index.html","88281f8f63e611a8938cc0b1b56c2608"],["D:/Hexo/public/archives/2018/06/index.html","188caa3ee254284891fb3550fdb29c47"],["D:/Hexo/public/archives/2018/index.html","534200a444cdcade4d6c31913f12597e"],["D:/Hexo/public/archives/2019/09/index.html","e1716c3c23c6e4534f30cf2ae1ddc74e"],["D:/Hexo/public/archives/2019/10/index.html","9d9395870409df5e46149ee75d1e0925"],["D:/Hexo/public/archives/2019/index.html","f1d1149105bb550d747c46697fbd7a92"],["D:/Hexo/public/archives/index.html","fb23809e0f56be9404c043e07930182b"],["D:/Hexo/public/archives/page/2/index.html","15dc5091676f6fc9e3c2fabbcbc07f29"],["D:/Hexo/public/categories/Code/Git/index.html","dd4c6a9c52ed09f4ba6e36067641bafe"],["D:/Hexo/public/categories/Code/Others/index.html","012fa99e7dcc3708c75af7533ce0adda"],["D:/Hexo/public/categories/Code/index.html","a6ebdbb30bee74e71e8818555b0ea0d8"],["D:/Hexo/public/categories/Hexo/index.html","8f518c35a47af780a9677a10f027242c"],["D:/Hexo/public/categories/MarkDown/index.html","8f4d42356ef55801ecb43022580d7e0b"],["D:/Hexo/public/categories/MarkDown/实用效率/index.html","ce3b40decdf0aacba3bfe7a7c22bf099"],["D:/Hexo/public/categories/Python/index.html","dbf33790baada701de63e96291bbbd2a"],["D:/Hexo/public/categories/Python/面向对象/index.html","7be9ddcc46d3792c560131a5856237cf"],["D:/Hexo/public/categories/index.html","49e3b1d078a30c047f0a74eba980bb66"],["D:/Hexo/public/categories/实用效率/index.html","d8da9cfa9247804e0eff0b09d7bcff87"],["D:/Hexo/public/categories/打包与分发/Python/index.html","d560f666d56d0d660c87a77efed1fdea"],["D:/Hexo/public/categories/打包与分发/index.html","d7cf21d62733b81b31eb546a37b9fd2a"],["D:/Hexo/public/categories/未分类/index.html","7849bf48734734ec434d8ad756da19ff"],["D:/Hexo/public/categories/算法/index.html","a8dbbb58ebb2c5362e00f83c506e38bb"],["D:/Hexo/public/css/index.css","127c87035ce845de76c93d115a1d9631"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Hexo/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Hexo/public/index.html","fd996f7bacb286323958aa8fd4f885cd"],["D:/Hexo/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/Hexo/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/Hexo/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/Hexo/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Hexo/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/Hexo/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Hexo/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/Hexo/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Hexo/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Hexo/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Hexo/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Hexo/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Hexo/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Hexo/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Hexo/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Hexo/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Hexo/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Hexo/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Hexo/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Hexo/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Hexo/public/page/2/index.html","af2b726772937773b9305bda4e59db1c"],["D:/Hexo/public/posts/16107/index.html","ba284f07fe9bdb6ae0d9af1ec94b22a0"],["D:/Hexo/public/posts/181a9d16/index.html","2b861b7fd18a7d4aa160753c81061700"],["D:/Hexo/public/posts/3baee0e1/index.html","3babd701b24a9c7cd72e1723c5572fc2"],["D:/Hexo/public/posts/4d942339/index.html","d15f64c3c98bf1d138b0443a6a875e20"],["D:/Hexo/public/posts/536a2cf0/index.html","b232a38250a9ee0b79db73f88ee8db23"],["D:/Hexo/public/posts/53b5426a/index.html","0a54e0ab7c4a42ab32e45c42d58112c8"],["D:/Hexo/public/posts/9793/index.html","50e26d688e5de1cd313620f9cb7f7128"],["D:/Hexo/public/posts/ace0e55c/index.html","6359360ff957991ff0afb8f95e221549"],["D:/Hexo/public/posts/bb04cb3e/index.html","9e24e5a7dab96ce30558c731fc6ff6eb"],["D:/Hexo/public/posts/bda3d30d/index.html","549a49a66e0f8a547e5e30cb04342547"],["D:/Hexo/public/posts/c951a1d4/index.html","892e1c1e28a2580f17ea5854922f66af"],["D:/Hexo/public/posts/ceb060d6/index.html","ea443314804c75e911d8ed7af917046e"],["D:/Hexo/public/posts/d04e1a92/index.html","bab7da3e82970777aa758c101f98a891"],["D:/Hexo/public/posts/dcbe0c49/index.html","d6a9e5acc4ec2fbd119a47ba75db0382"],["D:/Hexo/public/posts/f2b4268f/index.html","0e84bc761f2cea114922faaddc0e5580"],["D:/Hexo/public/tags/Git/index.html","2d97e772547826edbd45894c82598881"],["D:/Hexo/public/tags/Hexo/index.html","e39bc3b5981ff939fe7df9323a110597"],["D:/Hexo/public/tags/IO/index.html","5e262eebc140648a66298dd30aa51bf8"],["D:/Hexo/public/tags/Markdown/index.html","34f5ac0b945dc7ca9b7435bc9d2f3039"],["D:/Hexo/public/tags/PyPi/index.html","84eb93867e4459f2b5494a8574d8ec72"],["D:/Hexo/public/tags/Python/index.html","b6ba38f126bd1c8a5b1914fd24710c99"],["D:/Hexo/public/tags/index.html","10fa18f6870458775949f61dc5771cf7"],["D:/Hexo/public/tags/setuptools/index.html","f1e3150e9bad26df3d493917fa69af73"],["D:/Hexo/public/tags/test/index.html","2dcd25eaa6cca14aeecf902b4e83c89e"],["D:/Hexo/public/tags/函数/index.html","9c2632392ff3296194b7a74ec830a2db"],["D:/Hexo/public/tags/有趣/index.html","7fc10e223f58594f46f0e2744038eac3"],["D:/Hexo/public/tags/权限/index.html","fc44fb6b06671d896d47c1b123ddaa6d"],["D:/Hexo/public/tags/算法/index.html","16fb43d1006dad0f7fd423570e2e543c"],["D:/Hexo/public/tags/装饰器/index.html","d64415ab226789f3a7b8adf35d94bca8"],["D:/Hexo/public/tags/诗词/index.html","e464e7a5e273d06914e9f56b54f5f4e3"],["D:/Hexo/public/tags/课件/index.html","f816087e488deace372e4caf17665415"],["D:/Hexo/public/tags/闭包/index.html","4f654edb9e8360b91ac279a7b61bc240"],["D:/Hexo/public/tags/面向对象/index.html","a8775bb6e2af7739ffff07c2e173975a"]];
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







