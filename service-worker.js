"use strict";var precacheConfig=[["/codewhile/index.html","e1b8601c2d19ef3b43234c6e1bb6fc51"],["/codewhile/static/css/main.6b958696.css","ea5c1235d9b5631bd465c583b669dda7"],["/codewhile/static/js/main.4a1c9d46.js","538900f70bb0de56b7f3ba32c516c19b"],["/codewhile/static/media/FF_Blender_Bold.a082fd3d.otf","a082fd3df68a0b54e0d4d794bc38d268"],["/codewhile/static/media/FF_Mark_Bold.476d44b0.otf","476d44b0f6c8939bb8859c9ce7598310"],["/codewhile/static/media/FF_Mark_Regular.4ee9332c.ttf","4ee9332c27fa914eb89e13cb2765b864"],["/codewhile/static/media/FF_More_Bold.4d8755bf.otf","4d8755bfa18cb06968dd2cae3f287746"],["/codewhile/static/media/about.507feece.svg","507feecedab18c2d814369f9d9c1859a"],["/codewhile/static/media/codewhile_red.b3530cf3.svg","b3530cf3cf87b913742e3fd0c4de498f"],["/codewhile/static/media/home.45afab62.svg","45afab624b107576cb770aaf40f4e9e4"],["/codewhile/static/media/icomoon.7d6711bf.woff","7d6711bfeabf97dc32368ba5bbb0e839"],["/codewhile/static/media/icomoon.c7334691.ttf","c733469178d2ab5539184e090bcae30b"],["/codewhile/static/media/icomoon.e68c6d89.eot","e68c6d89deb5537d0c2a66a4f4ae04eb"],["/codewhile/static/media/icomoon.fff2db84.svg","fff2db84c2168462db369aab893b8b8f"],["/codewhile/static/media/logo_dark.f54f9f37.svg","f54f9f37a4b114a5440675928b712c32"],["/codewhile/static/media/logo_light.9c28e404.svg","9c28e404433ce17903796f58b58d91f8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));var n="/codewhile/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});