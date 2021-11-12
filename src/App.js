import React, { useState } from 'react';
import './style.css';
import Button from './Button';

export default function App() {
  const [name, setName] = useState('');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {name && <p>{name}</p>}
      <Button type="submit" primary click={() => setName('submit')}>
        Save
      </Button>
    </div>
  );
}
