const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

const hiddenLeftElements = document.querySelectorAll('.hidden-left');
hiddenLeftElements.forEach((el) => observer.observe(el));

const hiddenRightElements = document.querySelectorAll('.hidden-right');
hiddenRightElements.forEach((el) => observer.observe(el));

const hiddenTopElements = document.querySelectorAll('.hidden-top');
hiddenTopElements.forEach((el) => observer.observe(el));



document.getElementById('dropdownMenuButton1').addEventListener('mouseenter', function () {
    this.setAttribute('aria-expanded', 'true');
    this.nextElementSibling.classList.add('show');
});

document.getElementById('dropdownMenuButton1').addEventListener('mouseleave', function () {
    this.setAttribute('aria-expanded', 'false');
    this.nextElementSibling.classList.remove('show');
});

document.getElementById('dropdownMenuButton2').addEventListener('mouseenter', function () {
    this.setAttribute('aria-expanded', 'true');
    this.nextElementSibling.classList.add('show');
});

document.getElementById('dropdownMenuButton2').addEventListener('mouseleave', function () {
    this.setAttribute('aria-expanded', 'false');
    this.nextElementSibling.classList.remove('show');
});

document.getElementById('dropdownMenuButton3').addEventListener('click', function () {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!isExpanded));
    const dropdownMenu = this.nextElementSibling;
    if (!isExpanded) {
        dropdownMenu.classList.add('show');
    } else {
        dropdownMenu.classList.remove('show');
    }
});