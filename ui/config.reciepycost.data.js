const data = [
    {
        title: 'Create cost form',
        subtitle: "Enter ",
        fields: [

            {
                type: 'textInput',

                props: {
                    label: 'Food name',
                    data: []
                },
                

            },
            {
                type: 'SelectInput',
                props: {
                    label: 'Select food type',
                    data: ["Pizza",  "Soup", "Pasta", "Salat"]
                },
               

            },
            {
                type: 'Supplier Name',

                props: {
                    label: 'Supplier id',
                    data: []
                },
              

            }
        ]
    },
    {
        title: 'Enter ingrediences and quanity',
        subtitle: "",
        fields: [


            {
                type: 'textInput',

                props: { label: 'Name' },
                data: []

            },

            {
                type: 'textInput',

                props: {
                    label: 'QTY',
                    data: []
                },
             

            },
            {
                type: 'SelectInput',

                props: {
                    label: 'Unit',
                    data: ["Kg", 'gram', 'liter', 'dcliter', 'piece', 'slices']
                },
             

            },
            {
                type: 'textInput',

                props: {
                    label: 'COST',
                    data: []
                },
                

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
                    data: []
                }
            },
            {
                type: 'textInput',

                props: {
                    label: 'Town',
                    data: []
                }
            },
            {
                type: 'textInput',

                props: {
                    label: 'Country',
                    data: []
                }
            },
            {
                type: 'buttonView',
                props: {
                    label: 'Save',
                    data: ["Save"],
                    style: {
                        width: '100%'
                    }
                }
            }
        ]

    }

]

export const formState = data.reduce((accum,next)=>{

    const ob = {}

    if(next.fields) {
        next.fields.forEach(item=> {
           ob[item.props.label] = ""
        })
    } 


    console.log('ob')
    return {...accum,
    ...ob}
},{});

delete formState.Save;


export default data