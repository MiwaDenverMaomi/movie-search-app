export const validRequired = (val: any) => {
  let validSpace = val.replace(/\s+/g, '');

  if (validSpace.length !== 0) {
    return true;
  }
    return false;
}

export const sanitize = (val: any) => {
  return String(val).replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
};
