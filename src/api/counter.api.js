export const counterApi = {
  increment() {
    return Promise.resolve({ value: 100, name: "qwe" });
  },
  decrement() {
    return Promise.resolve({ value: 20 });
  },
  // reset() {
  //   return setCounter(0),
  // }, 
  // createNewHost() {},
};

/*
 * State -> setState
 * click -> API -> value -> setState -> UI(State)
 *
 *
 * */
