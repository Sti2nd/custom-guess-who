/**
* Returns the file name, which should be the name of the person in the image
* @param {string} path The import path
*/
export function getFileNameFromPath(path) {
 return path.split("/").slice(-1)[0].split(".")[0];
}