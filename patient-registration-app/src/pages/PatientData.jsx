import React from "react";

const PatientData = () => {
  // Dummy patient data
  const patients = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      mobileNumber: "123-456-7890",
      email: "john.doe@example.com",
      address: "123 Main St, Springfield",
      city: "Springfield",
      doctor: "Dr. Smith",
      bedNumber: "101",
      testName: "Blood Test",
      result: "Negative",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      mobileNumber: "987-654-3210",
      email: "jane.smith@example.com",
      address: "456 Oak St, Springfield",
      city: "Springfield",
      doctor: "Dr. Adams",
      bedNumber: "102",
      testName: "X-ray",
      result: "Positive",
    },
    {
      id: 3,
      firstName: "Mary",
      lastName: "Johnson",
      mobileNumber: "555-123-4567",
      email: "mary.johnson@example.com",
      address: "789 Pine St, Springfield",
      city: "Springfield",
      doctor: "Dr. Lee",
      bedNumber: "103",
      testName: "ECG",
      result: "Normal",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Data</h1>
      <p className="mb-6">This is the Patient Data screen. Below is a list of dummy patient data:</p>

      {/* Table to display patient data */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left">First Name</th>
            <th className="border-b px-4 py-2 text-left">Last Name</th>
            <th className="border-b px-4 py-2 text-left">Mobile Number</th>
            <th className="border-b px-4 py-2 text-left">Email</th>
            <th className="border-b px-4 py-2 text-left">Address</th>
            <th className="border-b px-4 py-2 text-left">Doctor</th>
            <th className="border-b px-4 py-2 text-left">Bed Number</th>
            <th className="border-b px-4 py-2 text-left">Test Name</th>
            <th className="border-b px-4 py-2 text-left">Result</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="border-b px-4 py-2">{patient.firstName}</td>
              <td className="border-b px-4 py-2">{patient.lastName}</td>
              <td className="border-b px-4 py-2">{patient.mobileNumber}</td>
              <td className="border-b px-4 py-2">{patient.email}</td>
              <td className="border-b px-4 py-2">{patient.address}</td>
              <td className="border-b px-4 py-2">{patient.doctor}</td>
              <td className="border-b px-4 py-2">{patient.bedNumber}</td>
              <td className="border-b px-4 py-2">{patient.testName}</td>
              <td className="border-b px-4 py-2">{patient.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientData;
