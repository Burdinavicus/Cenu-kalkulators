// datus no poga "Aprēķināt cenu" saņemšana
    document.getElementById("calculateBtn").addEventListener("click", function () {
      const sectionInput = document.getElementById("sections");
      const sectionCount = parseInt(sectionInput.value);

      // vai sadaļu skaits ir pareiz (>=1)
      if (isNaN(sectionCount) || sectionCount < 1) {
        alert("Lūdzu, ievadiet korektu sadaļu skaitu (vismaz 1).");
        sectionInput.focus();
        return;
      }

      // atrod visas atzīmētās izvēles rūtiņas (checkbox) kurām ir name="features".
      const featureCheckboxes = document.querySelectorAll("input[name='features']:checked"); //:checked lai atlasīs tikai tās izvēletes rūtiņas

      const sectionPrice = 50;
      let total = sectionCount * sectionPrice;
      let featuresTotal = 0;

      // funkcijas summa
      featureCheckboxes.forEach(cb => {
        featuresTotal += parseFloat(cb.value);
      });

      const subtotal = total + featuresTotal;
      const pvn = subtotal * 0.21; 
      const finalTotal = subtotal + pvn;

      // cenu rindas formulešana
      const breakdown = `
        Sadaļu cena (${sectionCount} x ${sectionPrice}€) = ${total.toFixed(2)}€<br>
        Funkcionalitāšu kopsumma = ${featuresTotal.toFixed(2)}€<br>
        PVN (21%) = ${pvn.toFixed(2)}€<br><br>
        <strong>Kopējā cena: ${finalTotal.toFixed(2)}€</strong>
      `;

      // rezulata radišana
      document.getElementById("priceBreakdown").innerHTML = breakdown;
      document.getElementById("result").classList.remove("hidden");
    });
