(() => {
  const $ = (id) => document.getElementById(id);
  const bill = $("bill"), tariff = $("tariff"), coverage = $("coverage");
  const money = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  function update() {
    const b = Number(bill.value), t = Number(tariff.value), c = Number(coverage.value);
    const monthlyUnits = b / t;
    const avoidedUnits = monthlyUnits * (c / 100);
    // This estimate treats bill offset as a share of the variable energy charge.
    // It does not model fixed charges, time-of-use tariffs, export credit or system cost.
    const monthlyOffset = avoidedUnits * t;
    $("billOut").textContent = money(b);
    $("tariffOut").textContent = money(t) + " / kWh";
    $("coverageOut").textContent = c + "%";
    $("monthly").textContent = money(monthlyOffset);
    $("yearly").textContent = money(monthlyOffset * 12);
    $("calcExplanation").textContent =
      "At your inputs, " + Math.round(avoidedUnits).toLocaleString("en-IN") +
      " kWh/month is the implied offset. The rupee estimate equals " + c +
      "% of the bill you entered. This is not a system-size, generation, payback or ROI calculation.";
  }
  [bill, tariff, coverage].forEach((el) => el.addEventListener("input", update));
  $("resetCalc").addEventListener("click", () => {
    bill.value = 4000; tariff.value = 8; coverage.value = 75; update();
  });
  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = document.querySelector(".site-header").classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => {
    document.querySelector(".site-header").classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
  $("year").textContent = new Date().getFullYear();
  update();
})();