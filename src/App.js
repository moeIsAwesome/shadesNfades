import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Icon from './Logo.png';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('#00b7e7');
  const [error, setError] = useState(false);
  const [percent, setPercent] = useState(10);
  const [list, setList] = useState(new Values('#00b7e7').all(10));
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(parseInt(percent));
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="glass-panel">
      <section className="glass-panel2">
        <div className="flex">
          <img className="logo" src={Icon} alt="Logo" />
          <h1 className="title">The shades and fades of life</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <button className="glass-button" type="submit">
            Submit
          </button>
          <input
            type="text"
            className={`${error ? 'error' : null}`}
            value={color}
            placeholder="#f15025"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />

          <label className="input-label">
            /
            <input
              className="percent"
              type="number"
              min={0}
              value={percent}
              onChange={(e) => {
                setPercent(e.target.value);
              }}
            />
          </label>
        </form>
      </section>
      <section className="glass-panel3">
        <div className="colors">
          {list.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                list={list}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
