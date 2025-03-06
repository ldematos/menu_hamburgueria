import React, { useState } from "react";
import "./styles.css"; 

const TabelaHamburger = [
  {
    id: 1,
    foto: "https://i.pinimg.com/736x/f6/d1/81/f6d1810a59fbfc11657d3d6db9f68db7.jpg",
    titulo: "Hamburger Vegano",
    calorias: "300 cal",
    preco: "R$35.00",
    descricao: "Um delicioso hambúrguer vegano feito com ingredientes naturais e saudáveis.",
    tempoPreparo: "20-30 Min",
    avaliacao: "4.8"
  },
  {
    id: 2,
    foto: "https://s2.glbimg.com/J37rcGJSqqOBHXy7PtN1JGOCgww=/620x455/e.glbimg.com/og/ed/f/original/2020/09/03/bacon_burger_-_01.jpg",
    titulo: "Hambúrguer com Cheddar e Bacon",
    calorias: "395 cal",
    preco: "R$39.00",
    descricao: "Hambúrguer suculento com cheddar cremoso e bacon crocante.",
    tempoPreparo: "25-35 Min",
    avaliacao: "4.9"
  },
  {
    id: 3,
    foto: "https://i.pinimg.com/736x/01/2e/96/012e968d4f383a9f7a2d2d210ed6bff9.jpg",
    titulo: "Hambúrguer de Costela",
    calorias: "567 cal",
    preco: "R$58.00",
    descricao: "Hambúrguer feito com costela desfiada e um toque de especiarias.",
    tempoPreparo: "30-40 Min",
    avaliacao: "5.0"
  }
];

const FoodItem = ({ item, onClick }) => {
  return (
    <div onClick={() => onClick(item)} className="food-item">
      <div>
        <h2 className="titulo">{item.titulo}</h2>
        <p className="calorias">🔥 {item.calorias}</p>
        <p className="preco">{item.preco}</p>
      </div>
      <div>
        <img src={item.foto} alt={item.titulo} />
      </div>
    </div>
  );
};

const FoodDetails = ({ item, onClose }) => {
  return (
    <div className="food-details">
      <button onClick={onClose} className="text-gray-500">&larr; Voltar</button>
      <img src={item.foto} alt={item.titulo} />
      <h2 className="titulo">{item.titulo}</h2>
      <p className="calorias">🔥 {item.calorias} | ⏳ {item.tempoPreparo} | ⭐ {item.avaliacao}</p>
      <p className="preco">{item.preco}</p>
      <p className="descricao">{item.descricao}</p>
      <div className="flex gap-4 mt-4">
        <button className="add">Adicionar ao Carrinho</button>
        <button className="buy">Comprar agora</button>
      </div>
    </div>
  );
};

const FoodMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="menu-container">
      {selectedItem ? (
        <FoodDetails item={selectedItem} onClose={() => setSelectedItem(null)} />
      ) : (
        TabelaHamburger.map((item) => (
          <FoodItem key={item.id} item={item} onClick={setSelectedItem} />
        ))
      )}
    </div>
  );
};

export default FoodMenu;