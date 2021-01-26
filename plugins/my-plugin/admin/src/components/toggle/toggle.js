import React from "react";
import "./toggle.css";

const Toggle = ({ onChange, name, value = false }) => (
  <div>
    <label className="toggleLabel">{name}:</label>
    <button
      type="button"
      onClick={() => onChange({ target: { name, value: !value } })}
      className={`toggleButton ${value && value && "active"}`}
      style={{ background: value ? "#2F855A" : "#bbb" }}
    >
      <span className="toggleSwitch" />
      {value ? "On" : "Off"}
    </button>
  </div>
);

export default Toggle;
