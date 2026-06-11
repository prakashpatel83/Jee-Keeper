const boxes =
document.querySelectorAll("input");

boxes.forEach((box,index)=>{

    box.checked =
    localStorage.getItem(index) === "true";

    box.addEventListener("change",()=>{

        localStorage.setItem(
            index,
            box.checked
        );

        updateProgress();
    });
});

function updateProgress(){

    let checked = 0;

    boxes.forEach(box=>{
        if(box.checked) checked++;
    });

    let percent =
    checked/boxes.length*100;

    document.getElementById("progress")
        .style.width=percent+"%";

    document.getElementById("percent")
        .innerText=
        Math.round(percent)+"%";
}

updateProgress();

// Load saved checkbox states
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    const savedState = localStorage.getItem(checkbox.id);

    if (savedState === "true") {
        checkbox.checked = true;
    }

    checkbox.addEventListener("change", () => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
});

