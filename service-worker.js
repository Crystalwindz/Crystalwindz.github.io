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

var precacheConfig = [["about/index.html","ba7b53e413e339f543883cd1312c0ee4"],["apue_advio/141.png","7b76d793436f97a0fddfc3bbbc173b5b"],["apue_advio/index.html","0e8c73d750c36b90c1b555398ef6d0fe"],["apue_file/31.png","532f9b20ca9f2bf5f4ef4325980f5d61"],["apue_file/32.png","1b12654642d1816a9f09ebd4f289ef12"],["apue_file/33.png","4cb6e31b25aa27eed5e94058782c0877"],["apue_file/41.png","bab4bcca5dadd95aa4d144d7614c90d5"],["apue_file/42.png","89a5ec9de09d01918ee11b144fa0cb5c"],["apue_file/index.html","bad1dabda2ed3626a72bae88cbfff5cd"],["apue_ipc/151.png","ca1d737bce47710b6dd3a4db578d045e"],["apue_ipc/152.png","d2a2f30453449c59e939b5afae35f058"],["apue_ipc/153.png","0b2830c41c8be21b4923839b8bbef2ac"],["apue_ipc/154.png","32d38054c80709ce78467c5368fa9d8f"],["apue_ipc/155.png","69fb4fa96e4114921b6898f79a440a4d"],["apue_ipc/171.png","ad4d4e11c9c223ea71481d690f2185f6"],["apue_ipc/172.png","fc4ee6648de15c5ca84f9b2c6254ab23"],["apue_ipc/index.html","cbb6ff32e453853ed8d97fca523e7d14"],["apue_process/71.png","e3953a6dba12f0de616430c4c2a39564"],["apue_process/81.png","a6fa77d4fc4b5e1ccd5718beabe89f12"],["apue_process/82.png","fa24753bfa4aabd67b8664a0d60fc319"],["apue_process/91.png","8ef5b14a72a8ff64a347387fb1f106d3"],["apue_process/92.png","be169e327c00e609e5ad7ea3d5e24cac"],["apue_process/93.png","37f878a3a46f10d0f3614e674bdc9034"],["apue_process/94.png","641090192ac738b67d68ac55c2c77e70"],["apue_process/index.html","a17102229b068ae6083b6e0fc85f8a99"],["apue_signal/index.html","b201727ccf29f2c7205c9c164bfb5057"],["apue_thread/111.png","b20f5f69d6423eb54a67601ae47fd34c"],["apue_thread/121.png","dab46cc0d689a027b8a93e6616ce9036"],["apue_thread/index.html","6bc6f4544a3f4932b3984e5cadf44db4"],["archives/2018/03/index.html","4612b808dccf3df679bfa4fa4f09c907"],["archives/2018/04/index.html","982d67c07fcd5ed39e115533e8701e5f"],["archives/2018/05/index.html","97b867a4e35ff09464dbb96a8a24c2a4"],["archives/2018/07/index.html","796891084335a9722a5c58fc9d501341"],["archives/2018/08/index.html","c8d4b6aa6c04c184875fc14ffae2ddc0"],["archives/2018/09/index.html","766d9f5af4ac1f4c15273a41a5c98396"],["archives/2018/10/index.html","980afae68d007933e6c32680d143794d"],["archives/2018/11/index.html","7e953a841e20c09267f94d6b71223fb6"],["archives/2018/12/index.html","ba7141488daa0f38088e30897fbb75d8"],["archives/2018/index.html","173f300f75da2db9123c937f66da85f3"],["archives/2019/01/index.html","37a5f9c458a77a43ff1c5438cac2dfde"],["archives/2019/02/index.html","22f2097a39edb89d9d14038d547ca90b"],["archives/2019/03/index.html","21a1e9739ed158335b8d8c2dc0853766"],["archives/2019/04/index.html","c1979b70b255d2b291d13c015401f749"],["archives/2019/05/index.html","1ce56e911e8fedc77293c039d5631936"],["archives/2019/06/index.html","8a3e14c6d210af038d0a06d353b37425"],["archives/2019/index.html","c9811c16cfb896f2f1057dd7fac54deb"],["archives/index.html","739441d515ef721b7e36afec9e3edea8"],["archives/page/2/index.html","b24d5e87365868d1a1a7ca9e606cbf9c"],["categories/APUE总结/index.html","3352e1abe80b45dee9a7b7e06ce9652b"],["categories/C/index.html","b8f4b92812ad022e939161868dd08689"],["categories/Golang/index.html","8a994e47ccdf93782572928b85d7e6b1"],["categories/Linux/index.html","d85103ce6456ee2fb2941b0a95b01f38"],["categories/UNP总结/index.html","2b0e834b19722982b1b854b4f5b63ae6"],["categories/index.html","659de92ceeaa31d660b0e2873a9391e7"],["categories/开拓视野/index.html","da978d1ca11cc4b5806320ce7035ef5c"],["categories/技术教程/index.html","aaf71482987811f285383fb8f3021e03"],["categories/操作系统/index.html","77b6fed7198ef3cfa03e6049b483cb06"],["categories/数据库/index.html","d85c4f4272dd9af2aba4184e4988ff31"],["categories/日常随笔/index.html","2fceaf3055a12b68bad822cc93956cf0"],["categories/网络编程/index.html","e0ee6afd302865fd9e36160449d43003"],["categories/计算机网络/index.html","e186d786d239719455178f0786a9a374"],["categories/软件工程/index.html","500f3e3a6b258ea010552aac62f2cb56"],["css/index.css","082896de67b95fca7a4c6024f725b96a"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["effective_modern_cpp/index.html","2d38c321a4802257433914420906a0b0"],["effective_stl_note/index.html","9ad71c308c278ba5fb0865969a959493"],["go_study_note/index.html","fe313b8229bf00320139b7a99a4f2c5a"],["google_code_style/1.jpg","d021c463e593b8c1d398b6b739d1c25a"],["google_code_style/index.html","44e5f5842b7938a32497367be8a9c8a1"],["haskell_obsession/1.jpg","4b3ad2f008dbec5ff0564149700a70bb"],["haskell_obsession/haskell-logo.svg","ba47f7160efe755121a43b36753958f7"],["haskell_obsession/index.html","4acf010cec76398104262e1552d7f7e2"],["hexo_github_blog/1.png","92a091b369ba83dae75e45ee17566425"],["hexo_github_blog/2.png","89403c256fff3dcf93ea954c46d85ac8"],["hexo_github_blog/3.png","2d9da10ae971a91197b3f903ba6f6633"],["hexo_github_blog/4.png","e1f5eea72b6cee58317819d82998c8dd"],["hexo_github_blog/5.png","3cf323df261199f8b3bd3ae65bc1291f"],["hexo_github_blog/6.png","a71951921fc64f145683ec406f732f40"],["hexo_github_blog/7.png","95f9f50b6a6213d2f12ec74ff380e79b"],["hexo_github_blog/index.html","d1c13f4b5ac65f00d37b6fcb2cca9192"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","68c64bbda80b2a45bc5cdfd3ff00a437"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["link_load_lib_note1/index.html","a34b5cf2cb138c7632aa7cad0854619f"],["link_load_lib_note2/1.jpg","9e3fcd07562ddaec17c4e7e7e2845b41"],["link_load_lib_note2/index.html","4b1e793aba9125b07029ac4465f2970e"],["link_load_lib_note3/index.html","6f0c2487c1cb4fd5389655b433aa65ce"],["live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["load_balance/0.png","ca7abba5eb07d747bf99b16736aa93bb"],["load_balance/1.png","f602d7ae264d8d38111408bee940e226"],["load_balance/2.png","f4bfc79d1c76be39e6705e24b2d931c0"],["load_balance/3.png","ff0b5c3eecfb43a176dd6fdf16f7c8cc"],["load_balance/4.png","0ea60d353e7db8791f9d953decbe6afa"],["load_balance/5.png","0f9e49a1516ecd05ca1d6dac789f4946"],["load_balance/index.html","c7c2d7b2111995c8ca36f6322b26dc0b"],["machine_learning_note/index.html","d0526a29591e8c0c9d963cd54e87f911"],["page/2/index.html","b0c67fbfe953c8793ab3fd6fc7dfe034"],["page/3/index.html","a618146a72a19cba24b6b92e0a294def"],["page/4/index.html","b3bbc0bb5f28bcc3613d90d1c872df5b"],["redis_db/1.png","428e6ac4ab1f75a8a1acab281cae214d"],["redis_db/2.png","01d148aff3a88afe9217b8bd5f9496b4"],["redis_db/3.png","d8f4ac7d7498719175b909763e61fcca"],["redis_db/4.png","9849e5335393f43fba41ed1d58057dc1"],["redis_db/5.png","20625c298df62193942e8803f729e975"],["redis_db/6.png","77b01351e09e3d84e9692741eb41ce7b"],["redis_db/index.html","e99333f8698578899332046b85409e3e"],["redis_learn/1.png","eb29ca18e6983ba1992b3a8ee0ad94b6"],["redis_learn/2.png","69df05e55f9804817b2b5501db252c98"],["redis_learn/3.png","1df7d98fca9ed97e0b86a83071394083"],["redis_learn/4.png","e2d073eeea52f11a3e6ee644e4a327b8"],["redis_learn/5.png","baa8562e3dd8791c5bcc23868fdf5213"],["redis_learn/61.png","70667e45204eb0622362f2d726f3299a"],["redis_learn/62.png","e2955824d67d2d23eb14c71e742365cd"],["redis_learn/71.png","ecd3118817ee40754a8979833bbc2be0"],["redis_learn/710.png","f8975a3530bd74e31710b24897c1254f"],["redis_learn/710_.png","364209bdc0e24753eb4bf30701a3592d"],["redis_learn/711.png","e1bc42c16e33d156ce95ad456a896c58"],["redis_learn/711_.png","5c524fa602695911df6342ada793f906"],["redis_learn/72.png","fe169b04d79a967872891319d8e5e2e3"],["redis_learn/73.png","c2a89428bd9e8684951d1b8f0b9d784a"],["redis_learn/74.png","4c5a895b907d2ac3a0530954870bd977"],["redis_learn/75.png","962d9a29a098b55a4ad67906c9f96aa6"],["redis_learn/76.png","879da5f13225cffaeb2acb89b5836633"],["redis_learn/76_.png","5804c3b0bb40f85d9020a0fb7d60e35d"],["redis_learn/77.png","c8a4b9244bf43bd96d6667beb42c8af1"],["redis_learn/78.png","d64c704391de8eab95989c8f098b16af"],["redis_learn/79.png","61209b64313331409de15566ee8c3cda"],["redis_learn/index.html","7f8c6c360d07751df679b0137c97847b"],["scaffold/draft.html","f78f879846cc71efaf5399803fdb6a4c"],["scaffold/page.html","f78f879846cc71efaf5399803fdb6a4c"],["scaffold/post.html","f78f879846cc71efaf5399803fdb6a4c"],["socket_close_detail/1.png","f5299b159a194c6ab22ee74fb5fcba7f"],["socket_close_detail/2.png","8ccbe6406261a18f267a0f4f14554f41"],["socket_close_detail/3.png","9237030aa64d22e87fb1328b8ea9473d"],["socket_close_detail/4.png","6e2f707846ca2fef4a4ef66e42b06d1a"],["socket_close_detail/5.png","5d506bc75cfcdae6be275fe70dbdf5a0"],["socket_close_detail/6.png","98f768da549923be3de0500700e889b3"],["socket_close_detail/7.png","fed08a60c714c724c8b8e614c62c5643"],["socket_close_detail/8.jpg","2a198e5a60cab212ef99a27549739201"],["socket_close_detail/index.html","f7112afa4d57911979c7f7ab12055f03"],["start_bolg_life/index.html","225364d1c98e83c47713bfb89b97117d"],["tags/C-11/index.html","83b2e52887f1956a96e210a9a1bdcf2a"],["tags/C/index.html","a49c08e9225a1f9313146b228d2efe28"],["tags/Golang/index.html","8ad670211ffeb5caf1b83db6281b2b79"],["tags/Google/index.html","cefac1b2d59863232d1ed067d3004821"],["tags/Haskell/index.html","bed640d1bd786e5f2f2583e557a7f3c3"],["tags/I-O/index.html","dc6de637c122c4f8c2b5795b1d378cee"],["tags/IPC/index.html","3238b6321497d4882eb912da90a53f8b"],["tags/Linux/index.html","79f26171e88d793d82905c14e0e7dd79"],["tags/Modern/index.html","63de4e289aeb97f1a144c6592f642c8a"],["tags/Redis/index.html","b80fb6a6c13af4cd557ac4565e3f5906"],["tags/STL/index.html","2b08d07a8ec973947aa7917dd99cf5a6"],["tags/Socket/index.html","5e76c010cf7ce4f12e282a44d9c24b65"],["tags/UNIX/index.html","d855be3412527bb3db18615f125c74de"],["tags/vim/index.html","5bb1affa366f1c206cf97d90805b86b9"],["tags/windz/index.html","8510e5a5e9b74a81e9582a90769c6d9a"],["tags/信号/index.html","19372644a44a36155bc380217a7a28f8"],["tags/博客/index.html","c97288e16dd494e4e61726b9dc435845"],["tags/学习/index.html","fb9ed4943e226910e803a14b75d578be"],["tags/并发/index.html","c9840fdc00ba02aa935e0c55d17332fc"],["tags/库/index.html","4438aaab2b4f160cefaacce085251d63"],["tags/操作系统/index.html","c39da20621bc90668f57920cb5bef4e2"],["tags/教程/index.html","3718f55b12498f9d4a4ce51039252b74"],["tags/文件/index.html","36cb6af8a69c66111719d8dfc4c220b8"],["tags/笔记/index.html","3bd67c2e2765213095996debf8f3727b"],["tags/算法/index.html","b4c98321e3e776bb4f5a36b229142cff"],["tags/线程/index.html","ad7662fddfb08b766d3bcaf1ffa480b3"],["tags/网络库/index.html","345b7cef693113f2b4d8ed036ccfbaa8"],["tags/网络编程/index.html","62256fe21e90bf3bb1831401842b2dab"],["tags/装载/index.html","7918b1f10b411372dd4a9005ee019c29"],["tags/负载均衡/index.html","a7cdb15093c264e925ae7ae073eb5af6"],["tags/进程/index.html","82a12bded550b59d516dc9183142d6fe"],["tags/链接/index.html","05d1bdb0a6a4497dd37b0566e4054bd3"],["unp_note_1/111.png","d141a1532792eaa1272fb5fa6a4102da"],["unp_note_1/112.png","34ccebee079730afe1cea85b68147ef5"],["unp_note_1/113.png","8ae4b92ae873bf63fbcfdbd24ec10719"],["unp_note_1/114.png","62a2033cd04395c00780b3e0e3a84d38"],["unp_note_1/115.png","a71dc74e9ebabdacce7cbd5736c87f56"],["unp_note_1/21.png","11d885993bfcbf546c7d79a8d52a62cc"],["unp_note_1/22.png","f1495e639e985ccd73d4dd551984df8c"],["unp_note_1/31.png","85d46403900bfe2f581dfc5e2e49c586"],["unp_note_1/41.png","b1633e120e27b9f7070643a28f8cc755"],["unp_note_1/61.png","d8a9607d6027be225596fee117f3aa3b"],["unp_note_1/62.png","fc8109e1cb369ee89f11c4f25efc5911"],["unp_note_1/63.png","96b7622b50c10766a6dee3e4e212c2ed"],["unp_note_1/64.png","7ad8155d859e3489ff08ab8c8fcc0250"],["unp_note_1/71.png","6c20e3b64c6841d800a86a28903ae792"],["unp_note_1/72.png","636a8deff1e37471eea5a86454ad0b0d"],["unp_note_1/73.png","0f0c79e2b841b59d023bb224b490f3a8"],["unp_note_1/74.png","7875dfb4bf1329e934b355cdfe3fb26b"],["unp_note_1/75.png","7e8a73045248423c2c5dde556218fe45"],["unp_note_1/76.png","25a86a44fb602a06114a73a42d61a827"],["unp_note_1/77.png","7247448eb011d183a2face03f1a354ec"],["unp_note_1/78.png","af6df4f268b60b741f56905fe1a0473d"],["unp_note_1/81.png","63f1da37cf7f1e219603ca3ab76c1c6d"],["unp_note_1/82.png","31d6812293867ebb410f1033e4c52841"],["unp_note_1/83.png","df2f54152d215d6d3d3e30714b567261"],["unp_note_1/84.png","2d4d61e82b1144d19c33acd0e4e02912"],["unp_note_1/85.png","85bf44e1260d92d347fadd37fc289cf6"],["unp_note_1/index.html","57af03bea013c9d0a53946d4feba854f"],["unp_note_2/1.png","97412dc33c55c519f6172847f810b898"],["unp_note_2/2.png","55cd83fe91dab1e83c63c9c39f04ab18"],["unp_note_2/3.png","3f246f0bb8257943110ab911103c201b"],["unp_note_2/4.png","cf67bf5b6f9cb5c578bb93bd650a1415"],["unp_note_2/5.png","0f980edeeae49f5b4456ff3b3ee0fcad"],["unp_note_2/6.png","060c17ddf2c3aa99349ca06a9fb55fff"],["unp_note_2/7.png","27b43b3fa0f68f331e9898aa84305792"],["unp_note_2/8.png","ac992133ed7d9598a19c9b2b91ac1bed"],["unp_note_2/index.html","72dae49eb793da1b1cd0a3596d27928c"],["vim_command/index.html","758a1d07688033f0bc6fa3211fdde9bd"],["windz/1.png","562bd3a37533397eb51addfe632d9a1d"],["windz/index.html","2773f7af88fa4df4f716f22aff434334"]];
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







