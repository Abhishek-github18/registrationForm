// src/hooks/useTokenValidation.js
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { validateToken } from '../utils/api';

const useTokenValidation = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      setLoading(true);
      validateToken(token)
        .then((data) => {
          if (!data.valid) {
            setError(data.message);
          }
        })
        .catch(() => {
          setError('Failed to validate token');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [searchParams]);

  return { error, loading };
};

export default useTokenValidation;