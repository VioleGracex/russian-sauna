export default function Testimonials() {
    const testimonials = [
      { name: "Иван", text: "Прекрасное место для отдыха, рекомендую всем!" },
      { name: "Анна", text: "Баня уютная, пар отличный. Обязательно вернусь!" },
    ];
  
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Отзывы клиентов</h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="p-6 bg-gray-100 rounded-md shadow-md">
                <p className="text-gray-800 italic">"{testimonial.text}"</p>
                <footer className="text-right text-gray-600 mt-2">— {testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  }
  