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

var precacheConfig = [["2019_summary/1.jpg","3b338b600dc5605b40832a2a4eadf7ba"],["2019_summary/2.png","17c4a8828e45ca7d2d71a8eea74febe1"],["2019_summary/index.html","131dd6e12085c88fdac1ab1996ea1f07"],["about/index.html","43d1a17d743f3f98ab10372f4110211c"],["apue_advio/141.png","7b76d793436f97a0fddfc3bbbc173b5b"],["apue_advio/index.html","64165cbe000c280626c4c6e6655e4c98"],["apue_file/31.png","532f9b20ca9f2bf5f4ef4325980f5d61"],["apue_file/32.png","1b12654642d1816a9f09ebd4f289ef12"],["apue_file/33.png","4cb6e31b25aa27eed5e94058782c0877"],["apue_file/41.png","bab4bcca5dadd95aa4d144d7614c90d5"],["apue_file/42.png","89a5ec9de09d01918ee11b144fa0cb5c"],["apue_file/index.html","46fc21599f092cc814988d1a8d09e3ee"],["apue_ipc/151.png","ca1d737bce47710b6dd3a4db578d045e"],["apue_ipc/152.png","d2a2f30453449c59e939b5afae35f058"],["apue_ipc/153.png","0b2830c41c8be21b4923839b8bbef2ac"],["apue_ipc/154.png","32d38054c80709ce78467c5368fa9d8f"],["apue_ipc/155.png","69fb4fa96e4114921b6898f79a440a4d"],["apue_ipc/171.png","ad4d4e11c9c223ea71481d690f2185f6"],["apue_ipc/172.png","fc4ee6648de15c5ca84f9b2c6254ab23"],["apue_ipc/index.html","3d1472cc15a31be7027cfff14c09829d"],["apue_process/71.png","e3953a6dba12f0de616430c4c2a39564"],["apue_process/81.png","a6fa77d4fc4b5e1ccd5718beabe89f12"],["apue_process/82.png","fa24753bfa4aabd67b8664a0d60fc319"],["apue_process/91.png","8ef5b14a72a8ff64a347387fb1f106d3"],["apue_process/92.png","be169e327c00e609e5ad7ea3d5e24cac"],["apue_process/93.png","37f878a3a46f10d0f3614e674bdc9034"],["apue_process/94.png","641090192ac738b67d68ac55c2c77e70"],["apue_process/index.html","b494df206d24c3a3a81997641fb49773"],["apue_signal/index.html","06300c81b1cecc5f886339859872e8d1"],["apue_thread/111.png","b20f5f69d6423eb54a67601ae47fd34c"],["apue_thread/121.png","dab46cc0d689a027b8a93e6616ce9036"],["apue_thread/index.html","3e19c1b4c19c885448b4347a1235f536"],["archives/2018/03/index.html","a47983a2b3e07c750d1236ca797540fa"],["archives/2018/04/index.html","9ab7f757569aadd70f5d467075bd0454"],["archives/2018/05/index.html","5b35f14546180465aa3ab1c10e31e7d6"],["archives/2018/07/index.html","9d3a635657779e061c8e171176038e7f"],["archives/2018/08/index.html","1b1b247e7e6edf602b7ae45394ccfb44"],["archives/2018/09/index.html","17dc378c47e2ab537197651d4f832bf5"],["archives/2018/10/index.html","fefd5afda0e64fa1d3bbf35c869158dd"],["archives/2018/11/index.html","98253f79924149937b384f880f7f2e7f"],["archives/2018/12/index.html","0a3acc3f43a31af21017a1972c85d098"],["archives/2018/index.html","2be7a6b2b1bc3df623c38551cadab2a4"],["archives/2019/01/index.html","5c562486202eedc63fb74959cc4a419f"],["archives/2019/02/index.html","7eedef17f4d263132cb2da2f41d301a8"],["archives/2019/03/index.html","002af781ad69bfa1d56ddf95465550a9"],["archives/2019/04/index.html","1e98733929d098f4f3fca8743520205e"],["archives/2019/05/index.html","eed80ade1ad1feb48088de3607afe706"],["archives/2019/06/index.html","02b7cac718ec23fe45c4bc046fd8e3b0"],["archives/2019/12/index.html","5259ddf8c739622e5a8147d7d7855895"],["archives/2019/index.html","db00f4d00dfbdf6ad4a2e343ad395ddb"],["archives/index.html","389d301271e3d52d0a695ff1cda94a28"],["archives/page/2/index.html","a03feb4027339db576180fd7f8d6f2fd"],["categories/APUE总结/index.html","8464e46dc8b4b276428e0848b513ab95"],["categories/C/index.html","1109f5c55de6f71965e529855b8adfc6"],["categories/Golang/index.html","fe47aa0ce76d25a996ca451052fe0f58"],["categories/Linux/index.html","c760690098facc5e7da6a2f0e89e6795"],["categories/UNP总结/index.html","9c2114429a99f6335b35ca96f4d37b4e"],["categories/index.html","2ed22428d98020613ed6ae21a260316e"],["categories/开拓视野/index.html","c9bf0168764e156efbd35e135f6adbe1"],["categories/技术教程/index.html","a87f35aca0efdf9e239ff4156ea81e7b"],["categories/操作系统/index.html","6f3420fa67794deb89f3b90f35003e82"],["categories/数据库/index.html","82a8262a181431db3e027fc06553c966"],["categories/日常随笔/index.html","b05a561205d5d854340e3e9a80f352d7"],["categories/网络编程/index.html","4a78e435f19451b3cedf0b1392ddd78e"],["categories/计算机网络/index.html","2af97eaafbc67642b4a1173de7cd6d3a"],["categories/软件工程/index.html","99982465507e77f7026c39157a6a6e15"],["css/index.css","082896de67b95fca7a4c6024f725b96a"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["effective_modern_cpp/index.html","d022d171549c81ad124fc34411a0782e"],["effective_stl_note/index.html","8a370c768f1717d91f266acd236bd8e3"],["go_study_note/index.html","b499576067723cb5288ecb5bb3829cd4"],["google_code_style/1.jpg","d021c463e593b8c1d398b6b739d1c25a"],["google_code_style/index.html","2c52e8a88899d1f37d782161b8ac3d06"],["haskell_obsession/1.jpg","4b3ad2f008dbec5ff0564149700a70bb"],["haskell_obsession/haskell-logo.svg","ba47f7160efe755121a43b36753958f7"],["haskell_obsession/index.html","218c0e3316bf609874638c0e1bc7e5fb"],["hexo_github_blog/1.png","92a091b369ba83dae75e45ee17566425"],["hexo_github_blog/2.png","89403c256fff3dcf93ea954c46d85ac8"],["hexo_github_blog/3.png","2d9da10ae971a91197b3f903ba6f6633"],["hexo_github_blog/4.png","e1f5eea72b6cee58317819d82998c8dd"],["hexo_github_blog/5.png","3cf323df261199f8b3bd3ae65bc1291f"],["hexo_github_blog/6.png","a71951921fc64f145683ec406f732f40"],["hexo_github_blog/7.png","95f9f50b6a6213d2f12ec74ff380e79b"],["hexo_github_blog/index.html","dc03c8dc70883f1525608af5cf2b0a30"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","b7f051eddf7af998c9b5551f293fda2a"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["link_load_lib_note1/index.html","d2ac6f2ea435ba72f8b5c09d17f055eb"],["link_load_lib_note2/1.jpg","9e3fcd07562ddaec17c4e7e7e2845b41"],["link_load_lib_note2/index.html","35f0a613d0bdb4b17276c94b414e4086"],["link_load_lib_note3/index.html","1f4f8d654b4f4434d54ebd55927b5303"],["live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["load_balance/0.png","ca7abba5eb07d747bf99b16736aa93bb"],["load_balance/1.png","f602d7ae264d8d38111408bee940e226"],["load_balance/2.png","f4bfc79d1c76be39e6705e24b2d931c0"],["load_balance/3.png","ff0b5c3eecfb43a176dd6fdf16f7c8cc"],["load_balance/4.png","0ea60d353e7db8791f9d953decbe6afa"],["load_balance/5.png","0f9e49a1516ecd05ca1d6dac789f4946"],["load_balance/index.html","82e61c7efa26e67b9713e00fa638e1b5"],["machine_learning_note/index.html","4616fcfc54c69a2893ebee3ad6fb561a"],["page/2/index.html","bc94863c99fef34653a1c353273e609e"],["page/3/index.html","66804c420a0e08f32f1d48b10f00e02a"],["page/4/index.html","bf856ac3eefd976d2c8ab3d0118c8678"],["redis_db/1.png","428e6ac4ab1f75a8a1acab281cae214d"],["redis_db/2.png","01d148aff3a88afe9217b8bd5f9496b4"],["redis_db/3.png","d8f4ac7d7498719175b909763e61fcca"],["redis_db/4.png","9849e5335393f43fba41ed1d58057dc1"],["redis_db/5.png","20625c298df62193942e8803f729e975"],["redis_db/6.png","77b01351e09e3d84e9692741eb41ce7b"],["redis_db/index.html","eb1c018be52becc8a36b83d14cf0af25"],["redis_learn/1.png","eb29ca18e6983ba1992b3a8ee0ad94b6"],["redis_learn/2.png","69df05e55f9804817b2b5501db252c98"],["redis_learn/3.png","1df7d98fca9ed97e0b86a83071394083"],["redis_learn/4.png","e2d073eeea52f11a3e6ee644e4a327b8"],["redis_learn/5.png","baa8562e3dd8791c5bcc23868fdf5213"],["redis_learn/61.png","70667e45204eb0622362f2d726f3299a"],["redis_learn/62.png","e2955824d67d2d23eb14c71e742365cd"],["redis_learn/71.png","ecd3118817ee40754a8979833bbc2be0"],["redis_learn/710.png","f8975a3530bd74e31710b24897c1254f"],["redis_learn/710_.png","364209bdc0e24753eb4bf30701a3592d"],["redis_learn/711.png","e1bc42c16e33d156ce95ad456a896c58"],["redis_learn/711_.png","5c524fa602695911df6342ada793f906"],["redis_learn/72.png","fe169b04d79a967872891319d8e5e2e3"],["redis_learn/73.png","c2a89428bd9e8684951d1b8f0b9d784a"],["redis_learn/74.png","4c5a895b907d2ac3a0530954870bd977"],["redis_learn/75.png","962d9a29a098b55a4ad67906c9f96aa6"],["redis_learn/76.png","879da5f13225cffaeb2acb89b5836633"],["redis_learn/76_.png","5804c3b0bb40f85d9020a0fb7d60e35d"],["redis_learn/77.png","c8a4b9244bf43bd96d6667beb42c8af1"],["redis_learn/78.png","d64c704391de8eab95989c8f098b16af"],["redis_learn/79.png","61209b64313331409de15566ee8c3cda"],["redis_learn/index.html","c7c7c45aa16919595a84c44864659e74"],["scaffold/draft.html","314545243f8becce48a1e50a2451739a"],["scaffold/page.html","314545243f8becce48a1e50a2451739a"],["scaffold/post.html","314545243f8becce48a1e50a2451739a"],["socket_close_detail/1.png","f5299b159a194c6ab22ee74fb5fcba7f"],["socket_close_detail/2.png","8ccbe6406261a18f267a0f4f14554f41"],["socket_close_detail/3.png","9237030aa64d22e87fb1328b8ea9473d"],["socket_close_detail/4.png","6e2f707846ca2fef4a4ef66e42b06d1a"],["socket_close_detail/5.png","5d506bc75cfcdae6be275fe70dbdf5a0"],["socket_close_detail/6.png","98f768da549923be3de0500700e889b3"],["socket_close_detail/7.png","fed08a60c714c724c8b8e614c62c5643"],["socket_close_detail/8.jpg","2a198e5a60cab212ef99a27549739201"],["socket_close_detail/index.html","618d8d2cd5a6bfdd101130fd80eaf405"],["start_bolg_life/index.html","83eca1f044150f36c02b28e6dc35a88a"],["tags/C-11/index.html","4816cf7b71d5b6bc129881428b0a8f97"],["tags/C/index.html","e0405fad424756bbd5ac76f0256d0211"],["tags/Golang/index.html","c6006db078b0a524f5d7d91509d56ba2"],["tags/Google/index.html","84d47e5c6b83803789ed456fd5e8ce2b"],["tags/Haskell/index.html","6e2ade32d34f80a46c04e490781c1df6"],["tags/I-O/index.html","87b168fee6c871c1adced069c9e5745b"],["tags/IPC/index.html","b7c5c7cc9e5f031170fcd48e21051dbb"],["tags/Linux/index.html","0eeddd664e4c0309f4819520c31ec949"],["tags/Modern/index.html","f67a6e26f09d5b2679c5430370d0df05"],["tags/Redis/index.html","fec9687610bfd51aa81d9b5bbc45d564"],["tags/STL/index.html","de4cfe1c76add8cfb89a3b63068efb6d"],["tags/Socket/index.html","5a86f19e4b389ff19ad8ccfa35cf4d25"],["tags/UNIX/index.html","edb491101a3235f56960054dbf38138c"],["tags/vim/index.html","02d21219141a6bbddf917c57e09a1803"],["tags/windz/index.html","40ab885b32be42bef8f2e8aaeb2927ee"],["tags/信号/index.html","c0a1f0a9ac26c63d1b4b9dccb25f946f"],["tags/博客/index.html","593dbf6371f3792d1c2334e7f8d1d1f5"],["tags/学习/index.html","f4a54ffa6bdcf58ec70507579c92b3c6"],["tags/并发/index.html","3d3d31456ce0f18834427ad1daaac33f"],["tags/库/index.html","e70d43a1a2ea320ef44578c9016bb1e2"],["tags/总结/index.html","56d3f7893e272234614b5e8850fc9f7b"],["tags/操作系统/index.html","303654a655fbca2a7b356c8f7687a278"],["tags/教程/index.html","91b7d2b2e67a027fa63afcb8614f748a"],["tags/文件/index.html","2eedbd8d87b96eda774763af5157c0cb"],["tags/笔记/index.html","3aac46f03d6fe47d0b18820ef0a25de0"],["tags/算法/index.html","deb49a5bc8d54d250d30a9309946b802"],["tags/线程/index.html","88301a0f2e2b77baa845ed03785a0a0e"],["tags/网络库/index.html","6be21aeaf9567089f96d0eb59c4bfe10"],["tags/网络编程/index.html","926bb1f66f15bead049c2670c4a12799"],["tags/装载/index.html","0f79485a0154edd60bb1081f0b248f1f"],["tags/负载均衡/index.html","a667a44afdf3860172c71d0d359ab2e3"],["tags/进程/index.html","ecca04665c2698688f62737b064b69e0"],["tags/链接/index.html","4263703b7e61099282ae3a60d2ebdf10"],["tags/面试/index.html","17cc302f1e1c7e5d3879df62a8ccea6f"],["unp_note_1/111.png","d141a1532792eaa1272fb5fa6a4102da"],["unp_note_1/112.png","34ccebee079730afe1cea85b68147ef5"],["unp_note_1/113.png","8ae4b92ae873bf63fbcfdbd24ec10719"],["unp_note_1/114.png","62a2033cd04395c00780b3e0e3a84d38"],["unp_note_1/115.png","a71dc74e9ebabdacce7cbd5736c87f56"],["unp_note_1/21.png","11d885993bfcbf546c7d79a8d52a62cc"],["unp_note_1/22.png","f1495e639e985ccd73d4dd551984df8c"],["unp_note_1/31.png","85d46403900bfe2f581dfc5e2e49c586"],["unp_note_1/41.png","b1633e120e27b9f7070643a28f8cc755"],["unp_note_1/61.png","d8a9607d6027be225596fee117f3aa3b"],["unp_note_1/62.png","fc8109e1cb369ee89f11c4f25efc5911"],["unp_note_1/63.png","96b7622b50c10766a6dee3e4e212c2ed"],["unp_note_1/64.png","7ad8155d859e3489ff08ab8c8fcc0250"],["unp_note_1/71.png","6c20e3b64c6841d800a86a28903ae792"],["unp_note_1/72.png","636a8deff1e37471eea5a86454ad0b0d"],["unp_note_1/73.png","0f0c79e2b841b59d023bb224b490f3a8"],["unp_note_1/74.png","7875dfb4bf1329e934b355cdfe3fb26b"],["unp_note_1/75.png","7e8a73045248423c2c5dde556218fe45"],["unp_note_1/76.png","25a86a44fb602a06114a73a42d61a827"],["unp_note_1/77.png","7247448eb011d183a2face03f1a354ec"],["unp_note_1/78.png","af6df4f268b60b741f56905fe1a0473d"],["unp_note_1/81.png","63f1da37cf7f1e219603ca3ab76c1c6d"],["unp_note_1/82.png","31d6812293867ebb410f1033e4c52841"],["unp_note_1/83.png","df2f54152d215d6d3d3e30714b567261"],["unp_note_1/84.png","2d4d61e82b1144d19c33acd0e4e02912"],["unp_note_1/85.png","85bf44e1260d92d347fadd37fc289cf6"],["unp_note_1/index.html","d0171a891c146f1d3537e20ae5c1539b"],["unp_note_2/1.png","97412dc33c55c519f6172847f810b898"],["unp_note_2/2.png","55cd83fe91dab1e83c63c9c39f04ab18"],["unp_note_2/3.png","3f246f0bb8257943110ab911103c201b"],["unp_note_2/4.png","cf67bf5b6f9cb5c578bb93bd650a1415"],["unp_note_2/5.png","0f980edeeae49f5b4456ff3b3ee0fcad"],["unp_note_2/6.png","060c17ddf2c3aa99349ca06a9fb55fff"],["unp_note_2/7.png","27b43b3fa0f68f331e9898aa84305792"],["unp_note_2/8.png","ac992133ed7d9598a19c9b2b91ac1bed"],["unp_note_2/index.html","2067c133d87a50fa6bb28d5198f99158"],["vim_command/index.html","d5c994890268db3d66a3dce0d15f7193"],["windz/1.png","562bd3a37533397eb51addfe632d9a1d"],["windz/index.html","dc542ec60d8264a0d2bc7fb58310d419"]];
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







