import { useEffect } from "react";

const ZenchefWidget = () => {
  useEffect(() => {
    // Vérifie si le script est déjà ajouté
    if (!document.getElementById("zenchef-sdk")) {
      const script = document.createElement("script");
      script.id = "zenchef-sdk";
      script.src = "https://sdk.zenchef.com/v1/sdk.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div
        className="zc-widget-config"
        data-restaurant="374145"
        data-open="2000"
      ></div>
    </div>
  );
};

export default ZenchefWidget;
