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
