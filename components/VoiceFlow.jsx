"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname from next/navigation
import { CurrentDateGetter, FormExtension } from '../lib/extensions';

const VoiceflowScript = () => {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // Only load the script if the current pathname is "/"
    if (pathname === "/") {
      const loadScript = () => {
        if (document.getElementById('voiceflow-script')) {
          return; // If script is already loaded, return early
        }

        const script = document.createElement('script');
        script.id = 'voiceflow-script'; // Add an ID to the script for future checks
        script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
        script.async = true;

        script.onload = () => {
          if (window.voiceflow && window.voiceflow.chat) {
            window.voiceflow.chat
              .load({
                verify: { projectID: '662b09bb057f9feb198cce52' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                autostart: true,
                allowDangerousHTML: true,
                assistant: {
                  extensions: [FormExtension, CurrentDateGetter],
                },
              })
              .then(() => {
                // Set a delay to open the chat after loading
                setTimeout(() => {
                  window.voiceflow.chat.open();
                }, 1000); // 1000 milliseconds delay (1 second)
              });
          }
        };

        document.body.appendChild(script);
      };

      loadScript();
    }

    return () => {
      // Clean up if needed
    };
  }, [pathname]); // Add pathname as a dependency

  return null;
};

export default VoiceflowScript;



// const VoiceflowScript = () => {
//   useEffect(() => {
//     const loadScript = () => {
//       const script = document.createElement('script');
//       script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
//       script.async = true;

//       script.onload = () => {
//         window.voiceflow.chat.load({
//           verify: { projectID: '6629d36cb2edb729ad00a1c4' },
//           url: 'https://general-runtime.voiceflow.com',
//           versionID: 'production'
//         });
//       };

//       document.body.appendChild(script);
//     };

//     loadScript();

//     return () => {
//       // Clean up if needed
//     };
//   }, []);

//   return null;
// };

// export default VoiceflowScript;
