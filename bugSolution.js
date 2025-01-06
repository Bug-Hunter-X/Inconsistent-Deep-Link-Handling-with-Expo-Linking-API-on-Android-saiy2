The initial `Linking.addEventListener` is maintained for subsequent deep links. However, we add a check during app initialization to see if there's already a deep link present from when the app was launched. This ensures that deep links are not missed during app start.  This is essential for a seamless user experience.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleDeepLink = (event) => {
      // Handle deep link event
      console.log('Deep link received:', event.url);
    };

    Linking.addEventListener('url', handleDeepLink);

    // Check initial URL on app load
    Linking.getInitialURL().then((url) => {
      if (url) {
        setInitialUrl(url);
        // Handle the initial deep link
        console.log('Initial deep link:', url);
      }
    }).catch(err => console.error('Error getting initial URL:', err));

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  useEffect(() => {
    if (initialUrl) {
      // Handle initial URL
      console.log('Handling initial URL:', initialUrl);
    }
  }, [initialUrl]);

  return (
    // ... rest of your app
  );
}
```