import Navbar from "../../components/Navbar";
import { Mail, Instagram, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Зв’язатися зі <span className="text-pink-500">мною</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Готова допомогти вашому бренду рости в соціальних мережах 🌸 Напишіть
          мені — і я відповім протягом дня.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:yourmail@gmail.com"
            className="flex items-center justify-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            <Mail size={20} /> Email
          </a>

          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            className="flex items-center justify-center gap-3 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            <Send size={20} /> Telegram
          </a>

          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            <Instagram size={20} /> Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
