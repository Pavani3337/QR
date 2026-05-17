function generateQR() {

    const qrText =
        document.getElementById("qrText").value;

    const qrImage =
        document.getElementById("qrImage");

    const downloadBtn =
        document.getElementById("downloadBtn");

    if (qrText === "") {

        alert("Please enter text or URL");

        return;

    }

    const qrAPI =
        "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="
        + encodeURIComponent(qrText);

    qrImage.src = qrAPI;

    qrImage.style.display = "block";

    downloadBtn.href = qrAPI;

}