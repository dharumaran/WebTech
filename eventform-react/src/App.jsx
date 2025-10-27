import { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    event: "",
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    comments: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.event) newErrors.event = "Please select an event.";
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Please enter a 10-digit phone number.";
    if (!formData.age || formData.age < 18)
      newErrors.age = "You must be at least 18 years old.";
    if (!formData.consent)
      newErrors.consent = "You must agree to the terms and conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration submitted successfully!");
      console.log(formData);
      setFormData({
        event: "",
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        comments: "",
        consent: false,
      });
      setErrors({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-200">
      <div className="container bg-white p-8 rounded-xl shadow-2xl border border-gray-70000 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-gray-500 mb-6 flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Community Event Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Info */}
          <fieldset className="border border-gray-300 p-6 rounded-lg space-y-4 shadow-sm">
            <legend className="text-lg font-semibold text-gray-700 px-2 -ml-2">
              Event Information
            </legend>
            <div>
              <label
                htmlFor="event"
                className="block text-sm font-medium text-gray-700"
              >
                Select Event*
              </label>
              <select
                id="event"
                name="event"
                value={formData.event}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 borderborder-gray-400 rounded-md shadow-sm"
              >
                <option value="">Choose an event</option>
                <option value="annual_gala">Annual Gala Dinner</option>
                <option value="tech_workshop">Tech Workshop</option>
                <option value="community_cleanup">Community Cleanup Day</option>
                <option value="local_market">Local Artisan Market</option>
              </select>
              {errors.event && (
                <small className="error text-xs text-red-500">
                  {errors.event}
                </small>
              )}
            </div>
          </fieldset>

          {/* Personal Info */}
          <fieldset className="border border-gray-300 p-6 rounded-lg space-y-4 shadow-sm">
            <legend className="text-lg font-semibold text-gray-700 px-2 -ml-2">
              Personal Information
            </legend>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.name && (
                <small className="error text-xs text-red-500">
                  {errors.name}
                </small>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.email && (
                <small className="error text-xs text-red-500">
                  {errors.email}
                </small>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.phone && (
                <small className="error text-xs text-red-500">
                  {errors.phone}
                </small>
              )}
            </div>

            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age*
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="18"
                max="120"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.age && (
                <small className="error text-xs text-red-500">
                  {errors.age}
                </small>
              )}
            </div>
          </fieldset>

          {/* Gender */}
          <fieldset className="border border-gray-300 p-6 rounded-lg shadow-sm">
            <legend className="text-lg font-semibold text-gray-700 px-2 -ml-2">
              Gender
            </legend>
            <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 space-y-2 sm:space-y-0">
              {["Male", "Female", "Other"].map((g) => (
                <label
                  key={g}
                  className="flex items-center space-x-2 text-sm text-gray-600"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Comments */}
          <div>
            <label
              htmlFor="comments"
              className="block text-sm font-medium text-gray-100"
            >
              Comments (Optional)
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              maxLength="200"
              placeholder="Any additional details..."
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none"
            ></textarea>
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
            />
            <label
              htmlFor="consent"
              className="text-sm font-medium text-gray-700"
            >
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>
          {errors.consent && (
            <small className="error text-xs text-red-500">
              {errors.consent}
            </small>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
