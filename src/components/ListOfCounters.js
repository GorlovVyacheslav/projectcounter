import React from "react";

export const ListOfCounters = () => {
  // TODO: initialize state for radio boxes
  // state must contain checked checkBox
  return (
    <div>
      <fieldset>
        <legend>List of default counters:</legend>
        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label htmlFor="huey">MY-DEFAULT COUNTER</label>
        </div>
        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label htmlFor="dewey">another default counter</label>
               </div>
      </fieldset>
      <input onChange={() => {}} placeholder="new counter value" />
    </div>
  );
};
