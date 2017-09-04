(function (e) {
  e.fn.shortcodes_switcher = function (t) {
    var n = {
      slides: '>div',
      activeClass: 'active',
      linksNav: '',
      findParent: true,
      lengthElement: 'li',
      useArrows: false,
      arrowLeft: 'a#prev-arrow',
      arrowRight: 'a#next-arrow',
      auto: false,
      autoSpeed: 5000,
      slidePadding: '',
      pauseOnHover: true,
      fx: 'fade',
      sliderType: ''
    };
    var t = e.extend(n, t);
    return this.each(function () {
      function w() {
        if (g != '') {
          g.siblings().removeClass('active');
          g.filter(':eq(' + (f - 1) + ')').addClass('active')
        }
      }
      function E(e, n) {
        if (o.filter(':animated').length)
        return;
        c = o.parent().find('.slidecontent').filter(':eq(' + (f - 1) + ')');
        if (f === e)
        return;
        c.removeClass('shortcode_slide_active');
        h = o.parent().find('.slidecontent').filter(':eq(' + (e - 1) + ')').addClass('shortcode_slide_active');
        if ((f > e || f === 1) && n === - 1) {
          if (t.fx === 'slide')
          C(500);
          if (t.fx === 'fade')
          T(500)
        } else {
          if (t.fx === 'slide')
          N(500);
          if (t.fx === 'fade')
          T(500)
        }
        f = h.prevAll('.slidecontent').length + 1;
        if (t.linksNav != '')
        w();
        if (t.sliderType === 'images' || t.sliderType === 'simple') {
          v.find('li').removeClass('shortcodes_active_control');
          v.find('li').eq(f - 1).addClass('shortcodes_active_control')
        }
        return false
      }
      function x() {
        interval_shortcodes = setInterval(function () {
          if (!S) {
            if (f === u)
            E(1, 1);
             else
            E(f + 1, 1);
            if (t.linksNav != '')
            w()
          }
        }, t.autoSpeed)
      }
      function T(e) {
        c.css({
          display: 'none',
          opacity: '0'
        });
        h.css({
          opacity: '0',
          display: 'block'
        }).animate({
          opacity: 1
        }, 700)
      }
      function N(e) {
        var t = h.prevAll('.slidecontent').length + 1,
        n = false;
        if (c.next('.slidecontent_cloned').length) {
          t = c.prevAll().length + 1;
          n = true
        }
        i.animate({
          left: - (s.width() * t)
        }, 500, function () {
          if (n)
          i.css('left', - s.width())
        })
      }
      function C(e) {
        var t = h.prevAll('.slidecontent').length + 1,
        n = false;
        if (c.prev('.slidecontent_cloned').length) {
          t = 0;
          n = true
        }
        i.animate({
          left: - (s.width() * t)
        }, 500, function () {
          if (n)
          i.css('left', - (s.width() * u))
        })
      }
      function k() {
        var r = n.find('.slidecontent').length,
        i = '';
        if (r > 1 && (t.sliderType === 'images' || t.sliderType === 'simple')) {
          n.append('<div class="shortcodes_controller_nav">' + '<ul class="shortcodes_controls"></ul>' + '<ul class="shortcodes_controls_arrows"><li><a href="#" class="sc_nav_next">' + shortcodes_strings.next + '<span></span></a></li><li><a href="#" class="sc_nav_prev">' + shortcodes_strings.previous + '<span></span></a></li></ul>' + '</div>');
          v = n.find('.shortcodes_controls');
          for (var s = 0; s < r; s++) {
            i += '<li><a href="#"></a></li>'
          }
          v.prepend(i);
          v.find('li:first').addClass('shortcodes_active_control');
          v.find('a').click(function () {
            var t = e(this),
            n = t.parent('li'),
            r = n.prevAll().length + 1;
            if (r == f)
            return false;
            if (r > f)
            E(r, 1);
             else
            E(r, - 1);
            return false
          });
          d = n.find('.shortcodes_controls_arrows');
          d.find('a').click(function () {
            var e = jQuery(this),
            t;
            if (e.hasClass('sc_nav_next'))
            L();
            if (e.hasClass('sc_nav_prev'))
            A();
            v.find('li').removeClass('shortcodes_active_control');
            t = f - 1;
            v.find('li').eq(t).addClass('shortcodes_active_control');
            return false
          })
        } else if (t.sliderType !== 'images' && t.sliderType !== 'simple') {
          n.prepend('<ul class="shortcodes_mobile_nav"><li><a href="#" class="sc_nav_next">' + shortcodes_strings.next + '<span></span></a></li><li><a href="#" class="sc_nav_prev">' + shortcodes_strings.previous + '<span></span></a></li></ul>');
          d = n.find('.shortcodes_mobile_nav');
          d.find('a').click(function () {
            var e = jQuery(this);
            if (e.hasClass('sc_nav_next'))
            L();
            if (e.hasClass('sc_nav_prev'))
            A();
            return false
          })
        }
      }
      function L() {
        if (f === u)
        E(1, 1);
         else
        E(f + 1),
        1;
        if (t.linksNav != '')
        w()
      }
      function A() {
        if (f === 1)
        E(u, - 1);
         else
        E(f - 1, - 1);
        if (t.linksNav != '')
        w()
      }
      var n = jQuery(this).parent().css('position', 'relative'),
      r = jQuery(this).css({
        overflow: 'hidden',
        position: 'relative'
      }),
      i = n.find('.tabs-content-wrapper'),
      s = i.parent(),
      o = r.find('.tabs-content-wrapper' + t.slides),
      u = o.length,
      a = u,
      f = 1,
      l = 0,
      c,
      h,
      p = s.width(),
      d,
      v;
      if (t.fx === 'slide') {
        i.width((u + 2) * 200 + '%');
        o.css({
          width: p,
          visibility: 'visible'
        });
        i.append(o.filter(':first').clone().removeClass().addClass('slidecontent_cloned'));
        i.prepend(o.filter(':last').clone().removeClass().addClass('slidecontent_cloned'));
        i.css('left', - p)
      }
      o.filter(':first').css({
        display: 'block'
      }).addClass('shortcode_slide_active');
      if (t.slidePadding != '')
      o.css('padding', t.slidePadding);
      if (t.linksNav != '') {
        var m = jQuery(t.linksNav);
        var g = '';
        if (t.findParent)
        g = m.parent();
         else
        g = m;
        if (!g.filter('.active').length)
        g.filter(':first').addClass('active');
        m.click(function () {
          var e,
          n;
          if (t.findParent)
          e = jQuery(this).parent();
           else
          e = jQuery(this);
          n = e.prevAll(t.lengthElement).length + 1;
          if (n > f)
          E(n, 1);
           else
          E(n, - 1);
          return false
        })
      }
      if (t.useArrows) {
        var y = jQuery(t.arrowRight),
        b = jQuery(t.arrowLeft);
        y.click(function () {
          L();
          return false
        });
        b.click(function () {
          A();
          return false
        })
      }
      if (t.auto) {
        x();
        var S = false
      }
      if (t.pauseOnHover) {
        n.hover(function () {
          S = true
        }, function () {
          S = false
        })
      }
      if (t.fx === 'slide') {
        e(window).resize(function () {
          i.find('>div').css({
            width: s.width()
          });
          i.css('left', - (s.width() * f))
        })
      }
      k()
    })
  }
}) (jQuery);
jQuery(document).ready(function (e) {
  var t = e('.pricing-table a.icon-button');
  $tooltip = e('.tooltip');
  $tooltip.on('mouseover mouseout', function (t) {
    if (t.type == 'mouseover') {
      e(this).find('.tooltip-box').stop(true, true).animate({
        opacity: 'show',
        bottom: '25px'
      }, 300)
    } else {
      e(this).find('.tooltip-box').delay(200).animate({
        opacity: 'hide',
        bottom: '35px'
      }, 300)
    }
  });
  $learn_more = e('.learn-more .heading-more');
  $learn_more.on('click', function () {
    if (e(this).hasClass('open'))
    e(this).removeClass('open');
     else
    e(this).addClass('open');
    e(this).parent('.learn-more').find('.learn-more-content').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 300)
  });
  e('.learn-more').not('.open').find('.learn-more-content').css({
    visibility: 'visible',
    display: 'none'
  });
  t.each(function () {
    var t = e(this),
    n = t.width(),
    r = t.innerWidth();
    t.css({
      width: n,
      marginLeft: '-' + r / 2 + 'px',
      visibility: 'visible'
    })
  });
  var n = e('.tabs-container, .tabs-left, .simple-slider, .image-slider');
  n.each(function (t) {
    var n = e(this).attr('class'),
    r = /sliderauto_speed_(\d+)/g,
    i = r.exec(n),
    s = /sliderauto_(\w+)/g,
    o = s.exec(n),
    u = /slidertype_(\w+)/g,
    a = u.exec(n),
    f = /sliderfx_(\w+)/g,
    l = f.exec(n),
    c = '.tabs-content',
    h = {
    };
    h.linksNav = e(this).find('.tabs-control li a');
    h.findParent = true;
    h.fx = l[1];
    h.auto = 'false' === o[1] ? false : true;
    h.autoSpeed = i[1];
    if ('simple' === a[1]) {
      h = {
      };
      h.fx = l[1];
      h.auto = 'false' === o[1] ? false : true;
      h.autoSpeed = i[1];
      h.sliderType = 'simple';
      c = '.simple-slides'
    } else if ('images' === a[1]) {
      h.sliderType = 'images';
      h.linksNav = '#' + e(this).attr('id') + ' .controllers a.switch';
      h.findParent = false;
      h.lengthElement = '#' + e(this).attr('id') + ' a.switch';
      c = '.image-slides'
    }
    e(this).find(c).shortcodes_switcher(h)
  })
})
