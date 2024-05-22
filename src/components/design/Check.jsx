import React from 'react';

const Check = ({ fill = "#00FA9A" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill={fill}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.8047 7.52925C18.0651 7.7896 18.0651 8.21171 17.8047 8.47206L10.4714 15.8054C10.2111 16.0657 9.78894 16.0657 9.5286 15.8054L6.19526 12.4721C5.93491 12.2117 5.93491 11.7896 6.19526 11.5292C6.45561 11.2689 6.87772 11.2689 7.13807 11.5292L10 14.3912L16.8619 7.52925C17.1223 7.2689 17.5444 7.2689 17.8047 7.52925Z" fill="#0E0C15"/>
  </svg>
);

export default Check;
