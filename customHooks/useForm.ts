import React, { useState } from "react";
import { TFormData } from "../types";

export const useForm = (
  initialState: TFormData,
  onSubmit: (formData: TFormData) => void
) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange: React.FormEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};
