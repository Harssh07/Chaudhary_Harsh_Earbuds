(() => {
  console.log("IIFE Fired");
  //   variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const InfoBoxes = [
    {
      title: "Charging pod",
      text: "Charge for 10 min and use for 10 hrs",
      image: "../images/ar_icon.png",
    },
    {
      title: "Volume up",
      text: "Press once to increase volume and and press twice to receive incoming call",
      image: "../images/ar_icon.png",
    },
    {
      title: "Volume Down",
      text: "Press once to decrease volume",
      image: "../images/ar_icon.png",
    },
    {
      title: "Sweat-free Eartips",
      text: "Sweat free eartips for all usage",
      image: "../images/ar_icon.png",
    },
    {
      title: "glossy finish body",
      text: "Glossy finishing, which looks nice and smooth",
      image: "../images/ar_icon.png",
    },
  ];
  // functions

  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "inline";
    });
  }

  function loadInfo() {
    InfoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`.hotspot-${index + 1}`);

      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;

      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 3, { autoAlpha: 0 });
  }

  // event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mousehover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
