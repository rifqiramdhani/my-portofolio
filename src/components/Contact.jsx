import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailJs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Input from "./Input";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // All config going to emailjs.com
    emailJs
      .send(
        "service_2x4281n", // Email Service
        "template_zqky04j", // Email Template
        {
          from_name: form.name,
          to_name: "Rifqi",
          from_email: form.email,
          to_email: "rifqiramdhani8@gmail.com",
          message: form.message,
        },
        "EagL5xYzwuYSSGJhv" // Public key
      )
      .then(() => {
        setLoading(false);
        alert("Tank you. I will get back to you as soon as posible");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }), (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong");
      }
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <Input
            type="text"
            name="name"
            label="Your Name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
          />

          <Input
            type="email"
            name="email"
            label="Your Email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
          />

          <Input
            type="textarea"
            name="message"
            label="Your Message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
