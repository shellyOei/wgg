console.log("TES PICHA KETEK SMGT")

$(document).ready(function() {
    $(".second").hide();
})

// $("#card").click(function() {
//     $("#card").slideToggle("slow", function() {
//         // Animation complete.
//       });
// })

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));