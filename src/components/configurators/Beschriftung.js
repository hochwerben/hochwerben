import React, { useState } from 'react';

const data = [];

const Beschriftung = () => {
  const [value, setValue] = useState('seiten');

  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Sie haben ${value} ausgewählt`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Wählen Sie Ihr Produkt aus:
        <select
          name="beschriftung"
          id="beschriftung"
          value={value}
          onChange={handleChange}
        >
          <option value="seiten">Seiten</option>
          <option value="seitenUndHeck2qm">Seiten und Heck (max 2qm)</option>
          <option value="seitenHeckUndFront3qm">
            Seiten, Heck und Front (max 3qm)
          </option>
          <option value="seitenHeckUndFront6qm">
            Seiten, Heck und Front (max 6qm)
          </option>
        </select>
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};

export default Beschriftung;
