// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// // import low from "lowdb";

// const tables = [
//   {
//     id: 1,
//     name: "Table 1",
//     table_bill: 0.0,
//     data: [
//       {
//         id: 1,
//         name: "C1",
//         bill: 0,
//         orders: [
//           {
//             id: 1,
//             name: "Pizza",
//             price: 11.11,
//             qty: 1,
//           },
//           {
//             id: 2,
//             name: "Pasta",
//             price: 11.11,
//             qty: 1,
//           },
//           {
//             id: 3,
//             name: "Cake",
//             price: 11.11,
//             qty: 1,
//           },
//         ],
//       },
//       {
//         id: 2,
//         name: "C2",
//         bill: 0,
//         orders: [
//           {
//             id: 1,
//             name: "Pizza",
//             price: 11.11,
//             qty: 1,
//           },
//           {
//             id: 2,
//             name: "Pasta",
//             price: 11.11,
//             qty: 1,
//           },
//           {
//             id: 3,
//             name: "Cake",
//             price: 11.11,
//             qty: 1,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Table 2",
//     table_bill: 0.0,
//     data: [
//       {
//         id: 1,
//         name: "C1",
//         bill: 0,
//         orders: [
//           {
//             id: "",
//             name: "Pasta putaneska",
//             price: 11.11,
//             qty: 1,
//             order_status: {
//               title: "Lost Report",
//               // cancelation: ["Cusotmer", "Waiter", "Chef"]
//               preparation_time: 15,
//               qty: 1,
//               canceled_by: "Customer",
//               paid: "no",
//               cacelation_reason: "too salty",
//               time_order: new Date().toISOString(),
//               waiter_id: "Big Johny",
//               order: "Pasta putaneska",
//               price: "11.11",
//               table_id: 2,
//               financial_lost: "50%",
//             },
//             meta: {
//               food_id: "1",
//               cost: 5,
//               food_name: "Pasta putaneska",
//               recepie_qty: [
//                 ["water", 0.5, 0.33],
//                 ["Salt", 0.5, 0.33],
//                 ["Olive oil", 0.5, 0.33],
//                 ["Alici", 300, 0.33],
//                 ["cheese", 50, 0.33],
//               ],
//             },
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Table 3",
//     table_bill: 0.0,
//     data: [
//       {
//         id: 1,
//         name: "C1",
//         bill: 0,
//         orders: [
//           {
//             id: "",
//             name: "Pasta putaneska",
//             price: 11.11,
//             qty: 1,
//             order_status: {
//               title: "Lost Report",
//               // cancelation: ["Cusotmer", "Waiter", "Chef"]
//               preparation_time: 15,
//               qty: 1,
//               canceled_by: "Customer",
//               paid: "no",
//               cacelation_reason: "too salty",
//               time_order: new Date().toISOString(),
//               waiter_id: "Big Johny",
//               order: "Pasta putaneska",
//               price: "11.11",
//               table_id: 2,
//               financial_lost: "50%",
//             },
//             meta: {
//               food_id: "1",
//               cost: 5,
//               food_name: "Pasta putaneska",
//               recepie_qty: [
//                 ["water", 0.5, 0.33],
//                 ["Salt", 0.5, 0.33],
//                 ["Olive oil", 0.5, 0.33],
//                 ["Alici", 300, 0.33],
//                 ["cheese", 50, 0.33],
//               ],
//             },
//           },
//         ],
//       },
//     ],
//   },
// ];

// // Define your API endpoints here
// app.get("/api/tables-customers-orders", (req, res) => {
      
//   res.status(200).json(tables);
// });

// // Send a 404 error for any other requests
// app.use((req, res) => {
//   res.status(404).json({ error: "Endpoint not found" });
// });

// // Start the server
// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// // const low = require('lowdb');
// // const FileSync = require('lowdb/adapters/FileSync');

// // class LowdbManager {
// //   constructor(dbPath) {
// //     this.adapter = new FileSync(dbPath);
// //     this.db = low(this.adapter);
// //     this.db.defaults({ items: [] }).write();
// //   }

// //   getItems() {
// //     return this.db.get('items').value();
// //   }

// //   getItemById(id) {
// //     return this.db.get('items').find({ id }).value();
// //   }

// //   addItem(item) {
// //     const newItem = { id: this.generateId(), ...item };
// //     this.db.get('items').push(newItem).write();
// //     return newItem;
// //   }

// //   updateItemById(id, updatedItem) {
// //     this.db.get('items').find({ id }).assign(updatedItem).write();
// //     return updatedItem;
// //   }

// //   deleteItemById(id) {
// //     this.db.get('items').remove({ id }).write();
// //   }

// //   generateId() {
// //     const ids = this.db.get('items').map('id').value();
// //     const maxId = ids.length > 0 ? Math.max(...ids) : 0;
// //     return maxId + 1;
// //   }
// // }

// // module.exports = LowdbManager;

