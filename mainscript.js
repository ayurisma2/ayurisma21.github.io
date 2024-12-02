const images = document.querySelectorAll("img[draggable='true']");
const dropzones = document.querySelectorAll(".dropzone");
const result = document.getElementById("result");

// Handle drag start
images.forEach(image => {
    image.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", event.target.id);
    });
});

// Handle drag over
dropzones.forEach(dropzone => {
    dropzone.addEventListener("dragover", event => {
        event.preventDefault();
        dropzone.classList.add("hovered");
    });

    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("hovered");
    });

    // Handle drop
    dropzone.addEventListener("drop", event => {
        event.preventDefault();
        dropzone.classList.remove("hovered");
        const draggedImageId = event.dataTransfer.getData("text/plain");
        const match = dropzone.getAttribute("data-match");

        if (draggedImageId === match) {
            dropzone.textContent = "✅ Benar!";
            dropzone.style.backgroundColor = "#d4edda";
            dropzone.style.borderColor = "#28a745";
        } else {
            dropzone.textContent = "❌ Salah!";
            dropzone.style.backgroundColor = "#f8d7da";
            dropzone.style.borderColor = "#dc3545";
        }
    });
});