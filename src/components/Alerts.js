import React from 'react';

const Alerts = (props) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="info-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </symbol>
        <symbol id="check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </symbol>
      </svg>
      {props.alert && (
        <div
          className="alert alert-dark d-flex align-items-center"
          role="alert"
          style={{ padding: '0.5rem', fontSize: '0.9rem' }}
        >
          <svg
            className="bi flex-shrink-0 me-2"
            role="img"
            aria-label="Info:"
            style={{ width: '1rem', height: '1rem' }}
          >
            <use href={`#${props.alert.type === 'Success' ? 'check-circle-fill' : 'info-fill'}`} />
          </svg>
          <div>
            <strong>{props.alert.type}</strong>: {props.alert.msg}
          </div>
        </div>
      )}
    </>
  );
};

export default Alerts;


