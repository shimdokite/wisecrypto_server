import { useEffect, useState } from 'react';

import { LoginInfo } from '../../login/_types/data';
import { CreateAccount } from '../../register/_types/data';

interface UseFormProps<T extends CreateAccount | LoginInfo> {
  initialValue: T;
  onSubmit: (values: T) => void;
}

const useForm = <T extends CreateAccount | LoginInfo>({
  initialValue,
  onSubmit,
}: UseFormProps<T>) => {
  const [values, setValues] = useState(initialValue);
  const [next, setNext] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { type, value, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues({ ...values, [type]: newValue });
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
    handleInputValueChange,
    handleSubmit,
    onSubmit,
  };
};

export default useForm;
