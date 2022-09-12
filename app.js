const pizzas = [
  {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["salsa", "queso"],
    precio: "300",
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: ["salsa", "queso", "tomate"],
    precio: "500",
  },
  {
    id: 3,
    nombre: "Cuatro quesos",
    ingredientes: [
      "salsa",
      "queso fontina",
      "queso gorgonzola",
      "queso parmesano",
      "queso mozzarella",
    ],
    precio: "800",
  },
  {
    id: 4,
    nombre: "Jamon y morron",
    ingredientes: ["salsa", "queso", "jamon", "morron"],
    precio: "700",
  },
  {
    id: 5,
    nombre: "Calabresa",
    ingredientes: ["salsa", "queso", "calabresa"],
    precio: "900",
  },
  {
    id: 6,
    nombre: "Fugazzeta",
    ingredientes: ["salsa", "queso", "cebolla"],
    precio: "450",
  },
];

pizzasConIdImpar = pizzas.filter((e) => e.id % 2 !== 0);

pizzasConIdImpar.forEach((e) =>
  console.log(`La pizza ${e.nombre} tiene id impar`)
);

console.log("\n");

const pizzasValorMenos600 = pizzas.some((e) => e.precio < 600);
if (pizzasValorMenos600) {
  console.log("Si. hay al menos una pizza menor a 600");
} else {
  console.log("No hay");
}

console.log("\n");

pizzas.forEach((e) =>
  console.log(`La pizza ${e.nombre} tiene un valor de ${e.precio}`)
);

pizzas.forEach((e) => {
  console.log(`\nLos ingredientes de la pizza ${e.nombre} son:`);
  e.ingredientes.forEach((e) => {
    console.log(e);
  });
});
