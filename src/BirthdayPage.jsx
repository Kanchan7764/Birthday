import React from "react";
import { motion } from "framer-motion";
import ConfettiEffect from "./Components/ConfettiEffect";

const BirthdayPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-100 to-fuchsia-200 flex items-center justify-center p-6 font-serif">
      <ConfettiEffect />
      <div className="bg-white/80 backdrop-blur-lg border-4 border-pink-300 rounded-3xl shadow-pink-300 shadow-2xl p-10 max-w-2xl w-full text-center">
        <motion.h1
          className="text-5xl font-extrabold text-pink-700 mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🎂 Happy Birthday, Prince 💖
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          You’re my favorite person in this world.  
          Your smile lights up everything.  
          I’m so thankful for every moment with you.  
          Let’s make this birthday unforgettable 💝
        </motion.p>

        <motion.img
          src="https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif"
          alt="Heart gif"
          className="mx-auto w-72 rounded-xl shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        />

        <motion.div
          className="mt-8 text-pink-800 text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          💌 With all my heart,<br />Your Forever 💋
        </motion.div>

        <audio src="/romantic.mp3" autoPlay loop />
      </div>
    </div>
  );
};

export default BirthdayPage;

