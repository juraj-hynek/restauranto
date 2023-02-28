

const uiDescriptionForm = [
    {   page: '',
        title: 'Inventory management',
        subtitle: 'Start inventory, access inventory history and learn from repotrs',
        fieldsContainerStyle: {
            // borderWidth: 1,
            // borderColor: '#ccc',
            flexDirection: 'row',
        },
        fields: [
            {
                type: 'boxView',
                props: {
                    label: 'Start Inventory',
                    placeholder: '',
                    data: ['Start Inventory'],
                    isDisabled: false,
                    style: {
                        width: 120,
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#ccc'

                    }
                }
            },
            {
                type: 'boxView',
                props: {
                    label: 'Inventory History',
                    placeholder: 'Inventory history',
                    isDisabled: false,
                    data: ['Inventory History'],
                    style: {
                        width: 120,
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#ccc'

                    }

                }
            },
            {
                type: 'boxView',
                props: {
                    label: '',
                    placeholder: '',
                    isDisabled: false,
                    data: ['Waste Reports'],
                    style: {
                        width: 120,
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#ccc'

                    }

                }
            }

        ]

    },
    {
        title: 'Stock management',
        subtitle: 'Access all items in stock and update, add item to your stock',
        fieldsContainerStyle: {
            // borderWidth: 1,
            // borderColor: '#ccc',
            flexDirection: 'row'

        },
        fields: [
            {
                type: 'boxView',
                props: {
                    label: '',
                    placeholder: '',
                    data: ['All Stock'],
                    isDisabled: false,
                    style: {
                        width: 120,
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#ccc'

                    }
                }
            },
            {
                type: 'boxView',
                props: {
                    label: '',
                    placeholder: 'Inventory history',
                 
                    isDisabled: false,
                    data: ['Update Stock'],
                    style: {
                        width: 120,
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#ccc'

                    }

                }
            },
            {
                type: 'boxView',
                props: {
                    label: '',
                    placeholder: '',
                 
                    isDisabled: false,
                    data: ['Stock Reports'],
                    style: {
                        width: 120,
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#ccc'

                    }

                }
            },
            

        ]

    },
    {
        title: 'Suppliers',
        subtitle: 'Access all suppliers, update their details and learn from reports',
        fieldsContainerStyle: {
            // borderWidth: 1,
            // borderColor: '#ccc',
            flexDirection: 'row'

        },
        fields: [
            {
                type: 'boxView',
                props: {
                    label: 'All Supplier',
                    placeholder: '',
                    data: ['All Suppliers'],
                    isDisabled: false,
                    style: {
                        width: 120,
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#ccc'

                    }
                }
            },
            {
                type: 'boxView',
                props: {
                    label: '',
                    placeholder: '',
                    isDisabled: false,
                    data: ['Update Suppliers'],
                    style: {
                        width: 120,
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#ccc'

                    }

                }
            },
            {
                type: 'boxView',
                props: {
                    label: '',
                    placeholder: '',
                    isDisabled: false,
                    data: ['Suppliers Reports'],
                    style: {
                        width: 120,
                        height: 120,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#ccc'

                    }

                }
            }

        ]

    },



]
export default uiDescriptionForm