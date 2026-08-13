import "./Contact.css";

const footerColumns = [
  {
    title: "Resources",
    links: [
      "Workout Routines",
      "Diet Plans",
      "Video Tutorials",
      "Member Success Stories",
      "FAQ",
    ],
  },
  {
    title: "Platform",
    links: [
      "Personal Training",
      "Group Fitness Classes",
      "Gym Facilities",
      "Membership Plans",
      "Online Training",
    ],
  },
  {
    title: "Community",
    links: ["Events", "Workshops", "Fitness Challenges", "Local Competitions", "Careers"],
  },
];

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="contact__title">Connect With Us.</h2>

          <div className="contact__grid">
            <div>
              <h3 className="contact__label">Our Location</h3>
              <div className="contact__map">
                <iframe
                  title="JBS Gym location"
                  src="https://maps.google.com/maps?q=Bapatla%2C+Andhra+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="contact__details">
              <div>
                <h3 className="contact__label">Opening Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div>
                <h3 className="contact__label">Contact Information</h3>
                <p>Phone: 8150933624, 9398103576</p>
                <p>Email: support@jbsgym.com</p>
                <p>
                  Address: Sikharamvari veedhi, Maddiboinavaripalem, Bapatla,
                  Andhra Pradesh 522101
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__grid">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="footer__credit">developed by ❤ amruthexe</p>
      </footer>
    </>
  );
}
