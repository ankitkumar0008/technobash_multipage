import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.css";

const socialLinks = [
  { href: "https://www.linkedin.com", icon: <FaLinkedin /> },
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://www.instagram.com", icon: <FaInstagram /> },
];

const FooterWithCourses = () => {
  return (
    <footer className="footer w-screen bg-[#5542ff] text-black">
      <div className="container mx-auto flex flex-col gap-12 px-4 py-8">
        {/* Courses Section */}
        <div className="ag-courses_box flex flex-wrap gap-6">
          {/* Course Item 1 */}
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">
                UI/Web & Graph design for teenagers 11-17 years old
              </div>
              <img
                src="./img/ankit.png" // Replace with your actual image path or URL
                alt="Digital Marketing"
                className="course-image"
              />
              <div className="email_div">
                <a href="mailto:ankitkumar867903@gmail.com" className="email_div_text">Ankit Kumar</a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Course Item 2 */}
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">
                UX/UI Web-Design + Mobile Design
              </div>
              <img
                src="./img/ankit.png" // Replace with your actual image path or URL
                alt="Digital Marketing"
                className="course-image"
              />
              <div className="email_div">
                <a href="mailto:ankitkumar867903@gmail.com" className="email_div_text">Ankit Kumar</a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Course Item 3 */}
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">
                Annual package "Product+UX/UI+Graph designer 2022"
              </div>
              <img
                src="./img/ankit.png" // Replace with your actual image path or URL
                alt="Digital Marketing"
                className="course-image"
              />
              <div className="email_div">
                <a href="mailto:ankitkumar867903@gmail.com" className="email_div_text">Ankit Kumar</a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Course Item 4 */}
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">Graphic Design</div>
              <img
                src="./img/ankit.png" // Replace with your actual image path or URL
                alt="Digital Marketing"
                className="course-image"
              />
              <div className="email_div">
                <a href="mailto:ankitkumar867903@gmail.com" className="email_div_text">Ankit Kumar</a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Course Item 5 */}
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">Motion Design</div>
              <img
                src="./img/ankit.png" // Replace with your actual image path or URL
                alt="Digital Marketing"
                className="course-image"
              />
              <div className="email_div">
                <a href="mailto:ankitkumar867903@gmail.com" className="email_div_text">Ankit Kumar</a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Course Item 6 */}
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">
                Front-end development + jQuery + CMS
              </div>
              <img
                src="./img/ankit.png" // Replace with your actual image path or URL
                alt="Digital Marketing"
                className="course-image"
              />
              <div className="email_div">
                <a href="mailto:ankitkumar867903@gmail.com" className="email_div_text">Ankit Kumar</a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Course Item 7 */}
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_title">Developer</div>
              {/* Add the image */}
              <img
                src="./img/ankit.png" // Replace with your actual image path or URL
                alt="Digital Marketing"
                className="course-image"
              />
              <div className="email_div">
                <a href="mailto:ankitkumar867903@gmail.com" className="email_div_text">Ankit Kumar</a>
              </div>
              <div className="ag-courses-item_bg"></div>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Course Item 8 */}
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">Interior Design</div>
              <img
                src="./img/ankit.png" // Replace with your actual image path or URL
                alt="Digital Marketing"
                className="course-image"
              />
              <div className="email_div">
                <a href="mailto:ankitkumar867903@gmail.com" className="email_div_text">Ankit Kumar</a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Course Item 9 */}
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">
                Advanced Graphic Design
              </div>
              <img
                src="./img/ankit.png" // Replace with your actual image path or URL
                alt="Digital Marketing"
                className="course-image"
              />
              <div className="email_div">
                <a href="mailto:ankitkumar867903@gmail.com" className="email_div_text">Ankit Kumar</a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Content Section */}
        <div className="footer-content flex justify-between items-center">
          <p className="text-sm font-light">©Nova 2024. All rights reserved</p>

          <div className="flex gap-6 text-lg">
            {/* Footer Social Links */}
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-500 ease-in-out hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <a
            href="#privacy-policy"
            className="text-sm font-light hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithCourses;
