let mediaRecorder;
let audioChunks = [];

document.getElementById('record-btn').addEventListener('click', toggleRecording);

async function toggleRecording() {
    const recordBtn = document.getElementById('record-btn');
    const recordingIndicator = document.getElementById('recording-indicator');
    
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        recordBtn.textContent = 'Record New Memo';
        recordingIndicator.classList.add('hidden');
    } else {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };
            
            mediaRecorder.onstop = saveAudio;
            
            audioChunks = [];
            mediaRecorder.start();
            recordBtn.textContent = 'Stop Recording';
            recordingIndicator.classList.remove('hidden');
        } catch (error) {
            console.error('Error accessing media devices.', error);
        }
    }
}

function saveAudio() {
    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    addMemoToList(audioUrl);
}

function addMemoToList(audioUrl) {
    const memosContainer = document.getElementById('memos-container');
    const memoDiv = document.createElement('div');
    memoDiv.className = 'memo';
    
    const playBtn = document.createElement('button');
    playBtn.textContent = 'Play';
    playBtn.className = 'play-btn';
    playBtn.onclick = () => new Audio(audioUrl).play();
    
    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Download';
    downloadBtn.className = 'download-btn';
    downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = audioUrl;
        link.download = 'recorded-memo.wav';
        link.click();
    };
    
    const waveform = document.createElement('div');
    waveform.className = 'waveform';
    
    memoDiv.appendChild(playBtn);
    memoDiv.appendChild(downloadBtn);
    memoDiv.appendChild(waveform);
    memosContainer.appendChild(memoDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    const dateTimeElement = document.getElementById('dateTime');
    const colors = ['#ffb5b5', '#ffe7a1', '#94c8ff', '#64e3ac'];
    
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
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    createNote('Project To Make', '-to do list project');
    createNote('Lesson Group 39', '-lesson in group 39');
    createNote('Morning Routine', '-do the morning routine');
    createNote('Watering Plants', '-to water plants');
    
    function createNote(title = 'New Note', content = 'Click to edit') {
        const notesContainer = document.querySelector('.notes-container');
        const addNoteButton = document.querySelector('.add-note');
        if (notesContainer.children.length < 6) {
            const newNote = document.createElement('div');
            newNote.className = 'note';
            newNote.style.backgroundColor = getRandomColor();
            newNote.innerHTML = `
                <button class="delete-btn">&times;</button>
                <button class="color-btn">Change</button>
                <h3 contenteditable="true">${title}</h3>
                <p contenteditable="true">${content}</p>
                <div class="color-palette" style="display: none;"></div>
            `;
        
            notesContainer.insertBefore(newNote, addNoteButton);
        
            const deleteBtn = newNote.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                notesContainer.removeChild(newNote);
            });
        
            const colorBtn = newNote.querySelector('.color-btn');
            const colorPalette = newNote.querySelector('.color-palette');
                
            colorBtn.addEventListener('click', () => {
                colorPalette.style.display = colorPalette.style.display === 'none' ? 'block' : 'none';
            });
        
            colors.forEach(color => {
                const colorOption = document.createElement('div');
                colorOption.className = 'color-option';
                colorOption.style.backgroundColor = color;
                colorOption.addEventListener('click', () => {
                    newNote.style.backgroundColor = color;
                    colorPalette.style.display = 'none';
                });
                colorPalette.appendChild(colorOption);
            });
        } else {
            alert('You can only add up to 5 notes.');
        }
    }
    
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
