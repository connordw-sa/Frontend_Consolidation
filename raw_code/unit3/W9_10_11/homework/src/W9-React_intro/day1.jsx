import React from "react";
import ButtonComponent from "./day1/day1";
import Day1extra from "./day1/day1extra";
export default function Page1() {
  return (
    <div>
      <ButtonComponent content="custom content" />
      <Day1extra
        image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F05%2F12170411%2Fcat-kitten-138468381.jpg&q=60"
        alt="blah"
      />
    </div>
  );
}
