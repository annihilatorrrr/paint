if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,r,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return i;case"module":return o;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-af7d0aae"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"styles.css",revision:"2349d151a833839647417e01e672129f"},{url:"index.html",revision:"e3927ac69f9f824f5f963c6755d17a6a"},{url:"actions/about.js",revision:"66eb5787d65a1d1f7c5f4cd398bc02d7"},{url:"actions/clear-image.js",revision:"9c2ec9f8694e3692b0801d978397b29c"},{url:"actions/clear-selection.js",revision:"35a126e153424728a89006c1347483be"},{url:"actions/color-box.js",revision:"c93f3e7b55713f517fa583332dde2eb4"},{url:"actions/copy-to.js",revision:"6400d2e8327c3dd46fb540e5cf3e9804"},{url:"actions/copy.js",revision:"889ed72fd88566cba466e964a7a0e2a5"},{url:"actions/cut.js",revision:"fa55dba23082941f95acb20156889544"},{url:"actions/draw-opaque.js",revision:"3d627555a891a3498344ffc5923d3fbd"},{url:"actions/flip-rotate.js",revision:"5b544501a7e83a933f5b0ab9a06a7966"},{url:"actions/get-colors.js",revision:"d24dce182c806b1045b0e5b5aeb8c3bb"},{url:"actions/invert-image.js",revision:"b401103ebf6e8936322581484b8522b9"},{url:"actions/new.js",revision:"8603fe9d0c5ab66d4a70a21e9e6427bd"},{url:"actions/open.js",revision:"6be525fe00c3dca2477b7bd493982e62"},{url:"actions/paste-from.js",revision:"08652a4b0fa870bf670108363b9f00a1"},{url:"actions/paste.js",revision:"171f4c35ebd3d7fd1ac00d22c0e1585c"},{url:"actions/print.js",revision:"6a4d63b555f546c8a03439474d2b85fc"},{url:"actions/save-as.js",revision:"6c7b88c613f389f5eecd2aca4e47923a"},{url:"actions/save-colors.js",revision:"7c9da177af6612cf74ec935f10fb1a2b"},{url:"actions/save.js",revision:"a1a966c25a3aa83617bb66541e7b188a"},{url:"actions/select-all.js",revision:"5567741c2e8bada7985a02f4859f616e"},{url:"actions/send.js",revision:"92b958899392d5bf7a8830a187fed00b"},{url:"actions/status-bar.js",revision:"bdd2215e191694174d243cf03389bc28"},{url:"actions/tool-box.js",revision:"4278c6a9d6a1d88727f11c67df5bc788"},{url:"actions/view-bitmap.js",revision:"401b94dd035337f400e94f127f89625d"},{url:"data/drawing-context.js",revision:"2fc7cb1f298c431dc024d7116bf2a114"},{url:"elements/app.js",revision:"8aeb4499f860a4734a49df1ece5e9d45"},{url:"elements/canvas.js",revision:"6b015022c79577d99341b4b12ee72430"},{url:"elements/color-box.js",revision:"e2f5a11623df90f012067d042d639668"},{url:"elements/color-picker.js",revision:"a802a77e20145c9b6c765d7ff600a288"},{url:"elements/color-switcher.js",revision:"bd866fe1dc4dbf499e4fa9c2b6be0083"},{url:"elements/dialogs/about.js",revision:"8f4ecd29201d8d1a8ecadddda5d90425"},{url:"elements/dialogs/flip-and-rotate.js",revision:"c4ae8753bf0c82b6f68c0b9faf93567e"},{url:"elements/handle.js",revision:"a962a8feedb9bcbfb2f0ac11cf7305ae"},{url:"elements/index.js",revision:"6013a2ce3ec74aafaa8117e8a8e092d1"},{url:"elements/inset-container.js",revision:"3d45328005f907f75175eeb395c70362"},{url:"elements/menu-bar.js",revision:"bb408f728c53e9c252fcf69d414e91cd"},{url:"elements/menu.js",revision:"32e10c3a0fb3266da7b60a7962283e99"},{url:"elements/ruler.js",revision:"b3511c85f37946b946166b4d7a6ad90a"},{url:"elements/status-bar.js",revision:"52e287ff3351495c42bf7a3f967bfa88"},{url:"elements/tool-bar.js",revision:"36eab9d062c2dccc12c080a31b66c0c2"},{url:"elements/tool-box.js",revision:"9f43906c391d53db27e90d9f6926d77c"},{url:"elements/tool-brush.js",revision:"6e70e1a8c9df63c6583a22bd851a2e28"},{url:"elements/tool-color-preview.js",revision:"819c2b41e2c911e51d826facc32ace73"},{url:"elements/tool-draw-opaque.js",revision:"3582643703a01bdd9cfe28d9b99078a7"},{url:"elements/tool-eraser-size.js",revision:"a7a26f3791a36184163bac7191fb1b9f"},{url:"elements/tool-fill-style.js",revision:"50fcb700b98715e841042667e8c3a010"},{url:"elements/tool-line-width.js",revision:"73521d1a22d8a42efed7409d63420f3e"},{url:"elements/tool.js",revision:"885c86499a26a3858bbfa991a08dd4b0"},{url:"elements/window/title-bar-button.js",revision:"9544d3becf17f352fcb31c7578a4a81b"},{url:"elements/window/window.js",revision:"3cfdb895ff36c89c1a4c0060fbfdd287"},{url:"helpers/draw-circle.js",revision:"8279f07314bf0688b55e3618bd51f6eb"},{url:"helpers/get-blob-from-selection.js",revision:"16bec3017610e95845c3f6c2a7f11f16"},{url:"helpers/get-image-from-blob.js",revision:"b8c32ca578f81120741cb7f100422aaa"},{url:"helpers/register-sw.js",revision:"68c1f0821b9ceb5a2894660b917d6891"},{url:"helpers/render-mnemonic.js",revision:"983ea70eaa15dedbd4ffdf9497209e7b"},{url:"helpers/update-context.js",revision:"ac5488706f72864fbe0cdb95eda42ea0"},{url:"menus/all.js",revision:"1da72ab5b140d4368f492fee7a958fed"},{url:"menus/edit.js",revision:"5b295dafaf61aa72fe01bffdef96206f"},{url:"menus/file.js",revision:"82477218261e929a53f1267556bd913b"},{url:"menus/help.js",revision:"bea0523645dab5bfe4cc3c96d1d30164"},{url:"menus/image.js",revision:"1059caf6580d512e9a0f34fe02eceb9a"},{url:"menus/options.js",revision:"2d510b3695b3e33f9ed2ee79271242e2"},{url:"menus/view.js",revision:"537728c9698cbf477dbf894fdca2b1cc"},{url:"tools/all.js",revision:"610c675b83eb1fa06166a9c8b0c94fce"},{url:"tools/brush.js",revision:"585342a32094642f6c55c2294dd55b7d"},{url:"tools/ellipse.js",revision:"d0a55d24bccb1f2153b2a9c0ffdfdf7d"},{url:"tools/eraser.js",revision:"8cd9430095b0643b28eabe4f3d87cf0b"},{url:"tools/fill.js",revision:"6c3d6af4f848d2a391a5647097825179"},{url:"tools/line.js",revision:"0d37b7f17ddaa03b394e3e374c64ee13"},{url:"tools/pencil.js",revision:"384544a81fedacaac89af633e6be4838"},{url:"tools/pick.js",revision:"004c7578f6c2444529cd05f735e9e130"},{url:"tools/rectangle.js",revision:"f867aa490d9797cd4a8393867627a49c"},{url:"tools/select.js",revision:"367f6b2fa407446e2b46ba9ed7c76d19"},{url:"web_modules/bresenham-zingl.js",revision:"b660c21f2eda9e62807a8a55575c5f65"},{url:"web_modules/browser-nativefs.js",revision:"6761cd4b495b61bfd4893f67d81e8d11"},{url:"web_modules/common/directory-open-50706e94.js",revision:"31699066759174a8c1a2050a40a81ca0"},{url:"web_modules/common/directory-open-7bae6a7f.js",revision:"29bc3c0deac8859cf4c8ee26593d299d"},{url:"web_modules/common/directory-open-eb3669c5.js",revision:"15c79ae4acbc82dd1b6e1755d285db1a"},{url:"web_modules/common/file-open-6ce9eb2c.js",revision:"e2ebd80219dfc8aef14b1e787d1c4317"},{url:"web_modules/common/file-open-f9a5f1c4.js",revision:"d4f7e6a318ae8dc64625809d066a00f3"},{url:"web_modules/common/file-open-fac3d0b1.js",revision:"bfc71ef2886db943995bde8e1281bf7e"},{url:"web_modules/common/file-save-15adb038.js",revision:"56332b4cfb0ac5fdb4708b2bde154404"},{url:"web_modules/common/file-save-3e74be39.js",revision:"89b6c9ba5b01937084690b115a04770e"},{url:"web_modules/common/file-save-70a78426.js",revision:"813d76449ef7bbfd579d3f61f91ff8a1"},{url:"web_modules/hotkeys-js.js",revision:"efe6753e1987c9331bda4737da130ede"},{url:"web_modules/lit-element.js",revision:"92a2d82ca6c36e317ec6dd9c2fd48730"},{url:"web_modules/q-floodfill.js",revision:"02a43c9f5f7d02fdf69b29c48ea6765c"},{url:"assets/icon.png",revision:"6401a7111b0b39f29448b74969487757"},{url:"assets/tools-dark.png",revision:"cce885719ee12305612669b40d3be855"},{url:"assets/tools-light.png",revision:"db722feffdfe1b3869822b2c64aa15ff"},{url:"manifest.webmanifest",revision:"ca8b0223e22674e208cc3c224d172f9c"},{url:"favicon.ico",revision:"0e809cc049c23b8d405a2886b8f1a23e"},{url:"3rdpartylicenses.txt",revision:"3ed03cf93257661e57a2c389694c4267"}],{})}));
