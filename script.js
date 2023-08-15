document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById
    ("downloadButton");

    downloadButton.addEventListener("click", function() {
        const cvPath = "CV_Gazha Patra Atmaja.pdf";

        const link = document.createElement("a");
        link.href = cvPath;

        link.download = "Gazha_CV.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
