import React, { useReducer } from "react"
const data = [
    {
        state: {},
        title: 'Take order',
        fields: [
            {
                label: 'Select table(s)',
                uiLayout: 'grid',
                type: 'grid',
                columnsCount: 2,
                props: {
                    state: {
                        selectedItem: ''
                    },
                    label: 'Select table(s)',
                    type: 'grid',
                    data: ["Table 1", "Table 2", "Table 3", "Table 4", "+"],
                    dataSubLabel: 'Table bill 100$'
                }
            },
            {
                label: 'Select Customer(s)',
                type: 'grid',
                columnsCount: 2,
                props: {
                    state: { selectedItem: '' },
                    label: 'Select Customer(s)',
                    type: 'grid',
                    data: ["Customer 1", "Customer 2", "Customer 3", "Customer 4", "+"],
                    dataSubLabel: 'Bill 25$'

                }
            },
            {
                label: 'Search for item (food, drink)',
                type: 'SearchDropDown',
                props: {
                    state: {
                        text: ''
                    },
                    label: 'Search for item (food, drinks ...)',
                    data: [],
                    dataSubLabel: ''
                }
            },
            {
                label: 'Select Food category',
                type: 'grid',
                columnsCount: 2,
                props: {
                    state: { selectedItem: '' },
                    label: 'Select Food category',
                    type: 'grid',
                    data: ["Pizza", "Pasta", "Soft drinks", "Spirits", "+"],
                }
            },
        ]
    },
    {
        title: '',
        fields: [
            {
                label: 'Select Food Item',
                type: 'SearchDropDown',
                props: {
                    state: { selectedItem: '' },
                    label: 'Select Food Item',
                    data: [],

                }
            },
        ]
    }
]


const uiState = {}

function uiReducer(state) {
    return state

}

const bState = {

}

const orders = [
    {
        id: '',
        table: 1,
        table_bill: '',
        customers: [{
            id: '',
            foods: [
                {
                    id: "",
                    name: '',
                    prise: ""
                },
                {
                    id: "",
                    name: '',
                    prise: ""
                }
            ],
            bill: '',
            note: ''
        }, {
            id: '',
            foods: [],
            bill: '',
            note: ''
        }],
        time: '',
    }
]



function bReducer(state = [], action) {
    switch (true) {

        case "ADD_TABLE_TO_ORDERS":
            return [...state, {
                table_id: '',
                table_name: '',
                table_bill: 0,
                table_discount: 0,
                table_customer: [],
                table_note: ''
            }]
        case "ADD_CUSTOMERS_TO_TABLE":
            // find table in array by id or index
            // add customer to cistoemr array
            let index = 0
            const copyState = [...state];
            return copyState[index].table_customer.push({
                customer_id: '',
                customer_foods: [],
                customer_time_order: new Date(),
                customer_notes: '',
                customer_bill: 0
            })
        case "ADD_FOOD_TO_CUSTOMER_ORDER":
            return state;

        default:
            return
    }

}

export function useOrderFormManager() {
    const [state, dispatch] = useReducer(bReducer, bState);

    const handleDispatch = (type,) => {
        dispatch({ type: '' })
    };

    return {
        state,
        handleDispatch
    }
}



export default data;