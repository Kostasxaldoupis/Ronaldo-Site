function calculateDaysSince(date) {
    const today = new Date();
    const startDate = new Date(date);
    const timeDiff = today - startDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}

//days ago
function updateDaysSince() {
    const daysElement = document.getElementById('days-since');
    const days = calculateDaysSince('2018-07-20'); // Corrected date
    daysElement.textContent = `${days} days ago`;
}

// button emoji
document.getElementById('show-emoji-btn').addEventListener('click', function() {
    const emoji = document.getElementById('emoji');

    // animation for emoji
    emoji.classList.add('show');

    // Remove class after animation is done
    setTimeout(function() {
        emoji.classList.remove('show');
    }, 2050); // Duration should match the animation timing
});

// Initial call to update the days since page load
updateDaysSince();

const video = document.getElementById('myVideo');
const videoContainer = video.parentElement;

// Function to hide the play button
function hidePlayButton() {
    videoContainer.classList.add('hide-button');
}

// Function to show the play button
function showPlayButton() {
    videoContainer.classList.remove('hide-button');
}

