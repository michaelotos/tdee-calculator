import { useState } from 'react';

export default function TDEECalculator() {
  const [formData, setFormData] = useState({
    gender: 'Male',
    age: '',
    height: '',
    weight: '',
    activity_level: 'sedentary'
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/tdee', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    setResult(data.tdee);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
      <h1>TDEE Calculator</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <select id="gender" value={formData.gender} onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input type="number" id="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="number" id="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} required />
        <input type="number" id="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} required />
        <select id="activity_level" value={formData.activity_level} onChange={handleChange}>
          <option value="sedentary">Sedentary</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="active">Active</option>
          <option value="very_active">Very Active</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      {result && <h2>Your TDEE is {result} calories/day.</h2>}
    </div>
  );
}
