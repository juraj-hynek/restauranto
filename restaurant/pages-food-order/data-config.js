export const order = {
  id: null,
  name: "",
  qty: 0,
  price: 0.0,
};

export const customer = {
  id: null,
  name: "",
  bill: 0.0,
  orders: [],
};

const table = {
  id: null,
  name: "",
  table_bill: 0,
  customers: [],
};

const waiter = {
  waiter_id: "",
  waiter_name: "",
};

export const tables = [
  {
    waiter_id: "",
    waiter_name: "",
    id: 1,
    name: "Table 1",
    table_bill: 0.0,
    customers: [
     
    ],
  },
  {
    waiter_id: "",
    waiter_name: "",
    id: 2,
    name: "Table 2",
    table_bill: 0.0,
    customers: [
     
    ],
  },
  {
    waiter_id: "",
    waiter_name: "",
    id: 2,
    name: "Table 3",
    table_bill: 0.0,
    customers: [
      
    ],
  },
  {
    waiter_id: "",
    waiter_name: "",
    id: 2,
    name: "Table 4",
    table_bill: 0.0,
    customers: [
    
    ],
  },
  {
    waiter_id: "",
    waiter_name: "",
    id: 2,
    name: "Table 5",
    table_bill: 0.0,
    customers: [
   
    ],
  },
].map((table) => {
  return {
    ...table,
    initBgColorTable: "#4ade80",
  };
});

const initialState = {
  tables: tables,
};

const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TABLE": {
      const newTable = {
        waiter_id: "",
        waiter_name: "",
        name: action.payload.name,
        table_bill: 0.0,
        customers: [],
        booked: false,

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

    case "ADD_CUSTOMER": {
      const { tableIndex, customer } = action.payload;
      const updatedTable = {
        ...state.tables[tableIndex],
        customers: [...state.tables[tableIndex].customers, customer],
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

export default tablesReducer;
