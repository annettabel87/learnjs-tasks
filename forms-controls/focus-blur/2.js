const table = document.getElementById('bagua-table');

let area;

const createBtn = (classList, text) => {
    const btn = document.createElement('button');
    btn.classList.add(classList);
    btn.innerHTML = text;    
    return btn;
}

const cellHandler = (e) => {
    if(area) return;
    let td = e.target.closest('TD');    

    if(!td || !table.contains(td)) return;

    const btnBlock = document.createElement('div');
    btnBlock.classList.add('btn__block');    

    const btnOk = createBtn('btn__ok', 'OK', btnBlock);  
    const btnCancel = createBtn('btn__cancel', 'CANCEL', btnBlock);

    btnBlock.append(btnOk, btnCancel);

    btnBlock.onclick =(e) => {        
        if(e.target.className == 'btn__ok') {
            td.innerHTML = area.value;
        }       

        area.replaceWith(td);
        btnBlock.remove();
        area = null;
    }    

    td.after(btnBlock);

    area = document.createElement('textarea');
    area.classList.add('edit');
    area.value = td.innerHTML;
    area.style.width = `${td.clientWidth}px`;
    area.style.height = `${td.clientHeight}px`;
    td.replaceWith(area);
    area.focus();    
}

table.addEventListener('click', cellHandler)