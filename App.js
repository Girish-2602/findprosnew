import React from 'react';
import EditableFields from './EditableFields';
import SalaryPicker from './SalaryPicker';

function App() {
  return (
    <div>
      <h1>Personal Details</h1>
      <EditableFields />
      <h1>Salary Picker</h1>
      <SalaryPicker />
    </div>
  );
}

export default App;
