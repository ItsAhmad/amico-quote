let options = {
  pdfOpenParams: { page: '2'}
};

$(document).ready(function() {
$('#product-list').chosen({
  width: '300px',
});

const pdfMap = {
  "SolarEclipse24Multi": "https://docs.amico.com/amico-alt-solar-eclipse-2x4-led-ceiling-light-multifunction-specs.pdf",
  "SolarEclipse24AE": "https://docs.amico.com/amico-alt-solar-eclipse-2x4-led-ceiling-light-ambient-exam-specs.pdf",
  "SolarEclipse24E": "https://docs.amico.com/amico-alt-solar-eclipse-2x4-led-ceiling-light-exam-specs.pdf",
  "SolarEclipse22Multi": "https://docs.amico.com/amico-alt-solar-eclipse-2x2-led-ceiling-light-multifunction-specs.pdf",
  "SolarEclipse22AE": "https://docs.amico.com/amico-alt-solar-eclipse-2x2-led-ceiling-light-ambient-exam-specs.pdf",
  "SolarEclipse22E": "https://docs.amico.com/amico-alt-solar-eclipse-2x2-led-ceiling-light-exam-specs.pdf",
  "SolarDuoMedMulti": "https://docs.amico.com/amico-alt-solar-series-duo-med-led-ceiling-light-multifunction-specs.pdf",
  "SolarDuoMedAE": "https://docs.amico.com/amico-alt-solar-series-duo-med-led-ceiling-light-ambient-exam-specs.pdf",
  "SolarDuoMedE": "https://docs.amico.com/amico-alt-solar-series-duo-med-led-ceiling-light-exam-specs.pdf",
  "SolarDuoMedA": "https://docs.amico.com/amico-alt-solar-series-duo-med-led-ceiling-light-ambient-specs.pdf",
  "Skyline": "https://docs.amico.com/amico-alt-skyline-series-led-overbed-light-specs.pdf",
  "Slimline": "https://docs.amico.com/amico-alt-slimline-series-led-overbed-light-specs.pdf",
  "Lunar": "https://docs.amico.com/amico-alt-lunar-night-light-decorative-specs.pdf",
  "Lunar Crescent": "https://docs.amico.com/amico-alt-lunar-night-light-crescent-specs.pdf",
  "CleanroomU24": "https://docs.amico.com/amico-alt-cleanroom-universal-led-ceiling-light-specs.pdf",
  "CleanroomU22": "https://docs.amico.com/amico-alt-cleanroom-universal-led-ceiling-light-specs.pdf",
  "CleanroomU14": "https://docs.amico.com/amico-alt-cleanroom-universal-led-ceiling-light-specs.pdf",
  "Cleanroom24": "https://docs.amico.com/amico-alt-cleanroom-led-ceiling-light-specs.pdf",
  "Cleanroom22": "https://docs.amico.com/amico-alt-cleanroom-led-ceiling-light-specs.pdf",
  "Cleanroom14": "https://docs.amico.com/amico-alt-cleanroom-led-ceiling-light-specs.pdf",
  "LightmasterDigital": "https://docs.amico.com/amico-alt-lightmaster-digital-multifunction-keypad-specs.pdf",
  "LightmasterMylar": "https://docs.amico.com/amico-alt-lightmaster-multifunction-keypad-specs.pdf",
  "LightmasterBehavioural": "https://docs.amico.com/amico-alt-lightmaster-multifunction-keypad-behavioral-specs.pdf",
  "LMD": "https://docs.amico.com/amico-alt-lightmaster-lvd-low-voltage-controller-specs.pdf",
  "Linea": "https://docs.amico.com/amico-alt-linea-series-led-ceiling-light-specs.pdf",
  "Leo": "https://docs.amico.com/amico-alt-leo-series-mg-downlight-specs.pdf",
  "Mira50": "https://docs.amico.com/amico-alt-mira-50-led-exam-light-ceiling-mounted-specs.pdf",
  "Mira65": "https://docs.amico.com/amico-alt-mira-65-led-exam-light-ceiling-mounted-specs.pdf",
  "Mira90": "https://docs.amico.com/amico-alt-mira-90-led-exam-light-ceiling-mounted-specs.pdf",
  "Vega80": "https://docs.amico.com/amico-alt-vega-80-led-exam-light-ceiling-mounted-specs.pdf",
  "Nova": "https://docs.amico.com/amico-alt-nova-led-motorized-exam-light-specs.pdf",
  "Gamma": "https://docs.amico.com/amico-alt-gamma-60-led-exam-light-specs.pdf",
  "Clarity30": "https://docs.amico.com/amico-alt-clarity-30-led-task-reading-light-specs.pdf",
  "Clarity50": "https://docs.amico.com/amico-alt-clarity-50-led-exam-light-specs.pdf"
};

const productOptionsHTML = {
  "SolarEclipse24Multi": `
  <h3>Voltage</h3>
  <label><input type="checkbox" value="120"> 120V</label><br>
  <label><input type="checkbox" value="270"> 270V</label><br>

  <h3>Functions</h3>
  <label><input type="checkbox" value="AL111"> AL111</label><br>
  <label><input type="checkbox" value="AL112"> AL112</label><br>
  <label><input type="checkbox" value="AL121"> AL121</label><br>
  <label><input type="checkbox" value="AL122"> AL122</label><br>
  <label><input type="checkbox" value="AL211"> AL211</label><br>
  <label><input type="checkbox" value="AL222"> AL222</label><br>

  <h3>Color Temperature</h3>
  <label><input type="checkbox" value="3000k"> 3000K</label><br>
  <label><input type="checkbox" value="3500k"> 3500K</label><br>
  <label><input type="checkbox" value="4000k"> 4000K</label><br>

  <h3>CRI</h3>
  <label><input type="checkbox" value="80CRI"> 80 CRI</label><br>
  <label><input type="checkbox" value="90CRI"> 90 CRI</label><br>

  <h3>Mounting</h3>
  <label><input type="checkbox" value="Flange"> Flange Mount</label><br>
  <label><input type="checkbox" value="Grid"> Grid Mount</label><br>
  <label><input type="checkbox" value="Surface"> Surface Mount</label><br>

  <h3>Switching</h3>
  <label><input type="checkbox" value="000"> No Switch</label><br>
  <label><input type="checkbox" value="LVC"> LVC</label><br>
  <label><input type="checkbox" value="LVD"> LVD</label><br>
  <label><input type="checkbox" value="LMS"> LMS</label><br>
  <label><input type="checkbox" value="LMD"> LMD</label><br>

  <h3>Options</h3>
  <label><input type="checkbox" value="IB"> Ingress Barrier</label><br>
  <label><input type="checkbox" value="NL"> Night Light</label><br>
  <label><input type="checkbox" value="IN"> Ingress Barrier & Night Light</label><br>
  <label><input type="checkbox" value="00"> No Options</label><br>
`,
};


$('#product-list').on('change', function () {
  const selectedProduct = $(this).val(); // Get selected product
  const pdfUrl = pdfMap[selectedProduct]; // Get the PDF URL
  const options = productOptionsHTML[selectedProduct] || "<p>No Options Available</p>"; 


// Load the PDF
if (pdfUrl) {
  PDFObject.embed(pdfUrl, "#pdf-container");
  $("#pdf-container").show();
} else {
  $("#pdf-container").hide();
}

$("#checkbox-container").html(options)

});
});
