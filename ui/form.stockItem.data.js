const uiDescriptionForm = [
    {
        page: '',
        storageKey: '',
        title: 'General into',
        subtitle: '',
        state: {},
        uiState: {},
        fields: [
            {
                type: 'textInput',
                props: {
                    label: 'sku',
                    placeholder: '',
                    data: [],
                    isDisabled: false,
                    style: {

                    }
                }
            },
            {
                type: 'textInput',
                props: {
                    label: 'description',
                    placeholder: '',
                    data: [],
                    isDisabled: false,
                }
            },
        ]
    }, {

        title: "Quantities and Units",
        titlesLayout: "space-between",
        titleProps: {},
        subTitleProps: {},
        fieldStyles: {},
        // fieldsHorizontal
        // fielsVertical
        // fieldsGrid
        fields: [
            {
                type: 'SelectInput',
                props: {
                    isDisabled: false,
                    label: 'Case(s) qty',
                    placeholder: '',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    message: ''
                }
            },
            {
                type: 'SelectInput',
                props: {
                    isDisabled: false,
                    label: 'Pack(s) qty',
                    placeholder: '',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                }
            },
            {
                type: 'SelectInput',
                props: {
                    isDisabled: false,
                    label: 'Item(s) qty',
                    placeholder: '',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                }
            },
            {
                type: 'textInput',
                props: {
                    isDisabled: false,
                    label: 'Item volume',
                    placeholder: '',
                    data: [1],
                }
            },
            {
                type: 'SelectInput',
                props: {
                    isDisabled: false,
                    label: 'Select unit',
                    placeholder: '',
                    data: ["Kg", "gram(s)", "liter", "piece(s)", "slice(s)"],
                }
            },
        ]
    },
    {
        title: 'Costs, Sales and Supplier',
        fields: [
            {
                type: 'SelectInput',
                props: {
                    label: 'Supplier',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
                }
            },
            {
                type: 'textInput',
                props: {
                    isDisabled: false,
                    label: 'buy_price',
                    placeholder: '',
                    data: [],
                }
            },
            {
                type: 'textInput',
                props: {
                    isDisabled: false,
                    label: 'sale_price',
                    placeholder: '',
                    data: [],
                }
            },
        ]
    },
    {
        title: 'Suppliers and category',
        fields: [

            {
                type: 'textInput',
                props: {
                    isDisabled: false,
                    label: 'supplier_id',
                    placeholder: '',
                    data: [],
                }
            },
            {
                type: 'SelectInput',
                props: {
                    isDisabled: false,
                    label: 'item_category',
                    placeholder: '',
                    data: ['Fruit', "Vegetable", "Fish", 'Drink']
                }
            },
            {
                type: 'textInput',
                props: {
                    isDisabled: false,
                    label: 'min_order',
                    placeholder: '',
                    data: [],
                }
            },
        ]
    },
    {
        title: 'Dates',
        fields: [
            {
                visible: false,
                type: 'DateInput',
                props: {
                    isDisabled: false,
                    label: 'Expiration date',
                    placeholder: '',
                    data: [new Date()]
                }
            },
            {
                visible: false,
                type: 'DateInput',
                props: {
                    isDisabled: false,
                    label: 'Purchase date',
                    placeholder: '',
                    data: [new Date()]
                }
            }
        ]
    },
    {
        title: 'Stocks and storages',
        fields: [
            {
                type: 'SelectInput',
                props: {
                    isDisabled: false,
                    label: 'stock_area',
                    placeholder: '',
                    data: ['stock A', "stock B", "stock C"]
                }
            },
        ]
    }

]
export default uiDescriptionForm