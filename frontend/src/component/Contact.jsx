import { FiGithub, FiLink } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white pt-14 pb-6 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-bold text-orange-400 tracking-wide">
              FoodHub
            </h1>

            <p className="text-gray-400 mt-4 leading-7 max-w-md">
              Discover delicious food, fast delivery and a smooth ordering
              experience. Fresh meals crafted with quality ingredients.
            </p>

            <div className="flex gap-4 mt-6">
              {/* GitHub */}
              <a
                // href="https://github.com/iamyashvendra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-btn"
              >
                <FiGithub />
              </a>

              {/* Instagram */}
              <a
                // href="https://www.instagram.com/iamyashvendra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-btn"
              >
                <FaInstagram />
              </a>

              {/* All Links / Linktree */}
              <a
                // href="https://linktr.ee/iamyashvendra?utm_source=linktree_profile_share&ltsid=88338325-f487-4978-a003-06f8676f7aae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="All Links"
                className="social-btn"
              >
                <FiLink />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4 tracking-wide">
              COMPANY
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-orange-400 cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Delivery
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4 tracking-wide">
              GET IN TOUCH
            </h2>

            <p className="text-gray-400">📞 +1 212-456-980</p>
            <p className="text-gray-400 mt-2">
              📧 garvitfr@gmail.com
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-12" />

        {/* COPYRIGHT */}
        <p className="text-center text-gray-500 text-sm mt-6 leading-relaxed">
          © 2025 FoodHub.com — All Rights Reserved <br />
          <span className="text-gray-400">
            Garvitt soni
          </span>
        </p>
      </div>

      {/* SOCIAL BUTTON STYLES */}
      <style>{`
        .social-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: 1px solid #6b7280;
          font-size: 20px;
          color: #d1d5db;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background-color: #f97316;
          border-color: #f97316;
          color: #fff;
          transform: translateY(-2px) scale(1.05);
        }
      `}</style>
    </footer>
  );
};

export default Contact;
