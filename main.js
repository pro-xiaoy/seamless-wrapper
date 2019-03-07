let wrapper = $('#wrapper');
let imgs = $('#wrapper img');
let current = 0;
let pages = $('#pages span');
var n = 0;

copyDom();

var timer = setInterval(() => {
    changeWrappt(n);
    n = n+1;
    if(n > 3) {
        n= 0
    }
}, 3 * 1000);


$('#body').on({
    'mouseover': function() {
        clearInterval(timer)
    },
    'mouseleave': function() {
        timer = setInterval(() => {
            changeWrappt(n);
            n = n+1;
            if(n > 3) {
                n= 0
            }
        }, 2 * 1000);
    }
})

function changeWrappt(index) {
    if(index === 0 && current === 3) {
        wrapper.css({
            'transform': `translateX(-${(imgs.length + 1) * 400}px)`
        }).one('transitionend', function() {
            wrapper.hide().offset();
            wrapper.css({
                'transform': `translateX(-${(index + 1) * 400}px)`
            }).show();
        })
    } else if(index === 3 && current === 0) {
        wrapper.css({
            'transform': `translateX(-${0 * 400}px)`
        }).one('transitionend', function() {
            wrapper.hide().offset()
            wrapper.css({
                'transform': `translateX(-${imgs.length * 400}px)`
            }).show();
        })
        
    } else {
        wrapper.css({
            'transform': `translateX(-${(index + 1) * 400}px)`
        })
    }
    pages.removeClass('active');
    pages.eq(index).addClass('active');
    current = index;   
}

pages.on('click', function(e){
    let index = $(this).index();
    changeWrappt(index);
})
function copyDom(){
    let copyFirst = imgs.eq(0).clone(true);
    let copyLast = imgs.eq(imgs.length -1).clone(true);
    wrapper.append(copyFirst);
    wrapper.prepend(copyLast);
}