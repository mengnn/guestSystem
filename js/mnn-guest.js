// 左中右布局页面高度
function showHeight(){
    var guestLeft = $(window).height() - 190 + "px";//左中右三div高度
    var guestListbox = $(window).height() - 290 + "px";//左侧嘉宾列表高度
    var guestRightbox = $(window).height() - 230 + "px";//右侧设置内容高度
    $('.guestLeft').css('height',guestLeft);
    $('.guestRight').css('height',guestLeft);
    $('.guestMiddle').css('height',guestLeft);
    $('.guestMiddlebox').css('height',guestLeft);
    $('.guestListbox').css('height',guestListbox);
    $('.guestRightbox').css('height',guestRightbox);
};
showHeight();

$(window).resize(function(){
    /*显示高度*/
    showHeight();
});

// 右侧嘉宾列表选中
function selectGuestlist1(obj){
  $(".guestMiddlebox").show();
  $(obj).addClass("guestListAct").siblings().removeClass("guestListAct");
  var selectIndex=$(obj).index();
  $(".guestList2").find("li").eq(selectIndex).addClass("guestListAct").siblings().removeClass("guestListAct");

  var guestListtextName = $(obj).find(".guestListtextName1").text();//嘉宾姓名
  var guestListtexttitle = $(obj).find(".guestListtexttitle1").text();//嘉宾简介
  var guestListimg = $(obj).find(".guestListimg1").attr("src");//嘉宾头像
  var guestListintroduce = $(obj).find(".hideHtml").html();//嘉宾介绍

  // 中间详情回显
  $(".guestMiddletitle1").text(guestListtextName);
  $(".guestMiddletitle2").text(guestListtexttitle);
  $(".guestMiddleimg").attr("src",guestListimg);
  $(".guestMintroducetext").html(guestListintroduce);

  // 右侧个人设置回显
  $(".guestRightPshowname").find("span").text(guestListtextName);
  $(".guestRightPshowintroduce").find("span").text(guestListtexttitle);
  $(".guestRightPshowtextdiv").html(guestListintroduce);
  $(".guestRightPimg").attr("src",guestListimg);

  // 还原右侧设置
  $(".guestRighttitle").find("span").eq(0).addClass("current").siblings().removeClass('current');
  $(".guestRightbox").find(".guestRightpd").eq(0).show().siblings().hide();
  $(".guestRightPshow").show();
  $(".guestRightPedit").hide();
  $(".editImg").show();
  $(".editDelete").show();
  $(".editSave").hide();
}

function selectGuestlist2(obj){
  $(".guestMiddlebox").show();
  $(obj).addClass("guestListAct").siblings().removeClass("guestListAct");
  var selectIndex=$(obj).index();
  $(".guestList1").find("li").eq(selectIndex).addClass("guestListAct").siblings().removeClass("guestListAct");

  var guestListtextName = $(obj).find(".guestListtextName2").text();//嘉宾姓名
  var guestListtexttitle = $(obj).find(".hideIntroduceHtml").text();//嘉宾简介
  var guestListimg = $(obj).find(".guestListimg2").attr("src");//嘉宾头像
  var guestListintroduce = $(obj).find(".hideHtml").html();//嘉宾介绍

  // 中间详情回显
  $(".guestMiddletitle1").text(guestListtextName);
  $(".guestMiddletitle2").text(guestListtexttitle);
  $(".guestMiddleimg").attr("src",guestListimg);
  $(".guestMintroducetext").html(guestListintroduce);

  // 右侧个人设置回显
  $(".guestRightPshowname").find("span").text(guestListtextName);
  $(".guestRightPshowintroduce").find("span").text(guestListtexttitle);
  $(".guestRightPshowtextdiv").html(guestListintroduce);
  $(".guestRightPimg").attr("src",guestListimg);
}

// 切换嘉宾选项列表
$(".guestListimg").find("img").click(function(){
  var imgIndex=$(this).index();
  $(this).hide().siblings().show();
  $(".guestListbox").find("ul").eq(imgIndex).hide().siblings().show();
  // $(".guestListbox").find("ul").find("li").removeClass("guestListAct");
})
// 右侧设置选项
$(".guestRighttitle").find("span").click(function(){
  var spanIndex=$(this).index();
  $(this).addClass("current").siblings().removeClass("current");
  $(".guestRightbox").find(".guestRightpd").eq(spanIndex).show().siblings().hide();
})


// 嘉宾信息编辑按钮
$(".editImg").click(function(){
  $(".editImg,.editDelete").hide();
  $(".editSave").show();
  $(".guestRightPshow").hide();
  $(".guestRightPedit").show();

  var guestName = $(".guestRightPshowname").find("span").text(); //嘉宾姓名
  var guestIntroduce = $(".guestRightPshowintroduce").find("span").text(); //嘉宾简介
  var guestImg = $(".guestRightPimg").find("img").attr("src"); //嘉宾图片
  var guestHtml = $(".guestRightPshowtextdiv").html(); //嘉宾介绍
  guestHtml = guestHtml.replace(/<br>/g, "\r\n"); //换行符转换

  guestHtml = guestHtml.replace(/&nbsp;/g, " ");
   alert(guestHtml)

  // 回显
  $(".guestRightPeditnameinput").val(guestName);
  $(".guestRightPeditintroduceinput").val(guestIntroduce);
  $(".guestRightPeditchange").attr("src",guestImg);
  $(".guestRightPeditintroducetextarea").val(guestHtml);
})


// 嘉宾信息保存按钮
$(".editSave").click(function(){
  $(".editImg,.editDelete").show();
  $(".editSave").hide();
  $(".guestRightPshow").show();
  $(".guestRightPedit").hide();

  var guestNameval = $(".guestRightPeditnameinput").val(); //嘉宾姓名
  var guestIntroduceval = $(".guestRightPeditintroduceinput").val(); //嘉宾简介
  var guestImgval = $(".guestRightPeditchange").attr("src"); //嘉宾图片
  var guestImgHtml = $(".guestRightPeditintroducetextarea").val(); //嘉宾介绍

  guestImgHtml = guestImgHtml.replace(/\r\n/g, '<br/>'); //IE9、FF、chrome
  guestImgHtml = guestImgHtml.replace(/\n/g, '<br/>'); //IE7-8
  guestImgHtml = guestImgHtml.replace(/\s/g, ' '); //空格处理


  // 回显--右侧回显
  $(".guestRightPshowname").find("span").text(guestNameval); //嘉宾姓名
  $(".guestRightPshowintroduce").find("span").text(guestIntroduceval); //嘉宾简介
  $(".guestRightPimg").find("img").attr("src",guestImgval); //嘉宾图片
  $(".guestRightPshowtextdiv").html(guestImgHtml);//嘉宾介绍

  // 回显--中间回显
  $(".guestMiddletitle1").text(guestNameval); //嘉宾姓名
  $(".guestMiddletitle2").text(guestIntroduceval); //嘉宾简介
  $(".guestMiddleimg").attr("src",guestImgval); //嘉宾图片
  $(".guestMintroducetext").html(guestImgHtml);//嘉宾介绍

  // 回显--左侧回显
  $(".guestList1").find(".guestListAct").find(".guestListtextName1").text(guestNameval); //嘉宾姓名
  $(".guestList2").find(".guestListAct").find(".guestListtextName2").text(guestNameval); //嘉宾姓名

  $(".guestList1").find(".guestListAct").find(".guestListtexttitle1").text(guestIntroduceval); //嘉宾简介
  $(".guestList2").find(".guestListAct").find(".hideIntroduceHtml").text(guestIntroduceval); //嘉宾简介

  $(".guestList1").find(".guestListAct").find(".guestListimg1").attr("src",guestImgval); //嘉宾图片
  $(".guestList2").find(".guestListAct").find(".guestListimg2").attr("src",guestImgval); //嘉宾图片

  $(".guestList1").find(".guestListAct").find(".hideHtml").html(guestImgHtml); //嘉宾介绍
  $(".guestList2").find(".guestListAct").find(".hideHtml").html(guestImgHtml); //嘉宾介绍

})


// 调用弹窗
function viewTask(id){
   $("#"+id).show();
   $("#fade").show();
}
// 取消弹窗
function cancel(id){
   $("#"+id).hide();
   $("#fade").hide();
}
// 编辑页面删除照片
$(".guestRightPeditimgdelete").click(function(){
  $(".guestRightPeditchangebox").hide();
  $(".guestRightPeditimgchange").show();
})


// 添加嘉宾图片删除
$(".moudleImgshowdelete").click(function(){
  $(".moudleImgshow").css("display","none");
  $(".moudleImgchange").css("display","inline-block");
})
// 选择嘉宾库
$(".selectGuestLabrary").click(function(){
  $("#light1").find(".title-two").hide();
  $("#light1").find(".lightTable").show();

  $("#light1").find(".title-three").hide();
  $("#light1").find(".title-threeRadio").show();
})
// 嘉宾库嘉宾选中
function radioSelectguest(obj){
  if($(obj).attr("checked")){
    $(obj).parent().parent().addClass("radioSelectyes");
    $(obj).parent().parent().siblings().removeClass('radioSelectyes');
  }
}
// 嘉宾库取消
function guestLibrarycancel(){
  $("#light1").find(".title-two").show();
  $("#light1").find(".lightTable").hide();

  $("#light1").find(".title-three").show();
  $("#light1").find(".title-threeRadio").hide();
}
// 嘉宾库确认信息
function guestLibrarysure(){
  var libraryName = $(".radioSelectyes").find(".lirbraryName").text();//嘉宾姓名
  var lirbraryIntroduce = $(".radioSelectyes").find(".lirbraryIntroduce").text();//嘉宾简介

  $(".titleTwoname").val(libraryName);
  $(".titleTwointroduce").val(lirbraryIntroduce);

  $("#light1").find(".title-two").show();
  $("#light1").find(".lightTable").hide();

  $("#light1").find(".title-three").show();
  $("#light1").find(".title-threeRadio").hide();
}
// 确认添加嘉宾
function addGuestsure(){
  var titleTwoname = $(".titleTwoname").val();//嘉宾姓名
  var titleTwointroduce = $(".titleTwointroduce").val();//嘉宾简介
  var titleTwointroducetext = $(".titleTwointroducetext").val();//嘉宾介绍
  var moudleImgshowchange = $(".moudleImgshowchange").attr("src");//嘉宾头像


  titleTwointroducetext = titleTwointroducetext.replace(/\r\n/g, '<br/>'); //IE9、FF、chrome
  titleTwointroducetext = titleTwointroducetext.replace(/\n/g, '<br/>'); //IE7-8
  titleTwointroducetext = titleTwointroducetext.replace(/\s/g, ' '); //空格处理
  // alert(titleTwointroducetext)


  //回显左侧列表1
  $(".guestList1").append('<li onclick="selectGuestlist1(this)">'
                    +'<img src="'+moudleImgshowchange+'" class="guestListimg1">'
                    +'<div class="guestListtext1">'
                    +'  <p class="guestListtextName1">'+titleTwoname+'</p>'
                    +'  <p class="guestListtexttitle1">'+titleTwointroduce+'</p>'
                    +'</div>'
                    +'<div class="hideHtml" style="display:none;">'+titleTwointroducetext+'</div>'
                  +'</li>'
  );
  //回显左侧列表2
  $(".guestList2").append('<li onclick="selectGuestlist2(this)">'
                    +'<img src="'+moudleImgshowchange+'" class="guestListimg2">'
                    +'<p class="guestListtextName2">'+titleTwoname+'</p>'
                    +'<p class="hideIntroduceHtml" style="display:none;">'+titleTwointroduce+'</p>'
                    +'<div class="hideHtml" style="display:none;">'+titleTwointroducetext+'</div>'
                  +'</li>'
  );



  $("#light1,#fade").hide();
}


// 确认删除嘉宾
function deleteGuestsure(){
  $("#light2,#fade").hide();
  $(".guestRightPshow").hide();
  $(".guestMiddlebox").hide();
  $(".guestListAct").remove();
  $(".guestRightDbox").remove();
}


