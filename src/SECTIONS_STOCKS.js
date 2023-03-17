// id, name, description, expirationDate, type (fruta, vegetable, meat, fish), stockNumber 

  // enableErrors
        // validate={['required', 'email', (value) => value.length > 6]}
        // validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
        // showCharCounter
        // maxLength={30}
// stock item
// stock list / table

export default [
   {
      vstack: [
         {
            type: "text",
            label: "",
            data: "Add item to stock",
            props: {
               text40: true,
               
            },
            style: {
               marginBottom: 20,
            
            }
         },
         {
            vstack: [
             
               {
                  type: "input",
                  label: "Name",
                  data: "",
                  actions: {
                     type: "",
                     payload: ""
                  },
                  props: {
                    placeholder: "Enter item Name",
                    containerStyle: {
                     paddingTop: 12,
                     paddingBottom: 12,
                    }
                  }
               }

            ],
         },
         {
            type: "input",
            label: "Description",
            data: '',
            actions: {
               type: "",
               payload: ""
            },
            props: {
             
               placeholder: "Item Description",
               multiline: true,
               containerStyle: {
                  paddingTop: 12,
                  paddingBottom: 12,
                 }

            }
         },
         {
            type: "select",
            label: "Select Item type",
            actions: {
               type: "",
               payload: ""
            },
            data: [
               { label: 'Vegetable', value: "Vegetable" },
               { label: 'Fruit', value: "Fruit" },
               { label: 'Diary', value: "Diary" },
               { label: 'Fish', value: "Fish" },
               { label: 'Meat', value: "Meat" }
            ],
            props: {
               placeholder: "Select Item type"
            }

         },
         {
            type: "select",
            label: "Select unit",
            actions: {
               type: "",
               payload: ""
            },
            data: [
               { label: 'Kg', value: 'Kg' },
               { label: 'liter', value:"liter"  },
               { label: 'piece', value: "piece" },
               { label: 'package', value: "package" }
            ],
            props: {
               placeholder: "Select Item unit (measurement)"
            }
         },
         {
            type: "select",
            label: "Select stock room",
            actions: {
               type: "",
               payload: ""
            },
            data: [
               { label: 'Storage 1', value: "storage_1" },
               { label: 'Storage 2', value: "storage_2" },
               { label: 'Storage 3', value: "storage_4"}
            ],
            props: {
               placeholder: "Select Storage room"
            }
         },
         {
            type: "date",
            props: {
               title: "Select Purchase date",
             
            }
         },
         {
            type: "date",
            props: {
               title: "Select Expiration date"
            }
         }
      ],
      

   },
   {
      vstack: [
         {
            type: "text",
            data: "Optional properties",
            props: {
               text40: true,
            }
         },
         {
            type: "number",
            label: "Calories",
            data: "",
            actions: {
               type: "",
               payload: ""
            },
            props: {
               initialValue: 0,
              placeholder: "Enter Calories per 100g",
              containerStyle: {
               paddingTop: 12,
               paddingBottom: 12,
              }
            }

         },
         {
            type: "input",
            label: "Name",
            data: "",
            actions: {
               type: "",
               payload: ""
            },
            props: {
              placeholder: "Enter alergies",
              containerStyle: {
               paddingTop: 12,
               paddingBottom: 12,
              }
            }

         }
      ]
   }
]