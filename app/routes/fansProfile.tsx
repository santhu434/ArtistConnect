import React, { useState } from "react";
import Ellipse11 from "../assets/images/Ellipse 11.png";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import { useNavigate } from "react-router";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
export default function ProfileOverview() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [showModalPaymentCompleted, setShowModalPaymentCompleted] =
    useState(false);
  const [billingPeriod, setBillingPeriod] = useState("quarterly");
  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <div className="bg-[#181A20] px-8 py-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-6">
            Profile Overview
          </h1>
          <div className="flex items-center gap-4">
            <img
              src={Ellipse11}
              alt="Avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="text-lg font-semibold text-white">
                Tharik Akbar
              </div>
              <div className="text-sm text-[#A3A6B1]">
                Shah Alam, MY &nbsp; | &nbsp; Joined April 2025
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button className="border border-[#FF5E69] text-[#FF5E69] hover:bg-[#FF5E69] hover:text-white transition px-5 py-2 rounded-lg font-medium mb-2">
            Edit Profile
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#23262F]">
            <svg
              className="w-5 h-5 text-[#A3A6B1]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 15v2m0-8v2m-7 7a9 9 0 1118 0 9 9 0 01-18 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#2B2C31] flex gap-1 overflow-x-auto whitespace-nowrap">
          {['My Subscription', 'My Activity', 'Privacy & Security', 'Help & Support'].map((tab, i) => (
            <button
              key={i}
              className={`text-[#858585] cursor-pointer flex-1/5 px-2 md:px-4 py-2 text-[13px] md:text-base font-normal border-b-2 ${tab === "My Subscription" ? "border-[#FF3939] font-semibold text-[#FF3939]" : "border-transparent"} hover:border-[#FF3939]`}
            >
              {tab}
            </button>
          ))}
        </div>

      {/* Subscription Card */}
      <div className="bg-transparent rounded-xl border border-[#A3A6B1]/30 p-8 mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row md:gap-16 gap-4 flex-1">
          <div>
            <div className="text-white font-semibold text-lg mb-2">
              My Subscription
            </div>
            <div className="text-[#A3A6B1] mb-1">Current Plan</div>
            <div className="text-white font-bold text-xl mb-4">GOLD</div>
          </div>
          <ul className="text-[#A3A6B1] text-base flex flex-col gap-2 mt-2">
            <li>Exclusive content access</li>
            <li>Event ticket purchases</li>
            <li>Communit interaction features</li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0 flex-shrink-0">
          <button
            className="px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] hover:opacity-90 transition"
            onClick={() => setShowModal(true)}
          >
            Upgrade your plan
          </button>
        </div>
      </div>

      {/* Billing Info */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left */}
        <div className="flex-1">
          <div className="text-white font-semibold text-lg mb-2">
            Billing Info
          </div>
          <div className="text-[#A3A6B1] mb-1">Current Plan</div>
          <div className="text-white font-bold mb-4">
            Gold Plan- RM100/month
          </div>
          <button className="border border-[#FF5E69] text-[#FF5E69] hover:bg-[#FF5E69] hover:text-white transition px-5 py-2 rounded-lg font-medium mb-3">
            Download Last Invoice
          </button>
          <div className="text-sm mt-2 text-[#A3A6B1]">
            Having issues?{" "}
            <a href="#" className="text-[#FF5E69] underline">
              Contact Billing Support
            </a>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col md:items-end gap-6">
          <div>
            <div className="text-[#A3A6B1] mb-1">Next Billing Date</div>
            <div className="text-white font-semibold text-lg">May 28, 2025</div>
          </div>
          <div>
            <div className="text-[#A3A6B1] mb-1">Payment Method</div>
            <div className="text-white font-semibold text-lg">
              Visa <span className="tracking-widest">•••• 2451</span>
              <button className="ml-2 align-middle">
                <svg
                  className="w-4 h-4 text-[#A3A6B1] inline"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-2 sm:px-6">
          <div
            className="absolute inset-0"
            onClick={() => setShowModal(false)}
          />
          <div
            className="
       relative bg-[#181A20] rounded-xl shadow-lg w-full max-w-md sm:max-w-2xl md:max-w-3xl mx-auto px-4 py-6
       max-h-[80vh] overflow-y-auto
     "
          >
            <button
              className="absolute top-6 left-6 text-[#A3A6B1] hover:text-white focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Choose your plan
              </h2>
            </div>

            {/* Pricing Cards Container */}
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {/* Free Plan */}
              <div className="flex-1 bg-transparent rounded-lg border border-[#FF5E69] p-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <span>
                    {/* Music Note Icon */}
                    <svg
                      className="w-5 h-5 text-[#FF5E69]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 19V6l12-2v13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="6"
                        cy="18"
                        r="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="18"
                        cy="16"
                        r="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#FF5E69] font-semibold text-lg">
                    Free Plan
                  </span>
                </div>
                <div className="text-[#A3A6B1] text-sm mb-2">
                  What you'll get
                </div>
                <ul className="text-white text-sm mb-6 text-center space-y-1">
                  <li>Access all free tracks and Free artists</li>
                  <li>Ads inbetween contents</li>
                </ul>
                <div className="text-white text-lg font-semibold mb-1">
                  RM 0.00{" "}
                  <span className="text-[#A3A6B1] text-xs font-normal">
                    /Year
                  </span>
                </div>
                <button
                  className="w-full border border-[#FF5E69] text-[#FF5E69] rounded-md py-2 mt-3 hover:bg-[#FF5E69] hover:text-white transition font-medium"
                  onClick={() => {
                    setShowModal(false);
                    setShowModalPayment(true);
                  }}
                >
                  Choose
                </button>
              </div>

              {/* Gold Plan */}
              <div className="flex-1 bg-transparent rounded-lg border border-[#FF5E69] p-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <span>
                    {/* Crown Icon */}
                    <svg
                      className="w-5 h-5 text-[#FF5E69]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 7l6 6 4-4 6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17h20v2H2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#FF5E69] font-semibold text-lg">
                    Gold Plan
                  </span>
                </div>
                <div className="text-[#A3A6B1] text-sm mb-2">
                  What you'll get
                </div>
                <ul className="text-white text-sm mb-6 text-center space-y-1">
                  <li>Access all free tracks and Free artists</li>
                  <li>Priority community interaction</li>
                  <li>Full access to exclusive content</li>
                  <li>Exclusive Live sessions</li>
                  <li>Event ticket discounts</li>
                </ul>
                <div className="text-white text-lg font-semibold mb-1">
                  RM 100.00{" "}
                  <span className="text-[#A3A6B1] text-xs font-normal">
                    /Year
                  </span>
                </div>
                <button
                  className="w-full border border-[#FF5E69] text-[#FF5E69] rounded-md py-2 mt-3 hover:bg-[#FF5E69] hover:text-white transition font-medium"
                  onClick={() => {
                    setShowModal(false);
                    setShowModalPayment(true);
                  }}
                >
                  Choose
                </button>
              </div>

              {/* Premium Plan */}
              <div className="flex-1 bg-transparent rounded-lg border border-[#FF5E69] p-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <span>
                    {/* Crown Icon */}
                    <svg
                      className="w-5 h-5 text-[#FF5E69]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 7l6 6 4-4 6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17h20v2H2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#FF5E69] font-semibold text-lg">
                    Premium Plan
                  </span>
                </div>
                <div className="text-[#A3A6B1] text-sm mb-2">
                  What you'll get
                </div>
                <ul className="text-white text-sm mb-6 text-center space-y-1">
                  <li>Access all free tracks and Free artists</li>
                  <li>Priority community interaction</li>
                  <li>Full access to exclusive content</li>
                  <li>Exclusive Live sessions</li>
                  <li>Event ticket discounts</li>
                </ul>
                <div className="text-white text-lg font-semibold mb-1">
                  RM 200.00{" "}
                  <span className="text-[#A3A6B1] text-xs font-normal">
                    /Year
                  </span>
                </div>
                <button
                  className="w-full border border-[#FF5E69] text-[#FF5E69] rounded-md py-2 mt-3 hover:bg-[#FF5E69] hover:text-white transition font-medium"
                  onClick={() => {
                    setShowModal(false);
                    setShowModalPayment(true);
                  }}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModalPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-[#181A20] text-white rounded-2xl w-full max-w-2xl p-6">
            {/* Header */}
            <div className="flex items-center mb-6">
              <button
                className="text-white mr-4"
                onClick={() => {
                  setShowModalPayment(false);
                  setShowModal(true)}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h2 className="text-lg font-semibold">Make payment</h2>
            </div>

            {/* Selected Plan */}
            <div className="mb-4">
              <h3 className="text-sm text-gray-400 text-center">
                Selected plan: <span className="text-white">Premium</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1 text-center">
                Please select your preferred payment method to finalize your
                purchase.
              </p>
            </div>

            {/* Billing Period */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Billing Period</h4>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="billing"
                    className="accent-orange-500"
                    checked={billingPeriod === "quarterly"}
                    onChange={() => setBillingPeriod("quarterly")}
                  />
                  <span>Quarterly RM 130/month</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="billing"
                    className="accent-orange-500"
                    checked={billingPeriod === "yearly"}
                    onChange={() => setBillingPeriod("yearly")}
                  />
                  <span>Yearly RM 100/month</span>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Payment Method</h4>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-orange-500"
                    checked={paymentMethod === "ewallet"}
                    onChange={() => setPaymentMethod("ewallet")}
                  />
                  <span>eWallets (Touch 'n Go eWallet, GrabPay & Boost)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-orange-500"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                  />
                  <span>
                    Online Bank Transfer (Maybank2U, CIMB Clicks, RHB, etc.)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-orange-500"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  <span>Credit/Debit Card (Visa/Mastercard)</span>
                </label>
              </div>
            </div>

            {/* Pay Button */}
            <div className="mt-8">
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg text-center"
                onClick={() => {
                  setShowModalPayment(false);
                  setShowModalPaymentCompleted(true);
                }}
              >
                PAY RM 390.00
              </button>
            </div>
          </div>
        </div>
      )}
      {showModalPaymentCompleted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-[#181A20] text-white rounded-2xl w-full max-w-2xl p-6">
            {/* Header */}
            <div className="flex items-center mb-6">
              <button
                className="text-white mr-4"
                onClick={() => setShowModalPaymentCompleted(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h2 className="text-lg font-semibold">Payment Successful</h2>
            </div>

            {/* Selected Plan */}
            <div className="mb-4">
              <p className="text-xs text-gray-400 mt-1 text-center">
                Your subscription has been processed successfully. Thank you for
                subscribing. You now have full access to all premium features.
                We’re excited to have you on board!
              </p>
            </div>
            {/* Pay Button */}
            <div className="mt-8 flex items-center justify-center">
              <button className="bg-green-500 text-white hover:bg-green-600 text-black font-bold py-3 px-4 rounded-lg text-center" onClick={() => setShowModalPaymentCompleted(false)}>
                Go To Profile
              </button>
            </div>
          </div>
        </div>
      )}
      <nav className="fixed md:hidden bottom-0 right-0 bg-[#292929] rounded-2xl grid grid-cols-5 left-0 m-2">
        <div className="flex flex-col items-center px-5 py-3">
          <HomeFilledIcon sx={{ color: "#AAAAAA" }} />
          <div className="text-xs font-medium text-[#AAAAAA]">HOME</div>
        </div>
        <div
          onClick={() => navigate("/fans/explore/")}
          className="flex flex-col items-center px-5 py-3"
        >
          <SearchIcon sx={{ color: "#AAAAAA" }} />
          <div className="text-xs font-medium text-[#AAAAAA]">EXPLORE</div>
        </div>
        <div className="flex flex-col items-center px-5 py-3">
          <MusicNoteIcon sx={{ color: "#FF3939" }} />
          <div className="text-xs font-medium text-[#FF3939]">ARTISTS</div>
        </div>
        <div className="flex flex-col items-center px-5 py-3">
          <StorefrontIcon sx={{ color: "#AAAAAA" }} />
          <div className="text-xs font-medium text-[#AAAAAA]">SHOP</div>
        </div>
        <div className="flex flex-col items-center px-5 py-3">
          <ChatBubbleOutlineIcon sx={{ color: "#AAAAAA" }} />
          <div className="text-xs font-medium text-[#AAAAAA]">MESSAGES</div>
        </div>
      </nav>
    </div>
  );
}
