// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileSave = async (e, t = {}, i = null, a = false) => {
  t.fileName = t.fileName || "Untitled";
  const s = {};
  if (t.mimeTypes ? (t.mimeTypes.push(e.type), t.mimeTypes.map((e2) => {
    s[e2] = t.extensions || [];
  })) : s[e.type] = t.extensions || [], i)
    try {
      await i.getFile();
    } catch (e2) {
      if (i = null, a)
        throw e2;
    }
  const n = i || await window.showSaveFilePicker({suggestedName: t.fileName, types: [{description: t.description || "", accept: s}]}), l = await n.createWritable();
  return await l.write(e), await l.close(), n;
};

export default fileSave;