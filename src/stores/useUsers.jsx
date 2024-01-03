import { create } from "zustand";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

const useStore = create((set, get) => {
  const setState = (fn) => set(produce(fn));

  return {
    state: {
      users: [
        {
          id: 1,
          name: "John",
          surname: "Doe",
          role: "Dentista",
          cellphone: "(11) 99999-9999",
          email: "jhondoe@me.com",
        },
        {
          id: 2,
          name: "Jane",
          surname: "Doe",
          role: "Secretário(a)",
          cellphone: "(11) 8888-7777",
          email: "janedoe@yh.com",
        },
      ],
    },
    actions: {
      setUser: (user) => {
        setState(({ state }) => {
          state.users.push(user);
        });
      },
    },
  };
});

export default useStore;
