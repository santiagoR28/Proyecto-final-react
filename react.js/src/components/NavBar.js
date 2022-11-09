import "../components/nv.css";
import CW from "../components/CartWidget";

function Navbar() {
  console.log(CW);

  const categorias = [
    { id: 1, name: "sportswear", href: "#" },
    { id: 2, name: "casual clothes", href: "#" },
    { id: 3, name: "formal wear", href: "#" },
    { id: 4, name: "modern clothing", href: "#" },
  ];

  return (
    <header class="header">
      <div>
        {categorias.map((subcat) => {
          return (
            <a class="links" key={subcat.id} href={subcat.href}>
              {subcat.name}
            </a>
          );
        })}
      </div>
      <div>
        <CW />
      </div>
    </header>
  );
}

export default Navbar;
