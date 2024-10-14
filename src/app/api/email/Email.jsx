import {
  Body,
  Button,
  Container,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const Email = ({ fullname, email, service, training, message }) => {
  return (
    <Html>
      <Body>
        <Container>
          <Section>
            <Img
              src="https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Dr+Edwige_Logos/ES+Analysis_Logo_1.png"
              width="200"
              height="200"
              alt="ES Analysis Logo"
              style={{
                borderRadius: "15px",
              }}
            />

            <Text>
              Thanks for reading this information. You&apos;re now ready to
              collect the data from your deployed website.
            </Text>

            <Text>
              <p className="text-lg text-zinc-300">
                Hi, someone submitted a form with the following details:
              </p>
              <ul className="flex flex-col space-y-4">
                <li>
                  <strong>
                    {" "}
                    <i> Prospective client : </i>{" "}
                  </strong>
                  {"  "} {fullname}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i> Email : </i>{" "}
                  </strong>
                  <a className="font-medium" href={`mailto:${email}`}>
                    {"  "}
                    {email}
                  </a>
                  {"  "}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i> Selected service : </i>{" "}
                  </strong>{" "}
                  {"  "} {service}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i> Selected training : </i>{" "}
                  </strong>{" "}
                  {"  "} {training}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i> Message : </i>{" "}
                  </strong>{" "}
                  {"  "} {message}
                </li>
                <br></br>
              </ul>

              <Button
                href="https://esanalysis.com"
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "5px",
                }}
              >
                Reply to this contact
              </Button>

              <p>
                Best regards, <br />
                ES Analysis Team
              </p>
            </Text>
            <Text>
              {" "}
              © {new Date().getFullYear()} ES Analysis - Washington DC, USA. All
              rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;
