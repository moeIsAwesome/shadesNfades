import React, { useState, useEffect } from 'react';
import { IoCopyOutline } from 'react-icons/io5';

const SingleColor = ({ rgb, weight, index, hexColor, list }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1700);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > list.length / 2 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      {alert ? (
        <p className="copied">
          COPIED <IoCopyOutline className="icon" />
        </p>
      ) : (
        <>
          <p className="percent-value">{weight}%</p>{' '}
          <p className="color-value">{hexValue}</p>
        </>
      )}
    </article>
  );
};

export default SingleColor;
