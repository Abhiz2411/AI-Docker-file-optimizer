import React from 'react';

export const Footer: React.FC = () => (
<footer className="border-t border-gray-800 py-4 mt-auto">
<div className="container mx-auto px-4 text-center space-y-2">
  <div className="max-w-lg mx-auto p-4 bg-gray-800/50 rounded-lg">
    {/* First Line */}
    <div className="flex flex-wrap justify-center items-center gap-2 text-gray-300">
      {/* Google Pay */}
      <div className="flex items-center gap-1">
        <img
          src="./assets/icons8-google-pay-50.png"
          alt="Google Pay Icon"
          className="w-5 h-5"
        />
        <p className="text-blue-400">abhijitzende75@okhdfcbank</p>
      </div>
      {/* Donation icon */}
      <div className="flex items-center gap-1">
        <img
          src="./assets/icons8-trust-64.png"
          alt="Donation icon"
          className="w-5 h-5"
        />
      </div>
      {/* PayPal */}
      <div className="flex items-center gap-1">
        <img
          src="./assets/icons8-paypal-50.png"
          alt="PayPal Icon"
          className="w-5 h-5"
        />
        <a
          href="https://www.paypal.com/paypalme/AbhijitZende?v=1&utm_unptid=1ed5a13f-bb96-11ef-9444-f5419819dd35&ppid=RT000481&cnac=IN&rsta=en_GB%28en-IN%29&cust=AVRTYHGK9W3HA&unptid=1ed5a13f-bb96-11ef-9444-f5419819dd35&calc=26b477e2416c1&unp_tpcid=ppme-social-business-profile-created&page=main%3Aemail%3ART000481&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.295.0&tenant_name=PAYPAL&xt=145585%2C154413%2C104038&link_ref=paypalme_abhijitzende"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          PayPal.Me/AbhijitZende
        </a>
      </div>
    </div>
  </div>
  {/* Second Line */}
  <p className="text-gray-400">
    Made with <span className="text-red-500">❤️</span> by{' '}
    <a
      href="https://abhijit-zende.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition-colors"
    >
      Abhi Zende
    </a>
  </p>
</div>
</footer>
);