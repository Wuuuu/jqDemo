$('.tab-list').each(function() {
    let $this = $(this);
    let $tab = $this.find('li.active');
    let $link = $tab.find('a');
    let $panel = $($link.attr('href'));

    $this.on('click', '.tab-control', function(e) {
        e.preventDefault();
        let $link = $(this),
            id    = this.hash;

        if (id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab   = $link.parent().addClass('active');
        }
    })
})