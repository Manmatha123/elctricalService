

import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
  
    <div className="login-container">
    <Navbar/>
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="login-box"
      >
        <div className="login-form">
          <h2 className="title">
          <i class="fa-solid fa-bolt" style={{marginRight:"5px"}}></i>   Electrical Service
          </h2>

          <p className="subtitle">Power up your service efficiency</p>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="input-field"
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="input-field"
            />
            <button className="login-button">Login</button>
          </div>
        </div>
        <div className="login-image">
          {/* <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
          > */}
  <dotlottie-player src="https://lottie.host/dba62b7b-1fb3-4da9-9742-b5b131086ccf/TA57Lj2sJC.lottie" className="robot-image" background="transparent" speed="1"  loop autoplay></dotlottie-player> 

            {/* <img src="/electric-robot.png" alt="Electric Assistant" className="robot-image" /> */}
          {/* </motion.div> */}
        </div>
      </motion.div>
    </div>
      <Footer/>
    </>
  );
}
