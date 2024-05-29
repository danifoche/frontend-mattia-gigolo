import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"\u002FUsers\u002Fdaniele\u002FDocuments\u002Fprojects\u002Fpersonal\u002Fwebsites\u002Fmattia-gigolo\u002Ffrontend\u002Fnode_modules\u002Fvue-toastification\u002Fdist\u002Findex.css","draggable":false});
  inject('toast', toast);
}
