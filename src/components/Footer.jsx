const Footer = () => (
  <footer className="bg-black py-8 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-customGreen text-xl font-bold mb-4">Follow Us</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com/AsTaritvo/" target="_blank" rel="noopener noreferrer" className="group">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="w-10 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-125"
          />
        </a>
        <a href="https://wa.me/3725033012" target="_blank" rel="noopener noreferrer" className="group">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-10 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-125"
          />
        </a>
        <a href="https://www.mascus.ee/as%20taritvo/+/1,relevance,search.html" target="_blank" rel="noopener noreferrer" className="group">
          <img
            src="https://static.wixstatic.com/media/e8be69_104c30ea658143df9e20ba6414d70393~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e8be69_104c30ea658143df9e20ba6414d70393~mv2.png"
            alt="Mascus"
            className="w-10 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-125"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
