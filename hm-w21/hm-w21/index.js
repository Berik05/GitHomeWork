document.addEventListener('DOMContentLoaded', (event) => {
    const note = document.getElementById('note');
    const saveBtn = document.getElementById('saveBtn');
    const clearBtn = document.getElementById('clearBtn');

    
    if (localStorage.getItem('note')) {
        note.value = localStorage.getItem('note');
    }

    
    saveBtn.addEventListener('click', () => {
        localStorage.setItem('note', note.value);
    });

    
    clearBtn.addEventListener('click', () => {
        localStorage.removeItem('note');
        note.value = '';
    });
});