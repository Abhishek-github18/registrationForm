"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Registration = () => {
  const firstName = useRef();
  const lastName = useRef();
  const tin = useRef();
  const zip = useRef();
  const email = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const validateToken = async () => {
      const token = searchParams.get('token');

      if (token) {
        setLoading(true);
        try {
          const res = await fetch('/api/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });
          const data = await res.json();

          if (!data.valid) {
            setError(data.message);
          }
        } catch (error) {
          setError('Failed to validate token');
        } finally {
          setLoading(false);
        }
      }else{
        setLoading(false);
      }
    };

    validateToken();
  }, [searchParams]);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      tin: tin.current.value,
      zip: zip.current.value,
      email: email.current.value,
    };
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    alert(jsonResponse.message);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-8">Registration Page</h1>
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
    </div>
  );
};

export default Registration;