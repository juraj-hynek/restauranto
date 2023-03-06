
// const data = [
//     { id: 1, name: "Pizza", category: "Italian", price: 10.99 },
//     { id: 2, name: "Burgers", category: "American", price: 8.99 },
//     { id: 3, name: "Tacos", category: "Mexican", price: 6.99 },
//     { id: 4, name: "Sushi", category: "Japanese", price: 15.99 },
//     { id: 5, name: "Curry", category: "Indian", price: 12.99 },
//     { id: 6, name: "Pho", category: "Vietnamese", price: 9.99 },
//     { id: 7, name: "Falafel", category: "Middle Eastern", price: 7.99 },
//     { id: 8, name: "Pad Thai", category: "Thai", price: 11.99 },
//     { id: 9, name: "Pasta", category: "Italian", price: 10.99 },
//     { id: 10, name: "Fried Chicken", category: "American", price: 9.99 },
//     { id: 11, name: "Ramen", category: "Japanese", price: 12.99 },
//     { id: 12, name: "Enchiladas", category: "Mexican", price: 8.99 },
//     { id: 13, name: "Samosas", category: "Indian", price: 6.99 },
//     { id: 14, name: "Fish and Chips", category: "British", price: 11.99 },
//     { id: 15, name: "Hamburger", category: "American", price: 7.99 },
//     { id: 16, name: "Hot Dog", category: "American", price: 5.99 },
//     { id: 17, name: "Lasagna", category: "Italian", price: 12.99 },
//     { id: 18, name: "Biryani", category: "Indian", price: 13.99 },
//     { id: 19, name: "Dim Sum", category: "Chinese", price: 9.99 },
//     { id: 20, name: "Shawarma", category: "Middle Eastern", price: 8.99 },
//     { id: 21, name: "Schnitzel", category: "German", price: 14.99 },
//     { id: 22, name: "Sangria", category: "Spanish", price: 7.99 },
//     { id: 23, name: "Sake", category: "Japanese", price: 10.99 },
//     { id: 24, name: "Mojito", category: "Cuban", price: 9.99 },
//     { id: 25, name: "Margarita", category: "Mexican", price: 8.99 },
//     { id: 26, name: "Cosmopolitan", category: "American", price: 11.99 },
//     { id: 27, name: "Gin and Tonic", category: "British", price: 6.99 },
//   ];
  
  export const menuItaliano = [
    {
      sezione: "Antipasti",
      piatti: [
        {
          nome: "Carpaccio di manzo con rucola e parmigiano",
          prezzo: 12.5,
        },
        {
          nome: "Insalata di mare con polipo, gamberi e calamari",
          prezzo: 15.0,
        },
        {
          nome: "Prosciutto crudo con melone",
          prezzo: 10.0,
        },
        {
          nome: "Caprese con pomodori, mozzarella e basilico",
          prezzo: 8.5,
        },
        {
          nome: "Focaccia al rosmarino con olio d'oliva",
          prezzo: 5.0,
        },
      ],
    },
    {
      sezione: "Primi",
      piatti: [
        {
          nome: "Risotto alla milanese",
          prezzo: 14.0,
        },
        {
          nome: "Lasagne alla bolognese",
          prezzo: 16.0,
        },
        {
          nome: "Gnocchi alla sorrentina",
          prezzo: 12.5,
        },
        {
          nome: "Spaghetti alle vongole",
          prezzo: 15.0,
        },
        {
          nome: "Penne all'arrabbiata",
          prezzo: 11.0,
        },
      ],
    },
    {
      sezione: "Secondi",
      piatti: [
        {
          nome: "Saltimbocca alla romana con prosciutto e salvia",
          prezzo: 20.0,
        },
        {
          nome: "Pollo alla cacciatora",
          prezzo: 16.5,
        },
        {
          nome: "Osso buco alla milanese",
          prezzo: 22.0,
        },
        {
          nome: "Branzino al forno con patate",
          prezzo: 24.0,
        },
        {
          nome: "Scaloppine di vitello al limone",
          prezzo: 18.0,
        },
      ],
    },
    {
      sezione: "Dolci",
      piatti: [
        {
          nome: "Panna cotta con frutti di bosco",
          prezzo: 7.5,
        },
        {
          nome: "Cannoli siciliani con ricotta e cioccolato",
          prezzo: 5.0,
        },
        {
          nome: "Torta della nonna con crema pasticcera e pinoli",
          prezzo: 6.0,
        },
        {
          nome: "Tiramisù al cioccolato",
          prezzo: 8.0,
        },
        {
          nome: "Gelato alla crema con scaglie di cioccolato",
          prezzo: 4.5,
        },
      ],
    },
    {
      sezione: "Bevande analcoliche",
      piatti: [
        {
          nome: "Limonata",
          prezzo: 3.0,
        },
        {
          nome: "Aranciata",
          prezzo: 3.0,
        },
        {
          nome: "Chinotto",
          prezzo: 3.0,
        },
      ],
    },
  ];
  
  export const listMenuFlatten = menuItaliano
    .reduce((accum, next) => {
      return [...accum, ...next.piatti];
    }, [])
    .map((item, index) => {
      return {
        name: item.nome,
        price: item.prezzo,
        id: index + 1,
      };
    });