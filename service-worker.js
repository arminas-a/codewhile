"use strict";var precacheConfig=[["/codewhile/index.html","451532e45aec9c83d67a400793d357ff"],["/codewhile/static/css/main.313fb352.css","996899670d1dd52243452ef046ec8f90"],["/codewhile/static/js/main.689cbfe5.js","644f6a63d00578878ac4bf67469e026d"],["/codewhile/static/media/FF_Blender_Bold.a082fd3d.otf","a082fd3df68a0b54e0d4d794bc38d268"],["/codewhile/static/media/FF_Mark_Bold.476d44b0.otf","476d44b0f6c8939bb8859c9ce7598310"],["/codewhile/static/media/FF_Mark_Regular.4ee9332c.ttf","4ee9332c27fa914eb89e13cb2765b864"],["/codewhile/static/media/FF_More_Bold.4d8755bf.otf","4d8755bfa18cb06968dd2cae3f287746"],["/codewhile/static/media/about.507feece.svg","507feecedab18c2d814369f9d9c1859a"],["/codewhile/static/media/codewhile_red.b3530cf3.svg","b3530cf3cf87b913742e3fd0c4de498f"],["/codewhile/static/media/home.45afab62.svg","45afab624b107576cb770aaf40f4e9e4"],["/codewhile/static/media/icomoon.7d6711bf.woff","7d6711bfeabf97dc32368ba5bbb0e839"],["/codewhile/static/media/icomoon.c7334691.ttf","c733469178d2ab5539184e090bcae30b"],["/codewhile/static/media/icomoon.e68c6d89.eot","e68c6d89deb5537d0c2a66a4f4ae04eb"],["/codewhile/static/media/icomoon.fff2db84.svg","fff2db84c2168462db369aab893b8b8f"],["/codewhile/static/media/logo_dark.2f4bdb03.svg","2f4bdb03b887477c24e61d1bbab2dc4d"],["/codewhile/static/media/logo_light.17fc583b.svg","17fc583bf9fd0e0bd742c75d3227d69d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));var a="/codewhile/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});