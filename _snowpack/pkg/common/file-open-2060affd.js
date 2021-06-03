// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileOpen = (async (e = {}) => new Promise((n, t) => {
  const o = document.createElement("input");
  o.type = "file";
  const i = [...(e.mimeTypes ? e.mimeTypes : []), e.extensions ? e.extensions : []].join();
  let r;
  o.multiple = e.multiple || !1, o.accept = i || "";

  const s = () => r(t);

  e.setupLegacyCleanupAndRejection ? r = e.setupLegacyCleanupAndRejection(s) : (r = e => {
    window.removeEventListener("pointermove", s), window.removeEventListener("pointerdown", s), window.removeEventListener("keydown", s), e && e(new DOMException("The user aborted a request.", "AbortError"));
  }, window.addEventListener("pointermove", s), window.addEventListener("pointerdown", s), window.addEventListener("keydown", s)), o.addEventListener("change", () => {
    r(), n(o.multiple ? Array.from(o.files) : o.files[0]);
  }), o.click();
}));

export default fileOpen;