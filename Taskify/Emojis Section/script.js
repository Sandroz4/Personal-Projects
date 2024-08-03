document.addEventListener('DOMContentLoaded', () => {
    const dateTimeElement = document.getElementById('dateTime');

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
});



