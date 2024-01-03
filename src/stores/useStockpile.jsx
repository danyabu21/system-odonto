import { create } from "zustand";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

const useStockpile = create((set, get) => {
  const setState = (fn) => set(produce(fn));

  return {
    state: {
      stockpile: [
        {
          id: 1,
          name: "Resina Bulk Fill SonicFill - Kerr A2 (599992)",
          idealAmount: "1",
          amount: "1",
        },
        {
          id: 2,
          name: "Água Oxigenada 10 Volumes - Rioquímica",
          idealAmount: "50",
          amount: "50",
        },
      ],
      stockModal: false,
      stockHistoryModal: false,
      stockModalId: 0,
      stockSelectedItem: null,
      isSnackOpen: false,
      stockSnackStatus: "",
      stockSnackLabel: "",
    },
    actions: {
      setProduct: (product) => {
        setState(({ state }) => {
          const hasProduct = get().state.stockpile.find(
            (item) => item.name === product.name,
          );
          if (!hasProduct) {
            state.stockpile.push({ ...product, id: uuidv4() });
            state.stockSnackStatus = "success";
            state.stockSnackLabel =
              "Produto adicionado com sucesso ao estoque!";
          } else {
            state.stockSnackStatus = "error";
            state.stockSnackLabel =
              "Não foi possível adicionar o produto, pois o mesmo já está cadastrado no sistema";
          }
        });
      },
      openStockModal: () => {
        setState(({ state }) => {
          state.stockModal = true;
          console.log(get().state.stockModal);
        });
      },
      closeStockModal: () => {
        setState(({ state }) => {
          state.stockModal = false;
          console.log(get().state.stockModal);
        });
      },
      openStockHistoryModal: () => {
        setState(({ state }) => {
          state.stockHistoryModal = true;
        });
      },
      closeStockHistoryModal: () => {
        setState(({ state }) => {
          state.stockHistoryModal = false;
        });
      },
      setStockModalId: (id) => {
        setState(({ state }) => {
          state.stockModalId = id;
        });
      },
      setSelectedItem: (item) => {
        setState(({ state }) => {
          state.stockSelectedItem = item;
        });
      },
      openStockSnack: () => {
        setState(({ state }) => {
          state.isSnackOpen = true;
        });
      },
      closeStockSnack: () => {
        setState(({ state }) => {
          state.isSnackOpen = false;
        });
      },
    },
  };
});

export default useStockpile;
