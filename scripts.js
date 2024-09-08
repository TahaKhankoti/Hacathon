// Function to toggle visibility of the skills section
var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
var skillsList = document.getElementById("skillsList");
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener("click", function () {
    if ((skillsList === null || skillsList === void 0 ? void 0 : skillsList.style.display) === "none") {
        skillsList.style.display = "block";
    }
    else {
        skillsList.style.display = "none";
    }
});
