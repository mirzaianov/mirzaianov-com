import Contact from './Contact';

const ContactsList = () => {
  return (
    <div className="list">
      <Contact
        name="LinkedIn:"
        href="https://linkedin.com/in/mirzaianov/"
        path="linkedin.com/in/mirzaianov"
      />
      <Contact
        name="Site:"
        href="https://cv.mirzaianov.com"
        path="cv.mirzaianov.com"
      />
      <Contact
        name="GitHub:"
        href="https://github.com/mirzaianov"
        path="github.com/mirzaianov"
      />
      <Contact
        name="Telegram:"
        href="https://t.me/mirzaianov"
        path="t.me/mirzaianov"
      />
      <Contact
        name="Email:"
        href="mailto:hello@mirzaianov.com"
        path="hello@mirzaianov.com"
      />
      <Contact
        name="Location:"
        href="https://maps.app.goo.gl/sfzLu94hcytEdaMv7"
        path="Bursa, Türkiye"
      />
    </div>
  );
};

export default ContactsList;
