"use strict";var precacheConfig=[["/codewhile/index.html","2d92e38fe123c1223af45dce226b9ca4"],["/codewhile/static/css/main.8da337e7.css","2d8579dbefbc8a6e9aa6a10dd42a4c7d"],["/codewhile/static/js/main.948ec976.js","5179b1cb62a603b83e0db642e647dfa4"],["/codewhile/static/media/Cochin.498f4ea7.ttc","498f4ea78c46d0f16e55c19c3f377c09"],["/codewhile/static/media/FF_Blender_Bold.a082fd3d.otf","a082fd3df68a0b54e0d4d794bc38d268"],["/codewhile/static/media/FF_Mark_Bold.476d44b0.otf","476d44b0f6c8939bb8859c9ce7598310"],["/codewhile/static/media/FF_Mark_Regular.4ee9332c.ttf","4ee9332c27fa914eb89e13cb2765b864"],["/codewhile/static/media/FF_More_Bold.4d8755bf.otf","4d8755bfa18cb06968dd2cae3f287746"],["/codewhile/static/media/about.e8735470.svg","e87354704a9662f8635b11fe67add94b"],["/codewhile/static/media/application_development.350494e5.svg","350494e51084e490bfc550c06bd95e26"],["/codewhile/static/media/branding.1ee7a8bb.svg","1ee7a8bb9a89396c9a3174fd6753edf6"],["/codewhile/static/media/burger_button4.3ead58d7.svg","3ead58d7df7751c0ba867eed7fee1c5e"],["/codewhile/static/media/coding.db72ad50.png","db72ad503b82bff98e6e871c522646b6"],["/codewhile/static/media/ecommerce.18473e89.svg","18473e894a22feafac6d0497797657bc"],["/codewhile/static/media/home.59a5393a.svg","59a5393a06b51d071b9a591fe191f4c1"],["/codewhile/static/media/icomoon.7d6711bf.woff","7d6711bfeabf97dc32368ba5bbb0e839"],["/codewhile/static/media/icomoon.c7334691.ttf","c733469178d2ab5539184e090bcae30b"],["/codewhile/static/media/icomoon.e68c6d89.eot","e68c6d89deb5537d0c2a66a4f4ae04eb"],["/codewhile/static/media/icomoon.fff2db84.svg","fff2db84c2168462db369aab893b8b8f"],["/codewhile/static/media/logo_dark.d51d9890.svg","d51d9890182bb41c5528879bbc6e350a"],["/codewhile/static/media/logo_light.409d8ec8.svg","409d8ec827f7d0b5538c241c73e078e6"],["/codewhile/static/media/outsourcing.98d36124.svg","98d36124872e7e45927edad29aa643d1"],["/codewhile/static/media/social_media_advertising.9c6ae5ca.svg","9c6ae5cab06e8d011c6d35d7c6b0adcb"],["/codewhile/static/media/software_prototyping.507feece.svg","507feecedab18c2d814369f9d9c1859a"],["/codewhile/static/media/technology_consulting.9eafc052.svg","9eafc052e0997c51d60cf4813d9e889d"],["/codewhile/static/media/web_design.955caf8e.svg","955caf8e38afb4d7e32af7d698749ecb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));var c="/codewhile/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});