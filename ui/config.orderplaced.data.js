const data = [
    {
        title: 'Take order',
        fields: [
            {
                label: '',
                data: [
                    "non table order",
                    "table order"
                ]
            },
            {

                type: "SelectInput",
                label: 'non order table',
                action: {
                    type: '',
                    paylod: ''
                },
                data: ["Cancel", "Save"]
            },
            {
                type: "SelectInput",
                label: 'table order',
                data: ["cancel", "Save"]
            },
            {
                type: "SelectInput",
                label: 'table order - select table',
                parent: 'table order',
                data: ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5"]
            },
            {
                type: "SelectInput",
                label: 'table order - select food category',
                data: ["Foods", "drinkg"]
                // all categories
            },
            {
                type: "SelectInput",
                label: 'table order - select food',
                data: ["Pizza napolitana", "Pasta Putanesca", "Salat pomodoro", "Coca cola 0.3", "Baba"]
            }
        ]
    }
]


