$('.tab-list').each(function() {
    let $this = $(this);
    let $tab = $this.find('li.active');
    let $link = $tab.find('a');
    let $panel = $($link.attr('href'));

    $this.on('click', '.tab-control', function(e) {
        e.preventDefault();
        let $link = $(this),
            id    = this.hash; // this.hash 获取当前链接的标签值

        if (id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab   = $link.parent().addClass('active');
        }
    })
})

html2canvas(document.getElementById("tab-1")).then(canvas => {
  var image = new Image();
  image.src = canvas.toDataURL("image/png");
  let tabOne = document.getElementsByClassName("tab-list").childNodes;
  console.log(tabOne)
  // tabOne.replaceChild(image, tabOne)
  // document.body.appendChild(image)
});