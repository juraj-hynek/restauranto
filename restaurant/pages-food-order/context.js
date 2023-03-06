import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { tables } from "./data-config";
import { listMenuFlatten } from "./data-food-menu";

const initialState = {
  tables: tables,
  menu: listMenuFlatten,
};

const tablesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TABLE": {
      const newTable = {
        id: state.tables.length + 1,
        waiter_id: "",
        waiter_name: "",
        name: action.payload.name,
        table_bill: 0.0,
        customers: [],
        bookDate: new Date(),
        initBgColorTable: "#4ade80",
        booked: false,
        timeOfReservation: null,
        needCleaning: false,
      };
      const newTables = [...state.tables, newTable];
      return { ...state, tables: newTables };
    }

    case "REMOVE_TABLE": {
      const indexToRemove = action.payload.index;

      const newTables = [
        ...state.tables.slice(0, indexToRemove),
        ...state.tables.slice(indexToRemove + 1),
      ];
      return { ...state, tables: newTables };
    }

    case "ADD_ORDER": {
      const { tableIndex, customerIndex, order = [] } = action.payload;

      const updatedTable = {
        ...state.tables[tableIndex],
        customers: [],
      };

      const newTables = [
        ...state.tables.slice(0, tableIndex),
        updatedTable,
        ...state.tables.slice(tableIndex + 1),
      ];

      return {
        ...state,
        tables: newTables,
      };
    }

    case "RESERVE_TABLE": {
      const indexToEdit = action.payload.tableIndex;
      const updatedTable = {
        ...state.tables[indexToEdit],
        booked: !state.tables[indexToEdit].booked,
        timeOfReservation: new Date().toDateString(),
      };
      const newTables = [
        ...state.tables.slice(0, indexToEdit),
        updatedTable,
        ...state.tables.slice(indexToEdit + 1),
      ];
      return { ...state, tables: newTables };
    }

    case "EDIT_TABLE": {
      const indexToEdit = action.payload.index;
      const updatedTable = {
        ...state.tables[indexToEdit],
        ...action.payload,
      };
      const newTables = [
        ...state.tables.slice(0, indexToEdit),
        updatedTable,
        ...state.tables.slice(indexToEdit + 1),
      ];
      return { ...state, tables: newTables };
    }

    case "ADD_ORDER": {
      const { tableIndex, customerIndex, order = [] } = action.payload;
      console.log("ADD_ORDER", tableIndex);

      const newCustomer = {
        ...state.tables[tableIndex].customers[customerIndex],
        orders: [
          ...state.tables[tableIndex].customers[customerIndex].orders,
          ...order,
        ],
      };

      const updatedTable = {
        ...state.tables[tableIndex],
        customers: [
          ...state.tables[tableIndex].customers.slice(0, customerIndex),
          newCustomer,
          ...state.tables[tableIndex].customers.slice(1, customerIndex),
        ],
      };

      const newTable = [
        ...state.tables.slice(0, tableIndex),
        updatedTable,
        ...state.tables.slice(tableIndex + 1),
      ];

      return {
        ...state,
        tables: newTable,
      };
    }

    case "ADD_CUSTOMER": {
      const { tableIndex } = action.payload;
      const updatedTable = {
        ...state.tables[tableIndex],

        customers: [
          ...state.tables[tableIndex].customers,
          {
            name: "C" + state.tables[tableIndex].customers.length + 1,
            id: state.tables[tableIndex].customers.length + 1,
            orders: [],
            bill: 0,
            tableIndex: tableIndex,
          },
        ],
      };
      const newTables = [
        ...state.tables.slice(0, tableIndex),
        updatedTable,
        ...state.tables.slice(tableIndex + 1),
      ];
      return { ...state, tables: newTables };
    }

    case "REMOVE_CUSTOMER": {
      const { tableIndex, customerIndex } = action.payload;
      const updatedCustomers = [
        ...state.tables[tableIndex].customers.slice(0, customerIndex),
        ...state.tables[tableIndex].customers.slice(customerIndex + 1),
      ];
      const updatedTable = {
        ...state.tables[tableIndex],
        customers: updatedCustomers,
      };
      const newTables = [
        ...state.tables.slice(0, tableIndex),
        updatedTable,
        ...state.tables.slice(tableIndex + 1),
      ];
      return { ...state, tables: newTables };
    }

    case "EDIT_CUSTOMER": {
      const { tableIndex, customerIndex, customer } = action.payload;

      const updatedCustomers = [
        ...state.tables[tableIndex].customers.slice(0, customerIndex),
        customer,
        ...state.tables[tableIndex].customers.slice(customerIndex + 1),
      ];
      const updatedTable = {
        ...state.tables[tableIndex],
        customers: updatedCustomers,
      };
      const newTables = [
        ...state.tables.slice(0, tableIndex),
        updatedTable,
        ...state.tables.slice(tableIndex + 1),
      ];
      return { ...state, tables: newTables };
    }

    default:
      return state;
  }
};

//create a context, with createContext api
export const ContextCreate = createContext({
  tables: [],
  menu: [],
});

const AppContext = (props) => {
  const [state, dispatch] = useReducer(tablesReducer, initialState);

  useEffect(() => {
    console.log("state", JSON.stringify(state.tables, null, 2));
  }, [state]);

  return (
    <ContextCreate.Provider value={[state, dispatch]}>
      {props.children}
    </ContextCreate.Provider>
  );
};

export const useAppContext = () => useContext(ContextCreate);

export default AppContext;
