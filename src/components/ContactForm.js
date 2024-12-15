export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-20 text-white"
      style={{
        background: "linear-gradient(135deg, #FFD698, #5A4E3D)", // Linear gradient background
      }}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold text-center lg:text-left mb-6">
              Связаться с нами
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder="Ваше сообщение"
                className="w-full p-4 h-36 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
              ></textarea>
              <button
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-bold transition-transform transform hover:scale-105"
              >
                Отправить
              </button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/500" // Replace with an actual sauna image URL
              alt="Sauna"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
