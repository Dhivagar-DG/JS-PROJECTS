const BRRADIUS = document.querySelector('#brRadius');
const BORDER = document.querySelector('#brdr');
const BORDERCLR = document.querySelector('#brdrClr');
const BORDERTYPE = document.querySelector('#brdrType');

const BOX = document.querySelector('.box');
const BOARD = document.querySelector('#displayCode');
const COPYBTN = document.querySelector('#copyBtn');

let cssCode = [];

// FUNCTIONS

function handleCssCode(){
    let borderRadiusVal = BRRADIUS.value;
    let borderVal = BORDER.value;
    cssCode = []
    
    document.querySelector('#brTxt').textContent = borderRadiusVal+'px';
    document.querySelector('#brdrTxt').textContent = borderVal+'px';

    if (borderRadiusVal != "0")
    {
        cssCode.push(`border-radius : ${borderRadiusVal}px;`);
    }

    if (borderVal != "0"){
        cssCode.push(`border : ${borderVal}px ${BORDERTYPE.value} ${BORDERCLR.value};`);
    }
    
    cssCode = cssCode.join('\n');
    BOARD.value = cssCode;
    BOX.style.cssText = cssCode;
}


function handleCopyCode(){
    BOARD.select();
    navigator.clipboard.writeText(BOARD.value);
    COPYBTN.textContent = "Code Copied..!"
    COPYBTN.style.color = "#00ff00";
    setTimeout(()=>{COPYBTN.style.color = "white",COPYBTN.textContent = 'Copy Code'}, 1500);
}

// EVENT LISTENERS
BRRADIUS.addEventListener('mousemove', handleCssCode);
BRRADIUS.addEventListener('change', handleCssCode);
BORDER.addEventListener('mousemove', handleCssCode);
BORDER.addEventListener('change', handleCssCode);
BORDERTYPE.addEventListener('change', handleCssCode);
BORDERCLR.addEventListener('input', handleCssCode);

COPYBTN.addEventListener('click', handleCopyCode);