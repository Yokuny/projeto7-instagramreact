import React from "react";
const Sugestao = ({ id, userId, name }) => (
  <div className="usuarioSugeridoCard">
    <div className="sugest√£oCardContent">
      <div>
        <img id={`hint${id}`} alt="" />
      </div>
      <div>
        <h4>{userId}</h4>
        <p>{name}</p>
      </div>
    </div>
    <h4>Seguir</h4>
  </div>
);
export default Sugestao;
