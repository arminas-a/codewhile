"use strict";var precacheConfig=[["/codewhile/index.html","b463eb293d18d5658887a0c19e725f5f"],["/codewhile/static/css/main.b880bf94.css","db6b6522a037ef72e97dc95619017a75"],["/codewhile/static/js/main.a1dcda9f.js","079bb0567634f102ff0bdf8ea016ff1b"],["/codewhile/static/media/FF_Blender_Bold.a082fd3d.otf","a082fd3df68a0b54e0d4d794bc38d268"],["/codewhile/static/media/FF_Mark_Bold.476d44b0.otf","476d44b0f6c8939bb8859c9ce7598310"],["/codewhile/static/media/FF_Mark_Regular.4ee9332c.ttf","4ee9332c27fa914eb89e13cb2765b864"],["/codewhile/static/media/FF_More_Bold.4d8755bf.otf","4d8755bfa18cb06968dd2cae3f287746"],["/codewhile/static/media/about.507feece.svg","507feecedab18c2d814369f9d9c1859a"],["/codewhile/static/media/application_development.350494e5.svg","350494e51084e490bfc550c06bd95e26"],["/codewhile/static/media/ecommerce.18473e89.svg","18473e894a22feafac6d0497797657bc"],["/codewhile/static/media/home.477e1bb1.svg","477e1bb1a9d06b5e11fde59b73e3f611"],["/codewhile/static/media/icomoon.7d6711bf.woff","7d6711bfeabf97dc32368ba5bbb0e839"],["/codewhile/static/media/icomoon.c7334691.ttf","c733469178d2ab5539184e090bcae30b"],["/codewhile/static/media/icomoon.e68c6d89.eot","e68c6d89deb5537d0c2a66a4f4ae04eb"],["/codewhile/static/media/icomoon.fff2db84.svg","fff2db84c2168462db369aab893b8b8f"],["/codewhile/static/media/logo_dark.cf9c6420.svg","cf9c64207b0be909c7b3ec9d262315d9"],["/codewhile/static/media/logo_light.b1da805b.svg","b1da805baa9c2763fed92314367b746d"],["/codewhile/static/media/social_media_advertising.9c6ae5ca.svg","9c6ae5cab06e8d011c6d35d7c6b0adcb"],["/codewhile/static/media/software_prototyping.ee8ce445.svg","ee8ce4451eb8cce0c72e4ce3e9c4f072"],["/codewhile/static/media/technology_consulting.9eafc052.svg","9eafc052e0997c51d60cf4813d9e889d"],["/codewhile/static/media/web_design.665b98c6.svg","665b98c642a532efc3e880691aca0ec8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));var c="/codewhile/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});