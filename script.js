document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const sectionCount = parseInt(document.getElementById("sections").value);
  const featureCheckboxes = document.querySelectorAll("input[name='features']:checked");

  const sectionPrice = 50;
  let total = sectionCount * sectionPrice;
  let featuresTotal = 0;

  featureCheckboxes.forEach(cb => {
    featuresTotal += parseFloat(cb.value);
  });

  const subtotal = total + featuresTotal;
  const pvn = subtotal * 0.21;
  const finalTotal = subtotal + pvn;

  const breakdown = `
    ✅ Sadaļu cena (${sectionCount} x €${sectionPrice}) = €${total.toFixed(2)}<br>
    ✅ Funkcionalitāšu kopsumma = €${featuresTotal.toFixed(2)}<br>
    ➕ PVN (21%) = €${pvn.toFixed(2)}<br><br>
    💰 <strong>Kopējā cena: €${finalTotal.toFixed(2)}</strong>
  `;

  document.getElementById("priceBreakdown").innerHTML = breakdown;
  document.getElementById("result").classList.remove("hidden");
});
