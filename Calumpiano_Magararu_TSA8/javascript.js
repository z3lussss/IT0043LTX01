document.addEventListener("DOMContentLoaded", function() {
    const raButton = document.getElementById('ra');
    const gapCounter = document.getElementById('gapcounter');
    const decButton = document.getElementById('dec');
    const resButton = document.getElementById('res');
    const incButton = document.getElementById('inc');
    const boxContainer = document.querySelector('.boxcontainer');

    const rowButton = document.getElementById('row');
    const colButton = document.getElementById('col');

    const jcButtons = document.querySelectorAll('.jcbuttons button');
    const aiButtons = document.querySelectorAll('.aibutton button');

    const fgResetButton = document.getElementById('fgres');
    const growAllButton = document.getElementById('ga');
    const boxInputs = document.querySelectorAll('.fgbox input');

  
    raButton.addEventListener('click', function() {
        gapCounter.value = 0;
        boxContainer.style.gap = '0px';
        boxContainer.style.flexDirection = 'row';
        boxContainer.style.justifyContent = 'flex-start';
        boxContainer.style.alignItems = 'flex-start';
        boxInputs.forEach(input => input.value = 0);
        boxContainer.querySelectorAll('.boxcontainer > div').forEach(div => div.style.flexGrow = '0');
    });

  
    decButton.addEventListener('click', function() {
        let gapValue = parseInt(gapCounter.value, 10);
        if (gapValue > 0) {
            gapValue--;
            gapCounter.value = gapValue;
            boxContainer.style.gap = `${gapValue}px`;
        }
    });

    resButton.addEventListener('click', function() {
        gapCounter.value = 0;
        boxContainer.style.gap = '0px';
    });

    incButton.addEventListener('click', function() {
        let gapValue = parseInt(gapCounter.value, 10);
        gapValue++;
        gapCounter.value = gapValue;
        boxContainer.style.gap = `${gapValue}px`;
    });

   
    rowButton.addEventListener('click', function() {
        boxContainer.style.flexDirection = 'row';
    });

    colButton.addEventListener('click', function() {
        boxContainer.style.flexDirection = 'column';
    });

    
    jcButtons.forEach(button => {
        button.addEventListener('click', function() {
            boxContainer.style.justifyContent = button.textContent.toLowerCase().replace(' ', '-');
        });
    });

    aiButtons.forEach(button => {
        button.addEventListener('click', function() {
            boxContainer.style.alignItems = button.textContent.toLowerCase();
        });
    });

  
    fgResetButton.addEventListener('click', function() {
        boxInputs.forEach(input => input.value = 0);
        boxContainer.querySelectorAll('.boxcontainer > div').forEach(div => div.style.flexGrow = '0');
    });

    growAllButton.addEventListener('click', function() {
        boxInputs.forEach(input => input.value = 1);
        boxContainer.querySelectorAll('.boxcontainer > div').forEach(div => div.style.flexGrow = '1');
    });

    boxInputs.forEach(input => {
        input.addEventListener('input', function() {
            const index = Array.from(boxInputs).indexOf(input);
            const box = boxContainer.children[index];
            box.style.flexGrow = input.value;
        });
    });
});
