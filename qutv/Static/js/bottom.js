
/* 首页切换的代码  */
   $(document).ready(function () {
     $(".item").click(function () {
       var data = $(this).attr("data-list");
       htmlobj = $.ajax({
         url: "/Html/tag-" + data + ".html",
         async: false
       });
       $(".channel-list").html(htmlobj.responseText);
     });
   });

/* 播放第一个的地址 */
$(document).ready(function () {
    $("li").click(function () {
      var data = $(this).attr("data-player");
      var arr = data.split('$$');
      setPlay(arr[0], arr[1]);
    });
  });
  
/* cnzz统计 */
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1273831335'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1273831335%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));

/*百度主动推送*/ 
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
/*360主动推送*/ 
(function(){
var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?fe9533e8f0c7742c637067ba8c7c9ac3":"https://jspassport.ssl.qhimg.com/11.0.1.js?fe9533e8f0c7742c637067ba8c7c9ac3";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();


/*百度统计*/ 
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a8a5f5e1b29f6dc7e020537106d7d287";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();