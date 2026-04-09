// File path: src/components/TestButton.jsx import React, { useState } from 'react';

import React, { useState } from 'react';

export default function TestButton() {
   const [message, setMessage] = useState('Press the button!');

   // The "method" to handle the click
   const handleClick = () => {
     setMessage('Button was clicked! 🎉');
     // Optional: Add console log for testing
     console.log('Docusaurus button clicked!');
   };

   return (
     <div style={{
       padding: '20px',
       border: '1px solid #e0e0e0',
       borderRadius: '8px',
       textAlign: 'center',
       margin: '10px 0'
     }}>
       <button
         onClick={handleClick}
         style={{
           backgroundColor: '#007bff',
           color: 'white',
           border: 'none',
           padding: '10px 20px',
           borderRadius: '5px',
           cursor: 'pointer',
           fontSize: '16px'
         }}
       >
         Click Me
       </button>
       <p style={{ marginTop: '15px', color: '#333' }}>
         {message}
       </p>
     </div>
   );
}
