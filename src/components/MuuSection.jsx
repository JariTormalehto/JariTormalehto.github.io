const MuuSection = () => (
    <section id="muu" className="bg-white py-20 w-full">
      <div className="text-center text-customGreen mb-12">
        <h1 className="my-4 text-3xl font-bold">Muu müügis tehnika
        </h1>
      </div>
  
      {/* Responsive Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              src: "https://static.wixstatic.com/media/e8be69_bb32f56ca87b4ecea65c03fa051c0641~mv2.jpg/v1/fill/w_486,h_324,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8be69_bb32f56ca87b4ecea65c03fa051c0641~mv2.jpg",
              alt: "Tractor 1",
              desc: "Kaubik Ford Transit Custom Limited Edition 2.0, 125kW, 2024.a.",
              link: "https://www.facebook.com/photo.php?fbid=965158228957634&set=pb.100063903976591.-2207520000&type=3",
            },
            {
              src: "https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/453155436_961902592616531_5901317248281892375_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=7NtUcfnAXuIQ7kNvgEFXB2E&_nc_ht=scontent.ftll3-2.fna&oh=00_AYBtaIBMP3CRXPJM1xp1knvM1OoWcI-vpQp3Drm0Ndzz_Q&oe=670041EC",
              alt: "Tractor 2",
              desc: "Traktor Valtra T234 Versu, 2019.a.",
              link: "https://www.facebook.com/photo.php?fbid=961902595949864&set=pb.100063903976591.-2207520000&type=3",
            },
            {
              src: "https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/454352170_965158225624301_3593308486998123761_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=D3lXGl1nF2MQ7kNvgEtqtoK&_nc_ht=scontent.ftll3-1.fna&_nc_gid=AAcvXcRM55b4IGeRQk1bzGR&oh=00_AYB3DiW7BubgKXM7yTuBM14Ya9RwM_Y9HeNlKRUTWeVwaQ&oe=670046F7",
              alt: "Tractor 3",
              desc: "John Deere 6215R AutoPower, 2017.a.",
              link: "https://www.facebook.com/photo.php?fbid=961902592616531&set=pb.100063903976591.-2207520000&type=3",
            },
            {
              src: "https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/454352170_965158225624301_3593308486998123761_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=D3lXGl1nF2MQ7kNvgEtqtoK&_nc_ht=scontent.ftll3-1.fna&_nc_gid=AAcvXcRM55b4IGeRQk1bzGR&oh=00_AYB3DiW7BubgKXM7yTuBM14Ya9RwM_Y9HeNlKRUTWeVwaQ&oe=670046F7",
              alt: "Tractor 4",
              desc: "Fendt 828 Vario S4 Profi Plus, 2017.a.",
              link: "https://www.facebook.com/photo.php?fbid=965158228957634&set=pb.100063903976591.-2207520000&type=3",
            },
            {
              src: "https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/454352170_965158225624301_3593308486998123761_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=D3lXGl1nF2MQ7kNvgEtqtoK&_nc_ht=scontent.ftll3-1.fna&_nc_gid=AAcvXcRM55b4IGeRQk1bzGR&oh=00_AYB3DiW7BubgKXM7yTuBM14Ya9RwM_Y9HeNlKRUTWeVwaQ&oe=670046F7",
              alt: "Tractor 5",
              desc: "Demo traktor Zetor Forterra HSX 140, 2022.a.",
              link: "https://www.facebook.com/photo.php?fbid=965158228957634&set=pb.100063903976591.-2207520000&type=3",
            },
            {
              src: "https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/454352170_965158225624301_3593308486998123761_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=D3lXGl1nF2MQ7kNvgEtqtoK&_nc_ht=scontent.ftll3-1.fna&_nc_gid=AAcvXcRM55b4IGeRQk1bzGR&oh=00_AYB3DiW7BubgKXM7yTuBM14Ya9RwM_Y9HeNlKRUTWeVwaQ&oe=670046F7",
              alt: "Tractor 6",
              desc: "Demo traktor Valtra T175E Versu SmartTouch, 2022.a.",
              link: "https://www.facebook.com/photo.php?fbid=965158228957634&set=pb.100063903976591.-2207520000&type=3",
            },
          ].map((tractor, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
              {/* Image Container with Link */}
              <a href={tractor.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={tractor.src}
                    alt={tractor.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                </div>
              </a>
              {/* Descriptive Text */}
              <div className="bg-white text-black text-center py-2">
                <p className="font-semibold">{tractor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default MuuSection;
  