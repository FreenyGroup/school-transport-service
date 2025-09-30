import React from 'react';

const GoogleMap = () => {
  return (
    <div className="lg:pt-15 lg;pb-15 pb-10 pt-10 overflow-x-hidden">
      <iframe
        src="https://maps.google.com/maps?q=308%20Hillwood%20Ave.,%20Falls%20Church,%20VA%2022046&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        width="1920"
        height="497"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
