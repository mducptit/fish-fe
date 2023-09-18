import React from 'react';
import LoginForm from '../../components/login/login-form';
import '../../app/globals.css';

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page content */}
      <div className="flex flex-row justify-center flex-grow bg-[#f0f2f5] min-w-full">
        <div className="flex flex-col gap-2 justify-center items-start w-1/3">
          <h1 className="text-6xl font-bold text-blue-500">facebook</h1>
          <h2 className="text-2xl font-normal w-4/5">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
// components/Footer.js

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex-shrink-0">
      <div className="container flex flex-col justify-center items-start mx-auto text-center w-[58%]">
        <ul className='footer-text flex flex-wrap gap-2 pb-3 pt-8'>
          <li> English (UK)</li>
          <li> Tiếng Việt</li>
          <li> 中文(台灣)</li>
          <li> 한국어</li>
          <li> 日本語</li>
          <li> Français (France)</li>
          <li> ภาษาไทย</li>
          <li> Español</li>
          <li> Português (Brasil)</li>
          <li> Deutsch</li>
          <li> Italiano</li>
        </ul>
        <hr className='border-1 w-full'/>
        <ul className='footer-text flex flex-wrap pt-3 m-0 gap-2'>
          <li> <a> Sign Up </a></li>
          <li> <a> Log in</a></li>
          <li> <a> Messenger</a></li>
          <li> <a>Facebook Lite</a></li>
          <li> <a> Video</a></li>
          <li> <a> Places</a></li>
          <li> <a> Games</a></li>
          <li> <a> Marketplace</a></li>
          <li> <a> Meta Pay</a></li>
          <li> <a>Meta Store</a></li>
          <li> <a>Meta Quest</a></li>
          <li> <a> Instagram</a></li>
          <li> <a> Threads</a></li>
          <li> <a>Fundraisers</a></li>
          <li> <a> Services</a></li>
          <li> <a> Voting Information Centre</a></li>
          <li> <a> Privacy Policy</a></li>
          <li> <a> Privacy Centre</a></li>
          <li> <a> Groups</a></li>
          <li> <a> About</a></li>
          <li> <a>Create ad</a></li>
          <li> <a> Create Page</a></li>
          <li> <a> Developers</a></li>
          <li> <a> Careers</a></li>
          <li> <a> Cookies</a></li>
          <li> <a> AdChoices</a></li>
          <li> <a> Terms</a></li>
          <li> <a>Help</a></li>
          <li> <a> Contact uploading and non-users</a></li>
          <li> <a> Settings</a></li>
          </ul>
      <div className='footer-text my-4'><p>Meta © {currentYear}</p></div>
      </div>
    </footer>
  );
}

export default Login;
