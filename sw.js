if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,d,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-f7715658"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"_snowpack/env.js",revision:"271340c8a4138e1e23f57808561235d0"},{url:"_snowpack/pkg/break-styled-lines.js",revision:"02c191e29e3f809c3ecca8b10da6842a"},{url:"_snowpack/pkg/bresenham-zingl.js",revision:"7041f3997351c03822facbd286d22c39"},{url:"_snowpack/pkg/browser-fs-access.js",revision:"137623398a6494e0e2f49aa255fbdb40"},{url:"_snowpack/pkg/common/directory-open-037507cf.js",revision:"ea0a98fb53a4613bb59e8072f74408ab"},{url:"_snowpack/pkg/common/directory-open-27d94dc1.js",revision:"9c2843f7257c89ad24e38db0562368fe"},{url:"_snowpack/pkg/common/directory-open-b1926eca.js",revision:"429f86d711b90e1fa731652bcffdee41"},{url:"_snowpack/pkg/common/file-open-02457eb1.js",revision:"aef2980a67bc1cd9c4d752f273b74b07"},{url:"_snowpack/pkg/common/file-open-2060affd.js",revision:"3c43be4da0130e92542de0d0116e48f7"},{url:"_snowpack/pkg/common/file-open-430cd9a7.js",revision:"7928b1da3c454b8f211793054b32f58e"},{url:"_snowpack/pkg/common/file-save-37f64574.js",revision:"d42a33e5a9cc00546b4de4a9a8e1f9f5"},{url:"_snowpack/pkg/common/file-save-43578d3f.js",revision:"6da245ff0caf246ce81f6f3d2f8bd7a5"},{url:"_snowpack/pkg/common/file-save-9ebdfaae.js",revision:"ec1c6df0307a6e45cdf9e94844f1d0a1"},{url:"_snowpack/pkg/hotkeys-js.js",revision:"bae4074911867230da01feaf64a03214"},{url:"_snowpack/pkg/import-map.json",revision:"27b73a42b6c89cd9f6a05d365d23418c"},{url:"_snowpack/pkg/lit.js",revision:"25ee96f2c74f0c2133f4c6104b9c8f2d"},{url:"_snowpack/pkg/lit/decorators.js",revision:"7740679371434acdf0e82814182a3724"},{url:"_snowpack/pkg/q-floodfill.js",revision:"1f6bc5876fb8aa7fefc5437947258fb3"},{url:"3rdpartylicenses.txt",revision:"80025f3b69c8d7f0fc58c8696bd22f30"},{url:"assets/icon.png",revision:"6401a7111b0b39f29448b74969487757"},{url:"assets/tools-dark.png",revision:"cce885719ee12305612669b40d3be855"},{url:"assets/tools-light.png",revision:"db722feffdfe1b3869822b2c64aa15ff"},{url:"dist/data/drawing-context.js",revision:"c2e9ae9296a972d0c7d63f95e092dc1f"},{url:"dist/data/font-sizes.js",revision:"eaa11da04a0c6ebfa0ac00fe5cd62992"},{url:"dist/elements/app.js",revision:"346bcf98f858368947bddf83e8d60e4e"},{url:"dist/elements/button.js",revision:"e67189396188f84fa51eaf5867570a5e"},{url:"dist/elements/canvas.js",revision:"84e01e9474579952c585074421d76974"},{url:"dist/elements/color-box.js",revision:"3da23c87ad1632f40afc8b378bd3fbcd"},{url:"dist/elements/color-picker.js",revision:"a5d0092c132311aef269582560d0d9ea"},{url:"dist/elements/color-switcher.js",revision:"856a3b2bd6276f543b04f848606e78d8"},{url:"dist/elements/dialogs/about.js",revision:"d2a58db0aa370a2b40ce85ded59c665c"},{url:"dist/elements/dialogs/flip-and-rotate.js",revision:"9bb1619809f1d852c0ae917799eff70a"},{url:"dist/elements/dialogs/message-box.js",revision:"d527f67f69d2fd30d90a6cbc9cc1a0bd"},{url:"dist/elements/dialogs/text-toolbar.js",revision:"f6f65869610851dbe21035b77bb19f87"},{url:"dist/elements/handle.js",revision:"89504cf0efc690dde8a1184573e95c02"},{url:"dist/elements/index.js",revision:"9fe02ef757f0f16eca6750f932032946"},{url:"dist/elements/inset-container.js",revision:"5b638847cb79e361578c9f09367e9f19"},{url:"dist/elements/menu-bar.js",revision:"3f338207ca37090a876a66527051e250"},{url:"dist/elements/menu.js",revision:"2c8c76d33e3129adccb3172500ffcca0"},{url:"dist/elements/ruler.js",revision:"e9b401e6837a83a0961afb91c0efffb9"},{url:"dist/elements/select-box.js",revision:"9f42c66f76868d6411ab77914cb68669"},{url:"dist/elements/status-bar.js",revision:"ec7e93c28bc89a1d58a3923a286a0598"},{url:"dist/elements/text-area.js",revision:"05b1de30a0658d7eaa4fa961db5c8800"},{url:"dist/elements/tool-airbrush.js",revision:"20c3c19ff3d82cc28f1c28712491d263"},{url:"dist/elements/tool-bar.js",revision:"0206bca6d5bd85681c482331c49b7e43"},{url:"dist/elements/tool-box.js",revision:"7792a1e85c4b590dce70fe0daa2024b8"},{url:"dist/elements/tool-brush.js",revision:"6a547bbae2b8f761959c474b86833f6d"},{url:"dist/elements/tool-color-preview.js",revision:"54af0326322f7f34c3f21d74a2db3a24"},{url:"dist/elements/tool-draw-opaque.js",revision:"7bf5ebb9f770887dd6c598f144c08512"},{url:"dist/elements/tool-eraser-size.js",revision:"138c896b527218aa4ceb8d7714c74400"},{url:"dist/elements/tool-fill-style.js",revision:"635d2c278fde09714307ff0130af6ed6"},{url:"dist/elements/tool-line-width.js",revision:"224b0f2aed51d5bcfba9631da9169850"},{url:"dist/elements/tool.js",revision:"b5837d6d3f8ca9c09b96bee05d14ea8e"},{url:"dist/elements/window/title-bar-button.js",revision:"135db0261a016ccde8a4ac713e8e7bfd"},{url:"dist/elements/window/window.js",revision:"434e36c76bd51143902a05691660094b"},{url:"dist/helpers/clear-canvas.js",revision:"0de5273349560036fd23df415cfe3425"},{url:"dist/helpers/clear-context.js",revision:"2fd2a98dbab9006868075cda52dee603"},{url:"dist/helpers/dispatch-area-event.js",revision:"ac3ff42b680ef5312ec88c664c1f5d14"},{url:"dist/helpers/draw-area-rectangle.js",revision:"85590675350e59a7a0566b9437ace65c"},{url:"dist/helpers/draw-circle.js",revision:"c8d21e4237e83682b94319735681d4de"},{url:"dist/helpers/evaluate-text-toolbar-visibility.js",revision:"f00c3526fa33016f4e4c7233abb8097e"},{url:"dist/helpers/file-handling-api.js",revision:"b0cefd08a3068253f753e45e0b93fc64"},{url:"dist/helpers/fill-ellipse.js",revision:"f68b0cdccb27c73169036cb416f7685e"},{url:"dist/helpers/get-blob-from-selection.js",revision:"d2063f093d02d79e0280958a6754e59c"},{url:"dist/helpers/get-image-from-blob.js",revision:"a762d1c2cc2e85ef785576440ea970f0"},{url:"dist/helpers/get-local-fonts.js",revision:"45fd28886db44b5b9d09b7ee2bae8dda"},{url:"dist/helpers/history.js",revision:"1d3a6a407b87d1c16dc6c155ddc70471"},{url:"dist/helpers/load-file-and-adjust-canvas.js",revision:"490d25ccac8a2fff2be657ab0a3e5f87"},{url:"dist/helpers/message-box.js",revision:"85da1c48610c1c1343a943b0bb3a6350"},{url:"dist/helpers/normalize-hotkey.js",revision:"be5c17a2133bffa635446e2416c4adb5"},{url:"dist/helpers/register-drag-drop.js",revision:"b4d9ac9933027f025920ed2f5668d73a"},{url:"dist/helpers/register-sw.js",revision:"a8421a03e923d1bee8137909b15c3881"},{url:"dist/helpers/render-mnemonic.js",revision:"5689f18958fcc8242b5295789ce66c38"},{url:"dist/helpers/to-blob.js",revision:"2c27ebb73c5a365562d20624b4257884"},{url:"dist/helpers/update-context.js",revision:"838a355ca42d3728f154ec94fff1ea01"},{url:"dist/helpers/update-document-context.js",revision:"f8df3c40ce2bd12d681fd3f7f3416ab9"},{url:"dist/index.js",revision:"aca0c9dd196af62907575c52624e3e1e"},{url:"dist/menus/all.js",revision:"5a96b937ff1e91c040c6af665f887476"},{url:"dist/menus/edit/clear-selection.js",revision:"8291a6f725cecd436ca7e5aa4f7067fd"},{url:"dist/menus/edit/copy-to.js",revision:"3b6f70ad9ba46863bd3f0060f8944871"},{url:"dist/menus/edit/copy.js",revision:"6a50b0a12ed927ebb1d5952343dae6eb"},{url:"dist/menus/edit/cut.js",revision:"413254c4abeb59fcdab618190743688a"},{url:"dist/menus/edit/index.js",revision:"28f420a063ea24674e4658cce83919ab"},{url:"dist/menus/edit/paste-from.js",revision:"80e206bbfcc4d5938853cfd5183c07de"},{url:"dist/menus/edit/paste.js",revision:"af60ae5c3325d4029e2fc303a607e86e"},{url:"dist/menus/edit/redo.js",revision:"a6d81135194a4e31879d188f7b8539e1"},{url:"dist/menus/edit/select-all.js",revision:"bb009323fc57e2400f2ef6f156d65365"},{url:"dist/menus/edit/undo.js",revision:"8689936629f2316464ce14a63c6bd8ae"},{url:"dist/menus/file/exit.js",revision:"c22523d61636eeb2b9b682bcce58c346"},{url:"dist/menus/file/index.js",revision:"10bcef0716173857c7261c00d7f53850"},{url:"dist/menus/file/new.js",revision:"aaca297e2db664b6a7906ce1d4dd9722"},{url:"dist/menus/file/open.js",revision:"edfab2ac8efb2c70baeb10d74a1efef4"},{url:"dist/menus/file/print.js",revision:"1e3bb05fe2ee2b2abf72a8ddf8c7f3fe"},{url:"dist/menus/file/save-as.js",revision:"d2d0fbf616db50b4793fb63070c12003"},{url:"dist/menus/file/save.js",revision:"7612118f057fcb1522f7a7a0f9f8c3cb"},{url:"dist/menus/file/send.js",revision:"8c8a54bcf26679f8be54fb97924a113f"},{url:"dist/menus/help/about.js",revision:"be148ab4dc749422ffadd9ade4e2659c"},{url:"dist/menus/help/index.js",revision:"f8a8073425278016891aafa3b1f68ecb"},{url:"dist/menus/image/clear-image.js",revision:"5b72a892ece85dacf4c1bea4663a0d35"},{url:"dist/menus/image/flip-rotate.js",revision:"2e2edf4f155a3744d3501b0b74252b5e"},{url:"dist/menus/image/index.js",revision:"b80ee62309942008c9e9caa74ac0da8a"},{url:"dist/menus/image/invert-image.js",revision:"278cf9c49099245971c46d7ef41d6911"},{url:"dist/menus/options/draw-opaque.js",revision:"31c941d14d7111b13bbd2307a79c9231"},{url:"dist/menus/options/get-colors.js",revision:"405de2eb64aec9ecd9b512e11da8b0b0"},{url:"dist/menus/options/index.js",revision:"951fa956b4e85e507ebafd7e69d98ddc"},{url:"dist/menus/options/save-colors.js",revision:"b4effcbc376c4c24193726f4643739c3"},{url:"dist/menus/view/color-box.js",revision:"02da3ad09f5a98477ed8f10a6f09579e"},{url:"dist/menus/view/index.js",revision:"9b122bc289f884943686c9f1f008c497"},{url:"dist/menus/view/status-bar.js",revision:"728106e5bc6e325b8ccfa1ee103a27ea"},{url:"dist/menus/view/text-toolbar.js",revision:"bf0b259effba7f690d581c7fa86817c4"},{url:"dist/menus/view/tool-box.js",revision:"b38f0d80e20beb438339db31292bc3e7"},{url:"dist/menus/view/view-bitmap.js",revision:"a5b27b1404f5cf9e3935b070d5fe1a8a"},{url:"dist/tools/airbrush.js",revision:"9cceebbe33720d8e2fbeaae3c4289dd4"},{url:"dist/tools/all.js",revision:"2f78b651f63fa3a1aca21ccc94ccceca"},{url:"dist/tools/brush.js",revision:"769aa6d2e43a188b73f157ddef26c094"},{url:"dist/tools/ellipse.js",revision:"abcabd3a7b3e4c5fd19c43d739a03444"},{url:"dist/tools/eraser.js",revision:"814f70eadd8a97e8c44639fcee22df68"},{url:"dist/tools/fill.js",revision:"c13230f072da1682d50f0d9483d6ad76"},{url:"dist/tools/line.js",revision:"866111e4afa9c1f0f7a13f8a0802ed46"},{url:"dist/tools/pencil.js",revision:"562a461be9cc287b8de3d78b105a3119"},{url:"dist/tools/pick.js",revision:"7d0fcdf453b43313f6b448b28e1f7a34"},{url:"dist/tools/rectangle.js",revision:"ea90e7c9a18a8e7c35a8416f15e2800c"},{url:"dist/tools/select.js",revision:"9f32a40eb0142c3e8d165b2aff123852"},{url:"dist/tools/text.js",revision:"78b81f7f1df754bfe8ca62d0c5c39035"},{url:"favicon.ico",revision:"0e809cc049c23b8d405a2886b8f1a23e"},{url:"index.html",revision:"cf6ba61bc249b6b44f7e49e9082ccea9"},{url:"manifest.webmanifest",revision:"17801e73089eddd79b11bd8d14c3e946"},{url:"styles.css",revision:"2349d151a833839647417e01e672129f"}],{})}));
