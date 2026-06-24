import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <>
      {/* Gradient Mesh */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[1200px] h-[1200px]
          bg-gradient-to-r from-pink-500/30 via-violet-500/20 to-indigo-500/30
          rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -right-1/2 w-[900px] h-[900px]
          bg-gradient-to-r from-teal-400/20 via-purple-500/20 to-pink-500/30
          rounded-full blur-[120px]"
        />
      </div>

      {/* Noise Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </>
  );
}
