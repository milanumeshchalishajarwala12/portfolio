import {
  getStorage,
  ref,
  listAll,
  FirebaseStorage,
  getDownloadURL,
} from "firebase/storage";

// Find all the prefixes and items.
export const getStorageItemsByPath = async (
  storageConfig: any,
  path: string
) => {
  const listRef = ref(storageConfig, path);
  let imageUrls: string[] = [];
  listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {});
      res.items.forEach(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        imageUrls.push(url);
      });
    })
    .catch((error) => {});
  return imageUrls || [];
};
