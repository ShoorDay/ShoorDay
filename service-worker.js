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

var precacheConfig = [["D:/Hexo/public/about/index.html","513faf2686f44e676e622c63c0b09cd1"],["D:/Hexo/public/archives/2017/09/index.html","789e8b43557fd7f01a742c0f98f344e6"],["D:/Hexo/public/archives/2017/index.html","7f8c0abf00bf42c66730e3779bf72b8e"],["D:/Hexo/public/archives/2018/03/index.html","cffa09245adbcefcc1dbb538fbc223d6"],["D:/Hexo/public/archives/2018/04/index.html","5c34267ddd68a393ccf15f4e25cc9ed7"],["D:/Hexo/public/archives/2018/06/index.html","2aa38acfb10e5da39db43221bd74705c"],["D:/Hexo/public/archives/2018/08/index.html","207822d6558206ce98e3cb566b81f08e"],["D:/Hexo/public/archives/2018/10/index.html","d26cfe860f8af76239d8b8a20573cccf"],["D:/Hexo/public/archives/2018/index.html","ce1279b044fe6df4699027f33dfcac3a"],["D:/Hexo/public/archives/2019/09/index.html","ccefd93edde3e668294a1d5a9791c645"],["D:/Hexo/public/archives/2019/10/index.html","7f456665abbaf17ed962935b07b9d97f"],["D:/Hexo/public/archives/2019/index.html","4669a9d346ebdadabbd51d4c697cefd2"],["D:/Hexo/public/archives/index.html","a760e8481893e92eb969c29ac1c18c73"],["D:/Hexo/public/archives/page/2/index.html","6a13b6de13fc5f7611e39aa7e3e64b2c"],["D:/Hexo/public/categories/Code/Git/index.html","a58d7f27ec657a12d6b296f0aaadef41"],["D:/Hexo/public/categories/Code/Others/index.html","fb3da8415d31b0508041b4e8b16fb8c3"],["D:/Hexo/public/categories/Code/index.html","6b8c1fb9f873b256e1d5c429fa6a4154"],["D:/Hexo/public/categories/Hexo/index.html","b319bf1527749eac4a56519398b59308"],["D:/Hexo/public/categories/MarkDown/index.html","602e0b57e16426cd640b6f47bf66389c"],["D:/Hexo/public/categories/MarkDown/实用效率/index.html","a20e763788a0d73aa79133a3f5fac25e"],["D:/Hexo/public/categories/Python/index.html","015a34d5ff12a5e4fc966ed47dc3c044"],["D:/Hexo/public/categories/index.html","7beb73284258918c271e8cdfaea03281"],["D:/Hexo/public/categories/实用效率/index.html","cc2eee9a7288c510eb3ddc43c00efd63"],["D:/Hexo/public/categories/打包与分发/Python/index.html","fee53fb6646866098d326095ac6ea1e9"],["D:/Hexo/public/categories/打包与分发/index.html","793645ea2b5b48ec091e68019677cbda"],["D:/Hexo/public/categories/日志/index.html","c1cfa90fc9c130b9791ab6a102c770ba"],["D:/Hexo/public/categories/未分类/index.html","c8da48fd1316bb3bdc5cdb1ed649d8b8"],["D:/Hexo/public/css/index.css","127c87035ce845de76c93d115a1d9631"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Hexo/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Hexo/public/index.html","bc7e9e9ac7efa8d6034be8d25bfdd967"],["D:/Hexo/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/Hexo/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/Hexo/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/Hexo/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Hexo/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/Hexo/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Hexo/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/Hexo/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Hexo/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Hexo/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Hexo/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Hexo/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Hexo/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Hexo/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Hexo/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Hexo/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Hexo/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Hexo/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Hexo/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Hexo/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Hexo/public/page/2/index.html","29e4eebe92c89158cb3ae5c7f05ae11c"],["D:/Hexo/public/posts/14417d5f/index.html","b2fafdadc27fb68b210008b114ac0a85"],["D:/Hexo/public/posts/16107/index.html","7481ced3683379f3dabd763955c160b5"],["D:/Hexo/public/posts/181a9d16/index.html","b331319bd7f7f8ee746f49d282d1435a"],["D:/Hexo/public/posts/3baee0e1/index.html","6e3f4bf0c2f54452920fcbafa15d4a42"],["D:/Hexo/public/posts/4d942339/index.html","dcabe791fb4f1bed29652a4b2a79fb1a"],["D:/Hexo/public/posts/536a2cf0/index.html","8d6876a48d577f1042642757d00a4839"],["D:/Hexo/public/posts/53b5426a/index.html","4fb0b05402ccd40c129346aa88c3e813"],["D:/Hexo/public/posts/5e97c2e7/index.html","c236d6dbb2a6196879d0f83b4bbf9cfd"],["D:/Hexo/public/posts/76b6ba61/index.html","8cb8064b4b840073e19a02241278ce5b"],["D:/Hexo/public/posts/899645000000/index.html","abb0621710e2be85129089bbbcc9bf93"],["D:/Hexo/public/posts/9793/index.html","60239d771a7ae4f86bbe309bccb358cc"],["D:/Hexo/public/posts/ace0e55c/index.html","ec2fa311900ac16dafe090cd6002eb24"],["D:/Hexo/public/posts/bb04cb3e/index.html","817f7d30a4da9e58cdefa55fb6d68058"],["D:/Hexo/public/posts/bda3d30d/index.html","e5989dfd31c31c06b86c57e78134cd86"],["D:/Hexo/public/posts/be48b5d4/index.html","59dbc251e61e5955a057819db82aaa91"],["D:/Hexo/public/posts/c951a1d4/index.html","bf3a29f6b96d676be3f3800003df14d0"],["D:/Hexo/public/posts/ceb060d6/index.html","7814498ae3670501ebcfe9bd871b0209"],["D:/Hexo/public/posts/e62ba582/index.html","8c3292c8220e9d6c809e08c312800c98"],["D:/Hexo/public/tags/Git/index.html","4cb99eaaea66877dcf5d28f00adb5c4d"],["D:/Hexo/public/tags/Hexo/index.html","1a1ce4ffa04692e73252aaa373ce0fc2"],["D:/Hexo/public/tags/IO/index.html","ed3bbffd662de5f769b45155d979fe3b"],["D:/Hexo/public/tags/Markdown/index.html","cb9f9f2cac296594afd5fa36bb8f4d7d"],["D:/Hexo/public/tags/PyPi/index.html","d91815128d9a52408734ed3426d6e69d"],["D:/Hexo/public/tags/Python/index.html","e25186be81ec2a048a910ed839de8c83"],["D:/Hexo/public/tags/index.html","86c368a743c489a5a80f0530034d954c"],["D:/Hexo/public/tags/setuptools/index.html","ab1b8dc79059c8781deaa76c8ea37630"],["D:/Hexo/public/tags/test/index.html","9becc52c3fc2d464cf83bbaef4466b16"],["D:/Hexo/public/tags/权限/index.html","7f8f1fdd7b235cb201d6b2de3cc5771a"],["D:/Hexo/public/tags/诗词/index.html","716c5307b2514c98c3fcd3dea59c101d"],["D:/Hexo/public/tags/课件/index.html","43cd214b88efda5e3fd877721f4f1649"],["D:/Hexo/public/tags/闭包/index.html","09c4c487e962792a5ec4dc1edd4fad66"]];
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







