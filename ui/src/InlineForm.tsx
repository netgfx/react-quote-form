import { InputComponent } from "./InputComponent";
import { PillsComponent } from "./PillComponent";
import { SubmitButton } from "./SubmitButton";
import { useRef, useState } from "react";
import { API_URL, BUDGETS, TITLES } from "./constants";

export const InlineForm = () => {
  const [typeSelected, setTypeSelected] = useState<string | null>(null);
  const [budgetSelected, setBudgetSelected] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const originRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  //

  const setSelected = (title: string) => {
    setTypeSelected(title);
  };

  const setSelectedBudget = (title: string) => {
    setBudgetSelected(title);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      sendEmail();
    } else {
      e.stopPropagation();
      e.target.reportValidity();
      console.log("invalid form");
    }
  };

  // the function to send an email
  const sendEmail = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const project = typeSelected;
    const budget = budgetSelected;
    const origin = originRef.current?.value;

    const raw = JSON.stringify({
      name,
      email,
      origin,
      budget,
      project,
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("ngrok-skip-browser-warning", "any");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(API_URL, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setSuccess(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {success && (
        <div className="successContainer">
          <div className="success">Thank you for your message!</div>
        </div>
      )}
      {!success && (
        <form onSubmit={onSubmit} noValidate>
          <section>
            <h3>Hi, my name is </h3>
            <InputComponent type="name" objRef={nameRef} />
            <h3> and I'm from</h3>
            <InputComponent type="origin" objRef={originRef} />
            <h2>.</h2>
            <h3>I'm interested in</h3>
            {TITLES.map((title: string, index: number) => (
              <PillsComponent
                key={index}
                title={title}
                setSelected={setSelected}
                selected={typeSelected}
              />
            ))}
            <h2>.</h2>
            <h3>My budget for this project is:</h3>
            {BUDGETS.map((title: string, index: number) => (
              <PillsComponent
                selected={budgetSelected}
                key={index + 1000}
                title={title}
                setSelected={setSelectedBudget}
              />
            ))}
            <h2>. </h2>
            <h3>You can contact me via e-mail </h3>
            <InputComponent type="email" objRef={emailRef} />
            <h2>.</h2>
            <SubmitButton />
          </section>
        </form>
      )}
    </>
  );
};
