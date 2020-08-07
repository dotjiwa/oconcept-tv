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
self.__precacheManifest = [
  {
    "url": "audio/CleverSkipper.mp3",
    "revision": "42369b0c63360b49214183ef4f1d60b3"
  },
  {
    "url": "css/fonts.css",
    "revision": "c5fa02432fabb902eb28c79b6622fc64"
  },
  {
    "url": "css/main.css",
    "revision": "cf09a8f59b692e118b97860a0323f4be"
  },
  {
    "url": "css/statictv.css",
    "revision": "ca1310c6d2a8fb50c081d51f9df2934a"
  },
  {
    "url": "css/test.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/typewriter.css",
    "revision": "e426e40c4fbc6d256d4ee748565a185f"
  },
  {
    "url": "datafiles/frame.json",
    "revision": "f1c986d70fbfdf62e2da460438ebbe1e"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-0.json",
    "revision": "ad32704fff58f085ad282936919de39c"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-1.json",
    "revision": "17a1a12f0d8fbaeaa5424135071e2b92"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-2.json",
    "revision": "fd5024f7267e1c63b0a85c22c7067283"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-3.json",
    "revision": "8add213ba1091d65cd77a6427f3e3ba9"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-4.json",
    "revision": "dd3673bb3bd63fa394db307ba831dc32"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-5.json",
    "revision": "bfb33701636c34c4ec4540026b4ea576"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-6.json",
    "revision": "72d6dbaace154452eebb4bd2355c1dc0"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-7.json",
    "revision": "62665fbe5f231cb0831819962d4d620e"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-8.json",
    "revision": "a6db7a4002bf816daa4d05df6aa526d9"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-9.json",
    "revision": "02a2d360728aed32ed03c82ffccda263"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-0.json",
    "revision": "b34f56b5c4895d3d61f836cbf7034ba2"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-1.json",
    "revision": "31ca711432d64bebfd3ef6f8bcb252f6"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-2.json",
    "revision": "3862eaecf2da97a9f21e871608df304a"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-3.json",
    "revision": "2fd6dfcf6717f4299c7578f7fcafd686"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-4.json",
    "revision": "418f79564126fc7bda302f6601ffa79f"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-5.json",
    "revision": "bc2d24c260089da8436de6693fde70f6"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-6.json",
    "revision": "14cc0eee0bcdd0331979acfe5ad0a1e7"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-7.json",
    "revision": "be26a65706ff09bff197fb749fc26b1b"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-8.json",
    "revision": "121f687d02d15e77273e11e339c66be4"
  },
  {
    "url": "datafiles/oldtv/oldtv-partial-mobile-9.json",
    "revision": "bdda29485c917a04cc78b08bca311e1d"
  },
  {
    "url": "datafiles/oldtvemptyscreen.json",
    "revision": "e4f31eadd9d3d6a45bc985df6056336b"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-0.json",
    "revision": "8bcc8368d246044663bf48237ba513af"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-1.json",
    "revision": "7b11eda283df8ee27d05890ae767f49f"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-2.json",
    "revision": "0eac7fcad11b48f27a8503b96adaf41f"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-3.json",
    "revision": "40e2ce0dace58d0391659b712eccbb44"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-4.json",
    "revision": "2d8152b1d3e9d747e7c33646c3b8c6f0"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-5.json",
    "revision": "5c750c7405a8abdaeb59720d2418186f"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-6.json",
    "revision": "e8fa6a338af92334701af803e79cf362"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-7.json",
    "revision": "78b7248a2a6cfd98c4e37204a95ae104"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-8.json",
    "revision": "4684dfbbf3a9ccef43001ca9a09c3ddc"
  },
  {
    "url": "datafiles/wallart/0001_1_firewrecks-partial-9.json",
    "revision": "6a5f7c806299a7b31e5ee5aa24750682"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-0.json",
    "revision": "88b4d0ca4482b2470809d62933cdeff0"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-1.json",
    "revision": "3462423358faa5e376a18132f7c52ab9"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-2.json",
    "revision": "27732b66af6583df7ee990a208a0c22c"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-3.json",
    "revision": "61773efc83f75b17ec3c3b1b9425ee67"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-4.json",
    "revision": "9243df85d67b921128b3043439baf440"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-5.json",
    "revision": "402287bf43db356f9999833f7701f06e"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-6.json",
    "revision": "45d770b1dc326b289b6025efb2428caf"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-7.json",
    "revision": "67623f962b2b3d7211db188ee8fafcad"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-8.json",
    "revision": "d4bb492bb275f0dbecd6d1ad84a77687"
  },
  {
    "url": "datafiles/wallart/0002_2_Bermuda-partial-9.json",
    "revision": "3f54d4b464909f12774ca4be301522ff"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-0.json",
    "revision": "58219cc80450d6f6f0e0c637a318835e"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-1.json",
    "revision": "d1148dedf8c96608a4c211dbfd7973fd"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-2.json",
    "revision": "75c3c3095cd496208bcf64082f96e700"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-3.json",
    "revision": "0cf2fd58a6ca1c40edabab9023cc84a1"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-4.json",
    "revision": "b8301ade6c76641e04bd2085bee61417"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-5.json",
    "revision": "bce80a066b317ff593d1e5695307c699"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-6.json",
    "revision": "f7065afef4acfd76c11b0c144ef75066"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-7.json",
    "revision": "66aeed08544903b01b4084687d615d09"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-8.json",
    "revision": "3736883046d6adbe40f3a1969d49d305"
  },
  {
    "url": "datafiles/wallart/0003_3_gallowsbird-partial-9.json",
    "revision": "0c9495c5bbb2aadda591cbb75c48eacf"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-0.json",
    "revision": "3b24adbc3268fb1d139199dab0dcaaed"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-1.json",
    "revision": "f969f8135ed600c76accc6c763a3be48"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-2.json",
    "revision": "7fca0a854548d50ec72153384ec06101"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-3.json",
    "revision": "96f8af3038c198ddda640c772077ef2b"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-4.json",
    "revision": "20d915d9fdc3e6e3e34e74d2d35c57cc"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-5.json",
    "revision": "3dd6680f02d20f347e178fdc24aa2805"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-6.json",
    "revision": "a3ca4deb8ab907e34d768c618eedfe62"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-7.json",
    "revision": "d330878d255e6bf89cb09ba7ac5d1f4b"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-8.json",
    "revision": "a78a8fe72ae92e38a42869e0679df952"
  },
  {
    "url": "datafiles/wallart/0004_4_cabcallo-partial-9.json",
    "revision": "4c4fd4c896e95bbc3333365d02a8d438"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-0.json",
    "revision": "2d6a41116bd498f418699e36c81830be"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-1.json",
    "revision": "1f7121b3d714740db31c22cddfb29ed2"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-2.json",
    "revision": "b57505897feb7079b5c9f3e1db7dafeb"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-3.json",
    "revision": "13444e03ad93d7ce1c7c692774838006"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-4.json",
    "revision": "1005d6eb18204ed450138ee48d05900f"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-5.json",
    "revision": "06b691e8a512253793e084364cb6219d"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-6.json",
    "revision": "39b02acc3ec9f73098aa3a5a05b35b68"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-7.json",
    "revision": "05d3819fd7bead1aa4d393e4bd2e1b28"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-8.json",
    "revision": "367db13bf7aad3430408308486c50098"
  },
  {
    "url": "datafiles/wallart/0005_5_tribal-partial-9.json",
    "revision": "795c7f6809f7580793dae7c56220f28b"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-0.json",
    "revision": "6a7e961f21795058312401507ceba932"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-1.json",
    "revision": "01c1ff41e5bb47c9374b1adcc0594d2a"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-2.json",
    "revision": "aacb0c0d6feaacf8cde4acc1f33c1384"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-3.json",
    "revision": "f21c230c78f65f2d18bb6e90051cae9e"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-4.json",
    "revision": "7184c6dff39fa06c1f1df75a41294958"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-5.json",
    "revision": "6d1e019901b03cfa9125aef761b074eb"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-6.json",
    "revision": "b953fd662d023b0c2269c241d707ee06"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-7.json",
    "revision": "c29632f56298d269276db2a63df69e0d"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-8.json",
    "revision": "434af3cde6c69166a40dffd2a26a6bc3"
  },
  {
    "url": "datafiles/wallart/0006_6_neptune-partial-9.json",
    "revision": "721b471191ed7ecb23f49b94f5225c6c"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-0.json",
    "revision": "059972cecbda84c701c9458c7257e30c"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-1.json",
    "revision": "27cb9e02c6241d4855b54268c37e7015"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-2.json",
    "revision": "ab28ecfbefddb385074fc2d2672f0bde"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-3.json",
    "revision": "1d9da34b82cf7ecc77ccc21c51311f58"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-4.json",
    "revision": "c0e10c33562fdd9b3f7a130a1bd98659"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-5.json",
    "revision": "b5e1c1bcbaf36640aa33e9fb30fe2bdf"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-6.json",
    "revision": "ae01744381d689496eb6a5e5ecc48066"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-7.json",
    "revision": "1d51bac496de987b49dadb9daa85888c"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-8.json",
    "revision": "f5805fd337438c75ed0a1a9b2a75a376"
  },
  {
    "url": "datafiles/wallart/0007_7_giraffe-partial-9.json",
    "revision": "ff767ebc970403947d874110346b2241"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-0.json",
    "revision": "a93673fd307b7fc94ab3135bde9ce132"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-1.json",
    "revision": "fd6e30225051d692247015cda652e168"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-2.json",
    "revision": "5c8f805f604e1fabf0558cd609a77904"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-3.json",
    "revision": "16e30f918a79a373e636842f3a8efc94"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-4.json",
    "revision": "0ce7ec661bf5664c4f9e780fb03fac8c"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-5.json",
    "revision": "621db63e55f3e0778e60733c22681c8e"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-6.json",
    "revision": "b93adbf86d4213a063fc6524d05993c6"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-7.json",
    "revision": "57772a92f14b89c77f8c2abc53a7af33"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-8.json",
    "revision": "ba19a32a17c838ad9460ff99cb95f1a7"
  },
  {
    "url": "datafiles/wallart/0008_8_dontmixem-partial-9.json",
    "revision": "5cd753a4fcdff4b05209f5515eab5141"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-0.json",
    "revision": "6f618918435ea1944046b4987697b27c"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-1.json",
    "revision": "c276a04677e6cc27e09fe180781bbc98"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-2.json",
    "revision": "5a873abfad8594feee43a0bc2b14e0d9"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-3.json",
    "revision": "f3fa79bec7e6455d478e830be3f1173e"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-4.json",
    "revision": "4ec355555cea212b30a1c3ee878a837d"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-5.json",
    "revision": "a01f5f9e0009f9c22a15b8ea4ff6b396"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-6.json",
    "revision": "45de678fd0974d410b7b01df16e73dad"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-7.json",
    "revision": "8a732810e4f0624d7f78a2b09a0f765f"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-8.json",
    "revision": "e97bd8f1d951484ee9b4a669ebf4a8b0"
  },
  {
    "url": "datafiles/wallart/0009_9_guitar-partial-9.json",
    "revision": "5451d80a39b7eaa1bcfe8ff62f8b94b1"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-0.json",
    "revision": "ea0bf7f0792d9c7ce07d40ed116f1c0f"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-1.json",
    "revision": "7545faef1a3569c70e931e93805af8ba"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-2.json",
    "revision": "45c82190109e8606a877eb13a23c5716"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-3.json",
    "revision": "afea3bcd8ede90e3f8ce59d871c9d632"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-4.json",
    "revision": "fbf72a4f3ca45a665c3f1593ef506d97"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-5.json",
    "revision": "6a7b5cd3106eb3b4dc06e790b4ba03d6"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-6.json",
    "revision": "92917f6149d0f92f8ebcbb8bf6def144"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-7.json",
    "revision": "6c3eca24f442b4688edb264cb9e3ec35"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-8.json",
    "revision": "251625102f3adc683a98dfeda8d1c622"
  },
  {
    "url": "datafiles/wallart/0010_10_newyork-partial-9.json",
    "revision": "7aaa585dd991ce935a8d1b358184836e"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-0.json",
    "revision": "2b4c68ea581be17b2f22e925d16c122d"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-1.json",
    "revision": "03c78a5dcdded0d3fc03a38b7d2e3dec"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-2.json",
    "revision": "61c05e3a4c364e5b619fac27a794dcf5"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-3.json",
    "revision": "a2650418a5257059b6c6ac30cf096639"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-4.json",
    "revision": "36068203d6a3ea92f5ac0692db25b88f"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-5.json",
    "revision": "09f860451a9a7a8c53687be611b6d331"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-6.json",
    "revision": "35e5dd01e8d06502004a0360bb313d01"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-7.json",
    "revision": "009abb9b7672542821e3889aa4f5d013"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-8.json",
    "revision": "218c87d3f5debbe1f6d10ece473ac972"
  },
  {
    "url": "datafiles/wallart/0011_11_studyofmodel-partial-9.json",
    "revision": "80b5b1005a5f49941761e6752ffafdda"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-0.json",
    "revision": "aba830b0e59d268721240cacea7b9fa5"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-1.json",
    "revision": "46970340dc2bb682232f3de48a08bb03"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-2.json",
    "revision": "db5ae4151606310a9a023db100513de0"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-3.json",
    "revision": "53cc1fcb5e1a74597df873213cb4f7d6"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-4.json",
    "revision": "99164813a1e0edcd07e54c88b0a39e0d"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-5.json",
    "revision": "9f77591eef304147a1541fa04c2facaa"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-6.json",
    "revision": "5ab8fe8907d8c54e30de83c0c0c18904"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-7.json",
    "revision": "da1be0566f3670ef00bd63a1351d742d"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-8.json",
    "revision": "147a184a32c4170d2440250eeb2327fb"
  },
  {
    "url": "datafiles/wallart/0012_12_humbug-partial-9.json",
    "revision": "5f64bd8ae85d68b5aa26be87e981ce43"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-0.json",
    "revision": "ebd64ce6da92adde84bb059696941ba6"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-1.json",
    "revision": "9de73bac95ad0d9d6eb2300034e6eea4"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-2.json",
    "revision": "5f7aacf1950f1bb40b40d128827ce5e1"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-3.json",
    "revision": "702e16b8a7ebc7987cc4e3e88a213770"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-4.json",
    "revision": "fb360b194f0d902cdd4482668dde6bca"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-5.json",
    "revision": "7fd9a8922d56675c4074643c55609fa6"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-6.json",
    "revision": "8a869a0c478b770a5a92c7cc5ac1de07"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-7.json",
    "revision": "1cf2dd07921bfc2da1df05502f64d515"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-8.json",
    "revision": "cf3071ac3aeb14dea4d6553a6374f8b8"
  },
  {
    "url": "datafiles/wallart/0013_13_yellowstone-partial-9.json",
    "revision": "5d6c8eba51033747ee5756b9d4bbd98f"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-0.json",
    "revision": "6100e3bcb7a3e370b87dfe14b65472f4"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-1.json",
    "revision": "1eafaad2d5cf0245f80d92eef4107268"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-2.json",
    "revision": "7e55721c558099d3e594699e5a9153d4"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-3.json",
    "revision": "1f05783d2eab8557f10604339d4c694b"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-4.json",
    "revision": "c5c652de00f823ad863bf953265aff2f"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-5.json",
    "revision": "5b31f240937e77e0d76ded69bbc6d822"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-6.json",
    "revision": "b7320c885594754c63294401fb621c80"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-7.json",
    "revision": "8418e9b9ac042fe693e70961c0ce3503"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-8.json",
    "revision": "2586b026c151300cb79d4267138b59f6"
  },
  {
    "url": "datafiles/wallart/0014_14_yawn-partial-9.json",
    "revision": "1212d83a14973b7da16919fbdcc4faa5"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-0.json",
    "revision": "962dec9be25580e35e4d6e0a17104673"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-1.json",
    "revision": "faa9473d6857a35d7b44b25d86f1ba33"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-2.json",
    "revision": "a67ed3fe17f00a73dbdee6cccc034338"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-3.json",
    "revision": "f56e4652f50999b651159f401a71c1ee"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-4.json",
    "revision": "14ec99b0c0b65def728e0d85dd27fa3f"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-5.json",
    "revision": "9880d2745e1665450d35f2abc3e5ac79"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-6.json",
    "revision": "90e842203bcd0572e9ddd840657eb077"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-7.json",
    "revision": "a97c15527146c34aff23d7bc1ed5c894"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-8.json",
    "revision": "50fda402e55c4a162d6297b2427bf074"
  },
  {
    "url": "datafiles/wallart/0015_15_seacliff-partial-9.json",
    "revision": "e80dc8047dc498ba4b8ad19d28687584"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-0.json",
    "revision": "2465c758dd6ef047a580b2554ca0ba62"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-1.json",
    "revision": "08fab71ec8c66aba7dd5ae2fe60f0e46"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-2.json",
    "revision": "27792949f24a10f2cd1ce3a64173dcdd"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-3.json",
    "revision": "087b2f6ae3bb9b0744f489905020362b"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-4.json",
    "revision": "560907b6aa4f19aff3bed23e527848a9"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-5.json",
    "revision": "a63a5c395905069c47a24f3954a2df88"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-6.json",
    "revision": "d48577572b5af1ad2df9d9c838aed0da"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-7.json",
    "revision": "961078eb24166fac1523087fd74d7e95"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-8.json",
    "revision": "ceac786b48242ddac3d4b4fde11128fb"
  },
  {
    "url": "datafiles/wallart/0016_16_sameoldcoon-partial-9.json",
    "revision": "a0b273bf08c348cbad8f0a4e2e815761"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-0.json",
    "revision": "cc7cd060d643d78e1d9aee5241c8f9a1"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-1.json",
    "revision": "cdb66e5bb21c9150ba69d01d507fc168"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-2.json",
    "revision": "c6cd3018aaf13f1957e68910ba82cde8"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-3.json",
    "revision": "ecaa638b4ef43e4bfbe02d43331590f1"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-4.json",
    "revision": "ce1c7e06ccb66debc51ed3931de68827"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-5.json",
    "revision": "aac6e6cfdaec36f36f9729a01405ed87"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-6.json",
    "revision": "c392c5d2352e5060d0dc9a799b5d248d"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-7.json",
    "revision": "03e5e809ce6614faf12152f439996990"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-8.json",
    "revision": "596e35d85c451699d60e41d4caad1e0e"
  },
  {
    "url": "datafiles/wallart/0017_17_seurat-partial-9.json",
    "revision": "ab77d5e2ca39562d1ad0e57327c4d087"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-0.json",
    "revision": "6ae28373e17f852ad7a3798989fe7301"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-1.json",
    "revision": "f741806201c964e8a6dd78371bdb057b"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-2.json",
    "revision": "e7cc97d9a095f96f51312d235fc7213a"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-3.json",
    "revision": "bb38c035c3dbe49d677a6a6969e103db"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-4.json",
    "revision": "ffd3b9949f9eac026517b0e1885f045b"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-5.json",
    "revision": "42b9c08bb221106a070b2666f669a9bd"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-6.json",
    "revision": "9651c753c11af6d0cf2cb639963b3a8f"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-7.json",
    "revision": "f24065d26785bb7794a473654f3f3f59"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-8.json",
    "revision": "01524ca383069e6aed3fcd1dcdbfe501"
  },
  {
    "url": "datafiles/wallart/0018_18_teethcleen-partial-9.json",
    "revision": "17b2fb256e495c4219a98588a5100565"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-0.json",
    "revision": "90852f852feae02b459b38decda9699f"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-1.json",
    "revision": "aeffd259eb32f0bfdac7cb799339c50a"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-2.json",
    "revision": "bc6276208dd4771a6149fd8fdd3b3907"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-3.json",
    "revision": "bbfd2fbafa432d94080e985553f4cc57"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-4.json",
    "revision": "176d432b06dd941789c73a122878ccae"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-5.json",
    "revision": "17379eb779c856cf071e0dd55ffe2671"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-6.json",
    "revision": "c5d96b0de24128b53dc6d0b3ac7768c0"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-7.json",
    "revision": "b127e69a7b5feeecee93dda049cfa509"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-8.json",
    "revision": "78f2bb09b574197e158d793a54baf126"
  },
  {
    "url": "datafiles/wallart/0019_19_SeeAmerica-partial-9.json",
    "revision": "567aa9e451fd4e1e3ee8e6ca86b6ca6d"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-0.json",
    "revision": "0c0d1288e8539ff49f1c035aff7da22f"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-1.json",
    "revision": "84f00755ab10d72fd5f861ac72a1d3e2"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-2.json",
    "revision": "481e1aede30f8ce3686e5a8b27f44b76"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-3.json",
    "revision": "61cc74f50ad29e3a882f463cc5f12c30"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-4.json",
    "revision": "7680e40e7d4c4b1a12b4afdbbcd170c4"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-5.json",
    "revision": "0695b2994acca6a143742a9368fb251d"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-6.json",
    "revision": "e8309d795c86d46b9beeffebb0adf55f"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-7.json",
    "revision": "59255fa5c1e5adddd75fe30e2f9a1c8d"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-8.json",
    "revision": "60fd9a6805482020b3511f02e7e18a0c"
  },
  {
    "url": "datafiles/wallart/0020_20_doggun-partial-9.json",
    "revision": "bbac5c86795f4474ad823435996f368f"
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
    "url": "images/directions-image-arrow.png",
    "revision": "19309acf1bba5cecd596bcff4d9ecf30"
  },
  {
    "url": "images/directions-image-background.png",
    "revision": "6ea1060ea859e6c62e392e147c13bcc5"
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
    "url": "images/oldtvfull1_small.png",
    "revision": "ee02a45563157cfc514c761a88430965"
  },
  {
    "url": "images/oldtvfull1_tallsmall.png",
    "revision": "387dd288c9eea687e74405c9538916f3"
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
    "url": "images/oldtvnoscreen1_small.png",
    "revision": "dd7f067c02a36f89dfc5e10fd41a8b78"
  },
  {
    "url": "images/oldtvnoscreen1_tallsmall.png",
    "revision": "6ef87c79e76a9021aae8f03b40fad01d"
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
    "url": "images/wallart/All_Power_to_the_people_fin.png",
    "revision": "1f9fcc970c2f70846395d017e70dc80a"
  },
  {
    "url": "images/wallart/Blackwomenwillnotbeintimidated_fin.png",
    "revision": "db4fd2756eb339d155f437dfacdc56a0"
  },
  {
    "url": "images/wallart/ComeLetUsbuildanewworldtogether_fin.png",
    "revision": "1c4e2c67e7bb72ce6f9fdaee37fb6009"
  },
  {
    "url": "images/wallart/endKlanterror_fin.png",
    "revision": "0098d4f6588c91c49e91924d8bda7231"
  },
  {
    "url": "images/wallart/frame.png",
    "revision": "191e3ee38cee5b745f91ab4ecdad5c68"
  },
  {
    "url": "images/wallart/GeorgreJacksonLives_fin.png",
    "revision": "80c66bfef4aedf20e2b0533b7b92b1ac"
  },
  {
    "url": "images/wallart/HonorKingendracism_fin.png",
    "revision": "0846b75074a6e4924e5bd6f569c09eca"
  },
  {
    "url": "images/wallart/IpledgeAllegience_fin.png",
    "revision": "644e8c89d7d6beb528786ede5d096d51"
  },
  {
    "url": "images/wallart/Racismandstereotypes_fin.png",
    "revision": "2135184677b81e8f7a2644ae478a5a35"
  },
  {
    "url": "images/wallart/StopRacism_fin.png",
    "revision": "683f4e1b4e0c6a33b28c657ab53dd2a4"
  },
  {
    "url": "images/wallart/StoptheKlan_fin.png",
    "revision": "d168b7375b5632c4ffea5df6192f8938"
  },
  {
    "url": "index.html",
    "revision": "d2875459d4b3925dca71b2e0070bb8fa"
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
    "url": "js/jqueryui.js",
    "revision": "90b0380bfcef8f69d0a06062658d24e1"
  },
  {
    "url": "js/manifest.json",
    "revision": "176e20e4cc4c8878f7fafb29834b75d3"
  },
  {
    "url": "js/oconcept-animate-letters.js",
    "revision": "d85fa4df3bb798d52d267d90b418bcdb"
  },
  {
    "url": "js/oconcept-animate-wallart.js",
    "revision": "8aa6a8bd874af4ca4d0135dcf27c956c"
  },
  {
    "url": "js/oconcept-animate.js",
    "revision": "70d9e9ff5b0b0319321efa563f516a4d"
  },
  {
    "url": "js/oconcept-channel-videos.js",
    "revision": "eda2a18565bff38d6bfa25d00acbbd18"
  },
  {
    "url": "js/oconcept-colors.js",
    "revision": "5cafadfb54872ed3d6f775d0b6133e39"
  },
  {
    "url": "js/oconcept-directions.js",
    "revision": "68a9cfd9b5068a8ef42f060d61c0ae91"
  },
  {
    "url": "js/oconcept-main.js",
    "revision": "a9d9341a34215842780ee08c5d1e0e42"
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
    "url": "js/typeeffect.js",
    "revision": "772885062b10ea0f47d7b2d30330f336"
  },
  {
    "url": "video/AngelaDavis.mp4",
    "revision": "d870ef96a8ed2c93e3d312d58e1c3f76"
  },
  {
    "url": "video/IFIhadSneezedMLK.mp4",
    "revision": "238d7f06415b0e085d78cb44548fd1cf"
  },
  {
    "url": "video/jamesbaldwinblm.mp4",
    "revision": "e71aefad07f6f8396e9ed711bef235cc"
  },
  {
    "url": "video/MLK11MonthsBefore.mp4",
    "revision": "49ff778971e96824bb2d9b97bf3a1f1f"
  },
  {
    "url": "video/MLKNobelPrize.mp4",
    "revision": "e69adc465675fd8a3b4e7cb454981031"
  },
  {
    "url": "video/NAACPRaceToVote.mp4",
    "revision": "524162693b6a5da6c100714411d636ff"
  },
  {
    "url": "video/NashevilleSitInFeb13th.mp4",
    "revision": "eaa3098ba220cfa872f9633288872a72"
  },
  {
    "url": "video/singingmarchinwashington.mp4",
    "revision": "0dd3a363fa0aff0a4fc2b9965e3f3e32"
  },
  {
    "url": "video/the3marchesonselma.mp4",
    "revision": "1f443c70be2c6a8e0adb7abc006beab3"
  },
  {
    "url": "video/theselmastory.mp4",
    "revision": "532b4b3f15d5c940377b95c279b73bd7"
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
    "url": "workbox-config.js",
    "revision": "c88454852237a09897e34d9041ac3a6e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
