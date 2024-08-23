import React from "react";
import { classInput, classButton, classLabel } from "../style/style";

export function LoginForm({ OnChangeEmail, OnChangePassword, OnSubmit }) {
  return (
    <div className="backdrop-blur-md sm:w-3/12 w-full">
      {/* // Głowny div formularza logowania */}
      <div className="flex w-full h-full bg-slate-500 bg-opacity-10 p-5 rounded-md ">
        <form onSubmit={OnSubmit} className="w-full">
          <div className="mb-6">
            <label htmlFor="Email" className={classLabel}>
              E-Mail
            </label>
            <input
              id="Email"
              onChange={OnChangeEmail}
              className={classInput}
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="Password" className={classLabel}>
              Hasło
            </label>
            <input
              id="Password"
              type="text"
              onChange={OnChangePassword}
              className={classInput}
              placeholder="password"
            />
          </div>
          <div className="mb-6">
            {/* Button */}
            <button type="submit" className={classButton}>
              Zaloguj się!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
