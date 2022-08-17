import { useEffect, useState } from "react";

function useVisibleComponent(componentId) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = (e) => {
    var elements = document.querySelectorAll(`#${componentId}`);
    for (var i = 0; i < elements.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elements[i].getBoundingClientRect().top;

      if (elementTop < windowHeight) {
        setOpacity(1);
        elements[i].classList.add("active");
      } else {
        setOpacity(0);
        elements[i].classList.remove("active");
      }
    }
  };

  return opacity;
}

export default useVisibleComponent;
