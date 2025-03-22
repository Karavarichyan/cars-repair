// import { FC } from 'react'

// const Footer: FC = () => {
//   return <footer className="p-4 bg-gray-900 text-center text-gray-500">
//   &copy; 2025 Ավտոնորոգման Կենտրոն. Բոլոր իրավունքները պաշտպանված են.
// </footer>

// }

// export default Footer
import { FaPhoneAlt, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FC } from 'react'
const Footer: FC = () => {
  return (
    <footer className="p-4 bg-gray-900 text-center text-gray-500">
      <div className="flex justify-center space-x-6 mb-4">
        {/* Иконка TikTok */}
        <a
          href="https://www.tiktok.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-red-500"
        >
          <FaTiktok className="w-6 h-6" />
        </a>

        {/* Иконка Instagram */}
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-red-500"
        >
          <FaInstagram className="w-6 h-6" />
        </a>

        {/* Номер телефона */}
        <a
          href="tel:+37494655489"
          className="text-lg hover:text-red-500 flex items-center space-x-2"
        >
          <FaPhoneAlt className="w-6 h-6" />
          <span>+37494655489</span>
        </a>
      </div>
      <p>&copy; 2025 Ավտոնորոգման Կենտրոն. Բոլոր իրավունքները պաշտպանված են.</p>
    </footer>
  );
};


export default Footer
