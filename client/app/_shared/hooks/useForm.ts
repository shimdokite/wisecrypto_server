import { useEffect, useState } from 'react';

import { signForm } from 'types/data';

interface UseFormProps {
  initialValue: signForm;
  onSubmit: (values: signForm) => void;
}

const useForm = ({ initialValue, onSubmit }: UseFormProps) => {
  const [values, setValues] = useState(initialValue);
  const [next, setNext] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues({ ...values, [name]: newValue });
  };

  const handleSubmit = () => {
    event?.preventDefault;

    setSubmitting(true);
    setNext(true);
  };

  useEffect(() => {
    if (submitting) {
      onSubmit(values);
    }

    setSubmitting(false);
  }, [submitting]);

  return {
    next,
    setNext,
    submitting,
    values,
    handleChange,
    handleSubmit,
    onSubmit,
  };
};

export default useForm;
