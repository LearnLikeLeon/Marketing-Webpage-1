import React from "react";

export const Email = ({ fullname, email, message }) => (
  <div>
    <p className="text-lg text-zinc-300">
      Hi, someone submitted a form with the following details:
    </p>

    <ul className="flex flex-col space-y-4">
      <li>
        Prospective client:{"  "} {fullname}
      </li>
      <li>
        Email:
        <a className="font-medium" href={`mailto:${email}`}>
          {"  "}
          {email}
        </a>
        {"  "}
      </li>
      <li>
        Message:{"  "} {message}
      </li>
    </ul>
  </div>
);

export default Email;
