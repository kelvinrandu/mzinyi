(function($) {
  $("#edit-field-checkin-checkout-value-min").each(function(i) {
    this.id = 'ccn-dp1-' + i;
  });
  $("#edit-field-checkin-checkout-value-max").each(function(i) {
    this.id = 'ccn-dp2-' + i;
  });
  $("#stries_slider").each(function() {
    $(this).closest(".ccn-section").addClass("stories");
    $("<div class='arrows'><div class='arrow prev'></div><div class='arrow next'></div></div>").appendTo($(".stories").find(".controls"));
  });
  $("#tour-slider").each(function() {
    $(this).closest(".ccn-section").addClass("most_popular");
    $("<div class='arrows'><div class='arrow prev'></div><div class='arrow next'></div></div>").appendTo($(".most_popular").find(".controls"))
  });
  $('.ccn-identify__search').each(function() {
    $(this).find(".js-form-item-field-destination-target-id").addClass("destination-col");
    $(this).find(".form-item-field-checkin-checkout-value-min, .form-item-field-checkin-checkout-value-max").addClass("date_div").wrap("<div class='date-col'></div>");
    $(this).find(".form-item-field-adults-value, .form-item-field-children-value").addClass("num-col");
    $(this).find(".form-item-field-children-value").addClass("last");
    $(this).find(".num-col").each(function() {
      $(this).find("input").wrap("<div class='num_wrap'></div>");
      $(this).find(".num_wrap").prepend("<div class='buttons'><button class='plus'></button><button class='minus'></button></div>");
      $(this).find("button").click(function($) {
        $.preventDefault();
      });
      $(this).find("input").addClass("val js_num");
    });
    $(this).find(".date-col").each(function() {
      $(this).find("input").addClass("js_calendar desctop-input");
      $("<input type='date' class='mobile-input' /><div class='day'>1</div><div class='date_div_right'><div class='month'>December</div><div class='year'>2019</div></div>").insertAfter($(this).find("input"));
    });
    $(this).find("#edit-field-adults-value").attr("value", "3");
    $(this).find("#edit-field-children-value").attr("value", "2");
    $(this).find(".form-submit").each(function() {
      var $for = $(this).attr("id");
      $("<label class='btn button'  for='" + $for + "'><span>Search</span></label>").insertBefore($(this));
    });
    $(this).find(".form-item-field-checkin-checkout-value-max .label").text("Check Out");
    $(this).find(".form-select > option:first-child").text("All Destinations");
  });
}(jQuery));
(function($, Drupal, drupalSettings) {
  Drupal.behaviors.cocoonPreprocess = {
    attach: function(context, settings) {
      $(".popup-body .block-user-login-block .item-list a").each(function(){
        $(this).addClass("js-popup-open");
      });
      $(".popup-body .block-user-login-block .item-list .create-account-link").attr("data-href", "#registration");
      $(".popup-body .block-user-login-block .item-list .request-password-link").attr("data-href", "#recovery-pass");
      if ($(".ccn--mph--page-title").length > 0) {
        $(".page_head").text("");
        $(".ccn--mph--page-title").appendTo(".page_head");
      }
      $(".flag.action-flag").click(function() {
        $(this).find(".fav-button").addClass("added");
      });
      $(".flag.action-unflag .fav-button").addClass("added");
      $(".flag.action-unflag").click(function() {
        $(this).find(".fav-button").removeClass("added");
      });
      $(".action-flag a").each(function() {
        num = parseInt($(".favorites-count ._counter").text());
        $(this).click(function() {
          $(".favorites-count ._counter").text(num + 1);
        });
      });
      $(".action-unflag a").each(function() {
        num2 = parseInt($(".favorites-count ._counter").text());
        $(this).click(function() {
          $(".favorites-count ._counter").text(num2 - 1);
        });
      });
      $(".favourites-list .tour_item .action-unflag a").each(function() {
        $(this).click(function() {
          $(this).closest(".tour_item").fadeOut('slow', function() {
            $(this).remove();
          });
        });
      });
      $(".write_comment").each(function() {
        $(this).addClass("write_comment");
        $(this).find(".form-type-textfield, .form-type-email").each(function() {
          var $label = $(this).find(".label").text();
          $(this).find("input").attr("placeholder", $label);
          $(this).find(".label").remove();
        });
        $(this).find(".form-type-textarea").each(function() {
          var $label = $(this).find(".label").text();
          $(this).find("textarea").attr("placeholder", $label);
          $(this).find(".label").remove();
        });
        $(this).find(".form-actions").addClass("bottom");
        var $edit_actions = $(this).find(".form-actions");
        $(this).find(".files").prependTo($edit_actions);
      });
      $(".ajax-comments-form-reply").each(function() {
        $(this).prepend("<div class='top'><div class='title'>Write A Reply</div></div>");
        $(this).find(".form-type-textarea textarea").addClass("textarea");
        $(this).addClass("write_comment");
        $(this).find(".form-type-textfield, .form-type-email").each(function() {
          var $label = $(this).find(".label").text();
          $(this).find("input").attr("placeholder", $label);
          $(this).find(".label").remove();
        });
        $(this).find(".form-type-textarea").each(function() {
          var $label = $(this).find(".label").text();
          $(this).find("textarea").attr("placeholder", $label);
          $(this).find(".label").remove();
        });
        $(this).find(".form-actions").addClass("bottom");
        var $edit_actions = $(this).find(".form-actions");
        $(this).find(".files").prependTo($edit_actions);
      });
      $(".comments .indented .comment_item").each(function() {
        $(this).addClass("answer_comment");
      });
      $(".block-views-blockcocoon-blog-block-blog-archive").each(function() {
        $(this).find(".block_title").prependTo($(this).find(".archive_block"));
      });
      $(".block-views-blockcocoon-blog-taxonomy-categories").each(function() {
        $(this).find(".block_title").prependTo($(this).find(".category_block"));
      });
      $(".ccn-rating .select_wrap, .ccn-rating .rating-stars").remove();
      $(window).on('load', function() {
        $(".ccn--mph--page-title").css("display","block");
        $("ul#ccn-nav > li > a.is-active").addClass("active");
        $("ul#ccn-nav > li.dropdown_li > ul.dropdown_ul > li > a.is-active").each(function() {
          $(this).closest(".dropdown_li").find(".dropdown_li.ccn-sub-nav").addClass("active");
        });
        $("form").each(function() {
          $(this).addClass("form");
        });
        $(".ccn-identify__image-up").each(function() {
          var $src = $(this).attr("src");
          $(this).closest(".tour_item").attr("style", "background-image:url(" + $src + ")");
          $(this).remove();
        });
        $(".ccn-identify__destinations").each(function() {
          $(this).closest(".ccn-section").addClass("destinations");
        });
        $(".ccn-identify__blog-block").each(function() {
          $(this).closest(".ccn-section").addClass("blog");
        });
        $(".layout--twocol-section--75-25 .layout__region--first").addClass("left_content");
        $(".layout--twocol-section--75-25 .layout__region--second").addClass("right_content sidebar");
        $(".layout--twocol-section--25-75 .layout__region--first").addClass("right_content sidebar");
        $(".layout--twocol-section--25-75 .layout__region--second").addClass("left_content");
        if ($(".layout--twocol-section--75-25").length > 0) {
          $(".page").addClass("right-sidebar");
        }
        if ($(".layout--twocol-section--25-75").length > 0) {
          $(".page").addClass("left-sidebar");
        }
        $(".ccn-trackup_page").each(function() {
          var $class = $(this).attr("class");
          $(".page").addClass($class);
          $(".ccn-trackup_page:not(.page)").attr("class", "");
        });
        $(".ccn_image-header").each(function() {
          $(this).insertAfter(".top_panel");
          $(".page").addClass("full-width full-width-image-header");
        });
        if ($("#stories_page").length > 0 || $(".gallery-page").length > 0 || $(".tour_page").length > 0 || $(".ccn_image-header").length > 0 || $(".main_slider").length > 0) {
          $(".top_panel").removeClass("inversion");
          $(".breadcrumbs").addClass("white-color");
        }
        if ($(".gallery-page").length > 0) {
          $(".page_head").addClass("gallery-page-head");
        }
        if ($(".tour_page").length > 0) {
          $(".breadcrumbs").insertBefore("#head");
        }
        if ($(".left-sidebar").length > 0) {
          $(".layout__region--second.left_content").insertBefore(".layout__region--first.right_content");
        }
        $(".node__content .ccn-identify__page-head").prependTo(".page");
        $(".main_slider").each(function() {
          $(this).insertAfter(".top_panel");
          $(".breadcrumbs").remove();
        });
        $("#programm-days .day_item:first-child").each(function() {
          $(this).find(".day_item-head").addClass("active");
          $(this).find(".day_item-body").css("display", "block");
        });
        $("#blog-slider .slider_bottom a").click(function(e) {
          e.preventDefault();
        });
        $(".form-submit").each(function() {
          $(this).addClass('submit');
        });
        $(".top_panel.inversion").each(function() {
          $(this).find(".logo img").attr("src", drupalSettings.path.baseUrl + drupalSettings.path.themeUrl + "/logo-black.svg");
        });
        $(".subscribe_block .label").remove();
        $(".block-simplenews-subscription-block #edit-mail-wrapper .form-type-email").addClass("input_wrap");
        $(".block-simplenews-subscription-block #edit-mail-wrapper .form-type-email .form-email").addClass("input js_input");
        $(".block-simplenews-subscription-block #edit-mail-wrapper .form-type-email label, .block-simplenews-subscription-block #edit-mail-wrapper .form-type-email .description").remove();
        $(".webform-submission-form .form-item,  .webform-submission-form .form-textarea-wrapper").addClass("input_wrap");
        $(".webform-submission-form .form-item input").addClass("input placeholder js_input");
        $(".webform-submission-form .form-item textarea").addClass("textarea placeholder js_input");
        $(".comment-form .form-item, .comment-form .form-textarea-wrapper").addClass("input_wrap");
        $(".comment-form .form-item input").addClass("input placeholder js_input");
        $(".comment-form .form-item textarea").addClass("textarea placeholder js_input");
        $(".subscribe_block").each(function() {
          $(this).find("select").unwrap();
          $(this).find(".form-type-select").addClass("select_wrap");
          $(this).find(".form-submit").each(function() {
            $(this).unwrap();
            var $for = $(this).attr("id");
            $("<label class='submit button'  for='" + $for + "'><span>Subscribe</span></label>").insertBefore($(this));
          });
        });
        $(".favourites-list .posts").each(function() {
          $(this).find("form").addClass("posts");
          $(this).removeClass("posts");
          $(this).find("#edit-header").remove();
        });
        $(".page.full-width-image-header").removeClass("default");
        $(".blog-list-page .filters").each(function() {
          var parentForm = $(this).closest("form");
          parentForm.find("label").remove();
          parentForm.find(".form-actions").remove();
          parentForm.find(".form-type-textfield").addClass("search_wrap");
          $("<button class='submit'></button>").appendTo(parentForm.find(".search_wrap"));
          parentForm.find('#edit-field-category-target-id').each(function() {
            $(this).unwrap();
            $(this).parent().addClass("select_wrap");
            $(this).on('change', function() {
              if (parentForm && parentForm.length > 0) {
                parentForm.submit();
              }
            });
          });
        });
        $(".blog-list-page:not(.right-sidebar) .filters,.blog-list-page:not(.left-sidebar) .filters").each(function() {
          $(this).closest("form").appendTo(".page_head");
        });
        $(".blog-list-page.right-sidebar,.blog-list-page.left-sidebar").each(function() {
          $(this).find(".filters").closest("form").prependTo(".sidebar");
        });
        $("#edit-field-category-target-id > option:first-child").text("Category");
        $('#views-exposed-form-cocoon-gallery-block-1 #edit-field-destination-target-id,#views-exposed-form-cocoon-stories-block-1 #edit-field-destination-target-id').each(function() {
          var parentForm = $(this).closest("form");
          $(this).on('change', function() {
            if (parentForm && parentForm.length > 0) {
              parentForm.submit();
            }
          });
          $(this).find("> option:first-child").text("Destination");
          parentForm.appendTo(".page_head");
          parentForm.find("label").remove();
          parentForm.find(".form-actions").remove();
        });
      });
    }
  };
}(jQuery, Drupal, drupalSettings));
(function($, Drupal, drupalSettings) {
  Drupal.behaviors.webform_ajax = {
    attach: function(context, settings) {
      $(".webform-ajax-form-wrapper .webform-button--submit").click(function() {
        $(document).ajaxStop(function() {
          $(".popup").removeClass("opened");
          $("#contact-us-success").addClass("opened");
        });
      });
      /* $(document).ajaxSuccess(function() {

      alert("sucess");
    }); */
      /* $(document).ajaxStop(function () {
alert("suc");
});*/
    }
  };
}(jQuery, Drupal, drupalSettings));
