/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [{
        "url": "audio/CleverSkipper.mp3",
        "revision": "42369b0c63360b49214183ef4f1d60b3"
    },
    {
        "url": "css/main.css",
        "revision": "3a2779215acdbba0eb3e10fc76f1668f"
    },
    {
        "url": "css/statictv.css",
        "revision": "ca1310c6d2a8fb50c081d51f9df2934a"
    },
    {
        "url": "favicon.ico",
        "revision": "4ab040a1a7e28a607992cc1a8e964c18"
    },
    {
        "url": "fonts/AppleIIScreenTypeface.ttf",
        "revision": "7c79adbad2f88f78930db2d9115da80f"
    },
    {
        "url": "fonts/FiftiesMovies.ttf",
        "revision": "825b0f2f01b373f6711337865a00b42b"
    },
    {
        "url": "images/barley/barley_skeleton.png",
        "revision": "8cf616d010117b216f091ad4af0605cd"
    },
    {
        "url": "images/barley/barley_smile.png",
        "revision": "c8955b3007bb225f8a11bbd283b99550"
    },
    {
        "url": "images/barley/barley_tongue_middle.png",
        "revision": "c762f958bc4adf804569973e4025ce70"
    },
    {
        "url": "images/barley/barley_tongue_top.png",
        "revision": "c67f82143d420537f2df6d245917a175"
    },
    {
        "url": "images/bicycle.png",
        "revision": "84d184a4651a83798e43a1eb38817757"
    },
    {
        "url": "images/bricks_mobile.png",
        "revision": "9d2b7ae2ed0fbe34a825ba697a894827"
    },
    {
        "url": "images/bricks.png",
        "revision": "1c43d31ee23e34e74d49d0b652bc3c95"
    },
    {
        "url": "images/hardwood_mobile.png",
        "revision": "332e2b0be17aeef2fa7d85782f5e213f"
    },
    {
        "url": "images/hardwood1_crop.png",
        "revision": "5a7835617526653fb6e5951c26f52d32"
    },
    {
        "url": "images/ochand.png",
        "revision": "d1f0389a008c9f51afbf18eec59c8394"
    },
    {
        "url": "images/oldtvfull1_medium.png",
        "revision": "2211428e2cadbf3e05a583e0f9ede762"
    },
    {
        "url": "images/oldtvnoscreen1_large.png",
        "revision": "cce476f2767392d507cf9c48b70abfb1"
    },
    {
        "url": "images/oldtvnoscreen1_medium.png",
        "revision": "c8222826e2fddbad19c7d74a5b09650b"
    },
    {
        "url": "images/oldtvremotemobile2.png",
        "revision": "b74e4b9ef1f57e85c8e1b0f327a11b1e"
    },
    {
        "url": "images/oldtvremoteskewed2.png",
        "revision": "3752fd383dea050a00f17b03cacc402f"
    },
    {
        "url": "images/oldtvscreen.png",
        "revision": "d3eb4cc3e6d7252a5e22aa11245021eb"
    },
    {
        "url": "images/originals/wallart_originals/0001_1_firewrecks.png",
        "revision": "181d3d40652a23d621bde96fc88a5bf1"
    },
    {
        "url": "images/originals/wallart_originals/0002_2_Bermuda.png",
        "revision": "d913d5730fb78edf5a1b2f33df1e90eb"
    },
    {
        "url": "images/originals/wallart_originals/0003_3_gallowsbird.png",
        "revision": "28535b79fc4e692fb7ee16aa33b71980"
    },
    {
        "url": "images/originals/wallart_originals/0004_4_cabcallo.png",
        "revision": "cbfe96100733bb4f975296e3e5f27237"
    },
    {
        "url": "images/originals/wallart_originals/0005_5_tribal.png",
        "revision": "8dd927b1ce6fea4f5e934dbbdd709715"
    },
    {
        "url": "images/originals/wallart_originals/0006_6_neptune.png",
        "revision": "d7709cea6e81c523eeb0af2c18c10b36"
    },
    {
        "url": "images/originals/wallart_originals/0007_7_giraffe.png",
        "revision": "87eb73085316ab428b304dca2fd4fe12"
    },
    {
        "url": "images/originals/wallart_originals/0008_8_dontmixem.png",
        "revision": "a0de012ddfe53a5fde2eec5086b49271"
    },
    {
        "url": "images/originals/wallart_originals/0009_9_guitar.png",
        "revision": "50cee8573e1674da0637775c94b5d777"
    },
    {
        "url": "images/originals/wallart_originals/0010_10_newyork.png",
        "revision": "6a3fc932ba31334f21f3afa4b6f5c463"
    },
    {
        "url": "images/originals/wallart_originals/0011_11_studyofmodel.png",
        "revision": "9757b323b22791f1f5c2e27cacf59f59"
    },
    {
        "url": "images/originals/wallart_originals/0012_12_humbug.png",
        "revision": "ec0f881871cbf739a463114fd4d190d2"
    },
    {
        "url": "images/originals/wallart_originals/0013_13_yellowstone.png",
        "revision": "fc6a76ee2485dd9ecdf475d194788199"
    },
    {
        "url": "images/originals/wallart_originals/0014_14_yawn.png",
        "revision": "6a6f11c251686abc047c2a34a231621d"
    },
    {
        "url": "images/originals/wallart_originals/0015_15_seacliff.png",
        "revision": "4f91930b9048fa8e380d7cad312c4b44"
    },
    {
        "url": "images/originals/wallart_originals/0016_16_sameoldcoon.png",
        "revision": "f7393e1058bec0fb885af330d25cbe20"
    },
    {
        "url": "images/originals/wallart_originals/0017_17_seurat.png",
        "revision": "7aad6bec3fa9a0ae843fad0dac00f66f"
    },
    {
        "url": "images/originals/wallart_originals/0018_18_teethcleen.png",
        "revision": "d6e723889d5a01e6df06b3e047f7727f"
    },
    {
        "url": "images/originals/wallart_originals/0019_19_SeeAmerica.png",
        "revision": "3ba33fcae908dc1497f814a7830534d8"
    },
    {
        "url": "images/originals/wallart_originals/0020_20_doggun.png",
        "revision": "a46b03306511281bfa793f5db62063ac"
    },
    {
        "url": "images/originals/wallart_originals/frame.png",
        "revision": "c9b26d43a57ecd338993b777d563952f"
    },
    {
        "url": "images/recordnosound.png",
        "revision": "073261aa297aa04c91a90e7d8cc1bd1c"
    },
    {
        "url": "images/recordsound.png",
        "revision": "735a155e688361cca6fc1417b82b7db5"
    },
    {
        "url": "images/roundrug1.png",
        "revision": "370b3be9228305a00766b40f688daba3"
    },
    {
        "url": "images/wallart/0001_1_firewrecks.png",
        "revision": "56a6ce0734db3a86da045af3dcdf5fa4"
    },
    {
        "url": "images/wallart/0002_2_Bermuda.png",
        "revision": "cfd4694a8837d47c1c210997b8abad2c"
    },
    {
        "url": "images/wallart/0003_3_gallowsbird.png",
        "revision": "def397c0c664c4b9ead7a4b686430142"
    },
    {
        "url": "images/wallart/0004_4_cabcallo.png",
        "revision": "f4e0f9fc9e98c2b77dde9dbc05467e43"
    },
    {
        "url": "images/wallart/0005_5_tribal.png",
        "revision": "25e201927ee139e64af3b38f02ec0277"
    },
    {
        "url": "images/wallart/0006_6_neptune.png",
        "revision": "a7bb5d3e86e3ddf4fd2ede091d301ac1"
    },
    {
        "url": "images/wallart/0007_7_giraffe.png",
        "revision": "3a08e8c2ea09f59c6eb2d07732a35e8b"
    },
    {
        "url": "images/wallart/0008_8_dontmixem.png",
        "revision": "a3e23dbe56fee5ade0bc8e4f7ae07ad6"
    },
    {
        "url": "images/wallart/0009_9_guitar.png",
        "revision": "905218e0af4929f810f822a9e449ea98"
    },
    {
        "url": "images/wallart/0010_10_newyork.png",
        "revision": "0a87353de51396c20e3e7819c8dc748d"
    },
    {
        "url": "images/wallart/0011_11_studyofmodel.png",
        "revision": "dbdebf55351e54ba81b662a8bfeb9eeb"
    },
    {
        "url": "images/wallart/0012_12_humbug.png",
        "revision": "e2c7f246442fedd558fdafb575070c4e"
    },
    {
        "url": "images/wallart/0013_13_yellowstone.png",
        "revision": "0bdba8304458e00c0b95f8fe9a6f0aae"
    },
    {
        "url": "images/wallart/0014_14_yawn.png",
        "revision": "5e2fd16245c8c2fc42843bb230d1bf81"
    },
    {
        "url": "images/wallart/0015_15_seacliff.png",
        "revision": "b910802c3c8dba3bd9c6603fae00b85f"
    },
    {
        "url": "images/wallart/0016_16_sameoldcoon.png",
        "revision": "277a46fb47e91f43e2dd854e06789953"
    },
    {
        "url": "images/wallart/0017_17_seurat.png",
        "revision": "c6265ce4d04e318cf653e477b0ca7c91"
    },
    {
        "url": "images/wallart/0018_18_teethcleen.png",
        "revision": "bddf80da6de45fa0502b43970d4f626b"
    },
    {
        "url": "images/wallart/0019_19_SeeAmerica.png",
        "revision": "e958847971a649daf3b1af5465d479d4"
    },
    {
        "url": "images/wallart/0020_20_doggun.png",
        "revision": "b20f6e5aede90a93008f700291320efc"
    },
    {
        "url": "images/wallart/frame.png",
        "revision": "191e3ee38cee5b745f91ab4ecdad5c68"
    },
    {
        "url": "index.html",
        "revision": "63fd026aa1c2f6efac49bdd210a9440b"
    },
    {
        "url": "js/jq-ajax-progress.min.js",
        "revision": "9254d14a7476c78843957c1443e4d7ca"
    },
    {
        "url": "js/jquery-3.4.1-min.js",
        "revision": "f832e36068ab203a3f89b1795480d0d7"
    },
    {
        "url": "js/oconcept-animate-letters.js",
        "revision": "d85fa4df3bb798d52d267d90b418bcdb"
    },
    {
        "url": "js/oconcept-animate-wallart.js",
        "revision": "5703b4bcbf25538c60034f349790fe6f"
    },
    {
        "url": "js/oconcept-animate.js",
        "revision": "fd9d9950d1620b69c9aed0f55ad3442e"
    },
    {
        "url": "js/oconcept-channel-videos.js",
        "revision": "05c3b9a6e704060b21028ed1138e6dd5"
    },
    {
        "url": "js/oconcept-colors.js",
        "revision": "5cafadfb54872ed3d6f775d0b6133e39"
    },
    {
        "url": "js/oconcept-main.js",
        "revision": "61367f3d46c3d14ecca91b3fd1880206"
    },
    {
        "url": "js/oconcept-utility.js",
        "revision": "e3d1d53a70be44dfac33d96af0999de2"
    },
    {
        "url": "js/statictv.js",
        "revision": "9eb95521d11556805c820266aa28b485"
    },
    {
        "url": "video/_originals/american-protesters-listening.mp4",
        "revision": "91fe20488913eeca9f52c81352e84218"
    },
    {
        "url": "video/_originals/american-protesters-travelling.mp4",
        "revision": "44e773d18cb76ab74aa167a60343c0b3"
    },
    {
        "url": "video/_originals/apollo11.mp4",
        "revision": "2964fe3cc85a8dffbf6f8e45649e75c8"
    },
    {
        "url": "video/_originals/apollo11lunarmodule.mp4",
        "revision": "59275d9dc120b6293d28f111bbdb1ac0"
    },
    {
        "url": "video/_originals/avrocar.mp4",
        "revision": "a1b5dbfd7b6a2e006e723e3990df9f08"
    },
    {
        "url": "video/_originals/buzz-aldrin.mp4",
        "revision": "273f2c3fd6052d2456a95f0e455be4bd"
    },
    {
        "url": "video/_originals/hydrogenbomb.mp4",
        "revision": "6f3808c2d12d0bb86cad840d35c4bc64"
    },
    {
        "url": "video/_originals/mapgermany.mp4",
        "revision": "65f9fa41138c8459fa6858e479153fc3"
    },
    {
        "url": "video/_originals/measuringface.mp4",
        "revision": "22e53ca1b14a6d7627ed26a5ff1bc826"
    },
    {
        "url": "video/_originals/Narcotic1967.mp4",
        "revision": "5d978aa2375c2539331820b45c3817fd"
    },
    {
        "url": "video/_originals/SurfRiders.mp4",
        "revision": "f99e570d651f6252ac972e8abba1e468"
    },
    {
        "url": "video/_originals/taxpayers.mp4",
        "revision": "bd2492f79c463088d40dae5ab2e1217f"
    },
    {
        "url": "video/_originals/tvturningoff.mp4",
        "revision": "92fd140506f807530c1da7b9425ea2cb"
    },
    {
        "url": "video/_originals/tvturningon.mp4",
        "revision": "430848e7539703fd8b4c89b8f6e07d9c"
    },
    {
        "url": "video/_originals/WeDriver1936.mp4",
        "revision": "5a4df4e8945e9e163fd149c6bfb806a7"
    },
    {
        "url": "video/_originals/wreckless.mp4",
        "revision": "72e4b7c3abf1111febdec0dd2e5ab63f"
    },
    {
        "url": "video/american-protesters-listening.mp4",
        "revision": "ab4d0b3c00fb32d08303f99f6b16b41b"
    },
    {
        "url": "video/american-protesters-travelling.mp4",
        "revision": "ca1a12cc0808ae2370816219e4cace97"
    },
    {
        "url": "video/apollo11.mp4",
        "revision": "e97c39f762bc25c99bdf0dd68d5dd8f1"
    },
    {
        "url": "video/apollo11lunarmodule.mp4",
        "revision": "2b28ddd6e6f7fce0052e4d5bc27418d1"
    },
    {
        "url": "video/avrocar.mp4",
        "revision": "35f97084394a3467c6c1add3a306cf12"
    },
    {
        "url": "video/buzz-aldrin.mp4",
        "revision": "fda8d8b0093faa388adb4537de26671b"
    },
    {
        "url": "video/hydrogenbomb.mp4",
        "revision": "aadf61e073c8b603db45c3d675f517e6"
    },
    {
        "url": "video/mapgermany.mp4",
        "revision": "b98ac4969d69ebb01a7cd1eda8c0c25a"
    },
    {
        "url": "video/measuringface.mp4",
        "revision": "dfdc0a9fbf78f8f0fd88c957fe11f8cc"
    },
    {
        "url": "video/Narcotic1967.mp4",
        "revision": "0443016b0c20dc997d0f47f60cc76b72"
    },
    {
        "url": "video/SurfRiders.mp4",
        "revision": "c84be7dbea6770b383979fd359c4c92e"
    },
    {
        "url": "video/taxpayers.mp4",
        "revision": "4ab2d2cd39ccca6d74a01dcf9e4377d5"
    },
    {
        "url": "video/tvturningoff.mp4",
        "revision": "74dadacbe4863b6f828af75f2ec0f506"
    },
    {
        "url": "video/tvturningon.mp4",
        "revision": "fe7e621e19ca57a8b401c3a0a073761f"
    },
    {
        "url": "video/WeDriver1936.mp4",
        "revision": "077e50f432e317634d811cf8c68f708c"
    },
    {
        "url": "video/wreckless.mp4",
        "revision": "52e669baf73b79d5296d94219abba936"
    }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// evaluate progress on *?requestId=* URLs only
const progressIndicatorUrls = /\?requestId=/i;

const fetchcachename = "oconcept-cache";

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    const scope = self.registration.scope;

    // redirect index.html to service-worker-enabled page
    if (event.request.url === scope || event.request.url === scope + 'index.html') {
        const newUrl = scope + 'sw-installed.html';
        // console.log('respondWith', newUrl);
        event.respondWith(
            getFromCacheOrFetch(event)
        );
    } else if (progressIndicatorUrls.test(event.request.url)) {
        // console.log('VER', 2, event.request.url)
        event.respondWith(fetchWithProgressMonitor(event))
    }
})

async function fetchWithProgressMonitor(event) {
    /*  opaque request responses won't give us access to Content-Length and
     *  Response.body.getReader(), which are required for calculating download
     *  progress.  Respond with a newly-constructed Request from the original Request
     *  that will give us access to those.
     *  See https://stackoverflow.com/questions/39109789/what-limitations-apply-to-opaque-responses

     *  'Access-Control-Allow-Origin' header in the response must not be the
     *  wildcard '*' when the request's credentials mode is 'include'.  We'll omit credentials in this demo.
     */
    const newRequest = new Request(event.request, {
        mode: 'cors',
        credentials: 'omit'
    })

    var cacheresponse = await caches.match(event.request);
    if (cacheresponse)
        return cacheresponse;
    else {
        var response = await fetch(newRequest);
        var cache = await caches.open(fetchcachename)
        cache.put(event.request.url, response.clone());
        return respondWithProgressMonitor(event.clientId, response);
    }
}



function respondWithProgressMonitor(clientId, response) {
    if (!response.body) {
        console.warn("ReadableStream is not yet supported in this browser.  See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream")
        return response;
    }
    if (!response.ok) {
        // HTTP error code response
        return response;
    }

    const contentLength = response.headers.get('content-length');

    if (contentLength == null) {
        // don't track download progress if we can't compare against a total size
        console.warn('No Content-Length no header in response.  See https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Access-Control-Expose-Headers');
        return response;
    }

    let loaded = 0;
    debugReadIterations = 0; // direct correlation to server's response buffer size
    const total = parseInt(contentLength, 10);
    const reader = response.body.getReader();

    return new Response(
        new ReadableStream({
            start(controller) {
                // get client to post message. Awaiting resolution first read() progress
                // is sent for progress indicator accuracy
                let client;
                clients.get(clientId).then(c => {
                    client = c;
                    read();
                });

                function read() {
                    debugReadIterations++;
                    reader.read().then(({ done, value }) => {
                            if (done) {
                                // console.log('read()', debugReadIterations);
                                controller.close();
                                return;
                            }

                            controller.enqueue(value);
                            loaded += value.byteLength;
                            // console.log('    SW', Math.round(loaded/total*100)+'%');
                            dispatchProgress({ client, loaded, total });
                            read();
                        })
                        .catch(error => {
                            // error only typically occurs if network fails mid-download
                            console.error('error in read()', error);
                            controller.error(error)
                        });
                }
            },

            // Firefox excutes this on page stop, Chrome does not
            cancel(reason) {
                console.log('cancel()', reason);
            }
        })
    )
}

function dispatchProgress({ client, loaded, total }) {
    client.postMessage({ loaded, total })
}