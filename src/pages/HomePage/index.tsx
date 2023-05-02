import React from "react";
import pokeLogo from "assets/images/pokemonLogo.png";
import { Button } from "components";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img src={pokeLogo} alt="pokeLogo" />
      <Button onClick={() => navigate("/map")} text="START" />
    </div>
  );
};
