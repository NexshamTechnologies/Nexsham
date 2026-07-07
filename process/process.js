/* ==========================================
   DEVELOPMENT PROCESS
   Nexsham Technologies
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const steps = document.querySelectorAll(".step");
    const pathFill = document.getElementById("pathFill");
    const pathContainer = document.getElementById("pathContainer");

    function updateProcessTimeline() {

        if (!pathContainer || !pathFill) return;

        const rect = pathContainer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const totalHeight = rect.height;

        const progress = Math.min(
            Math.max((viewportHeight * 0.65) - rect.top, 0),
            totalHeight
        );

        pathFill.style.height = `${(progress / totalHeight) * 100}%`;

        steps.forEach((step) => {

            const stepRect = step.getBoundingClientRect();

            if (stepRect.top < viewportHeight * 0.75) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }

        });

    }

    window.addEventListener("scroll", updateProcessTimeline, {
        passive: true
    });

    window.addEventListener("resize", updateProcessTimeline);

    updateProcessTimeline();

});