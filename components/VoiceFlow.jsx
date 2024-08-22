"use client"

import { useEffect } from 'react';
import { CurrentDateGetter, FormExtension } from '../lib/extensions';
// 662b09bb057f9feb198cce52


const VoiceflowScript = () => {
  useEffect(() => {
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
          window.voiceflow.chat.load({
            verify: { projectID: '662b09bb057f9feb198cce52' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            autostart: true,
            allowDangerousHTML: true,
            assistant: {
              extensions: [
                FormExtension,
                CurrentDateGetter
              ],
            },
          });
        }
      };

      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      // Clean up if needed
    };
  }, []);

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
