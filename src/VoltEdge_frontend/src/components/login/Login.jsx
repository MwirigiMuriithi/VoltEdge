// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     alert(`Logging in with: \nEmail: ${email}\nPassword: ${password}`);
//   };

//   return (
//     <div className="page-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React from 'react';

// const Login = () => {
//   return (
//     <div className="page-container">
//       <h2>Login</h2>

//       {/* Google Login Button */}
//       <button className="login-button google-login">
//         Sign in with Google
//       </button>

//       {/* Facebook Login Button */}
//       <button className="login-button facebook-login">
//         Sign in with Facebook
//       </button>

//       {/* Apple Login Button */}
//       <button className="login-button apple-login">
//         Sign in with Apple
//       </button>

//       {/* Other internet identity services can be added similarly */}
//     </div>
//   );
// };

// export default Login;


// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <style>
//         {`
//           .page-container {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             padding: 20px;
//           }

//           h2 {
//             margin-bottom: 20px;
//           }

//           .login-button {
//             background-color: #f1f1f1;
//             border: 1px solid #ccc;
//             padding: 10px 20px;
//             margin: 10px;
//             font-size: 16px;
//             cursor: pointer;
//             width: 250px;
//             text-align: center;
//           }

//           .internet-identity {
//             background-color: #000; /* Black for blockchain-related login */
//             color: white;
//           }

//           .hardware-wallet {
//             background-color: #f4a261; /* Orange for hardware wallet login */
//             color: white;
//           }

//           .did {
//             background-color: #2d3748; /* Dark grey for DID login */
//             color: white;
//           }

//           .private-key {
//             background-color: #2b6cb0; /* Blue for private key login */
//             color: white;
//           }

//           .login-button:hover {
//             opacity: 0.8;
//           }
//         `}
//       </style>

//       <div className="page-container">
//         <h2>Login with Internet Identity</h2>

//         {/* Login with a blockchain wallet (e.g., DFINITY Internet Identity) */}
//         <button className="login-button internet-identity">
//           Sign in with Internet Identity
//         </button>

//         {/* Option for users to log in using their hardware wallet */}
//         <button className="login-button hardware-wallet">
//           Sign in with Hardware Wallet
//         </button>

//         {/* Option for signing in with a decentralized identity provider */}
//         <button className="login-button did">
//           Sign in with Decentralized Identity (DID)
//         </button>

//         {/* Option for users to sign in with a private key */}
//         <button className="login-button private-key">
//           Sign in with Private Key
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <style>
//         {`
//           .page-container {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             padding: 20px;
//           }

//           h2 {
//             margin-bottom: 20px;
//           }

//           .login-button {
//             background-color: #007bff; /* Blue color for the button */
//             color: white;
//             border: 1px solid #ccc;
//             padding: 10px 20px;
//             margin: 10px;
//             font-size: 16px;
//             cursor: pointer;
//             width: 250px;
//             text-align: center;
//             border-radius: 5px; /* Optional: rounded corners */
//           }

//           .login-button:hover {
//             opacity: 0.8;
//           }
//         `}
//       </style>

//       <div className="page-container">
//         <h2>Login with Internet Identity</h2>

//         {/* Single Login Button */}
//         <button className="login-button">
//           Log in with Internet Identity
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  return (
    <div className="page-container">
      <h2>Login with Internet Identity</h2>

      {/* Single Login Button */}
      <button className="login-button">
        Log in with Internet Identity
      </button>
    </div>
  );
};

export default Login;
