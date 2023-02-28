const data = [
    {
        title: 'General info',
        subtitle: "",
        fields: [

            {
                type: 'textInput',

                props: {
                    label: 'Supplier id',
                },
                data: []

            },
            {
                type: 'textInput',

                props: {
                    label: 'Supplier TAX id',
                },
                data: []

            },

            {
                type: 'Supplier Name',

                props: {
                    label: 'Supplier id',
                },
                data: []

            }
        ]
    },
    {
        title: 'contacts detail',
        subtitle: "",
        fields: [
            {
                type: 'textInput',

                props: { label: 'Contact person' },
                data: []

            },

            {
                type: 'textInput',

                props: {
                    label: 'email',
                },
                data: []

            },
            {
                type: 'textInput',

                props: {
                    label: 'phone',
                },
                data: []

            }
        ]
    },
    {
        title: 'Address Info',
        subtitle: '',
        fields: [
            {
                type: 'textInput',

                props: {
                    label: 'Street',
                }
            },
            {
                type: 'textInput',

                props: {
                    label: 'Town',
                }
            },
            {
                type: 'textInput',

                props: {
                    label: 'Country',
                }
            },
            {
                type: 'buttonView',
                props: {
                    data: ["Save"],
                    style: {
                        width: '100%'
                    }
                }
            }
        ]

    },
    
]

// export const table  =  data.map((item) => {
//     return {
//         columnGroup: item.title,
//         fields: item.fields.map(item => {
//             return {
//                 label: item.props.label,
//                 type: item.type,
//                 data: [...Array(100)].map((_, index) => index)
//             }
//         })
//     }
// })

export default data