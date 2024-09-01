// src/components/RegistrationForm.js
import React from 'react';

const RegistrationForm = ({ firstName, lastName, tin, zip, email, handleRegistration }) => (
  <form
    method="post"
    onSubmit={handleRegistration}
    className="flex flex-col w-full max-w-md bg-white p-8 rounded-lg shadow-md"
  >
    <input
      ref={firstName}
      name="firstName"
      className="mb-4 p-2 border border-gray-300 rounded"
      type="text"
      placeholder="First Name"
      required
    />
    <input
      ref={lastName}
      name="lastName"
      className="mb-4 p-2 border border-gray-300 rounded"
      type="text"
      placeholder="Last Name"
      required
    />
    <input
      ref={tin}
      name="tin"
      className="mb-4 p-2 border border-gray-300 rounded"
      type="text"
      placeholder="TIN"
      required
    />
    <input
      ref={zip}
      name="zip"
      className="mb-4 p-2 border border-gray-300 rounded"
      type="text"
      placeholder="ZIP Code"
      required
    />
    <input
      ref={email}
      name="email"
      className="mb-4 p-2 border border-gray-300 rounded"
      type="email"
      placeholder="Email"
      required
    />
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      Register
    </button>
  </form>
);

export default RegistrationForm;