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

var precacheConfig = [["F:/Projects/blog/public/2020/10/25/blog_guide/index.html","7c354c080ed189a4834f971d0d1fb535"],["F:/Projects/blog/public/2020/10/26/markdown_guide/index.html","4a326f9178345a36f31f9bef2fdb5f49"],["F:/Projects/blog/public/404.html","c2c712ef866fddece3a1556ab336583f"],["F:/Projects/blog/public/about/index.html","3eea4a635eec1c8fb60541b07d963a48"],["F:/Projects/blog/public/archives/2020/10/index.html","43e84f2334be2f6f5d89631f4e967599"],["F:/Projects/blog/public/archives/2020/index.html","d3ec34462ad792f12f4ef5995a0b6012"],["F:/Projects/blog/public/archives/index.html","e4b495b96e383e0e12c4473a141e45b8"],["F:/Projects/blog/public/categories/index.html","1bc363c86e2bd0b4643ab6736b8aa881"],["F:/Projects/blog/public/categories/教程/index.html","639a9df242f2eecd631861d9bb4e03a2"],["F:/Projects/blog/public/categories/教程/萌新/index.html","d7485b2acf4fcbc7bfeafe07f408e154"],["F:/Projects/blog/public/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["F:/Projects/blog/public/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["F:/Projects/blog/public/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["F:/Projects/blog/public/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["F:/Projects/blog/public/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["F:/Projects/blog/public/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["F:/Projects/blog/public/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["F:/Projects/blog/public/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["F:/Projects/blog/public/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["F:/Projects/blog/public/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["F:/Projects/blog/public/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["F:/Projects/blog/public/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["F:/Projects/blog/public/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["F:/Projects/blog/public/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["F:/Projects/blog/public/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["F:/Projects/blog/public/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["F:/Projects/blog/public/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["F:/Projects/blog/public/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["F:/Projects/blog/public/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["F:/Projects/blog/public/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["F:/Projects/blog/public/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["F:/Projects/blog/public/clock/js/clock.js","b8241d0e088e7a3ab23d4c6cd2b40cf4"],["F:/Projects/blog/public/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["F:/Projects/blog/public/comments/index.html","37feac16a462f06baf5b9ef1c90cbf9f"],["F:/Projects/blog/public/css/calendar.css","5175462389381774145f150a166ff37f"],["F:/Projects/blog/public/css/commentsbar.css","087addb2c43b4c031d069195c146bbf4"],["F:/Projects/blog/public/css/index.css","b668c16b7f6c8b457007c7272ca5d75c"],["F:/Projects/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Projects/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/Projects/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Projects/blog/public/img/alipay.png","b60e140ead89849127cf740f9622d963"],["F:/Projects/blog/public/img/back.png","49628de303a1edfd53c9a00ddcdaf262"],["F:/Projects/blog/public/img/doge.png","43b1a1a7dcc42aca124c126759013b14"],["F:/Projects/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/Projects/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Projects/blog/public/img/geek.png","61b4edc5f0636a1a3334dcb65530005b"],["F:/Projects/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Projects/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Projects/blog/public/img/select.png","cde6130f8b403273e9ca6f3cb31c84b3"],["F:/Projects/blog/public/img/wechat.png","c544d0df4325e33ccd621f669c30ff15"],["F:/Projects/blog/public/img/while.png","7e7fd983ca41e276ffb491493b143bce"],["F:/Projects/blog/public/index.html","d50e8b83be1855feaea1fa0c472ef1da"],["F:/Projects/blog/public/js/calendar.js","decafd3266531d0426d1f05c1e83d670"],["F:/Projects/blog/public/js/gitcalendar.js","8994da62ac4c0a0463667b0d0f00b108"],["F:/Projects/blog/public/js/main.js","455fface5a0a3ff90766ca254affe502"],["F:/Projects/blog/public/js/run-time.js","fe2479e7d0833ee3c50d7c13b4784057"],["F:/Projects/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["F:/Projects/blog/public/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["F:/Projects/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["F:/Projects/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["F:/Projects/blog/public/learn/index.html","5da04e8cfaca5eacda837e23d7fab3ba"],["F:/Projects/blog/public/link/index.html","8fd3a2dfaeffd1dd9327c4d55648c9bd"],["F:/Projects/blog/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["F:/Projects/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/Projects/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/Projects/blog/public/tags/hexo/index.html","0c4a005672583365cd872480e66dba98"],["F:/Projects/blog/public/tags/index.html","02d497e58b5f697236c5370bf4d136f6"],["F:/Projects/blog/public/tags/博客/index.html","a4c92eaf64f5cc03f891e524926dc966"],["F:/Projects/blog/public/talk/index.html","f07b3c23933b2eb8bf163e49748609bb"]];
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







