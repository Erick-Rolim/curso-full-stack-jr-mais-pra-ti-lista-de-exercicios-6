import { useState } from "react";
import CssGlobal from "./versions/CssGlobal/App";
import CssModules from "./versions/CssModules/App";
import Tailwind from "./versions/Tailwind/App";
import StyledComponents from "./versions/StyledComponents/App";
import "./MainApp.css";

// 1. O MAPA MUDOU: Agora ele guarda as referências dos componentes, sem < e />
const componentMap = {
  global: CssGlobal,
  modules: CssModules,
  tailwind: Tailwind,
  styled: StyledComponents,
};

export default function MainApp() {
  const [active, setActive] = useState("global");

  // 2. PEGAMOS O COMPONENTE ATIVO AQUI
  // O nome da variável precisa começar com letra maiúscula (padrão do React)
  const ActiveComponent = componentMap[active];

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Mini Loja - 4 Versões</h1>

      {/* A parte dos botões não muda nada */}
      <nav className="version-nav">
        <button
          className={active === "global" ? "active" : ""}
          onClick={() => setActive("global")}
        >
          01 - CSS Global
        </button>
        <button
          className={active === "modules" ? "active" : ""}
          onClick={() => setActive("modules")}
        >
          02 - CSS Modules
        </button>
        <button
          className={active === "tailwind" ? "active" : ""}
          onClick={() => setActive("tailwind")}
        >
          03 - Tailwind
        </button>
        <button
          className={active === "styled" ? "active" : ""}
          onClick={() => setActive("styled")}
        >
          04 - Styled Components
        </button>
      </nav>

      <div style={{ border: "1px solid #ddd", padding: "20px" }}>
        {/* 3. RENDERIZAMOS AQUI, usando a variável como um componente */}
        <ActiveComponent />
      </div>
    </div>
  );
}