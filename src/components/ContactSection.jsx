const ContactSection = () => {
  return (
    <section id="contact" className="bg-slate-300 py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section Header */}
        <div className="text-center text-customGreen mb-12">
          <h1 className="my-4 text-3xl font-bold">Kontakt</h1>
          <p className="text-lg">
            Võta meiega ühendust! Siin on meie kontaktandmed ja asukoht.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-gray-800">
            <h2 className="text-2xl font-bold mb-4">Kontaktandmed</h2>
            <p className="mb-2">
              <strong>Email: </strong>
              <a href="mailto:info@taritvo.ee" className="text-customGreen hover:underline">
                info@taritvo.ee
              </a>
            </p>
            <p className="mb-2">
              <strong>Aadress: </strong>
              Tankla tee 10, Saarde vald, Saarde küla 86213 Pärnumaa, Estonia
            </p>
            <p className="mb-2">
              <strong>Telefon: </strong>
              <a href="tel:4429230" className="text-customGreen hover:underline">
                4429 230
              </a>
            </p>
            <p className="mb-2">
              <strong>Telefon: </strong>
              <a href="tel:+3725033012" className="text-customGreen hover:underline">
                +372 50 33 012
              </a>
            </p>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3961.9985446952096!2d24.965490930549997!3d58.142811615399715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692be8704aeab77%3A0x9b9b8eac213787f6!2s58.142812%2C%2024.965491!5e0!3m2!1sen!2sus!4v1696618391590!5m2!1sen!2sus"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Taritvo Location"
            className="w-full h-64 md:h-full"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
