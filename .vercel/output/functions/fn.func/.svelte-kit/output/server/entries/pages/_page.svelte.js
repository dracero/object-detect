import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const Cam = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videoRef;
  let canvasRef;
  return `<section class="container mx-auto px-4"><h1 class="text-4xl text-blue-500 my-4">Webcam Stream Mastery</h1>
    <button class="rounded-sm bg-blue-600 text-white px-4 py-2">Take Photo</button>
    
    <video class="mt-4 rounded-sm " width="640" height="480" ${"autoplay"}${add_attribute("this", videoRef, 0)}></video>

    <canvas class="mt-4 rounded-sm" width="640" height="480"${add_attribute("this", canvasRef, 0)}></canvas></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Cam, "Cam").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
