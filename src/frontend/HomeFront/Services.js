export default function Services() {
    const services = [
      { title: "Аренда бань", description: "Уютные бани на дровах для вашей компании." },
      { title: "Парение", description: "Традиционные банные процедуры с вениками." },
      { title: "Чайные церемонии", description: "Вкусный травяной чай после бани." },
    ];
  
    return (
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Наши Услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  