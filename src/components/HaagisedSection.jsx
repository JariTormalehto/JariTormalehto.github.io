
const HaagisedSection = () => (
  <section id="haagised" className="bg-white py-20 w-full">
    <div className="text-center text-customGreen mb-12">
      <h1 className="my-4 text-3xl font-bold">Haagised</h1>
      <p className="text-lg">
        Rohkem kui 10 aastat kogemust tehnika müügis nii Eestis, Skandinaavias,
        kui mujal Euroopas.
      </p>
    </div>

    {/* Responsive Grid Container */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Individual Image Cards with Links */}
        {[
          { src: "https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/461199711_1000257458781044_5160423033335654277_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=i2JRkc0geqAQ7kNvgHHJh-T&_nc_ht=scontent.ftll3-2.fna&oh=00_AYCTYYKbV2qY2ywd4CUrLgNNK-dpKUwKq4NMVcxGGVVLog&oe=67002414", alt: "Haagis 1", desc: "Kallurhaagis 3-suunaline", link: "https://example.com/haagis1" },
          { src: "https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/461199711_1000257458781044_5160423033335654277_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=i2JRkc0geqAQ7kNvgHHJh-T&_nc_ht=scontent.ftll3-2.fna&oh=00_AYCTYYKbV2qY2ywd4CUrLgNNK-dpKUwKq4NMVcxGGVVLog&oe=67002414", alt: "Haagis 2", desc: "Metsahaagis Palms", link: "https://example.com/haagis2" },
          { src: "https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/461199711_1000257458781044_5160423033335654277_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=i2JRkc0geqAQ7kNvgHHJh-T&_nc_ht=scontent.ftll3-2.fna&oh=00_AYCTYYKbV2qY2ywd4CUrLgNNK-dpKUwKq4NMVcxGGVVLog&oe=67002414", alt: "Haagis 3", desc: "Multifunktsionaalne haagis", link: "https://example.com/haagis3" },
          { src: "https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/461199711_1000257458781044_5160423033335654277_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=i2JRkc0geqAQ7kNvgHHJh-T&_nc_ht=scontent.ftll3-2.fna&oh=00_AYCTYYKbV2qY2ywd4CUrLgNNK-dpKUwKq4NMVcxGGVVLog&oe=67002414", alt: "Haagis 4", desc: "Universaalne kastiga haagis", link: "https://example.com/haagis4" },
          { src: "https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/461199711_1000257458781044_5160423033335654277_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=i2JRkc0geqAQ7kNvgHHJh-T&_nc_ht=scontent.ftll3-2.fna&oh=00_AYCTYYKbV2qY2ywd4CUrLgNNK-dpKUwKq4NMVcxGGVVLog&oe=67002414", alt: "Haagis 5", desc: "Hüdrauliline kallurhaagis", link: "https://example.com/haagis5" },
          { src: "https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/461199711_1000257458781044_5160423033335654277_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=i2JRkc0geqAQ7kNvgHHJh-T&_nc_ht=scontent.ftll3-2.fna&oh=00_AYCTYYKbV2qY2ywd4CUrLgNNK-dpKUwKq4NMVcxGGVVLog&oe=67002414", alt: "Haagis 6", desc: "Väiketraktorite järelhaagis", link: "https://example.com/haagis6" }
        ].map((haagis, index) => (
          <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
            {/* Image Container with Link */}
            <a href={haagis.link} target="_blank" rel="noopener noreferrer">
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={haagis.src}
                  alt={haagis.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
              </div>
            </a>
            {/* Descriptive Text */}
            <div className="bg-white text-black text-center py-2">
              <p className="font-semibold">{haagis.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HaagisedSection;
