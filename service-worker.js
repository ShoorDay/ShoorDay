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

var precacheConfig = [["D:/Hexo/public/about/index.html","08563b189463a43f4a786692b3f5c7b4"],["D:/Hexo/public/archives/2017/09/index.html","0eb97c7deccc1e81b83a634e3ab2dd7c"],["D:/Hexo/public/archives/2017/index.html","4cb06c68648314b947247c93d617738b"],["D:/Hexo/public/archives/2018/03/index.html","6e5c1c4ecc05525729beb43901daa4ab"],["D:/Hexo/public/archives/2018/04/index.html","f366a100233d80854086118b297bb42b"],["D:/Hexo/public/archives/2018/06/index.html","3566b6e456eb93ab816084da5873ba64"],["D:/Hexo/public/archives/2018/08/index.html","c3f4c0dd3baa871c1730e04a1a214024"],["D:/Hexo/public/archives/2018/10/index.html","c4a9740dd15a4d1c91bc79d7bac0b6c7"],["D:/Hexo/public/archives/2018/index.html","75482e64509ffaecee7785b0afc07d73"],["D:/Hexo/public/archives/2019/09/index.html","6754eab1aaf06f35b64243c133dbd079"],["D:/Hexo/public/archives/2019/10/index.html","c7558f45b793495c69080ee18a1f50f4"],["D:/Hexo/public/archives/2019/index.html","4ab01269ffb16f1a6f8d28356806ea59"],["D:/Hexo/public/archives/index.html","c883b602ea140cc50a4936c2cb64f1be"],["D:/Hexo/public/archives/page/2/index.html","e6e5ef798520c105a909b16d2f6e6e39"],["D:/Hexo/public/categories/Code/Others/index.html","1494fcc6efe4e87ecddb0acd44900b6c"],["D:/Hexo/public/categories/Code/index.html","1aee687b8aba7dbc237a7a5ae8070212"],["D:/Hexo/public/categories/Hexo/index.html","c0230a7c6ccc0174f6cf0a3e470da7bb"],["D:/Hexo/public/categories/MarkDown/index.html","214af85118829873cfd28048c7ee79ac"],["D:/Hexo/public/categories/MarkDown/实用效率/index.html","7b312642de9eb0e952f1425ad156d1df"],["D:/Hexo/public/categories/index.html","468a278d1274bba510ff82c41742e763"],["D:/Hexo/public/categories/实用效率/index.html","1e0cda756127157a874c558c9f4a407a"],["D:/Hexo/public/categories/打包与分发/Python/index.html","71073596559803d77868f470e778e02d"],["D:/Hexo/public/categories/打包与分发/index.html","5996af31ac732e783e42977f45679d41"],["D:/Hexo/public/categories/日志/index.html","6799ac8d3e491f1b5cc1699dad7add75"],["D:/Hexo/public/css/index.css","127c87035ce845de76c93d115a1d9631"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Hexo/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Hexo/public/index.html","b76b91e0448f13da0d8a79e142165684"],["D:/Hexo/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/Hexo/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/Hexo/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/Hexo/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Hexo/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/Hexo/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Hexo/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/Hexo/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Hexo/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Hexo/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Hexo/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Hexo/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Hexo/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Hexo/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Hexo/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Hexo/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Hexo/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Hexo/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Hexo/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Hexo/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Hexo/public/page/2/index.html","a34f30855e303eac016438e25def9b63"],["D:/Hexo/public/posts/14417d5f/index.html","b3c9e08803aee9a288a33c03a77c32d9"],["D:/Hexo/public/posts/16107/index.html","950a226328b41d8a1ec8685d2e70f09c"],["D:/Hexo/public/posts/3baee0e1/index.html","c5489757447ed478272c138f037ea4b3"],["D:/Hexo/public/posts/4d942339/index.html","5fe3f933ba5986cfe2a894ba084f9676"],["D:/Hexo/public/posts/536a2cf0/index.html","d0ab61660aa9395e6b588904588cb920"],["D:/Hexo/public/posts/5e97c2e7/index.html","f4bd357ab1d5c7b110e9ae90f7eac493"],["D:/Hexo/public/posts/76b6ba61/index.html","e8576ea3ceb5a408093c9bb512b92fea"],["D:/Hexo/public/posts/899645000000/index.html","9cb6ec8fdbd8d36d03e8e4fe6aeaaf56"],["D:/Hexo/public/posts/9793/index.html","2f16e2cd630e2c474d646f7a8c2938ec"],["D:/Hexo/public/posts/ace0e55c/index.html","4f041a30cdab940e16697ae0ba16f4fc"],["D:/Hexo/public/posts/bb04cb3e/index.html","2f68963decc735b722a0b5f43fa10dd6"],["D:/Hexo/public/posts/bda3d30d/index.html","7a8ba75b27e2e3fa4489d097d4c760a0"],["D:/Hexo/public/posts/be48b5d4/index.html","e33b9486d0522e192eb85573ab945a4d"],["D:/Hexo/public/posts/ceb060d6/index.html","ee2b93f47f3a9a9b583149e30a3bf0a9"],["D:/Hexo/public/posts/e62ba582/index.html","81888a90427d8c3008a038c52345065d"],["D:/Hexo/public/tags/Hexo/index.html","d4059b910f8206da96c00e1f02021345"],["D:/Hexo/public/tags/IO/index.html","8ae28371ff7d8e662ca2753544924240"],["D:/Hexo/public/tags/Markdown/index.html","ad7a32ed44893589860bf9d7406b4583"],["D:/Hexo/public/tags/PyPi/index.html","d43457823a7e6618d8f5d887cf5b8630"],["D:/Hexo/public/tags/Python/index.html","1901998d8e8a78d995528368bac4b841"],["D:/Hexo/public/tags/index.html","773a762b8fa17e3524cc75fc9cc04186"],["D:/Hexo/public/tags/setuptools/index.html","ba889ccf8a8c8ed53d7c8b2a5d127f83"],["D:/Hexo/public/tags/权限/index.html","36fa6111a87377952c2b965b7303ba14"],["D:/Hexo/public/tags/诗词/index.html","2e9aa475ae5a6b486ed6d23131fa1429"],["D:/Hexo/public/tags/课件/index.html","8ef30aa20795dd6be9834ad2eeaf85b6"]];
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







