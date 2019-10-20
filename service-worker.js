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

var precacheConfig = [["D:/Hexo/public/about/index.html","1ab49c0ab46930442b48bb68c184d927"],["D:/Hexo/public/archives/2017/09/index.html","0e79af2be26890eff0ead9258bdc4c18"],["D:/Hexo/public/archives/2017/index.html","ca14a9512cc60376244d8fcc6cd0a054"],["D:/Hexo/public/archives/2018/03/index.html","4a4aae049ff82195216dcec86efa65b7"],["D:/Hexo/public/archives/2018/04/index.html","bca7000ff9faeea8d789110feae1ee1b"],["D:/Hexo/public/archives/2018/06/index.html","ae229c27f278523c89c4e73cf25dab1d"],["D:/Hexo/public/archives/2018/08/index.html","b15c8d518d3e035f1ea027b9bfeb8315"],["D:/Hexo/public/archives/2018/10/index.html","116fddc282396f8c41fac1670da8b307"],["D:/Hexo/public/archives/2018/index.html","01dfe78d19634ae2b55d1f3ed2058d2a"],["D:/Hexo/public/archives/2019/09/index.html","7a53d4be2d32c9def647c21aede2f561"],["D:/Hexo/public/archives/2019/10/index.html","95f9ce80042e85a4a45f9234244c5001"],["D:/Hexo/public/archives/2019/index.html","3dff13cc3697192967860e310e0f2910"],["D:/Hexo/public/archives/index.html","a5f4b67528623c8527618fc3c4462d32"],["D:/Hexo/public/archives/page/2/index.html","a6ddbda66a640ac4114d1dddb896c324"],["D:/Hexo/public/categories/Code/Git/index.html","a1f7beec944ebaa9bb1402c683b09a30"],["D:/Hexo/public/categories/Code/Others/index.html","5d978cb32e9ea7ea64c16f2f9418d72b"],["D:/Hexo/public/categories/Code/index.html","5bb34ccc7480f3e9ac023bbd794a2158"],["D:/Hexo/public/categories/Hexo/index.html","f0af8c077bdc51ac4ded941e6b880e82"],["D:/Hexo/public/categories/MarkDown/index.html","53534f873ab553b939f08e0e9113666a"],["D:/Hexo/public/categories/MarkDown/实用效率/index.html","1ac3938f59c5936371ce1288acc4ab2d"],["D:/Hexo/public/categories/Python/index.html","e4c0463523499981e5d8939c176485ca"],["D:/Hexo/public/categories/index.html","a76d63b26a0610ee62c8b73506b304f1"],["D:/Hexo/public/categories/实用效率/index.html","76349c8f15ea98a625dc9cf46978f543"],["D:/Hexo/public/categories/打包与分发/Python/index.html","f375f4cbbe8850b8d20ec4812bdaed50"],["D:/Hexo/public/categories/打包与分发/index.html","9b81b66677bcd12c9c6ad8fa8e07ed58"],["D:/Hexo/public/categories/日志/index.html","626b30b3e118c5564fd8b339889d8b49"],["D:/Hexo/public/categories/未分类/index.html","c54d2bda48ce36a9510b1eb1a9525a33"],["D:/Hexo/public/css/index.css","127c87035ce845de76c93d115a1d9631"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Hexo/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Hexo/public/index.html","1f8af255856a05c7aa833cca0cb94f25"],["D:/Hexo/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["D:/Hexo/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["D:/Hexo/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/Hexo/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Hexo/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["D:/Hexo/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Hexo/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/Hexo/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Hexo/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Hexo/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Hexo/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Hexo/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Hexo/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Hexo/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Hexo/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Hexo/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Hexo/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Hexo/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Hexo/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Hexo/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Hexo/public/page/2/index.html","3668bf4c330be672144fe2f00d4d8cbc"],["D:/Hexo/public/posts/14417d5f/index.html","da62e194b669f3fcf0422f5d12e423d9"],["D:/Hexo/public/posts/16107/index.html","9afcfdcc032425f274e2439f931df09c"],["D:/Hexo/public/posts/181a9d16/index.html","de9201740a0fbbf245bd873162b010b6"],["D:/Hexo/public/posts/3baee0e1/index.html","fd35098694854ab04f3641dc297b883b"],["D:/Hexo/public/posts/4d942339/index.html","5c41b98f515eda3585a8d4e505449203"],["D:/Hexo/public/posts/536a2cf0/index.html","8b9728126ef71f3ebd70d5ba5397d957"],["D:/Hexo/public/posts/53b5426a/index.html","30a6b0f0dcc2d83332f2a503d5254fd6"],["D:/Hexo/public/posts/5e97c2e7/index.html","a36ab577a6a641b5770b4fc90eb6ecaf"],["D:/Hexo/public/posts/76b6ba61/index.html","342e71452f3fcb01e3f0373d61c74df6"],["D:/Hexo/public/posts/899645000000/index.html","9c518f0ee070798eae802de0cfaec0a2"],["D:/Hexo/public/posts/9793/index.html","0c1c6bdbc0fef60dae7cd10a7642834b"],["D:/Hexo/public/posts/ace0e55c/index.html","e72246828eddd7f9edfbc39e0213b9c1"],["D:/Hexo/public/posts/bb04cb3e/index.html","775773fb78175f1463674f7bf3c82733"],["D:/Hexo/public/posts/bda3d30d/index.html","07863eb1c8a6c3f3f272f5acc1ca647a"],["D:/Hexo/public/posts/be48b5d4/index.html","5b09d9495c09b65dcb0df9570a7b54ab"],["D:/Hexo/public/posts/c951a1d4/index.html","45fca0e6596fb0126821d701b4d77a04"],["D:/Hexo/public/posts/ceb060d6/index.html","314311ac773df5682060e94939fb9532"],["D:/Hexo/public/posts/e62ba582/index.html","eda39d4d4ac7d0d1085d35989d4feedf"],["D:/Hexo/public/posts/f2b4268f/index.html","8f521c2a381336028e1107e0af07fba1"],["D:/Hexo/public/tags/Git/index.html","749695130c6099e1aa8a2a01f699e849"],["D:/Hexo/public/tags/Hexo/index.html","93b6ae8606e10322fc59b4a91936a967"],["D:/Hexo/public/tags/IO/index.html","0c8fa08d7e8039f3f14223c2d83eccf5"],["D:/Hexo/public/tags/Markdown/index.html","1530173c194be921d477b2aebcb9c3da"],["D:/Hexo/public/tags/PyPi/index.html","fd1f006eae3ebbd1aad9a7e2564403a5"],["D:/Hexo/public/tags/Python/index.html","705dc8ad73bf158c1df660bb4e65535b"],["D:/Hexo/public/tags/index.html","4f695668485704d6b4833e3d7d5710a1"],["D:/Hexo/public/tags/setuptools/index.html","e9f0f2e34d30e88231d7dfd5b055fb8d"],["D:/Hexo/public/tags/test/index.html","9e66520064828f811a960a24f894ee24"],["D:/Hexo/public/tags/函数/index.html","b5d831ec8867719ee851c41179acc5c6"],["D:/Hexo/public/tags/权限/index.html","e005e8726d1b51819bd85f12852d1aee"],["D:/Hexo/public/tags/装饰器/index.html","6c78b91ac4bf6495b415bc913144c401"],["D:/Hexo/public/tags/诗词/index.html","cb301607f8bd5192dcd62ec173798094"],["D:/Hexo/public/tags/课件/index.html","387ace8622c3ecf143f84b8454d0794b"],["D:/Hexo/public/tags/闭包/index.html","ed51da17056aae1302db42b4108b1e72"]];
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







