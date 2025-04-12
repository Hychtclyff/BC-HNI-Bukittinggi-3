export const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-10 lg:px-28 py-10  flex flex-col lg:grid grid-cols-4 gap-5 ">
        <div className=" flex flex-col ">
          <span>
            Jalan Kusuma Bhakti no 13 Kelurahan Kubu Gulai Bancah, Kota
            Bukittinggi, Sumatra Barat
          </span>
          <p>bcbkt3@gmail.com</p>
          <span>08123456789</span>
        </div>
        <div className="navigation">
          <ul className="font-bold flex lg:flex-col gap-5">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Owners</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <span>Contact Us</span>
          <ul className="flex gap-2 ">
            <li className="bg-green-200 p-1 rounded-full hover:bg-green-400 transition">
              <img src="/svg/wa.svg" className="w-8 h-auto" alt="wa-icon" />
            </li>
            <li className="bg-green-200 p-1 rounded-full hover:bg-green-400 transition">
              <img src="/svg/ig.svg" className="w-8 h-auto" alt="ig-icon" />
            </li>
            <li className="bg-green-200 p-1 rounded-full hover:bg-green-400 transition">
              <img src="/svg/fb.svg" className="w-8 h-auto" alt="fb-icon" />
            </li>
            <li className="bg-green-200 p-1 rounded-full hover:bg-green-400 transition">
              <img src="/svg/tt.svg" className="w-8 h-auto" alt="tt-icon" />
            </li>
          </ul>
        </div>
        <div className="logo flex flex-col">
          <span>
            © 2020 BC HNI Bukittinggi 3. All Right Reserved. Design by Quls
            Projects
          </span>
          <div className="logo w-20 h-5 bg-green-400"></div>
        </div>
      </div>
    </div>
  );
};