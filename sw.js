if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-cf684d81"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"_snowpack/env.js",revision:"271340c8a4138e1e23f57808561235d0"},{url:"_snowpack/pkg/break-styled-lines.js",revision:"02c191e29e3f809c3ecca8b10da6842a"},{url:"_snowpack/pkg/bresenham-zingl.js",revision:"de8bb2b5453ec82f2918eb82c9538bfd"},{url:"_snowpack/pkg/browser-fs-access.js",revision:"bc04c4f7da11fdef5669ab3e306e5cfe"},{url:"_snowpack/pkg/common/directory-open-15776d53.js",revision:"8ae34aa890d0a6dbb1d79582bc96b252"},{url:"_snowpack/pkg/common/directory-open-abd2ea6b.js",revision:"15dc5e62e82bccfc642d6c512df5bab4"},{url:"_snowpack/pkg/common/directory-open-affbc94a.js",revision:"d2e7012b1c49d2c8d11692ced22a2cb9"},{url:"_snowpack/pkg/common/file-open-5eb48e45.js",revision:"bfc71ef2886db943995bde8e1281bf7e"},{url:"_snowpack/pkg/common/file-open-aa0e13c8.js",revision:"a612a68213418d2147e397433a3d1315"},{url:"_snowpack/pkg/common/file-open-e1660c35.js",revision:"ee84e801ad318b2aec332e80237e62a9"},{url:"_snowpack/pkg/common/file-save-bedc4f3a.js",revision:"56332b4cfb0ac5fdb4708b2bde154404"},{url:"_snowpack/pkg/common/file-save-d64fc637.js",revision:"fce3a8ad4a5e097560945389f17d1b01"},{url:"_snowpack/pkg/common/file-save-f0a9af4f.js",revision:"729b1ad383c411878b4186c297b5c9e8"},{url:"_snowpack/pkg/hotkeys-js.js",revision:"b54b98df21d8723b6d9357177d189bb7"},{url:"_snowpack/pkg/import-map.json",revision:"864495b75c4b7304ddf3f4aeca182e74"},{url:"_snowpack/pkg/lit-element.js",revision:"3a562b7a19168ef150b6393e5881e5e3"},{url:"_snowpack/pkg/q-floodfill.js",revision:"e8f8d94cf15908f49823b112e9ddf596"},{url:"3rdpartylicenses.txt",revision:"41f65e5316ba2755602d209b85482c5e"},{url:"assets/icon.png",revision:"6401a7111b0b39f29448b74969487757"},{url:"assets/tools-dark.png",revision:"cce885719ee12305612669b40d3be855"},{url:"assets/tools-light.png",revision:"db722feffdfe1b3869822b2c64aa15ff"},{url:"dist/actions/about.js",revision:"be148ab4dc749422ffadd9ade4e2659c"},{url:"dist/actions/clear-image.js",revision:"96f5128c12ca14c736bc3ee2aeb2915b"},{url:"dist/actions/clear-selection.js",revision:"8291a6f725cecd436ca7e5aa4f7067fd"},{url:"dist/actions/color-box.js",revision:"2d2c905fddb93e3e2876469f67224c18"},{url:"dist/actions/copy-to.js",revision:"b6abfa246e5021e152a2e8e0b772cc12"},{url:"dist/actions/copy.js",revision:"5ab82969ae6f4824e9a20ffbdd4fc1ac"},{url:"dist/actions/cut.js",revision:"413254c4abeb59fcdab618190743688a"},{url:"dist/actions/draw-opaque.js",revision:"046eedcf0a186a46e94c6f3c887d7225"},{url:"dist/actions/flip-rotate.js",revision:"2e2edf4f155a3744d3501b0b74252b5e"},{url:"dist/actions/get-colors.js",revision:"1cbc6ea9bea156785114c97ae0a38123"},{url:"dist/actions/invert-image.js",revision:"af0e7842fc967eca6d9a0472769c1d95"},{url:"dist/actions/new.js",revision:"00790811465623bb5c1653c1cb733d15"},{url:"dist/actions/open.js",revision:"9179d5a2bf1ec9e47bff55a39a3ac074"},{url:"dist/actions/paste-from.js",revision:"5af04145be7933232ec5c8a60d686179"},{url:"dist/actions/paste.js",revision:"f99caeb0aa4703f442de10b62781dc64"},{url:"dist/actions/print.js",revision:"1e3bb05fe2ee2b2abf72a8ddf8c7f3fe"},{url:"dist/actions/save-as.js",revision:"45325e9f1403462e7320eaaef3e2d0cb"},{url:"dist/actions/save-colors.js",revision:"c7256faaf1cbd96eb5e43285f5e52fcf"},{url:"dist/actions/save.js",revision:"560dd4c6523381ba171529407469a23d"},{url:"dist/actions/select-all.js",revision:"6616c439bde786086c3c9f34591e4842"},{url:"dist/actions/send.js",revision:"1619eeffd224380cae8807b84fa859f0"},{url:"dist/actions/status-bar.js",revision:"96f5c7f8b0de7e24c794eacc8861b057"},{url:"dist/actions/text-toolbar.js",revision:"2a6145752febb9e0e72cfc7ae9836344"},{url:"dist/actions/tool-box.js",revision:"2975b9720fc0ae0e2e5595651f3af1dc"},{url:"dist/actions/view-bitmap.js",revision:"a5b27b1404f5cf9e3935b070d5fe1a8a"},{url:"dist/data/drawing-context.js",revision:"1b6c7e06fb44e6698741699ccdd035bb"},{url:"dist/data/font-sizes.js",revision:"eaa11da04a0c6ebfa0ac00fe5cd62992"},{url:"dist/elements/app.js",revision:"08e318b070282b7f01bee8c33827a1a0"},{url:"dist/elements/canvas.js",revision:"a2f1e174430b87bf117a47296a0bd536"},{url:"dist/elements/color-box.js",revision:"531af7e5e46e47786685f1a838f471b2"},{url:"dist/elements/color-picker.js",revision:"7c84e59850dfb8536e177d13fbf83a76"},{url:"dist/elements/color-switcher.js",revision:"f7b73d0ff3bbb0c7f73cc0275258ed36"},{url:"dist/elements/dialogs/about.js",revision:"e397b7676cbebafb57cd7fa635eae042"},{url:"dist/elements/dialogs/flip-and-rotate.js",revision:"395b05bf7fc421aecc2c5165a1c414e1"},{url:"dist/elements/dialogs/text-toolbar.js",revision:"a4fd5041fc4789df579c28c6be5b913f"},{url:"dist/elements/handle.js",revision:"ff6eb0f42476680b24ed9d51953070d5"},{url:"dist/elements/index.js",revision:"f39f1a7a4c093015e01c5c99519e5849"},{url:"dist/elements/inset-container.js",revision:"a5caf5389ae54790dc2e1b640aef597c"},{url:"dist/elements/menu-bar.js",revision:"08fb240a3aefa8f841cc245c82509422"},{url:"dist/elements/menu.js",revision:"b2b1778300c4b8a2e1b6cb41626a77dc"},{url:"dist/elements/ruler.js",revision:"ab6477998f78bb7a6e055fe1bbd4af52"},{url:"dist/elements/select-box.js",revision:"e52610f4ae5b25125c4ffb43a913d0b3"},{url:"dist/elements/status-bar.js",revision:"1c2af5249c21ee4b7e7c5b7abdab156b"},{url:"dist/elements/text-area.js",revision:"014c4e174570874354d54a968d12f08c"},{url:"dist/elements/tool-airbrush.js",revision:"201ae7b879fbc2b4dc02c4a498ff8100"},{url:"dist/elements/tool-bar.js",revision:"6c739f92bc94205f59f356168997b8d6"},{url:"dist/elements/tool-box.js",revision:"9d0ba003eccb66adb7b27ea21c5bd057"},{url:"dist/elements/tool-brush.js",revision:"a03eea4d06af4982f9c101e3eb85116e"},{url:"dist/elements/tool-color-preview.js",revision:"3af5714085f7778cfd1f745697a2bf51"},{url:"dist/elements/tool-draw-opaque.js",revision:"1e4353b9f2f45bce65b355e2c6141d66"},{url:"dist/elements/tool-eraser-size.js",revision:"02e5c548bff72d45b5ea0c732d7a06b0"},{url:"dist/elements/tool-fill-style.js",revision:"2fa80968117a80c92603d73e1e4c131a"},{url:"dist/elements/tool-line-width.js",revision:"4ef0347f6287c22933a54f06a6fb70c6"},{url:"dist/elements/tool.js",revision:"1f411c22f4f8c2c40971bfa8f3f38fd3"},{url:"dist/elements/window/title-bar-button.js",revision:"3275f0492f8c1683cec8651d5dc34829"},{url:"dist/elements/window/window.js",revision:"11bedbde14e4d597c9462e67b1d6b5cd"},{url:"dist/helpers/clear-context.js",revision:"2fd2a98dbab9006868075cda52dee603"},{url:"dist/helpers/dispatch-area-event.js",revision:"ac3ff42b680ef5312ec88c664c1f5d14"},{url:"dist/helpers/draw-area-rectangle.js",revision:"85590675350e59a7a0566b9437ace65c"},{url:"dist/helpers/draw-circle.js",revision:"c8d21e4237e83682b94319735681d4de"},{url:"dist/helpers/evaluate-text-toolbar-visibility.js",revision:"f00c3526fa33016f4e4c7233abb8097e"},{url:"dist/helpers/file-handling-api.js",revision:"b0cefd08a3068253f753e45e0b93fc64"},{url:"dist/helpers/fill-ellipse.js",revision:"f68b0cdccb27c73169036cb416f7685e"},{url:"dist/helpers/get-blob-from-selection.js",revision:"d2063f093d02d79e0280958a6754e59c"},{url:"dist/helpers/get-image-from-blob.js",revision:"3ce81db3434534b938b2e28d219c39dd"},{url:"dist/helpers/get-local-fonts.js",revision:"45fd28886db44b5b9d09b7ee2bae8dda"},{url:"dist/helpers/load-file-and-adjust-canvas.js",revision:"490d25ccac8a2fff2be657ab0a3e5f87"},{url:"dist/helpers/register-sw.js",revision:"a8421a03e923d1bee8137909b15c3881"},{url:"dist/helpers/render-mnemonic.js",revision:"d122a9c23605fb8dd60444083b3b98a0"},{url:"dist/helpers/to-blob.js",revision:"2c27ebb73c5a365562d20624b4257884"},{url:"dist/helpers/update-context.js",revision:"838a355ca42d3728f154ec94fff1ea01"},{url:"dist/index.js",revision:"aca0c9dd196af62907575c52624e3e1e"},{url:"dist/menus/all.js",revision:"3ffa3900c2e14874cef336ca287d0b17"},{url:"dist/menus/edit.js",revision:"3d53c00088886e4ec491652ae4a02a5a"},{url:"dist/menus/file.js",revision:"88994052cab98667ee0b0b950d4057b7"},{url:"dist/menus/help.js",revision:"42abda6565a655056a97a05b9f8a0ba0"},{url:"dist/menus/image.js",revision:"5be413a1afae4d16785a27c91d0198e3"},{url:"dist/menus/options.js",revision:"d5347b165ffceca689c38acaf2bd8f4d"},{url:"dist/menus/view.js",revision:"c8a98e4568d2675277ef7531069ded3d"},{url:"dist/tools/airbrush.js",revision:"9cceebbe33720d8e2fbeaae3c4289dd4"},{url:"dist/tools/all.js",revision:"2f78b651f63fa3a1aca21ccc94ccceca"},{url:"dist/tools/brush.js",revision:"769aa6d2e43a188b73f157ddef26c094"},{url:"dist/tools/ellipse.js",revision:"abcabd3a7b3e4c5fd19c43d739a03444"},{url:"dist/tools/eraser.js",revision:"814f70eadd8a97e8c44639fcee22df68"},{url:"dist/tools/fill.js",revision:"c13230f072da1682d50f0d9483d6ad76"},{url:"dist/tools/line.js",revision:"866111e4afa9c1f0f7a13f8a0802ed46"},{url:"dist/tools/pencil.js",revision:"562a461be9cc287b8de3d78b105a3119"},{url:"dist/tools/pick.js",revision:"7d0fcdf453b43313f6b448b28e1f7a34"},{url:"dist/tools/rectangle.js",revision:"ea90e7c9a18a8e7c35a8416f15e2800c"},{url:"dist/tools/select.js",revision:"9f32a40eb0142c3e8d165b2aff123852"},{url:"dist/tools/text.js",revision:"78b81f7f1df754bfe8ca62d0c5c39035"},{url:"favicon.ico",revision:"0e809cc049c23b8d405a2886b8f1a23e"},{url:"index.html",revision:"cf6ba61bc249b6b44f7e49e9082ccea9"},{url:"manifest.webmanifest",revision:"17801e73089eddd79b11bd8d14c3e946"},{url:"styles.css",revision:"2349d151a833839647417e01e672129f"}],{})}));
