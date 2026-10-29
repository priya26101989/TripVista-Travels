import { useState } from "react";

function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const [errors, setErrors] = useState({});
const [success, setSuccess] = useState("");

function handleChange(event) {
const { name, value } = event.target;


setFormData((previous) => ({
  ...previous,
  [name]: value,
}));

setErrors((previous) => ({
  ...previous,
  [name]: "",
}));

setSuccess("");


}

function validateForm() {
const newErrors = {};


const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!formData.name.trim()) {
  newErrors.name = "Name is required.";
} else if (!nameRegex.test(formData.name.trim())) {
  newErrors.name = "Name must contain only letters and spaces.";
}

if (!formData.email.trim()) {
  newErrors.email = "Email is required.";
} else if (!emailRegex.test(formData.email.trim())) {
  newErrors.email = "Please enter a valid email address.";
}

if (!formData.subject.trim()) {
  newErrors.subject = "Subject is required.";
} else if (formData.subject.trim().length < 3) {
  newErrors.subject = "Subject must be at least 3 characters.";
}

if (!formData.message.trim()) {
  newErrors.message = "Message is required.";
} else if (formData.message.trim().length < 10) {
  newErrors.message = "Message must be at least 10 characters.";
}

return newErrors;


}

function handleSubmit(event) {
event.preventDefault();


const validationErrors = validateForm();
setErrors(validationErrors);

if (Object.keys(validationErrors).length === 0) {
  setSuccess("Thank you! Your form has been validated successfully.");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
}


}

const inputClass =
"w-full rounded-lg border border-sky-200 bg-sky-50/50 px-4 py-3 outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100";

const errorClass = "mt-1 text-sm text-red-600";

return ( <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-orange-50"> <section className="bg-gradient-to-r from-indigo-950 via-blue-800 to-teal-600 px-6 pt-20 pb-16 py-16 text-center text-white"> <h1 className="mb-4 text-4xl font-bold md:text-5xl">
Contact Us </h1> <p className="text-lg">
Have questions? We would love to hear from you. </p> </section>


  <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
    <div>
      <h2 className="mb-5 text-3xl font-bold text-gray-800">
        Get in Touch
      </h2>

      <p className="mb-8 leading-7 text-gray-600">
        Contact us to discuss your travel plans. We will help you
        explore the possibilities for your next trip.
      </p>

      <div className="space-y-5">
        <div>
          <h3 className="font-semibold text-blue-900">
            📍 Location
          </h3>
          <p className="text-gray-600">India</p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-900">
            ✉️ Email
          </h3>
          <p className="text-gray-600">info@tripvista.example</p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-900">
            🕒 Working Hours
          </h3>
          <p className="text-gray-600">Monday - Saturday</p>
        </div>
      </div>
    </div>

    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-lg md:p-8"
    >
      {success && (
        <p
          role="status"
          className="rounded-lg bg-green-100 p-3 text-green-700"
        >
          {success}
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className={inputClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className={errorClass}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={inputClass}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className={errorClass}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block font-medium text-gray-700">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter subject"
          className={inputClass}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className={errorClass}>
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          rows={4}
          className={inputClass}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorClass}>
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
      >
        Send Message
      </button>
    </form>
  </section>
</div>


);
}

export default Contact;
