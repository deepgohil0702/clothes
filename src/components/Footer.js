import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const companyLinks = [
    { label: 'About us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Affiliate Program', href: '#' },
    { label: 'Sitemap', href: '#' },
    { label: 'Stores', href: '#' },
    { label: 'Contact Us', href: '#' },
  ]

  const helpLinks = [
    { label: 'Returns, Exchange & Refunds', href: '#' },
    { label: 'Cancellation Policy', href: '#' },
    { label: 'Shipping Policy', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ]

  const supportInfo = [
    { icon: faEnvelope, content: 'support@beyondXL.in', link: 'mailto:support@beyondXL.in' },
    { icon: faPhone, content: '+91 9696333000', link: 'tel:+919696333000' },
    { icon: faClock, content: 'Mon - Sat : 10:30 AM - 06:00 PM' },
  ]

  const paymentMethods = [
    { src: 'https://storage.googleapis.com/a1aa/image/iZXGTBH5guCGLFMSdSU5di-6qfWJfuu-gCxjLeg8GIM.jpg', alt: 'MasterCard' },
    { src: 'https://storage.googleapis.com/a1aa/image/oRyACdKnjThbgBsl8mcL7ZWS57ggStC-70Mlqf0TLfE.jpg', alt: 'Visa' },
    { src: 'https://storage.googleapis.com/a1aa/image/VYxIHdZoE1rt4cD58Ieg9OhKLfLNLzsa_JE8ngB-pSs.jpg', alt: 'Google Pay' },
    { src: 'https://storage.googleapis.com/a1aa/image/lg6rzPK-22snuzqwg79zdUzXBzOa249jjoJAElYPl9c.jpg', alt: 'UPI' },
    { src: 'https://storage.googleapis.com/a1aa/image/4IZqGf9PxT7DG8U1RcjU3fuzUhfj1c6twCw7VajUy-M.jpg', alt: 'Cash on Delivery' },
  ]

  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Get Coupons & Offers</h2>
          <p className="text-gray-600 mt-2">
            You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
          </p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 border border-gray-300 rounded-l-md w-64"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-red-600 text-sm mt-2">* Don't worry we don't spam</p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Links */}
        <div>
          <h3 className="font-bold">COMPANY</h3>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-gray-600 hover:text-red-600 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="font-bold">NEED HELP FROM beyondXL</h3>
          <ul className="mt-4 space-y-2">
            {helpLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-gray-600 hover:text-red-600 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Info */}
        <div>
          <h3 className="font-bold">SUPPORT</h3>
          <ul className="mt-4 space-y-2">
            {supportInfo.map((info, index) => (
              <li key={index} className="flex items-center justify-center md:justify-start">
                <FontAwesomeIcon icon={info.icon} className="mr-2 text-gray-600" />
                {info.link ? (
                  <a href={info.link} className="text-gray-600 hover:text-red-600 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <span className="text-gray-600">{info.content}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-bold">REGISTERED OFFICE ADDRESS</h3>
          <p className="mt-4 text-gray-600">
            beyondXL Apparels Pvt Ltd<br />
            Lotus Corporate Park Wing G02 - 1502, Ram Mandir Lane, off Western Express Highway, Goregaon, Mumbai, 400063
          </p>
        </div>
      </div>

      {/* App & Social Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Experience The beyondXL App</span>
            <img
              src="https://storage.googleapis.com/a1aa/image/o_vObmGnLlnJUFeRtW9ieifxKKDuIGMf-kg3MRXZg4I.jpg"
              alt="Google Play Store"
              className="h-10"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/MCkfxSm-EegcjOAbGw0XLFfz7W6HuDGTa-M5INwOovA.jpg"
              alt="Apple App Store"
              className="h-10"
            />
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-600">Join The Power Squad</span>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800">
                <FontAwesomeIcon icon={faPinterestP} size="lg" />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white py-4">
        <div className="container mx-auto text-center">
          <span className="text-gray-600">100% Secure Payment</span>
          <div className="flex justify-center mt-2 space-x-2">
            {paymentMethods.map((method, index) => (
              <img
                key={index}
                src={method.src}
                alt={method.alt}
                className="h-6"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600">
          © 2025 www.beyondXL.in. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;