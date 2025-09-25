export default function useGetAll() {
  const pratos = localStorage.getItem("pratos");
  if (pratos) {
    return { pratos: JSON.parse(pratos) };
  } else {
    const pratos = [
      {
        id: 1,
        nome: "Lasanha",
        descricao: "Lasanha de carne moída com molho bechamel",
        preco: 25.0,
        image: "/pratos/lasanha.jpg",
      },
      {
        id: 2,
        nome: "Pizza",
        descricao: "Pizza de calabresa com cebola e azeitonas",
        preco: 30.0,
        image: "/pratos/pizza.webp",
      },
      {
        id: 3,
        nome: "Salada",
        descricao: "Salada verde com tomate, pepino e cenoura",
        preco: 15.0,
        image: "/pratos/salada.webp",
      },
      {
        id: 4,
        nome: "Hambúrguer",
        descricao: "Hambúrguer artesanal com queijo cheddar e bacon",
        preco: 20.0,
        image: "/pratos/hamburguer.jpg",
      },
      {
        id: 5,
        nome: "Sushi",
        descricao: "Combinado de sushi com salmão, atum e camarão",
        preco: 40.0,
        image: "/pratos/sushi.jpg",
      },
    ];
    localStorage.setItem("pratos", JSON.stringify(pratos));
    window.location.reload();
  }
}
