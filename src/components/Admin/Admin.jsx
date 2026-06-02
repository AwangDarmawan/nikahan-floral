import { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";
import { generateInvitationLink, generateShareText } from "./Share";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Admin = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name.trim());
  };

  const invitationLink = generateInvitationLink(submittedName);
  const shareText = generateShareText(submittedName, invitationLink);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
   
      {/* Form */}
      <Form
        name={name}
        setName={setName}
        handleSubmit={handleSubmit}
      />

      {/* Preview */}
      {submittedName && (
        <Preview
          submittedName={submittedName}
          invitationLink={invitationLink}
          shareText={shareText}
        />
      )}
      {/* footer */}
       <div className="text-center mt-8 my-16 py-6 px-5 bg-[#37558D] rounded text-white border-[#37558D] shadow-3xl ">
            <h1 className="text-sm font-Montserrat font-semibold">
            Awang Darmawan
            </h1>
      
            <a
              href="https://wa.me/6283125307355"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1 hover:text-green-500"
            >
              <FaWhatsapp className="text-2xl my-1" />
              +6283125307355
            </a>
      
            <a
              href="https://instagram.com/awng_drmwn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1 hover:text-red-500"
            >
              <FaInstagram className="text-2xl my-1" />
              @awng_drmwn
            </a>
          </div>
    </div>
  );
};

export default Admin;