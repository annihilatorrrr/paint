// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileSave = (async (e, t = {}) => {
  Array.isArray(t) && (t = t[0]);
  const n = document.createElement("a");
  let c;
  n.download = t.fileName || "Untitled", n.href = URL.createObjectURL(e);

  const a = () => c(reject);

  return t.setupLegacyCleanupAndRejection && (c = t.setupLegacyCleanupAndRejection(a)), n.addEventListener("click", () => {
    "function" == typeof c && c(), setTimeout(() => URL.revokeObjectURL(n.href), 3e4);
  }), n.click(), null;
});

export default fileSave;
