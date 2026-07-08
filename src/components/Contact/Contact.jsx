import { motion } from "motion/react";
import "./Contact.css";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import GithubLogo from "@/assets/github-logo.png"
import LinkedInLogo from "@/assets/linkedin.png"
import NavBar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <motion.section
      className="contact-page"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="contact-header">

        <span className="contact-badge">
          GET IN TOUCH
        </span>

        <h1 className="contact-title">
          Let's Build Something Amazing
        </h1>

        <p className="contact-subtitle">
          Whether you have a project, internship opportunity, or just want to
          connect, my inbox is always open. I'll do my best to get back to you
          as soon as possible.
        </p>

      </div>

      <div className="contact-container">

        {/* LEFT CARD */}

        <motion.div
          className="contact-info"
          whileHover={{ y: -6 }}
        >

          <h2>Contact Information</h2>

          <p>
            Feel free to reach out through any of the following platforms.
          </p>

          <div className="info-item">

            <div className="icon-box">
              <a href="mailto:ssawdawkar@gmail.com">
              <Mail size={22} />
              </a>
            </div>

            <div>
              <span>Email</span>
              <a href="mailto:ssawdawkar@gmail.com">
                ssawdawkar@gmail.com
              </a>
            </div>

          </div>

          <div className="info-item">

            <div className="icon-box">
              <a href="tel:+918850299861">
              <Phone size={22} />
              </a>
            </div>

            <div>
              <span>Phone</span>
              <a href="tel:+918850299861">
                +91 8850299861
              </a>
            </div>

          </div>

          <div className="info-item">

            <div className="icon-box">
              <MapPin size={22} />
            </div>

            <div>
              <span>Location</span>
              <p>Mumbai, India</p>
            </div>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/vedteli"
              target="_blank"
              rel="noreferrer"
            >
              {/* Github */}
              <img src={GithubLogo} alt="" srcset="" />
              {/* <Github /> */}
            </a>

            <a
              href="https://linkedin.com/in/vedteli"
              target="_blank"
              rel="noreferrer"
            >
              {/* Linkedin */}
              <img src={LinkedInLogo} alt="" srcset="" />
              {/* <Linkedin /> */}
            </a>

          </div>

        </motion.div>

        {/* RIGHT CARD */}

        <motion.form
          className="contact-form"
          whileHover={{ y: -6 }}
        >

          <div className="input-group">

            <label>Name</label>

            <input
              type="text"
              placeholder="Your Name"
            />

          </div>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="youremail@gmail.com"
            />

          </div>

          <div className="input-group">

            <label>Subject</label>

            <input
              type="text"
              placeholder="Subject"
            />

          </div>

          <div className="input-group">

            <label>Message</label>

            <textarea
              rows="6"
              placeholder="Write your message..."
            />

          </div>

          <button
            type="submit"
            className="send-btn"
          >

            <Send size={18} />

            Send Message

          </button>

        </motion.form>

      </div>
    </motion.section>
    </div>
  );
};

export default Contact;