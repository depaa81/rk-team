import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "depa",
      role: "DAUS PKL",
      image: "https://files.catbox.moe/t3c3vn.png", // ganti dengan link foto Andi
      description: "Ahli membuat tampilan website yang modern, responsif, dan user-friendly.",
    },
    {
      name: "atar",
      role: "BLACK DIAMOND",
      image: "https://files.catbox.moe/ahqqka.png", // ganti dengan link foto Budi
      description: "Mengembangkan sistem backend yang aman, cepat, dan dapat di-scale.",
    },
    {
      name: "fathan",
      role: "RAMPEK",
      image: "https://files.catbox.moe/mmajxn.png", // ganti dengan link foto Citra
      description: "Merancang pengalaman pengguna yang intuitif dengan desain yang elegan.",
    },
    {
      name: "Deni Pratama",
      role: "Project Manager",
      image: "https://i.imgur.com/jkl012.jpg", // ganti dengan link foto Deni
      description: "Memimpin tim untuk menyelesaikan proyek tepat waktu dengan hasil terbaik.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-gray-800"
      >
        🚀 RK TEAM
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMember(member)}
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition cursor-pointer"
          >
            <div className="overflow-hidden rounded-full w-32 h-32 mx-auto shadow-md">
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✖
              </button>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
              />
              <h2 className="mt-4 text-2xl font-bold text-center">{selectedMember.name}</h2>
              <p className="text-center text-gray-500">{selectedMember.role}</p>
              <p className="mt-4 text-gray-700 text-center">{selectedMember.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
