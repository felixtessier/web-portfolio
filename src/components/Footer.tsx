import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 py-6 my-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mx-12 lg:mx-24">
        <p className="text-gray-400 text-sm">
          © 2024 - Present Felix Tessier. All right reserved (or whatever that
          means.)
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-gray-400 hover:text-white underline transition-colors"
          >
            Terms of Use
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white underline transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white underline transition-colors"
          >
            Code of Conduct
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
