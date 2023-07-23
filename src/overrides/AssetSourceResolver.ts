/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Platform as RNPlatform } from "react-native";

// Import any required types/interfaces from '../Utilities/PixelRatio', './AssetUtils', and './AssetRegistry'.
// Replace the any type with the actual types/interfaces you need to import.

const PixelRatio: any = require("../Utilities/PixelRatio");
const { pickScale }: any = require("./AssetUtils");
const {
  getAndroidResourceFolderName,
  getAndroidResourceIdentifier,
  getImageSourceForAsset,
  pickScaleType,
  getAssetDataFromURI,
}: any = require("./AssetRegistry");

let Platform: any;
if (RNPlatform) {
  Platform = RNPlatform;
} else {
  // Define a dummy object or function for React Native Web
  Platform = {
    OS: "web",
    select: () => {},
  };
}

// Export the necessary functions, variables, or classes from the original module.
// Replace the any type with the actual types/interfaces you need to export.

export {
  PixelRatio,
  pickScale,
  getAndroidResourceFolderName,
  getAndroidResourceIdentifier,
  getImageSourceForAsset,
  pickScaleType,
  getAssetDataFromURI,
  Platform,
};
