(() => {
  // Variables
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

  // Functions
  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.getAttribute('slot')}`);
    if (selected) {
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.getAttribute('slot')}`);
    if (selected) {
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  }

  // Event Listener
  if (model) {
    model.addEventListener("load", modelLoaded);
  }

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

})();
