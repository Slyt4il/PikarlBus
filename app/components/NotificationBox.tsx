"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NotificationBox = ({ message }: { message: string }) => {
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-5 top-28 z-30 opacity-90 items-center justify-between font-mono text-sm lg:flex"
          key="notification-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <button onClick={() => setShow(false)}>
            <p className="fixed font-semibold font-mono left-0 top-24 w-full flex flex-wrap justify-center bg-gradient-to-b from-pink-100 to-pink-300 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 outline-transparent border-transparent ring-transparent">
              {message}
            </p>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBox;
