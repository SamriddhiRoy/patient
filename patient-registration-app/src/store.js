import { configureStore } from "@reduxjs/toolkit";
import patientFormReducer from "./features/patientForm/patientFormSlice"; // Ensure this file exists and exports a reducer

const store = configureStore({
  reducer: {
    patientForm: patientFormReducer, // Add the patientForm reducer to the store
  },
});

export default store;
