import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaQuestionCircle, FaBell, FaUser, FaSignOutAlt, FaCaretDown } from "react-icons/fa";

const TopMenuBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggle = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-pastelBlue text-white flex items-center justify-between px-6 py-4 shadow-lg">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-pastelBlue-200">
            Hospital Logo
          </Link>
        </div>
        {/* Navigation Menu */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/dashboard"
              activeClassName="text-pastelBlue-200 font-bold"
              className="hover:text-pastelBlue-200"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/patient-register"
              activeClassName="text-pastelBlue-200 font-bold"
              className="hover:text-pastelBlue-200"
            >
              Patient Register
            </NavLink>
          </li>
          {/* Dropdown Menus */}
          {[
            {
              label: "Patient Data",
              menu: "patientData",
              links: [
                {
                  text: "Patient Info (WebMD)",
                  href: "https://www.webmd.com/patient-guide",
                },
                {
                  text: "Medical History (Mayo Clinic)",
                  href: "https://www.mayoclinic.org/patient-care-and-health-information",
                },
              ],
            },
            {
              label: "Operation Theater",
              menu: "operationTheater",
              links: [
                {
                  text: "Operations Schedule (Mayo Clinic)",
                  href: "https://www.mayoclinic.org/specialties/surgery",
                },
                {
                  text: "Surgical Team (Verywell Health)",
                  href: "https://www.verywellhealth.com/what-is-a-surgical-team-5180913",
                },
              ],
            },
            {
              label: "Reports",
              menu: "reports",
              links: [
                {
                  text: "Patient Report 1 (CDC)",
                  href: "https://www.cdc.gov/nchs/fastats/reporting.htm",
                },
                {
                  text: "Patient Report 2 (WHO)",
                  href: "https://www.who.int/en/news-room/fact-sheets",
                },
              ],
            },
          ].map(({ label, menu, links }) => (
            <li key={menu} className="relative">
              <button
                className="flex items-center hover:text-pastelBlue-200"
                onClick={() => handleToggle(menu)}
              >
                {label} <FaCaretDown className="ml-1" />
              </button>
              {activeMenu === menu && (
                <ul className="absolute bg-white text-gray-800 mt-2 py-2 rounded-lg shadow-lg w-48">
                  {links.map(({ text, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-pastelBlue-100"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-6">
        <FaQuestionCircle size={20} className="cursor-pointer hover:text-pastelBlue-200" />
        <FaBell size={20} className="cursor-pointer hover:text-pastelBlue-200" />
        <FaUser size={20} className="cursor-pointer hover:text-pastelBlue-200" />
        <FaSignOutAlt size={20} className="cursor-pointer hover:text-pastelBlue-200" />
      </div>
    </nav>
  );
};

export default TopMenuBar;

