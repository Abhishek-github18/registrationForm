"use client";

import useTokenValidation from '../../../hooks/useTokenValidation';
import useRegistrationForm from '../../../hooks/useRegistrationForm';
import RegistrationForm from '../../../components/RegistrationForm';

const Registration = () => {
  const { error, loading } = useTokenValidation();
  const { firstName, lastName, tin, zip, email, handleRegistration } = useRegistrationForm();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-8">Registration Page</h1>
      <RegistrationForm
        firstName={firstName}
        lastName={lastName}
        tin={tin}
        zip={zip}
        email={email}
        handleRegistration={handleRegistration}
      />
    </div>
  );
};

export default Registration;