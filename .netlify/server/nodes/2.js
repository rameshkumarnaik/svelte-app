

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BH-kYBw0.js","_app/immutable/chunks/scheduler.OxtqBEFh.js","_app/immutable/chunks/index.Iti9TRYO.js","_app/immutable/chunks/create-styles.BCvf_QIl.js","_app/immutable/chunks/index.BXB1qWTm.js"];
export const stylesheets = ["_app/immutable/assets/2.C2iqmPvo.css"];
export const fonts = [];
