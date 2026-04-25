export const MAKSU_MODAL_EVENT = "open-maksu-modal";

export function openMaksuModal() {
  if (typeof document === "undefined") return;
  document.dispatchEvent(new Event(MAKSU_MODAL_EVENT));
}
