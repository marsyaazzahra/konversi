function showPage(page) {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById(page).classList.remove("hidden");
}

function goBack() {
  document.querySelectorAll(".converter-box").forEach(div => div.classList.add("hidden"));
  document.getElementById("menu").classList.remove("hidden");
}

// Fungsi pembulatan agar hasil tidak kebanyakan nol
function formatResult(num) {
  if (Math.abs(num) < 0.000001) return num.toExponential(2);
  if (Number.isInteger(num)) return num.toString();
  return parseFloat(num.toFixed(6)).toString();
}

// === KONVERSI PANJANG ===
function convertLength() {
  const val = parseFloat(document.getElementById("lengthValue").value);
  const from = document.getElementById("fromLength").value;
  const to = document.getElementById("toLength").value;
  const resultDiv = document.getElementById("lengthResult");

  if (isNaN(val)) {
    resultDiv.innerHTML = "⚠️ Masukkan angka yang valid 💕";
    return;
  }

  const conv = { km:1000, hm:100, dam:10, m:1, dm:0.1, cm:0.01, mm:0.001 };
  const result = (val * conv[from]) / conv[to];
  resultDiv.innerHTML = `🌸 ${val} ${from} = <b>${formatResult(result)} ${to}</b> 🌸`;
}

function resetLength() {
  document.getElementById("lengthValue").value = "";
  document.getElementById("lengthResult").innerHTML = "";
}

// === KONVERSI BERAT ===
function convertWeight() {
  const val = parseFloat(document.getElementById("weightValue").value);
  const from = document.getElementById("fromWeight").value;
  const to = document.getElementById("toWeight").value;
  const resultDiv = document.getElementById("weightResult");

  if (isNaN(val)) {
    resultDiv.innerHTML = "⚠️ Masukkan angka yang valid 🍰";
    return;
  }

  const conv = { kg:1000, hg:100, dag:10, g:1, dg:0.1, cg:0.01, mg:0.001 };
  const result = (val * conv[from]) / conv[to];
  resultDiv.innerHTML = `🍰 ${val} ${from} = <b>${formatResult(result)} ${to}</b> 🍰`;
}

function resetWeight() {
  document.getElementById("weightValue").value = "";
  document.getElementById("weightResult").innerHTML = "";
}
