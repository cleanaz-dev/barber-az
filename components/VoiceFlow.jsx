"use client";

import { useEffect } from 'react';
import { CurrentDateGetter, FormExtension } from '../lib/extensions';

const VoiceflowScript = () => {
  useEffect(() => {
    const loadScript = () => {
      // Check if the script is already loaded
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

      // Append the script to the specific div
      const voiceflowContainer = document.getElementById('voiceflow-container');
      if (voiceflowContainer) {
        voiceflowContainer.appendChild(script);
      }
    };

    loadScript();

    return () => {
      // Optionally clean up if necessary
    };
  }, []); // Run only once when the component mounts

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
