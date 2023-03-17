export default [
    {
        vstack: [
            {
                type: "text",
                data: "Make invoice",
                props: {
                    h3: true
                },
                style: {
                    paddingBottom: 4
                }
            },
            {
                type: "text",
                data: "Transferor/provider (supplier)"
                ,
                props: {
                    h5: true
                },
                style: {
                    paddingBottom: 12
                }
            },
            {
                type: "textinput",
                data: "",
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11

                },
                props: {
                    placeholder: "Name"
                }
            },
            {
                type: "textinput",
                data: "",
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11

                },
                props: {
                    placeholder: "Address"
                }
            },
            {
                type: "textinput",
                data: "",
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11

                },
                props: {
                    placeholder: "Telephone"
                }
            },
            {
                type: "textinput",
                data: "",
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11

                },
                props: {
                    placeholder: "Email"
                }
            },
            {
                type: "textinput",
                data: "",
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11

                },
                props: {
                    placeholder: "Tax regime"
                }
            }
        ]
    },
    {
        vstack: [
            {
                type: "text",
                data: "Transferee/customer (customer)",
                props: {
                    h3: true
                },
                style: {
                    marginTop: 20,
                    marginBottom: 12
                }
            },
            {
                type: "textinput",
                data: "",
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11

                },
                props: {
                    placeholder: "Name"
                }
            },
            {
                type: "textinput",
                data: "",
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11

                },
                props: {
                    placeholder: "Address: Municipality: Province: Zip Code: Country:	"
                }
            },
            {
                type: "textinput",
                data: "",
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11

                },
                props: {
                    placeholder: "Address: Municipality: Province: Zip Code: Country:	"
                }
            },
            {
                type: "textinput",
                data: "",
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11

                },
                props: {
                    placeholder: "Address: Municipality: Province: Zip Code: Country:	"
                }
            }
        ]
    },
    {
        vstack: [
            {
                type: "button",
                data: "add item"
            },
            {
                type: "text",
                data: "Enter item",
                props: {
                    h3: true
                }
            },
            {
                type: "textinput",
                data: "",
                props: {
                    placeholder: "Enter item name (Description)"
                },
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11
                }

            },
            {
                type: "textinput",
                data: "",
                props: {
                    placeholder: "Unit Cost"
                },
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11
                }

            },
            {
                type: "textinput",
                data: "",
                props: {
                    placeholder: "Unit"
                },
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11
                }

            },
            {
                type: "picker",
                data: ["percentage", "value"],
                props: {
                    placeholder: "Quantity"
                },
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11
                }
            },
            {
                type: "textinput",
                data: "",
                props: {
                    placeholder: "Discount amount (%)"
                },
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11
                }
            },
            {
                type: "checkbox",
                data: "",
                props: {
                    placeholder: "Taxable (yes/no)"
                },
                style: {
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 12,
                    marginBottom: 11
                }

            }
        ]
    }

];

//  Address: Municipality: Province: Zip Code: Country:	