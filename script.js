var accord = document.getElementsByClassName('accordion');

for (var i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click', function() {
        this.classList.toggle('active');

        var panel = this.nextElementSibling;
        var span = this.children[1];
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
            span.style.transform = 'none';
        }else {
            panel.style.display = 'block';
            span.style.transform = 'rotate(180deg)';
        }
    });
}