document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.querySelector('.add-note');
    const notesContainer = document.querySelector('.notes-container');
    const dateTimeElement = document.getElementById('dateTime');
    const levelElement = document.getElementById('level');
    const xpElement = document.getElementById('xp');
    const nextLevelXPElem = document.getElementById('nextLevelXP');

    const colors = ['#ffb5b5', '#ffe7a1', '#94c8ff', '#64e3ac'];
    const unlockedColors = [...colors];

    let level = parseInt(localStorage.getItem('level')) || 1;
    let xp = parseInt(localStorage.getItem('xp')) || 0;
    const baseXP = 10;
    let xpToNextLevel = baseXP;

    function updateDateTime() {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
        };
        dateTimeElement.textContent = now.toLocaleString('en-US', options).replace(',', '');
    }

    function getRandomColor() {
        return unlockedColors[Math.floor(Math.random() * unlockedColors.length)];
    }

    function addXP(amount) {
        xp += amount;
        while (xp >= xpToNextLevel) {
            levelUp();
        }
        updateStats();
    }

    function levelUp() {
        level++;
        xp -= xpToNextLevel;
        xpToNextLevel = baseXP * level;
        if (level >= 10 && !unlockedColors.includes('#ff00ff')) {
            unlockedColors.push('#ff00ff');
            alert('New color unlocked!');
        }
        nextLevelXPElem.textContent = `Next Level XP: ${xpToNextLevel}`;
    }

    function updateStats() {
        levelElement.textContent = `Level: ${level}`;
        xpElement.textContent = `XP: ${xp}`;
        localStorage.setItem('level', level);
        localStorage.setItem('xp', xp);
    }

    function updateColorPalette(palette) {
        palette.innerHTML = '';
        unlockedColors.forEach(color => {
            const colorOption = document.createElement('div');
            colorOption.className = 'color-option';
            colorOption.style.backgroundColor = color;
            colorOption.addEventListener('click', () => {
                palette.parentElement.style.backgroundColor = color;
                palette.style.display = 'none';
            });
            palette.appendChild(colorOption);
        });
    }

    function createNote(title = 'New Note', content = 'Click to edit') {
        const newNote = document.createElement('div');
        newNote.className = 'note';
        newNote.style.backgroundColor = getRandomColor();
        newNote.innerHTML = `
            <button class="delete-btn">&times;</button>
            <button class="color-btn">
                <img src='/Main, Notes Section/images/palette.png' width="20" style="margin-top: 3px;">
            </button>
            <h3 contenteditable="true">${title}</h3>
            <p contenteditable="true">${content}</p>
            <div class="color-palette"></div>
        `;

        notesContainer.insertBefore(newNote, addNoteButton);

        const deleteBtn = newNote.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            notesContainer.removeChild(newNote);
            addXP(5);
        });

        const colorBtn = newNote.querySelector('.color-btn');
        const colorPalette = newNote.querySelector('.color-palette');
        
        colorBtn.addEventListener('click', () => {
            colorPalette.style.display = colorPalette.style.display === 'none' ? 'block' : 'none';
        });

        updateColorPalette(colorPalette);
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    addNoteButton.addEventListener('click', () => {
        if (notesContainer.children.length < 6) {
            createNote();
            addXP(10);
        } else {
            alert('You can only add up to 5 notes.');
        }
    });


    updateStats();
    createNote('Project To Make', '-to do list project');
    createNote('Lesson Group 39', '-lesson in group 39');
    createNote('Morning Routine', '-do the morning routine');
    createNote('Watering Plants', '-to water plants');
});
