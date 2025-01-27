const Footer = () => {
  return (
    <div className="">
      <footer className="footer footer-center  text-primary-content lg:p-10 py-24">
        <aside>
          <h1 className="font-bold text-[2rem] text-black">Gadget Heaven</h1>
          <p className="font-medium text-gray-500 py-4 text-base">
            Leading the way in cutting-edge technology and innovation. Providing
            reliable tech since 1992
          </p>
        </aside>
        <div className="border-b border-gray-200 w-full"></div>
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-evenly w-full items-start justify-center">
            <div className="w-full">
                <h3 className="text-black text-xl font-bold">Service</h3>
                <nav className="text-gray-600 mt-3 flex flex-col gap-3 text-base ">
                    <a href="">Product Support</a>
                    <a href="">Order Tracking</a>
                    <a href="">Shipping & Delivery</a>
                    <a href="">Returns</a>
                </nav>
            </div>
            <div className="w-full">
                <h3 className="text-black text-xl font-bold">Company</h3>
                <nav className="text-gray-600 mt-3 flex flex-col gap-3 text-base">
                    <a href="">About Us</a>
                    <a href="">Careers</a>
                    <a href="">SContact</a>
                </nav>
            </div>
            <div className="w-full">
                <h3 className="text-black text-xl font-bold">Legal</h3>
                <nav className="text-gray-600 mt-3 flex flex-col gap-3 text-base">
                    <a href="">Terms of Service</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Policy</a>
                </nav>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
