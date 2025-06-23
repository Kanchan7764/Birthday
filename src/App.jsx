import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ConfettiEffect from "./Components/ConfettiEffect";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [kisses, setKisses] = useState([]);

  const KissEmoji = ({ id }) => {
    const left = Math.random() * 100;
    const duration = 3 + Math.random() * 2;
    const size = 24 + Math.random() * 16;

    return (
      <div
        key={id}
        className="kiss-emoji fixed bottom-0 animate-float"
        style={{
          left: `${left}%`,
          fontSize: `${size}px`,
          animationDuration: `${duration}s`,
        }}
      >
        💋
      </div>
    );
  };

  const handleSendKiss = () => {
    const newKisses = Array.from({ length: 5 }, () => ({
      id: Date.now() + Math.random(),
    }));

    setKisses((prev) => [...prev, ...newKisses]);

    setTimeout(() => {
      setKisses((prev) =>
        prev.filter((kiss) => !newKisses.find((nk) => nk.id === kiss.id))
      );
    }, 5000);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const PageWrapper = ({ children }) => (
    <div className="w-full h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xl w-full text-center">
        {children}
      </div>
    </div>
  );

  const [openIndex, setOpenIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  const reasons = [
    "Your beautiful smile that melts my heart 😊",
    
    "Your sense of humor – you always make me laugh 🤭",
    "How you listen to me and understand me 💬",
    
    "How you make even the smallest moments special 🎈",
    "Your hugs – they feel like home 🏡",
    "Just... YOU. I love you for being you. 💋",
    "Here is not the complete ,but few things about u my babe.💋"
  ];
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [showHug, setShowHug] = useState(false);

  const pages = [
    <PageWrapper key="page1">
  <motion.h1
    className="text-2xl sm:text-4xl font-bold text-pink-600 mb-4"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Happy Birthday, My Love! 💖
  </motion.h1>

  <motion.p
    className="text-base sm:text-lg text-gray-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    You are not just my love, you are my heart, my soul, my everything. Happy birthday to the man who completes me.
    Every moment with you feels like a fairytale. Thank you for making reality more beautiful than dreams. Happy birthday, my love
    You're the light of my life, my heart, my everything. Here's to more
    birthdays together! 🎉🎂
  </motion.p>

  

  {/* 💫 Dodo Bobo Inset Animation */}
  <motion.img
    src="data:image/jpeg;base64,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" // Replace with real URL
    alt="Dodo Bobo"
    className="mx-auto mt-4 w-32 sm:w-48 rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.8, type: "spring" }}
  />

  <motion.div
    className="mt-6 text-pink-700 text-base sm:text-lg font-medium"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.5 }}
  >
    💌 With all my love,
    <br />
    Your Wifey
  </motion.div>
</PageWrapper>,


    <PageWrapper key="page2">
      <motion.h1
        className="text-4xl font-bold text-pink-600 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Happy Birthday, Darling! 🎉💖
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        You’re the reason I believe in forever. Happy birthday to the love of my life. 
        On your birthday, I wish you all the happiness you bring to me daily — and more. You deserve it all, my prince.
      </motion.p>
      <motion.img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHEhUSERAWExIVFRIRGRgYGBcWFhgWGBgXGBoXFhkbHSggGB4lHhUWITEhKCkrMDAuGh8zODMsOCgtLisBCgoKDg0OGhAQGy8lHx8vNy03LS43Ky0vLS0tKy0tLi01LS81LS8tKy81Li4tLS0tLS0tLS0tNS0tLS8rNy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQHAQj/xABAEAACAgECAwQHBQQJBQEAAAABAgADEQQSBQYhEzFBUQciMmFxgZEUI1JyoUJiscEVFjNDU3OCstGTosLw8TT/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQEAAgEDAgUEAwAAAAAAAAAAAQIRAxIhEzEEQVFh8CMyUoEiceH/2gAMAwEAAhEDEQA/APbIiJxLEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQE06uw1IzKMkKSPiBPmr1SaNdznA7vefhMNNrl1JwAQcZwwxkeY85DStLY3Y4V/R8bsqbLsXU5yOnyxJzhvEV1+cKVI8D4jzBkfqOAb3JVgqE5xg9PMfCSPDuHjRD2tx7u7AA9w/wDe6UrFo7uzxFvD2rmvf5+nbERNHnkREBERAREQEREBERAREQEREBERAREQEREBERASM43xA6FQF9ps9T4Af/ZJzj4lw9deACcEdxkWzjhrozSLxN+yq6vWvrMbznGcdAO/4fCSHLwa1x+FNzH5jAGfrNh5cb/FH0P/ADJXheh+wJtzkk5J/hM61tnl6Ov4jR6U103bERNXkkREBERAREQEREBERAREQEREBERAREQEREBERAREQERPhGYEHruP7GK1qDjpk9x+AEz0vH1ZT2gwwGRj9r3DyMgNVp20zFWHUfqPMTVMN9svcjwejakYj9p6jjtlzYCJjyJIJ9wPn8pM6PUjVLuHTqQQe8EeBlKTvGTjqOvlLXwWplVmfoXbd5dMYHTwl6WmXN4zQ06VzXhIxETR5hERAREQEREBERAREQEREBERAREQEREBERAREQEREDn1mjTWDDj4HxHwMrmq4JZUwCje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FUd5YgAfEmQNnGX45mrh3rZyraoj7ioeOw/3z+QHQeJ8DMzEd0RGUFTqtRwuvXa3T6jFVWq1D9gyqarFTaLMNjerFg4BBxnHQz0imztVVsEZAbB7xkZwZWNLyDo9PsGbnrUh+ye12qZx17RkPQknqR3Z8JapzWmJ7LzMEREoqREQEREBERAREQEREBERAREQEREBERA5uIaKviVb02qGrcFWB8v5Ed4PgZ55xHR28tEJexegnbXqPLyS/wDC3k3c3uPSemTC2pblKsoZSCCCAQQfAg98NKXmsvO85mjW6ZdZW1b+ywKn/ke+Tev5JOmy2gt7Md/Y2Zan/Qfaq+WR7pC3Ua3T+q3DrWbwNbVuhPubcCB8QJGPR1V1ay+8j6LiVtAFGpRNKBip7qd7sMn2FVwVQfvHPuxLDZyzrNT/AGnFrR5iqquofIncf1nfyZw2zhOkSu7As3WWFQchDY7PsB8cbsScmm+XJaeeFd0/JejQhrUbUuOu7UO13XzCsdo+QEsCKEAAAAHQAdAPhMolcq5IiJCCIiAiIgIiICIiAiIgIiICIiAiIgJrvVnVgjbWIIViNwBx0JGRnB8JsiB5bxfl7mZmJq4tS6+WxaT9BUf90r2s4NzdV3ahrPyW0j/dtnucS8X9jD883afm2nvOq+T1t/tJnFbxLmnTd41//SZv4IZ+k4k9T2MPzK/NPMtPtNrB8dOf51zA8/8AMNHfdePzaev+dU/TsZk9SPQw/MqeljjdPtW5/NRX/JRN1fps4rV0PYN+aoj+DCfpSYlAfAfSN8ehh+edP6d+IIfX0+mYe5bFP17Q/wAJJ6f0/W/t8ORvy2sv8UM9y7Jfwj6CZBQPCRur6DzDhPpkr12A3C9YM4H3Si4f+JP0nptNnaqGAIDANgggjIzgg9QfdM4lJmPIIiJAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q=="
        alt="Cute Love Gif"
        className="mx-auto w-64 rounded-xl mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.div
        className="text-xl text-pink-700 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        💌 With all my heart, <br />
        Your Forever ❤️
      </motion.div>
    </PageWrapper>,

    <PageWrapper key="page3">
      <div className="mt-4 text-center px-1">
      <motion.h1
        className="text-4xl font-extrabold text-pink-700 mb-4 mt-14"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎂 Happy Birthday ,Mr 💖
      </motion.h1>
      <motion.p
        className="text-xl text-gray-700 mb-6 mt-18"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Distance means so little when someone means so much.
        No matter where you are, you’re always in my heart.
        We may be far apart, but our hearts are always together.
        Our love is stronger than any distance — I feel you with me every moment.
      </motion.p>
      <motion.img
        src="data:image/jpeg;base64,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"
        alt="Heart gif"
        className="mx-auto h-48 rounded-xl shadow-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      />
      <motion.div
        className="mt-8 text-pink-800 text-lg font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        💌 With all my heart,
        <br />
        Your Forever 💋
      </motion.div>
      </div>
    </PageWrapper>,

   <PageWrapper key="page4">
  <div className="mt-20 px-4 pb-32"> {/* Added spacing on top & bottom */}
    <motion.h2
      className="text-4xl font-bold text-pink-600 mb-6 text-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
     Best Things About You 💗
    </motion.h2>

    <div className="space-y-4 w-full max-w-xl mx-auto">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          layout // <-- Ensures smooth layout animation
          className="border rounded-lg shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleDropdown(index)}
            className="w-full text-left px-4 py-3 bg-pink-100 hover:bg-pink-200 font-medium text-gray-800"
          >
            ❤️ {index + 1}
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-4 py-2 bg-pink-50 text-gray-700"
              >
                <div>{reason}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  </div>
</PageWrapper>

,

    <PageWrapper key="page5">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h2
          className="text-4xl font-bold text-pink-600 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎁 A Special Gift Just for You
        </motion.h2>

        {!isUnwrapped ? (
          <motion.img
            src="data:image/jpeg;base64,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"
            alt="Gift box"
            className="w-40 cursor-pointer"
            onClick={() => setIsUnwrapped(true)}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        ) : (
          <motion.div
            className="mt-6 bg-pink-100 p-6 rounded-xl shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <motion.h3
              className="text-2xl font-semibold text-pink-700 mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              💌 Surprise!
            </motion.h3>
            <motion.p
              className="text-lg text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I made this just for you — because you deserve all the love in the
              world. Happy Birthday, my favorite person 💖
            </motion.p>
            <motion.img
              src="data:image/jpeg;base64,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"
              alt="Surprise"
              className="w-60 mx-auto rounded-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        )}
      </div>
    </PageWrapper>,
    <PageWrapper key="page6">
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <motion.h2
          className="text-4xl font-bold text-pink-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🤗 Need a Hug?
        </motion.h2>

        {!showHug ? (
          <motion.button
            onClick={() => setShowHug(true)}
            className="bg-pink-500 text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition-all"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            🧸 Yes, Please!
          </motion.button>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="data:image/jpeg;base64,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"
              alt="Teddy bear hug"
              className="w-64 rounded-xl shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            />

            <motion.p
              className="text-lg text-pink-700 font-medium"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              💌 Sending you a warm virtual hug!
            </motion.p>
          </motion.div>
        )}
      </div>
    </PageWrapper>,
    <PageWrapper key="page7">
      <div className="w-full h-[85vh] bg-pink-50 flex items-center justify-center px-6 py-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full border border-pink-200">
          <motion.h2
            className="text-3xl md:text-4xl text-pink-600 font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            💌 A Letter From My Heart
          </motion.h2>

          <motion.p
            className="text-lg text-gray-800 leading-relaxed font-[Great Vibes] italic text-[1.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            My dearest love,
            <br />
            <br />
            On this special day, I want to pour my heart out and remind you of
            the infinite reasons I cherish you. Your smile is my sunshine, your
            voice my melody, and your presence my peace. Every moment with you
            feels like magic, and I wouldn't trade it for the world. You are my
            favorite chapter, my forever story.
            <br />
            <br />
            Thank you for being you — kind, caring, and endlessly wonderful. I
            promise to keep loving you more every single day.
            <br />
            <br />
            Yours always and forever,
            <br />
            💖 Your wifey 💖
          </motion.p>
        </div>
      </div>
    </PageWrapper>,
  ];

  return (
    <>
      <div className="w-full text-center pt-6 pb-4 bg-pink-100">
        <motion.h1
          className="text-5xl font-extrabold text-pink-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Happy Birthday, Prince! 💖
        </motion.h1>
      </div>
      <div className="relative w-full h-[85vh] overflow-hidden bg-pink-100">
        <motion.div
          key={currentPage}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {pages[currentPage]}
        </motion.div>

        {/* Next Button */}
        <button
          onClick={nextPage}
          className="absolute bottom-6 right-6 bg-pink-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-pink-700 transition-all"
        >
          👉 Next
        </button>

        {/* Send Kiss Button */}
        <button
          onClick={handleSendKiss}
          className="absolute bottom-6 left-6 bg-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-700 transition-all"
        >
          💌 Send a Kiss
        </button>

        {/* Kisses Floating */}
        {kisses.map((kiss) => (
          <KissEmoji key={kiss.id} id={kiss.id} />
        ))}
      </div>
      <ConfettiEffect />
      // Add this inside your `pages` array as the fourth page (index 3)
    </>
  );
}

export default App;
