export const LAJI_MODAL_EVENT = "open-laji-modal";

export function openLajiModal(lajiId: string) {
  if (typeof document === "undefined") return;
  document.dispatchEvent(new CustomEvent(LAJI_MODAL_EVENT, { detail: lajiId }));
}
