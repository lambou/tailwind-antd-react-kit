import { basename, extname } from "path";
import Backend from "./Backend";

/**
 * Get media information
 * @param mediaPath resource path on the server
 */
export const getMediaInfo = (mediaPath: string) => {
  const url = `${Backend.getInstance().BASE_URL}${mediaPath}`;
  return {
    url: url,
    fileName: basename(url),
    extension: extname(url),
  };
};
