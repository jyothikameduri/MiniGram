// Select the Follow button and Followers count element
const followBtn = document.querySelector(".btn-primary");
const followersCount = document.querySelector(".stats span strong");

// Track follow state
let isFollowing = false;

// Add click event to the Follow button
followBtn.addEventListener("click", () => {
    // Get the current followers count
    let currentCount = parseInt(followersCount.innerText);

    if (!isFollowing) {
        // If not following, increase the count and change text
        followersCount.innerText = currentCount + 1;
        followBtn.innerText = "Following";
    } else {
        // If already following, decrease the count and revert text
        followersCount.innerText = currentCount - 1;
        followBtn.innerText = "Follow";
    }

    // Toggle follow state
    isFollowing = !isFollowing;
});

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const likesCount = btn.nextElementSibling; // Selects the <strong> displaying likes
        let currentLikes = parseInt(likesCount.textContent); // Get current like count

        // Check the current state and update accordingly
        if (btn.classList.contains("fa-regular")) {
            // Change to "Liked" state
            btn.classList.remove("fa-regular");
            btn.classList.add("fa-solid");
            btn.style.color = "red";
            currentLikes++;
        } else {
            // Change to "Unliked" state
            btn.classList.remove("fa-solid");
            btn.classList.add("fa-regular");
            btn.style.color = "black";
            currentLikes--;
        }

        // Update like count
        likesCount.textContent = currentLikes;
    });
});

