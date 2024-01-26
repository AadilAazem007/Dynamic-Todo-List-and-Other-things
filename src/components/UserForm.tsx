import React, { useState } from 'react';


// FormData interface is generic to accept different types of form data
interface FormData<T> {
    name: T;
    email: T;
  }
  
  // Example: FormData<string> will represent form data with string values
  const exampleFormData: FormData<string> = {
    name: "John Doe",
    email: "john@example.com",
  };

// Define a generic FormProps interface
interface FormProps<T> {
  onSubmit: (formData: FormData<T>) => void;
}

// Create a generic form component
function UserForm<T>({ onSubmit }: FormProps<T>) {
  const [formData, setFormData] = useState<FormData<T>>({
    name: '' as T,
    email: '' as T,
  });

  const handleChange = (fieldName: keyof FormData<T>, value: T) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the onSubmit prop with the current form data
    console.log(formData)
    //onSubmit(formData);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={formData.name as string}
          onChange={(e) => handleChange('name', e.target.value as T)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={formData.email as string}
          onChange={(e) => handleChange('email', e.target.value as T)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm