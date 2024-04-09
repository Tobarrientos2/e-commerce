

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/productos/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DPdp3UwO.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Cxe-7pYe.js"];
export const stylesheets = [];
export const fonts = [];
