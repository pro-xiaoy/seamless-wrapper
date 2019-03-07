# seamless-wrapper(无缝轮播)
### 实现
代码首尾各放入一张对应的图片，记录点击状态，当从第一张到最后一张，向右滑动一个图片的单位，再瞬间隐藏到图层上显示的最后一张。
- 实现代码
  ~~~js
    wrapper.hide().offset(); //隐藏记录位置
    wrapper.css({
        'transform': `translateX(-${(index + 1) * 400}px)`
    }).show();
  ~~~