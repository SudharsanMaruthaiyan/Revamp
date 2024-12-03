import React from "react";

const Map = () => {
  return (
    <div>
      <div
        className="my-32 py-5 px-5 bg-white w-[80%] mx-auto rounded-lg"
        id="certi"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.3254787193478!2d78.09360247459975!3d9.906826590193813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf9c791cca1f%3A0xd67a9477fb9ba8bb!2sRevamp%20Academy!5e0!3m2!1sen!2sin!4v1733233342332!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[500px] shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
