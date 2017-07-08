$('textarea').on('keyup', function () {
    if (this.value === 'enter') {
        $(this).blur();
    }
});