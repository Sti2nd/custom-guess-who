/**
* Returns the file name, which should be the name of the person in the image
* @param path The import path
*/
export function getFileNameFromPath(path: string) {
    var out = path.split("/").slice(-1)[0].split(".")[0];
    if (path.includes("2Q==") || path.includes("blank_card"))
        out = "";
    return out;
}