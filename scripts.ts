// Function to toggle visibility of the skills section
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsList = document.getElementById("skillsList");

toggleSkillsBtn?.addEventListener("click", () => {
    if (skillsList?.style.display === "none") {
        skillsList.style.display = "block";
    } else {
        skillsList!.style.display = "none";
    }
});
