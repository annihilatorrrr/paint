if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,d)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-4681948c"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"_snowpack/env.js",revision:"271340c8a4138e1e23f57808561235d0"},{url:"_snowpack/pkg/bresenham-zingl.js",revision:"de8bb2b5453ec82f2918eb82c9538bfd"},{url:"_snowpack/pkg/browser-fs-access.js",revision:"04df7c342abfc249d294d3b3e7253596"},{url:"_snowpack/pkg/common/directory-open-15776d53.js",revision:"8ae34aa890d0a6dbb1d79582bc96b252"},{url:"_snowpack/pkg/common/directory-open-67ace1ea.js",revision:"e063d4a0730e601719c9b002e03babee"},{url:"_snowpack/pkg/common/directory-open-abd2ea6b.js",revision:"15dc5e62e82bccfc642d6c512df5bab4"},{url:"_snowpack/pkg/common/file-open-5eb48e45.js",revision:"bfc71ef2886db943995bde8e1281bf7e"},{url:"_snowpack/pkg/common/file-open-aa0e13c8.js",revision:"a612a68213418d2147e397433a3d1315"},{url:"_snowpack/pkg/common/file-open-baef1b62.js",revision:"9ef0a07e122873e3b11f4cb4d0b6687b"},{url:"_snowpack/pkg/common/file-save-bedc4f3a.js",revision:"56332b4cfb0ac5fdb4708b2bde154404"},{url:"_snowpack/pkg/common/file-save-d64fc637.js",revision:"fce3a8ad4a5e097560945389f17d1b01"},{url:"_snowpack/pkg/common/file-save-f0a9af4f.js",revision:"729b1ad383c411878b4186c297b5c9e8"},{url:"_snowpack/pkg/hotkeys-js.js",revision:"b54b98df21d8723b6d9357177d189bb7"},{url:"_snowpack/pkg/import-map.json",revision:"6f7f634977177697bb5881d5c0c1b460"},{url:"_snowpack/pkg/lit-element.js",revision:"6c2d0a5f15493d4058f960c704f562e0"},{url:"_snowpack/pkg/q-floodfill.js",revision:"e8f8d94cf15908f49823b112e9ddf596"},{url:"3rdpartylicenses.txt",revision:"5668bbf7c0a6841b214fbc4f9516a29f"},{url:"assets/icon.png",revision:"6401a7111b0b39f29448b74969487757"},{url:"assets/tools-dark.png",revision:"cce885719ee12305612669b40d3be855"},{url:"assets/tools-light.png",revision:"db722feffdfe1b3869822b2c64aa15ff"},{url:"dist/actions/about.js",revision:"6c1416a9658593915533d646886c85dc"},{url:"dist/actions/clear-image.js",revision:"533a778365eb1b1269889f3409bb4bce"},{url:"dist/actions/clear-selection.js",revision:"aa466a2c40d25e2408b420c717d00397"},{url:"dist/actions/color-box.js",revision:"2d2c905fddb93e3e2876469f67224c18"},{url:"dist/actions/copy-to.js",revision:"85099627be7e233e795f6aef9b2bb689"},{url:"dist/actions/copy.js",revision:"05b20513db649e7b99e78fc8fd358f72"},{url:"dist/actions/cut.js",revision:"8af0f4e5971fc53951c32455cf28e0ba"},{url:"dist/actions/draw-opaque.js",revision:"046eedcf0a186a46e94c6f3c887d7225"},{url:"dist/actions/flip-rotate.js",revision:"b1d31b8d6af3c46e3b79ac6b722f3616"},{url:"dist/actions/get-colors.js",revision:"4f26eaf954cc3e3f223fd5f4f1ecaf78"},{url:"dist/actions/invert-image.js",revision:"d62f36108a88c02e68deea3ff817c405"},{url:"dist/actions/new.js",revision:"b97cfc6563d64c7f732905173bd44497"},{url:"dist/actions/open.js",revision:"1bd262f4a9704a2ad900bcf46b05a9c2"},{url:"dist/actions/paste-from.js",revision:"d009a7935ff775db48a475b5b2081d77"},{url:"dist/actions/paste.js",revision:"27e1a93924434e4fe3154aab40aa641f"},{url:"dist/actions/print.js",revision:"1e3bb05fe2ee2b2abf72a8ddf8c7f3fe"},{url:"dist/actions/save-as.js",revision:"a9ef55905a9946fde1fd800aafbe32e0"},{url:"dist/actions/save-colors.js",revision:"0085941281474d8693efdf413d2e8060"},{url:"dist/actions/save.js",revision:"895d8111a9f0392c16d17e71152ebd80"},{url:"dist/actions/select-all.js",revision:"efd146f13b9412893c06f74acaedaed5"},{url:"dist/actions/send.js",revision:"e5c3f0ec66fe2ba53d861e7bab1788a2"},{url:"dist/actions/status-bar.js",revision:"96f5c7f8b0de7e24c794eacc8861b057"},{url:"dist/actions/tool-box.js",revision:"2975b9720fc0ae0e2e5595651f3af1dc"},{url:"dist/actions/view-bitmap.js",revision:"e131d8568d4477e08ae3e63bd94d4c54"},{url:"dist/data/drawing-context.js",revision:"05505ce921e823875122f1cc30c23dd6"},{url:"dist/elements/app.js",revision:"a7ce6fa291e19fa4f02d67d7982c5ef9"},{url:"dist/elements/canvas.js",revision:"f902c7064a6900531e050e97a91cca9f"},{url:"dist/elements/color-box.js",revision:"f33cf74aea1d71d181d6a30e89476ec0"},{url:"dist/elements/color-picker.js",revision:"656e9bfa742047291d0461736c47f16d"},{url:"dist/elements/color-switcher.js",revision:"c31b3a1bcdafe9820c01a6557b8a23f2"},{url:"dist/elements/dialogs/about.js",revision:"4ed9cb4c847c9a230b34821bedae8e30"},{url:"dist/elements/dialogs/flip-and-rotate.js",revision:"e50374fe11bb222495c4a9d3b0e11c3e"},{url:"dist/elements/handle.js",revision:"b8d338e77563cd0971b2ba8b00180a8c"},{url:"dist/elements/index.js",revision:"e32db830151c26e7ffb5ab7e1afa1a20"},{url:"dist/elements/inset-container.js",revision:"b418096f1307b8f232faa5657b3d1aa2"},{url:"dist/elements/menu-bar.js",revision:"4867e55c67a73fb1e869d71bc0a34995"},{url:"dist/elements/menu.js",revision:"9e73ad7f68b6912c7c04b047473830e3"},{url:"dist/elements/ruler.js",revision:"1586de2d2941f8a1ab48118bc3b3fd1a"},{url:"dist/elements/status-bar.js",revision:"9621cb30f87549c3602bb0bd4ef6456a"},{url:"dist/elements/tool-bar.js",revision:"b24ef2f5d105c6ceeae31aab0debdaff"},{url:"dist/elements/tool-box.js",revision:"66950e56f5138a90e29d4ceffe5c94a6"},{url:"dist/elements/tool-brush.js",revision:"ebd5ef8349ddd0526ccc3dd59b3f43c7"},{url:"dist/elements/tool-color-preview.js",revision:"07b38165d15f4a9a4191727258ed7f06"},{url:"dist/elements/tool-draw-opaque.js",revision:"108bf712014ad48f9d6d72e822d15276"},{url:"dist/elements/tool-eraser-size.js",revision:"4fabc26ff8a9d45414ed0e8349a92230"},{url:"dist/elements/tool-fill-style.js",revision:"06b3690f59a701b5d6c3ace5fa9e968d"},{url:"dist/elements/tool-line-width.js",revision:"07eb84980ffa7b7d7cf95d16c2544125"},{url:"dist/elements/tool.js",revision:"16d95fb4db3b7a6c0d855ef1a3385a2a"},{url:"dist/elements/window/title-bar-button.js",revision:"96e2072443a9b47351346ca9c56ae379"},{url:"dist/elements/window/window.js",revision:"1d1cb8563c2859281bfcf495a8474e7a"},{url:"dist/helpers/draw-circle.js",revision:"c8d21e4237e83682b94319735681d4de"},{url:"dist/helpers/file-handling-api.js",revision:"0e3525b12364481a97b4a1fdcc60dc61"},{url:"dist/helpers/get-blob-from-selection.js",revision:"5a348ef321e180496b158f85c2a5b2a5"},{url:"dist/helpers/get-image-from-blob.js",revision:"3ce81db3434534b938b2e28d219c39dd"},{url:"dist/helpers/register-sw.js",revision:"a8421a03e923d1bee8137909b15c3881"},{url:"dist/helpers/render-mnemonic.js",revision:"ee8a774ffd52ac1e6ddce20c92fb32aa"},{url:"dist/helpers/update-context.js",revision:"da7854b3f34c5420b9ebd5e37b541af8"},{url:"dist/index.js",revision:"cba2b520fb1d7626578172144d612535"},{url:"dist/menus/all.js",revision:"c2168b9282d05132a8ca49da3afa1942"},{url:"dist/menus/edit.js",revision:"4e77ae4b77e67b5b5692a6a43bfacb5e"},{url:"dist/menus/file.js",revision:"b2211db3a9e5174d20e51c2a5dd33366"},{url:"dist/menus/help.js",revision:"42abda6565a655056a97a05b9f8a0ba0"},{url:"dist/menus/image.js",revision:"5be413a1afae4d16785a27c91d0198e3"},{url:"dist/menus/options.js",revision:"d5347b165ffceca689c38acaf2bd8f4d"},{url:"dist/menus/view.js",revision:"7c9696c43cda75c6cbd325471b369012"},{url:"dist/tools/all.js",revision:"366a23c0f866f7c9f5a37eb9939207d8"},{url:"dist/tools/brush.js",revision:"43efbb76991ecf7843585a06e131ddde"},{url:"dist/tools/ellipse.js",revision:"bfb7f7077a7a9de35a5502ff4990847e"},{url:"dist/tools/eraser.js",revision:"ff23c203a9f1818e7d4bb93d4d60d53a"},{url:"dist/tools/fill.js",revision:"6613aa979e24368dd1631ba36dbe04b5"},{url:"dist/tools/line.js",revision:"96b43f60832969f3107f0d6a2174ecae"},{url:"dist/tools/pencil.js",revision:"03718a15e9f5a8f1e9a6a957ac810c02"},{url:"dist/tools/pick.js",revision:"7eae6504b52fefde8706f04916488a31"},{url:"dist/tools/rectangle.js",revision:"b9f3e8a674584711d03c64e67ce24879"},{url:"dist/tools/select.js",revision:"bc3024e426bd4ad64c7d435071d03a8a"},{url:"favicon.ico",revision:"0e809cc049c23b8d405a2886b8f1a23e"},{url:"index.html",revision:"1baf888c640d44964fff734cd6478341"},{url:"manifest.webmanifest",revision:"17801e73089eddd79b11bd8d14c3e946"},{url:"styles.css",revision:"2349d151a833839647417e01e672129f"}],{})}));
