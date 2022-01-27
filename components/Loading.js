import { useEffect, useState } from 'react';

const heavyFilePaths = [];

async function waitHeavyFileLoading() {
  if (heavyFilePaths.length === 0) {
    return;
  }

  const promises = heavyFilePaths.map((path) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve;
      img.src = path;
    });
  });
  await Promise.all(promises);
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function useWaitResourcesLoading(callback) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    let isSubscribed = true;
    Promise.all([waitHeavyFileLoading(), sleep(1500)]).then(() => {
      if (isSubscribed) {
        setIsLoaded(true);
      }
    });
    return () => {
      isSubscribed = false;
    };
  }, []);
  return isLoaded;
}
