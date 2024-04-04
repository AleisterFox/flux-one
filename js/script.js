const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 200; // Velocidad de incremento

    if (count < target) {
      let counting = Math.ceil(count + increment);
      counter.innerText = counting;
      setTimeout(updateCount, 25); // Actualizar el contador cada 10ms
    } else {
      counter.innerText = target;
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCount();
      }
    });
  });

  observer.observe(counter);
});

const modalButtons = document.querySelectorAll(".modal");
const modal = document.getElementById("typeform-form");
const closeModal = document.querySelector('.close');

modalButtons.forEach((modalButton) => {
  modalButton.addEventListener("click", () => {
    if (modal.style.display != "block") {
      modal.style.display = "block";
      document.documentElement.style.overflowY = "hidden";
    }
  });
});


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.documentElement.style.overflowY = "scroll";
} );
