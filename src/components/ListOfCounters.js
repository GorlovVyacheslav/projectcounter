import React from "react";

export const ListOfCounters = () => {
  // TODO: initialize state for radio boxes
  // state must contain checked checkBox
  return (
    <div>
      <fieldset>
        <legend>Select a maintenance drone:</legend>
        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label htmlFor="huey">Huey</label>
        </div>
        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label htmlFor="dewey">Dewey</label>
        </div>
        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label htmlFor="louie">Louie</label>
        </div>
      </fieldset>
      <input onChange={() => {}} placeholder="new counter value" />
    </div>
  );
};
