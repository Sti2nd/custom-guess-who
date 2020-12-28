/**
 * Returns the file name, which should be the name of the person in the image
 * @param path The import path
 */
export function getFileNameFromPath(path: string) {
  var out = path.split("/").slice(-1)[0].split(".")[0];
  if (path.includes("2Q==") || path.includes("blank_card")) out = "";
  return out;
}

/**
 * Import all images from a folder by using WebPack require.
 * https://webpack.js.org/guides/dependency-management/#context-module-api
 * @returns {Array} List of image paths
 */
export function importAllImages(): Array<string> {
  const r: __WebpackModuleApi.RequireContext = require.context(
    "../faces",
    false,
    /\.(PNG|png|jpe?g|JPE?G|svg|SVG)$/
  );
  return r.keys().map(r) as Array<string>;
}
