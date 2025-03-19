"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { useAtom } from "jotai";
// import { phoneNumberAtom } from "../../../store/atoms/general/generalAtoms";
import React, { useState } from "react";

export const PhoneInputComponent = () => {
  //   const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);

  //   const handleOnChange = (value, country) => {
  //     setPhoneNumber(value);
  //     setValue("phone", value);
  //   };
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <div className="flex space-x-2">
      <PhoneInput
        country={"sk"}
        value={phoneNumber}
        enableSearch={true}
        countryCodeEditable={false}
        autoFormat={true}
        preferredCountries={["sk", "cz"]}
        onChange={handleOnChange}
        inputStyle={{
          width: "100%",
          height: "37px",
          paddingTop: "14px",
          paddingBottom: "14px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#FFFFFF",
        }}
        buttonStyle={{
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        // inputClass="focus:outline-red-500"
        placeholder="Phone number"
      />
    </div>
  );
};

export default PhoneInputComponent;
