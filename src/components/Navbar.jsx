import { siteData } from "../data/siteData";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="navInner">
        <a href="#" className="logoWrap">
          <img className="logo" src="/logo.png" alt="Logo" />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ fontWeight: 950, letterSpacing: -0.2 }}>{siteData.brand}</div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "rgba(238,242,255,.62)" }}>
              Portfolio
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}