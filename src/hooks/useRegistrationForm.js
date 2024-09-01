// src/hooks/useRegistrationForm.js
import { useRef } from 'react';
import { registerUser } from '../utils/api';

const useRegistrationForm = () => {
  const firstName = useRef();
  const lastName = useRef();
  const tin = useRef();
  const zip = useRef();
  const email = useRef();

  const handleRegistration = async (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      tin: tin.current.value,
      zip: zip.current.value,
      email: email.current.value,
    };
    const jsonResponse = await registerUser(data);
    alert(jsonResponse.message);
  };

  return { firstName, lastName, tin, zip, email, handleRegistration };
};

export default useRegistrationForm;