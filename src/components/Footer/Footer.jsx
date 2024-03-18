import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-800 border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="data:image/png;base64,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"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Ashu001234"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
