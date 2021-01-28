import React, { useState } from "react";
import { Button } from "@buffetjs/core";
import { Label, InputDescription, InputErrors } from "strapi-helper-plugin";
import Editor from "../ckEditor";
import MediaLib from "../mediaLib";

const Wysiwyg = ({
  inputDescription,
  errors,
  label,
  name,
  noErrorsDescription,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let spacer = !inputDescription?.isEmpty ? (
    <div style={{ height: "1rem" }} />
  ) : (
    <div />
  );

  if (!noErrorsDescription && !errors?.isEmpty) {
    spacer = <div />;
  }

  const handleChange = (data) => {
    if (data.mime.includes("image")) {
      const imgTag = `<p><img src="${data.url}" caption="${data.caption}" alt="${data.alternativeText}"></img></p>`;
      const newValue = value ? `${value}${imgTag}` : imgTag;

      onChange({ target: { name, value: newValue } });
    }
  };

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      style={{
        marginBottom: "1.6rem",
        fontSize: "1.3rem",
        fontFamily: "Lato",
      }}
    >
      <Label htmlFor={name} message={label} style={{ marginBottom: 10 }} />
      <div>
        <Button color="primary" onClick={handleToggle}>
          MediaLib
        </Button>
      </div>

      <Editor name={name} onChange={onChange} value={value} />

      <InputDescription
        message={inputDescription}
        style={inputDescription !== "" ? { marginTop: "1.4rem" } : {}}
      />
      <InputErrors
        errors={(!noErrorsDescription && errors) || []}
        name={name}
      />
      {spacer}
      <MediaLib
        onToggle={handleToggle}
        isOpen={isOpen}
        onChange={handleChange}
      />
    </div>
  );
};

export default Wysiwyg;
