import { HelpCircle } from "lucide-react";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-300 to-green-200 shadow-lg bottom-0">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <HelpCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
