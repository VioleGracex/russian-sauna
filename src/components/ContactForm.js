export default function ContactForm() {
    return (
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Связаться с нами</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input type="text" placeholder="Ваше имя" className="w-full p-2 rounded bg-gray-800 text-white" />
            <input type="email" placeholder="Ваш email" className="w-full p-2 rounded bg-gray-800 text-white" />
            <textarea placeholder="Ваше сообщение" className="w-full p-2 rounded bg-gray-800 text-white"></textarea>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded">
              Отправить
            </button>
          </form>
        </div>
      </section>
    );
  }
  