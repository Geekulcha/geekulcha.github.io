/*
 * Template Name: Unify - Responsive Bootstrap Template
 * Description: Business, Corporate, Portfolio and Blog Theme.
 * Version: 1.4
 * Author: @htmlstream
 * Website: http://htmlstream.com
 */

var App = function () {

  function handleIEFixes() {
    //fix html5 placeholder attribute for ie7 & ie8
    if (jQuery.browser.msie && jQuery.browser.version.substr(0, 1) < 9) { // ie7&ie8
      jQuery('input[placeholder], textarea[placeholder]').each(function () {
        var input = jQuery(this);

        jQuery(input).val(input.attr('placeholder'));

        jQuery(input).focus(function () {
          if (input.val() == input.attr('placeholder')) {
            input.val('');
          }
        });

        jQuery(input).blur(function () {
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.val(input.attr('placeholder'));
          }
        });
      });
    }
  }

  function handleBootstrap() {
    /*Bootstrap Carousel*/
    jQuery('.carousel').carousel({
      interval: 15000,
      pause: 'hover'
    });

    /*Tooltips*/
    jQuery('.tooltips').tooltip();
    jQuery('.tooltips-show').tooltip('show');
    jQuery('.tooltips-hide').tooltip('hide');
    jQuery('.tooltips-toggle').tooltip('toggle');
    jQuery('.tooltips-destroy').tooltip('destroy');

    /*Popovers*/
    jQuery('.popovers').popover();
    jQuery('.popovers-show').popover('show');
    jQuery('.popovers-hide').popover('hide');
    jQuery('.popovers-toggle').popover('toggle');
    jQuery('.popovers-destroy').popover('destroy');
  }

  function handleSearch() {
    jQuery('.search').click(function() {
      if (jQuery('.search-btn').hasClass('fa-search')) {
        jQuery('.search-open').fadeIn(500);
        jQuery('.search-btn').removeClass('fa-search');
        jQuery('.search-btn').addClass('fa-times');
      } else {
        jQuery('.search-open').fadeOut(500);
        jQuery('.search-btn').addClass('fa-search');
        jQuery('.search-btn').removeClass('fa-times');
      }
    });
  }

  function handleToggle() {
    jQuery('.list-toggle').on('click', function() {
      jQuery(this).toggleClass('active');
    });

    /*
        jQuery('#serviceList').on('shown.bs.collapse'), function() {
            jQuery(".servicedrop").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
        }

        jQuery('#serviceList').on('hidden.bs.collapse'), function() {
            jQuery(".servicedrop").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
        }
        */
  }

  function handleHeader() {
    jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 100) {
        jQuery(".header-fixed .header").addClass("header-fixed-shrink");
      } else {
        jQuery(".header-fixed .header").removeClass("header-fixed-shrink");
      }
    });
  }

  return {
    init: function () {
      handleBootstrap();
      handleIEFixes();
      handleSearch();
      handleToggle();
      handleHeader();
    },
  };

}();
