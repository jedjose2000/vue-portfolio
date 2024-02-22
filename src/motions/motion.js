export function observeSection(value, motionValue){
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger animation when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                motionValue.value = true;
                observer.unobserve(entry.target); // Stop observing once the section is visible
            }
        });
    }, options);

    observer.observe(document.getElementById(value));
}

// export function Hello(){
//     console.log('hello');
// }



// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5 // Trigger animation when 50% of the section is visible
// };
//
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             motionVisible.value = true;
//             observer.unobserve(entry.target); // Stop observing once the section is visible
//         }
//     });
// }, options);
//
// observer.observe(document.getElementById(value));
