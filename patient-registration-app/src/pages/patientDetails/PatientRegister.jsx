import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5"; 

const PatientRegister = () => {
  
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    alternateMobile: "",
    email: "",
    dob: "",
    gender: "",
    age: "",
    birthTime: "",
    guardianName: "",
    state: "",
    country: "",
    documentType: "",
    documentNumber: "",
    uploadFile: "",
    address: "",
    city: "",
    zipCode: "",
    doctor: "",
    bedNumber: "",
    testName: "",
    result: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation Logic
  const validateForm = () => {
    let tempErrors = {};
    if (step === 1 && subStep === 1) {
      if (!formData.firstName) tempErrors.firstName = "First name is required";
      if (!formData.lastName) tempErrors.lastName = "Last name is required";
      if (!formData.mobileNumber.match(/^\d{10}$/)) tempErrors.mobileNumber = "Valid 10-digit mobile number required";
      if (!formData.email.match(/^\S+@\S+\.\S+$/)) tempErrors.email = "Valid email is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSaveAndContinue = () => {
    if (validateForm()) {
      if (subStep < 3) {
        setSubStep(subStep + 1);
      } else {
        setStep(step + 1);
        setSubStep(1);
      }
    }
  };

  const handleBack = () => {
    if (subStep > 1) setSubStep(subStep - 1);
    else if (step > 1) setStep(step - 1);
  };

  // Handle blur event (onFocusLost)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });

    // Perform field validation (simple example, can be expanded)
    if (name === "firstName" && !formData.firstName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First Name is required"
      }));
    } else {
      setErrors((prevErrors) => {
        const { firstName, ...rest } = prevErrors;
        return rest;
      });
    }

    if (name === "email" && !formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required"
      }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }

    
  };

  return (
<div className="w-full min-h-screen bg-gray-100 p-8">
 
  <div className="text-center mb-6">
    <h1 className="text-3xl font-semibold text-gray-800">Register a new patient</h1>
    <div className="flex justify-center mt-4">
      <div
        className={`px-4 py-1 rounded-full mx-1 ${step === 1 ? "bg-green-600 text-white" : "bg-gray-200"}`}
      >
        1 Patient Details
      </div>
      <div
        className={`px-4 py-1 rounded-full mx-1 ${step === 2 ? "bg-green-600 text-white" : "bg-gray-200"}`}
      >
        2 Assign Resources
      </div>
      <div
        className={`px-4 py-1 rounded-full mx-1 ${step === 3 ? "bg-green-600 text-white" : "bg-gray-200"}`}
      >
        3 Doctor Test Report
      </div>
    </div>
  </div>

  
  {step === 1 && (
    <div className="flex mb-4">
      <button
        className={`px-6 py-2 ${subStep === 1 ? "border-b-2 border-green-600" : ""}`}
        onClick={() => setSubStep(1)}
      >
        Basic Details
      </button>
      <button
        className={`px-6 py-2 ${subStep === 2 ? "border-b-2 border-green-600" : ""}`}
        onClick={() => setSubStep(2)}
      >
        Legal Documents
      </button>
      <button
        className={`px-6 py-2 ${subStep === 3 ? "border-b-2 border-green-600" : ""}`}
        onClick={() => setSubStep(3)}
      >
        Demographics
      </button>
    </div>
  )}

 
  {step > 1 || subStep > 1 ? (
    <button onClick={handleBack} className="flex items-center mb-4 text-gray-600 hover:text-gray-800">
      <IoArrowBack className="mr-2" /> Back
    </button>
  ) : null}

  
  <div className="bg-white shadow-md rounded-lg p-8">
   
    {step === 1 && subStep === 1 && (
      <>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Basic Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative">
            <label className="block text-gray-700">First Name</label>
            <input
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.firstName}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.firstName}</p>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-700">Last Name</label>
            <input
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.lastName}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.lastName}</p>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              name="mobileNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.mobileNumber}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Enter mobile number"
            />
            {errors.mobileNumber && (
              <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.mobileNumber}</p>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-700">Alternate Mobile</label>
            <input
              name="alternateMobile"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.alternateMobile}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Enter alternate mobile number"
            />
            {errors.alternateMobile && (
              <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.alternateMobile}</p>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-700">Email</label>
            <input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.email}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.email}</p>
            )}
          </div>
        </div>
      </>
    )}

    
    {step === 1 && subStep === 2 && (
      <>
        <h2 className="text-2xl font-semibold mb-4">Legal Documents</h2>
        <div>
          <label className="block text-gray-600">Document Type</label>
          <input name="documentType" onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-600">Upload File</label>
          <input type="file" name="uploadFile" onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
      </>
    )}

    {step === 1 && subStep === 3 && (
      <>
        <h2 className="text-xl font-medium mb-4">Demographics</h2>
        <div>
          <label className="block text-gray-600">Address</label>
          <input name="address" onChange={handleChange} className="border px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block text-gray-600">City</label>
          <input name="city" onChange={handleChange} className="border px-3 py-2 w-full" />
        </div>
      </>
    )}


    {step === 2 && (
      <>
        <h2 className="text-xl font-medium mb-4">Assign Resources</h2>
        <div>
          <label className="block text-gray-600">Doctor Name</label>
          <input name="doctor" onChange={handleChange} className="border px-3 py-2 w-full" />
          {errors.doctor && <p className="text-red-500 text-sm">{errors.doctor}</p>}
        </div>
        <div>
          <label className="block text-gray-600">Bed Number</label>
          <input name="bedNumber" onChange={handleChange} className="border px-3 py-2 w-full" />
          {errors.bedNumber && <p className="text-red-500 text-sm">{errors.bedNumber}</p>}
        </div>
      </>
    )}

    
    {step === 3 && (
      <>
        <h2 className="text-xl font-medium mb-4">Doctor Test Report</h2>
        <div>
          <label className="block text-gray-600">Test Name</label>
          <input name="testName" onChange={handleChange} className="border px-3 py-2 w-full" />
          {errors.testName && <p className="text-red-500 text-sm">{errors.testName}</p>}
        </div>
        <div>
          <label className="block text-gray-600">Result</label>
          <input name="result" onChange={handleChange} className="border px-3 py-2 w-full" />
          {errors.result && <p className="text-red-500 text-sm">{errors.result}</p>}
        </div>
      </>
    )}

   
    <div className="mt-6 flex justify-end space-x-4">
      <button className="px-6 py-2 border rounded" onClick={() => alert("Form saved!")}>
        Save
      </button>
      <button className="px-6 py-2 bg-green-600 text-white rounded" onClick={handleSaveAndContinue}>
        Save & Continue
      </button>
    </div>
  </div>
</div>
  );
};

export default PatientRegister;

