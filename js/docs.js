jQuery("#sidebar .sub-menu > a").click(function(e) {
  jQuery("#sidebar ul ul").slideUp(), jQuery(this).next().is(":visible") || jQuery(this).next().slideDown(),
  e.stopPropagation()
})
jQuery(document).ready(function () {
  var trigger = jQuery('.hamburger'),
  overlay = jQuery('.overlay'),
  isClosed = false;
  trigger.on('click', function () {
    hamburger();
  });
  function hamburger() {
    if (isClosed == true) {
      overlay.hide();
      isClosed = false;
    } else {
      overlay.show();
      jQuery('.main').toggleClass('isOpen');
      jQuery('.hamburger').toggleClass('is-active');
      jQuery('#hamburger-toggle').toggleClass('is-active');
      isClosed = true;
    }
  }
});
// calculate main content area width on page load and resize
var mainEl = '.wrapper',
mainElWi = jQuery(mainEl).outerWidth();
jQuery(window).resize(function () {
  mainElWi = jQuery(mainEl).outerWidth();
});
//// jtaFixedSidebarEl
var fxdEl = '.jtaSidebar',
sbContElCl = '.aholder',
posRelCl = 'pos-rel',
posAbsCl = 'pos-abs',
posFixCl = 'pos-fix',
responsive = true;
function jtaFixedSidebarEl() {
  var sbContEl = sbContElCl;
  var obj = {
    sbContElHe: jQuery(sbContEl).outerHeight()
  }
  jQuery(sbContEl).css({
    'height': obj.sbContElHe
  });
  if (responsive) {
    jQuery(window).resize(function () {
      if (mainElWi == 960) {
        jQuery(sbContEl).css({
          'height': 'auto'
        });
        obj.sbContElHe = jQuery(sbContEl).outerHeight();
        jQuery(sbContEl).css({
          'height': obj.sbContElHe
        });
      }
      if (mainElWi == 1280) {
        jQuery(sbContEl).css({
          'height': 'auto'
        });
        obj.sbContElHe = jQuery(sbContEl).outerHeight();
        jQuery(sbContEl).css({
          'height': obj.sbContElHe
        });
      }
    });
  }
  var pgeLay = sbContEl,
  posRel = posRelCl,
  posAbs = posAbsCl,
  posFix = posFixCl,
  top = 'top',
  winHe = jQuery(window).outerHeight(),
  fxdElHe = jQuery(fxdEl).outerHeight(),
  fxdElWi = jQuery(fxdEl).outerWidth(),
  pgeLayTopPos = jQuery(pgeLay).offset().top,
  pgeLayBotPos = jQuery(pgeLay).offset().top + obj.sbContElHe,
  pgeLayBotPosMinusFixedElHe = pgeLayBotPos - fxdElHe,
  topOfSidebar = jQuery(fxdEl).offset().top;
  if (responsive) {
    jQuery(window).resize(function () {
      if (mainElWi == 960) {
        pgeLayBotPos = jQuery(pgeLay).offset().top + obj.sbContElHe;
      }
      if (mainElWi == 1280) {
        pgeLayBotPos = jQuery(pgeLay).offset().top + obj.sbContElHe;
      }
    });
  }
  jQuery(fxdEl).parent().addClass(posRel);
  jQuery(fxdEl).children().css({
    'width': fxdElWi
  });
  function fixEl() {
    var topOfWin = jQuery(window).scrollTop(),
    botOfWin = jQuery(window).scrollTop() + winHe,
    fxdElTopPos = jQuery(fxdEl).offset().top,
    fxdElBotPos = jQuery(fxdEl).offset().top +
    fxdElHe;
    if (topOfWin < pgeLayTopPos) {
      jQuery(fxdEl).removeClass(posFix).removeClass(posAbs);
    } else {
      if (topOfWin >= pgeLayTopPos && topOfWin <= pgeLayBotPosMinusFixedElHe) {
        jQuery(fxdEl).removeClass(posAbs).addClass(posFix);
      } else {
        jQuery(fxdEl).removeClass(posFix).addClass(posAbs);
      }
    }
  }
  fixEl();
  jQuery(window).scroll(function () {
    fixEl();
  });
}
jQuery(window).load(function () {
  if (jQuery(fxdEl).length) {
    jtaFixedSidebarEl();
  }
});
//
// Toggle various divs with fading. Look! An Ajaxalope!
//
var main_divs = new Array('story', 'mod_standards', 'mod_rss', 'mod_about', 'mod_colophon', 'mod_design', 'mod_lifestyle', 'mod_photography', 'mod_politics');
var current_div = 'story';
function showDiv(div_elem) {
  if (div_elem == current_div) {
    return;
  }
  var tmp = document.getElementById(div_elem);
  window.setTimeout(function () {
    fadeOut(tmp, 100);
  }, 10);
}
function fadeOut(whichDiv, alpha) {
  var current = document.getElementById(current_div);
  if (alpha >= 0) {
    new_alpha = alpha - 5;
    if (document.all) {
      current.style.filter = 'alpha(opacity=' + new_alpha + ')';
    } else {
      current.style.opacity = (new_alpha / 100);
    }
    window.setTimeout(function () {
      fadeOut(whichDiv, new_alpha);
    }, 10);
  } else {
    if (document.all) {
      current.style.filter = 'alpha(opacity=100)';
    } else {
      current.style.opacity = 1;
    }
    current.style.display = 'none';
    whichDiv.style.display = 'block';
    window.scrollTo(0, 0);
    fadeIn(whichDiv, 0);
  }
}
function fadeIn(whichDiv, alpha) {
  if (alpha <= 100) {
    new_alpha = alpha + 5;
    if (document.all) {
      whichDiv.style.filter = 'alpha(opacity=' + new_alpha + ')';
    } else {
      whichDiv.style.opacity = (new_alpha / 100);
    }
    window.setTimeout(function () {
      fadeIn(whichDiv, new_alpha);
    }, 10);
  } else {
    current_div = whichDiv.id;
  }
}
function showThisContent(whichDiv) {
  // 
  // This function does nothing. It's only here to make the link look like it's
  // worth clicking on and therefore disguising the fact that it does indeed
  // do nothing.
  //
  return whichDiv;
}
(function () {
  for (var tags = [
    'figure',
    'figcaption'
  ], i = 0; i < tags.length; i++) {
    document.createElement(tags[i]);
  }
}) ();
(function () {
  //filter IE8 and earlier which don't support the generated content
  if (typeof (window.getComputedStyle) == 'undefined') {
    return;
  }  //get the collection of PRE elements

  var pre = document.getElementsByTagName('pre');
  //now iterate through the collection
  for (var len = pre.length, i = 0; i < len; i++) {
    //get the CODE or SAMP element inside it,
    //or just in case there isn't one, continue to the next PRE
    var code = pre[i].getElementsByTagName('code').item(0);
    if (!code) {
      code = pre[i].getElementsByTagName('samp').item(0);
      if (!code) {
        continue;
      }
    }    //create a containing DIV column (but don't append it yet)
    //including aria-hidden so that ATs don't read the numbers

    var column = document.createElement('div');
    column.setAttribute('aria-hidden', 'true');
    column.setAttribute('class', 'numbers');
    //split the code by line-breaks to count the number of lines
    //then for each line, add an empty span inside the column
    for (var n = 0; n < code.innerHTML.split(/[\n\r]/g).length; n++) {
      column.appendChild(document.createElement('span'));
    }    //now append the populated column before the code element

    pre[i].insertBefore(column, code);
    //finally add an identifying class to the PRE to trigger the extra CSS
    pre[i].className = 'line-numbers';
  }
}) ();


var nav =
  "<nav class='float-anchors'>" +
	"<i class='fa'>&#xf05a;</i> <b>Contents</b>" + "<ul>";

	var count = 0;
	
	var newLine, el, title, link;

$("h2, h3").each(function() {
  
  count++
  el = $(this);
  title = el.text();
  link = $(location).attr('href') + "#" + el.attr("id");
  
  newLine =
     count + ". <a class='n' href='" + link + "'>" + title + "</a>" + "<br />";

  nav += newLine;

});

nav +=  "</nav>";

$(".anchors-away").prepend(nav);


// ANALYTICS
if(config.analytics_id != '' || config.analytics_id != null || config.analytics_id != undefined){
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', config.analytics_id, config.analytics_domain);
	ga('send', 'pageview');
}
