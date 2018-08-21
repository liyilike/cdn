    var nameArr = [],
      hrefArr = [];
    var inpVal, text, maxInt = 10;
    /* 循环获取应用name数组 */
    $(".i_k_t").each(function () {
      nameArr[nameArr.length] = $(this).text();
    });
    /* 循环获取href数组 */
    $(".sy_ico_k_sj").each(function () {
      hrefArr[hrefArr.length] = $(this).attr('href');
    });


    function mySearch() {
      text = '';
      /* input为空 */
      if ($("#sy_ssname_nr").val() == '') {
        len = nameArr.length;
        if (len >= maxInt) {
          len = maxInt;
        }
        for (i = 0, len; i < len; i++) {
          if (text == '') {
            text = '<li><a href="' + hrefArr[i] + '">' + nameArr[i] + '</a></li>';
            continue;
          }
          text = '<li><a href="' + hrefArr[i] + '">' + nameArr[i] + '</a></li>' + text;
        }
        $("#autosuggest_results").html("<ul>" +
          text +
          "</ul>"
        );
      } else {
        for (j = 0, len = nameArr.length; j < len; j++) {
          if (nameArr[j].indexOf($("#sy_ssname_nr").val()) != -1) {
            if (text == '') {
              text = '<li><a href="' + hrefArr[j] + '">' + nameArr[j] + '</a></li>';
              continue;
            }
            text = '<li><a href="' + hrefArr[j] + '">' + nameArr[j] + '</a></li>' + text;
          }
        }
        if (text == '') {
          $("#autosuggest_results").html("<ul><li><a >无搜索结果,请换关键词</a></li></ul>");
          return;
        }

        $("#autosuggest_results").html("<ul>" +
          text +
          "</ul>"
        );
      }

    }

    /* input获取焦点 */
    $("#sy_ssname_nr").focus(function () {
      mySearch();
    });
    /* input改变数值*/
    $("#sy_ssname_nr").on('input', function (e) {
      $("#autosuggest_results").show();
      mySearch();
    });
    $("#sy_ssname_nr").click(function () {
      $("#autosuggest_results").toggle();
      mySearch();
    });
    $("#sy_button").click(function () {
      $("#autosuggest_results").show();
      mySearch();
    });