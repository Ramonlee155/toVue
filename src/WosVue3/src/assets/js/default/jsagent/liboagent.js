// JavaScript Document
var libbstr="<tr><th>类别</th><th>赔率</th><th>总注数</th><th>总投|注</th><th>占成</th><th>预计亏损</th><th>已飞</th><th>补</th></tr>";
var libcstr="<tr><th>类别</th><th>赔率</th><th>总注数</th><th>总投|注</th><th>占成</th><th>预计亏损</th><th>已飞</th><th>补</th></tr>";
var upstr = "<span class='up'>+</span>";
var downstr = "<span class='down'>-</span>";
var gatt;
var libastr = "<tr><td><table class='tinfo wd100'><tr><th class='f'>类别</th><th class='s'>赔率</th><th  class='t'>吃码</th><th  class='fo'>盈亏</th><th  class='fi'>已飞/补</th></table></td><td><table class='tinfo wd100'><tr><th class='f'>类别</th><th class='s'>赔率</th><th  class='t'>吃码</th><th  class='fo'>盈亏</th><th  class='fi'>已飞/补</th></table></td><td><table class='tinfo wd100'><tr><th class='f'>类别</th><th class='s'>赔率</th><th  class='t'>吃码</th><th  class='fo'>盈亏</th><th  class='fi'>已飞/补</th></table></td><td><table class='tinfo wd100'><tr><th class='f'>类别</th><th class='s'>赔率</th><th  class='t'>吃码</th><th  class='fo'>盈亏</th><th  class='fi'>已飞/补</th></table></td></tr>";


var layer=Number($("#userid").attr('layer'));

var rtime=Number($("#reloadtime").val());
var gnow;
function myready(){
    psizeclick();
	if(layer==5){
	   $(".xxtb tr:eq(0)").append("<th>代理</th>");
	}else if(layer==4){
	   $(".xxtb tr:eq(0)").append("<th>所属代理</th><th>总代</th><th>代理</th>");
	}else if(layer==3){
	   $(".xxtb tr:eq(0)").append("<th>所属总代</th><th>股东</th><th>总代</th><th>代理</th>");
	}else if(layer==2){
	   $(".xxtb tr:eq(0)").append("<th>所属股东</th><th>大股东</th><th>股东</th><th>总代</th><th>代理</th>");
	}else{
	   $(".xxtb tr:eq(0)").append("<th>所属大股东</th><th>公司</th><th>大股东</th><th>股东</th><th>总代</th><th>代理</th>");
	}
	$("label").addClass('red');
	$(".now td:eq(0)").addClass("bover");
	$(".now th:eq(0)").addClass("bred");
	$(".ztnow td:eq(0)").addClass("bover");
	$(".ztnow th:eq(0)").addClass("bred");
	
	$("#huama").click(function(){lib();});
	$("#qishu").change(function(){lib();});
	$("#xsort").change(function(){lib();});
	$("#reload").click(function(){
	      parent.window.location.href = parent.window.location.href;
		  //window.location.href = window.location.href;
		  clearTimeout(gnow);
		  gnow = setTimeout(getnow,5000);
		  lib();
	});
	
	$(".btns").click(function(){
         $(".btns").removeClass('click');		
		 $(this).addClass("click");
	     selectma($(this).val()); 
	});
	
	$("#userid").change(function(){
	    lib();
	}); 
   
    $("#print").click(function(){
	     window.print();
	});
	
	$(".now td.n").click(function(){
	     var cid=$(this).attr('cid');
		 var cname=$(this).attr('cname');
		 //getclass(cid,cname);
		 $(".now td.n").removeClass('bover');
		 $(this).addClass('bover');
		 $(".now th").removeClass('bred');
		 $(".now .n"+cid).addClass('bred');
		 lib();
	});
	
	$(".ztnow td").click(function(){
	     var cid=$(this).attr('cid');
		 var cname=$(this).attr('cname');
		 $(".ztnow td").removeClass('bover');
		 $(".ztnow th").removeClass('bred');
		 $(".ztnow th.zt"+cid).addClass('bred');
		 $(this).addClass('bover');
		 $("#ab").val(cid);
		 liba();
	});
	
	$("#psetsend").click(function(){
	    var peilv=$("#psetvalue").val();
		if(peilv=='' | Number(peilv)*100%1!=0){
		   alert("请输入正确的赔率");
		   $("#psetvalue").focus();
		   return false;
		}
		$(".lib .small:not(:hidden)").val(peilv);
	});
	
	$("#ab").change(function(){
	     lib();
	});
	$("#abcd").change(function(){
	     lib();
	});
	$("#maxksbtn").click(function(){
         var cname = $(".now .bred").html();
	     if(cname.indexOf("特碼")!=-1 | cname.indexOf("正")!=-1){
             $("#maxksvalue").attr('tm',$("#maxksvalue").val());
         }else{
             $("#maxksvalue").attr('other',$("#maxksvalue").val());
	     }    
		 $("#setks").val('1');
		 lib();
	});
	
	
	var bid=$(".now").find("td.bover").attr('cid');
	

	lib();     
	getnow();
	
	time();	
	$("#reloadtime").change(function(){
	    rtime = Number($(this).val());		
	});
	
	$(".butb .cbtn").click(function(){
	    $(".butb").hide();
	});
	
	
	$("#fly").change(function(){
	     if(Number($(this).val())==1)	{
		      $("#pfly").attr("disabled",false);
		 }else{
		      $("#pfly").attr("disabled",true);
		 }  
    });
	$("#fly").change();
	
 	$("#pfly").click(function(){
        var bstr = "{";
		var z=0;
		var ab=$("#ab").val();
		var abcd=$("#abcd").val();
		
		$("a.bu").each(function(){
		    var bje=Number($(this).attr('bje'));
			if(bje*10/1!=0 & bje>=1){
			   if(z!=0) bstr += ',';
			   var con=$(this).parent().parent().find("td.con").html();
		       bstr += '"'+$(this).parent().parent().attr('pid')+'":'+'"'+$(this).attr('bje')+'_'+con+'"';
			   z++;
			}
		});
		bstr += '}';

		if(strlen(bstr)<10){
		    return false;
		}
		$("#pfly").attr("disabled",true);
		var fly = $("#fly").val();
		$.ajax({
		   type:'POST',
		   url:mulu + 'lib.php',
		   data:'xtype=bucang&ab='+ab+"&abcd="+abcd+"&bstr="+bstr+"&fly="+fly,
		   //dataType:'json',
		   cache: false,
		   success:function(m){
			   $("#pfly").attr("disabled",false);
		       if(Number(m)==1){
				   alert("批量补货成功！");
			   }else{
				   alert("批量补货失败！");
			   }
			   lib();
		   }
		});
	});
	
	$(".butb .fly").html($("#fly").html());
	$(".butb .fly").change(function(){
	    if(Number($(this).val())==1){
	        $(".butb .bupeilv1").hide();
	        $(".butb .bupeilv2").hide();
	        $(".butb .bupoints").parent().parent().hide();
	        $(".butb .bupeilv1").parent().find("label").show();
	        $(".butb .bupeilv2").parent().find("label").show();
	    }else{
	        $(".butb .bupeilv1").show();
	        $(".butb .bupeilv2").show();
	        $(".butb .bupoints").parent().parent().show();
	        $(".butb .bupeilv1").parent().find("label").hide();
	        $(".butb .bupeilv2").parent().find("label").hide();
	    }
	});

}

function xxclick(){
	$(".lib label.zcxx").click(function(){
		//return;
        var bid = $(".now .bover").attr("cid");

	    var abcd = $("#abcd").val();
	    var ab = $("#ab").val();
	    if($("#huama").prop("checked")==true){
	       var huama=1;
	    }else{
	       var huama=0;
	    }
		var page=$(".page").val();
		var xtype =$(".ttype").val();
	    var qishu = $("#qishu").val();
	    var goods = $("#goods").val();
	    var xsort=$("#xsort").val();
	    var maxksval = $("#maxksvalue").val();
	    var setks = $("#setks").val();
		var puserid=$("#userid").val();
		var orderby = $(".sort").attr("orderby");
		var sorttype = $(".sort").attr("sorttype");
	    var sstr = "&bid="+bid+"&abcd="+abcd+"&ab="+ab+"&huama="+huama+"&goods="+goods+"&qishu="+qishu+"&xsort="+xsort;
	    sstr += "&maxksval="+maxksval+"&setks="+setks+"&puserid="+puserid+"&page="+page+"&orderby="+orderby;
		sstr += "&sorttype="+sorttype+"&flytype="+xtype;

		var pid = $(this).parent().parent().attr('pid');
		var posi =$(this).position();
		if(posi.left>document.body.clientWidth){
		    $(".xxtb").css('left',posi.left+$(this).width()-$(".xxtb").width());
		}else{
		    $(".xxtb").css('left',10)
		}
		$(".xxtb").css('top',posi.top+$(this).height());
		$(".xxtb").show();
        var obj=$(this);
		$.ajax({
		    type:'POST',
			url:mulu + 'xxtz.php',
			cache: false,
			data:'xtype=getxx'+sstr+"&fly="+$(".ttype").val()+"&pid="+pid,
			dataType:'json',
			success:function(m){
				//$("#test").html(m);return;
				var ml=m['tz'].length;
				var str='';
				$(".xxtb tr").each(function(i){
				   if(!$(this).hasClass('bt')) $(this).remove();
				});
				for(i=0;i<ml;i++){
				    str += "<tr>";
					str += "<td>"+m['tz'][i]['qishu']+"</td>";
					str += "<td>"+m['tz'][i]['tid']+"</td>";
					str += "<td>"+m['tz'][i]['xtype']+"</td>";
					str += "<td>"+m['tz'][i]['bid']+"-"+m['tz'][i]['cid']+"-"+m['tz'][i]['pid']+"</td>";
	
					str += "<td>"+m['tz'][i]['abcd']+"</td>";				
					
					str += "<td>"+m['tz'][i]['ab']+"</td>";
					str += "<td>"+m['tz'][i]['con']+"</td>";
					str += "<td><label>"+m['tz'][i]['zcje']+"</label>/"+m['tz'][i]['je']+"</td>";
					str += "<td>"+m['tz'][i]['peilv1']+"</td>";
					str += "<td>"+m['tz'][i]['points']+"</td>";
					str += "<td>"+m['tz'][i]['user']+"</td>";
					str += "<td>"+m['tz'][i]['xtime']+"</td>";
					if(layer<5) str += "<td>"+m['tz'][i]['duser']+"</td>";
					for(j=layer;j<6;j++){
					   str += "<td>"+m['tz'][i]['zc'+j]+"</td>";
					}
					str += "</tr>";
				}
				$(".xxtb").prepend("<tr><td><a href='javascript:void(0);' class='close'>关闭</a></td><td><select class='xtype'><option value='2' selected>全部</option><option value='0'>投|注</option><option value='1'>补货</option></select></td><td colspan=12>"+m['page']+"</td></tr>");
				$(".xxtb").append(str);
				
                //$("#test").html(m['sql'])  
				$(".xxtb select").val(m['xtype']);
				$(".xxtb .close").click(function(){
				    $(".xxtb").hide();
				});
				$(".xxtb select").change(function(){
					$(".ttype").val($(this).val());
					$(".page").val(1);
					obj.click();
				});
				$(".xxtb a.page").click(function(){
			        $(".page").val($(this).html());
				    obj.click();
				});
				$(".xxtb th a").unbind('click');
				$(".xxtb th a").click(function(){
			          $(".sort").attr("orderby",$(this).attr('class'));	
					  if($(this).find("img").attr('s')=='up'){
					      $(".sort").attr("sorttype",'ASC');
						  $(this).find("img").attr('src',globalpath+"img/down.gif");
						  $(this).find("img").attr('s','down');
					  }else{
					      $(".sort").attr("sorttype",'DESC');
						  $(this).find("img").attr('src',globalpath+"img/up.gif");
						  $(this).find("img").attr('s','up');
					  }
					  obj.click();
				});
				str=null;
				m=null;
			}
		});
	});
}
function xxclick2(){
	$(".libs label.zcxx").click(function(){
        var bid = $(".now .bover").attr("cid");

	    var abcd = $("#abcd").val();
	    var ab = $("#ab").val();
	    if($("#huama").prop("checked")==true){
	       var huama=1;
	    }else{
	       var huama=0;
	    }
		var con=$(this).parent().parent().find("td:eq(2)").html();
		var page=$(".page").val();
		var xtype =$(".ttype").val();
	    var qishu = $("#qishu").val();
	    var goods = $("#goods").val();
	    var xsort=$("#xsort").val();
	    var maxksval = $("#maxksvalue").val();
	    var setks = $("#setks").val();
		var puserid=$("#userid").val();
		var orderby = $(".sort").attr("orderby");
		var sorttype = $(".sort").attr("sorttype");
	    var sstr = "&bid="+bid+"&abcd="+abcd+"&ab="+ab+"&huama="+huama+"&goods="+goods+"&qishu="+qishu+"&xsort="+xsort;
	    sstr += "&maxksval="+maxksval+"&setks="+setks+"&puserid="+puserid+"&page="+page+"&orderby="+orderby;
		sstr += "&sorttype="+sorttype+"&flytype="+xtype+"&con="+con;

		var pid = $(this).parent().parent().attr('pid');
		var posi =$(this).position();
		if(posi.left>document.body.clientWidth){
		    $(".xxtb").css('left',posi.left+$(this).width()-$(".xxtb").width());
		}else{
		    $(".xxtb").css('left',10)
		}
		$(".xxtb").css('top',posi.top+$(this).height());
		$(".xxtb").show();
        var obj = $(this);
		$.ajax({
		    type:'POST',
			url:mulu + 'xxtz.php',
			cache: false,
			data:'xtype=getxx2'+sstr+"&fly="+$(".ttype").val()+"&pid="+pid,
			dataType:'json',
			success:function(m){
				//$("#test").html(m);return;
				var ml=m['tz'].length;
				var str='';
				$(".xxtb tr").each(function(i){
				   if(!$(this).hasClass('bt')) $(this).remove();
				});
				for(i=0;i<ml;i++){
				    str += "<tr>";
					str += "<td>"+m['tz'][i]['qishu']+"</td>";
					str += "<td>"+m['tz'][i]['tid']+"</td>";
					str += "<td>"+m['tz'][i]['xtype']+"</td>";
					str += "<td>"+m['tz'][i]['bid']+"-"+m['tz'][i]['cid']+"-"+m['tz'][i]['pid']+"</td>";
	
					str += "<td>"+m['tz'][i]['abcd']+"</td>";				
					
					str += "<td>"+m['tz'][i]['ab']+"</td>";
					str += "<td>"+m['tz'][i]['con']+"</td>";
					str += "<td><label>"+m['tz'][i]['zcje']+"</label>/"+m['tz'][i]['je']+"</td>";
					str += "<td>"+m['tz'][i]['peilv1']+"</td>";
					str += "<td>"+m['tz'][i]['points']+"</td>";
					str += "<td>"+m['tz'][i]['user']+"</td>";
					str += "<td>"+m['tz'][i]['xtime']+"</td>";
					if(layer<5) str += "<td>"+m['tz'][i]['duser']+"</td>";
					for(j=layer;j<6;j++){
					   str += "<td>"+m['tz'][i]['zc'+j]+"</td>";
					}
					str += "</tr>";
				}
				$(".xxtb").prepend("<tr><td><a href='javascript:void(0);' class='close'>关闭</a></td><td><select class='xtype'><option value='2' selected>全部</option><option value='0'>投|注</option><option value='1'>补货</option></select></td><td colspan=12>"+m['page']+"</td></tr>");
				$(".xxtb").append(str);
				
                //$("#test").html(m['sql'])  
				$(".xxtb select").val(m['xtype']);
				$(".xxtb .close").click(function(){
				    $(".xxtb").hide();
				});
				$(".xxtb select").change(function(){
					$(".ttype").val($(this).val());
					$(".page").val(1);
					obj.click();
				});
				$(".xxtb a.page").click(function(){
			        $(".page").val($(this).html());
				    obj.click();
				});
				$(".xxtb th a").unbind('click');
				$(".xxtb th a").click(function(){
			          $(".sort").attr("orderby",$(this).attr('class'));	
					  if($(this).find("img").attr('s')=='up'){
					      $(".sort").attr("sorttype",'ASC');
						  $(this).find("img").attr('src',globalpath+"img/down.gif");
						  $(this).find("img").attr('s','down');
					  }else{
					      $(".sort").attr("sorttype",'DESC');
						  $(this).find("img").attr('src',globalpath+"img/up.gif");
						  $(this).find("img").attr('s','up');
					  }
					  obj.click();
				});
				str=null;
				m=null;
			}
		});
	});
}

function flyclick(){
	$(".lib label.flyxx").click(function(){
		//return;
        var bid = $(".now .bover").attr("cid");

	    var abcd = $("#abcd").val();
	    var ab = $("#ab").val();
	    if($("#huama").prop("checked")==true){
	       var huama=1;
	    }else{
	       var huama=0;
	    }
		var page=$(".page").val();
		var xtype =$(".ttype").val();
	    var qishu = $("#qishu").val();
	    var goods = $("#goods").val();
	    var xsort=$("#xsort").val();
	    var maxksval = $("#maxksvalue").val();
	    var setks = $("#setks").val();
		var puserid=$("#userid").val();
		var orderby = $(".sort").attr("orderby");
		var sorttype = $(".sort").attr("sorttype");
	    var sstr = "&bid="+bid+"&abcd="+abcd+"&ab="+ab+"&huama="+huama+"&goods="+goods+"&qishu="+qishu+"&xsort="+xsort;
	    sstr += "&maxksval="+maxksval+"&setks="+setks+"&puserid="+puserid+"&page="+page+"&orderby="+orderby;
		sstr += "&sorttype="+sorttype+"&flytype="+xtype;

		var pid = $(this).parent().parent().attr('pid');
		var posi =$(this).position();
		if(posi.left>document.body.clientWidth){
		    $(".flytb").css('left',posi.left+$(this).width()-$(".flytb").width());
		}else{
		    $(".flytb").css('left',10)
		}
		
		$(".flytb").css('top',posi.top+$(this).height());
		$(".flytb").show();

		$.ajax({
		    type:'POST',
			url:mulu + 'xxtz.php',
			data:'xtype=getfly'+sstr+"&fly=0&pid="+pid,
			dataType:'json',
			cache: false,
			success:function(m){
				//$("#test").html(m);return;
				var ml=m['tz'].length;
				var str='';
				$(".flytb tr").each(function(i){
				   if(!$(this).hasClass('bt')) $(this).remove();
				});

				for(i=0;i<ml;i++){
				    str += "<tr>";
					str += "<td>"+m['tz'][i]['qishu']+"</td>";
					str += "<td>"+m['tz'][i]['tid']+"</td>";
					str += "<td>"+m['tz'][i]['xtype']+"</td>";
					str += "<td>"+m['tz'][i]['bid']+"-"+m['tz'][i]['cid']+"-"+m['tz'][i]['pid']+"</td>";
	
					str += "<td>"+m['tz'][i]['abcd']+"</td>";				
					
					str += "<td>"+m['tz'][i]['ab']+"</td>";
					str += "<td>"+m['tz'][i]['con']+"</td>";
					str += "<td><label>"+m['tz'][i]['je']+"</td>";
					str += "<td>"+m['tz'][i]['peilv1']+"</td>";
					str += "<td>"+m['tz'][i]['points']+"</td>";
					str += "<td>"+m['tz'][i]['user']+"</td>";
					str += "<td>"+m['tz'][i]['xtime']+"</td>";
					if(m['tz'][i]['bz']=='auto'){
					     str += "<td>自动</td>";
					}else{
					     str += "<td>手动</td>";
					}
					str += "</tr>";
				}

				$(".flytb").prepend("<tr><td><a href='javascript:void(0);' class='close'>关闭</a></td><td colspan=12></td></tr>");
				$(".flytb").append(str);
				//alert($(".flytb").html());
                //$("#test").html(m['sql'])  

				$(".flytb .close").click(function(){
				    $(".flytb").hide();
				});
				str=null;
				m=null;
			}
		});
	});
}

function flyclick2(){
	$(".libs label.flyxx").click(function(){
		//return;
        var bid = $(".now .bover").attr("cid");

	    var abcd = $("#abcd").val();
	    var ab = $("#ab").val();
	    if($("#huama").prop("checked")==true){
	       var huama=1;
	    }else{
	       var huama=0;
	    }
		var page=$(".page").val();
		var xtype =$(".ttype").val();
	    var qishu = $("#qishu").val();
	    var goods = $("#goods").val();
	    var xsort=$("#xsort").val();
	    var maxksval = $("#maxksvalue").val();
	    var setks = $("#setks").val();
		var puserid=$("#userid").val();
		var con=$(this).parent().parent().find("td:eq(2)").html();
		var orderby = $(".sort").attr("orderby");
		var sorttype = $(".sort").attr("sorttype");
	    var sstr = "&bid="+bid+"&abcd="+abcd+"&ab="+ab+"&huama="+huama+"&goods="+goods+"&qishu="+qishu+"&xsort="+xsort;
	    sstr += "&maxksval="+maxksval+"&setks="+setks+"&puserid="+puserid+"&page="+page+"&orderby="+orderby;
		sstr += "&sorttype="+sorttype+"&flytype="+xtype+"&con="+con;

		var pid = $(this).parent().parent().attr('pid');
		var posi =$(this).position();
		if(posi.left>document.body.clientWidth){
		    $(".flytb").css('left',posi.left+$(this).width()-$(".flytb").width());
		}else{
		    $(".flytb").css('left',10)
		}
		
		$(".flytb").css('top',posi.top+$(this).height());
		$(".flytb").show();

		$.ajax({
		    type:'POST',
			url:mulu + 'xxtz.php',
			data:'xtype=getfly2'+sstr+"&fly=0&pid="+pid,
			dataType:'json',
			success:function(m){
				//$("#test").html(m);return;
				var ml=m['tz'].length;
				var str='';
				$(".flytb tr").each(function(i){
				   if(!$(this).hasClass('bt')) $(this).remove();
				});

				for(i=0;i<ml;i++){
				    str += "<tr>";
					str += "<td>"+m['tz'][i]['qishu']+"</td>";
					str += "<td>"+m['tz'][i]['tid']+"</td>";
					str += "<td>"+m['tz'][i]['xtype']+"</td>";
					str += "<td>"+m['tz'][i]['bid']+"-"+m['tz'][i]['cid']+"-"+m['tz'][i]['pid']+"</td>";
	
					str += "<td>"+m['tz'][i]['abcd']+"</td>";				
					
					str += "<td>"+m['tz'][i]['ab']+"</td>";
					str += "<td>"+m['tz'][i]['con']+"</td>";
					str += "<td><label>"+m['tz'][i]['je']+"</td>";
					str += "<td>"+m['tz'][i]['peilv1']+"</td>";
					str += "<td>"+m['tz'][i]['points']+"</td>";
					str += "<td>"+m['tz'][i]['user']+"</td>";
					str += "<td>"+m['tz'][i]['xtime']+"</td>";
					if(m['tz'][i]['bz']=='auto'){
					     str += "<td>自动</td>";
					}else{
					     str += "<td>手动</td>";
					}
					str += "</tr>";
				}

				$(".flytb").prepend("<tr><td><a href='javascript:void(0);' class='close'>关闭</a></td><td colspan=12></td></tr>");
				$(".flytb").append(str);
				//alert($(".flytb").html());
                //$("#test").html(m['sql'])  

				$(".flytb .close").click(function(){
				    $(".flytb").hide();
				});
				str=null;
				m=null;
			}
		});
	});
}

function bofang(){

    
    if(document.frames){	   
	   document.all["sfrm"].src=globalpath+"js/alarm.html";

	}else{		
	   document.getElementById("sfrm").contentWindow.location.href=globalpath+"js/alarm.html";	   
	}
	//alert(1);
}

function getatt(){
   var abcd=$("#abcd").val();
   //if(abcd==undefined) abcd=$("input[name='abcd']");
   var ab = $("#ab").val();
   $.ajax({
      type:'POST',
	  url:mulu + 'lib.php',
	  data:'xtype=getatt&abcd='+abcd+"&ab="+ab,
	  dataType:'json',
	  cache:false,
	  success:function(m){
		  //alert(m);
		  //$("#test").html(m);clearTimeout(gatt);gatt = setTimeout(getatt,3000);return;
	      var ml=m.length;
		  if(ml>=1){
			  bofang();
		  }
		  var i=0;
		  for(;i<ml;i++){
		     $("tr.p"+m[i]['pid']).find("label.peilv1").html(m[i]['peilv1']);
			 //$("tr.p"+m[i]['pid']).find("label.mepeilv1").html(m[i]['mepeilv1']);
			 $("tr.p"+m[i]['pid']).find("td:first").removeClass('byellow');
			 $("tr.p"+m[i]['pid']).find("td:first").addClass('byellow');			 
		  } 
		  if(i!=0){
		      setTimeout(function(){$('td.byellow').removeClass('byellow')},10000);
		  }
			clearTimeout(gatt);
		    gatt = setTimeout(getatt,3000);
	  }
   });
}



function getnow(){
	var puserid=$("#userid").val();
	var qishu=$("#qishu").val();
	$.ajax({
	    type:'POST',
		url:mulu + 'lib.php',
		dataType:'json',
		cache: false,
		data:'xtype=getnow&userid='+puserid+"&qishu="+qishu,
		success:function(m){
		    //$("#test").html(m);return;
			var ml=m.length;
			var jezc=0;
			var je=0;
			var flyje=0;
			for(i=0;i<ml;i++){
				$(".now .nx"+m[i]['bid']).html("<label>"+getResult(Number(m[i]['zjezc'])-Number(m[i]['flyje']),1)+"</label>/"+m[i]['zje']+"/"+m[i]['zs']+"/<label>"+Number(m[i]['flyje'])+"</label>");
				jezc += Number(m[i]['zjezc']);
				je += Number(m[i]['zje']);
				flyje += Number(m[i]['flyje']);
			}
			$(".now label.zc").html(getResult(jezc,1));
			$(".now label.zong").html(getResult(je,1));
			$(".now label.fly").html(getResult(flyje,1));
			$(".now label").addClass('red');
		    clearTimeout(gnow);
		    gnow = setTimeout(getnow,5000);
		}
	});
	
}

function time(){
    rtime--;	
	if(rtime==0){
		clearTimeout(r);
	    lib();
		rtime = Number($("#reloadtime").val());
	}
	$("label.time").html(rtime);
	var r = setTimeout(time,1000);
}

function selectma(val){

}




function liba(){	
    var bid = $(".now .bover").attr("cid");
	var cid = $(".ztnow .bover").attr('cid');
    $(".lib").removeClass('w1002');
	var abcd = $("#abcd").val();
	var ab = $("#ab").val();
	if($("#huama").prop("checked")==true){
	    var huama=1;
	}else{
	    var huama=0;
	}
	var qishu = $("#qishu").val();
	var goods = $("#goods").val();
	var xsort=$("#xsort").val();
	var maxksval = $("#maxksvalue").val();
	var setks = $("#setks").val();
	var sstr = "&bid="+bid+"&abcd="+abcd+"&ab="+ab+"&huama="+huama+"&goods="+goods+"&qishu="+qishu+"&xsort="+xsort;
	sstr += "&maxksval="+maxksval+"&setks="+setks+"&cid="+cid;
	//alert(xsort);
	var puserid=$("#userid").val();
    $.ajax({
		type:'POST',
		url:mulu + 'lib.php',
		cache: false,
	    dataType:'json',
		data:'xtype=getlib'+sstr+"&userid="+puserid,
		success:function(m){
			//$("#test").html(m);return;
		    var ml= m.length;
			if(ml-48>10){
			    var doublemian=4;
			}else{
			    var doublemian=1;
			}
			var str="<tr><TD valign=top><table class='tinfo wd100'>";
			for(i=0;i<ml;i++){
				 //if(i>48) continue;
				 
			     if((i%13==0 & i!=0 & i<=48) | ((i-49)%doublemian==0 & i>49  )){
			         str += "</table></td><td valign='top'><table class='tinfo wd100'>";
				 }
			     if(i==49){
			         str += "</table></td></tr><tr><td valign='top'><table class='tinfo wd100'>";
				 }
				 str += "<tr pid='"+m[i]['pid']+"' class='p"+m[i]['pid'];
				 if(m[i]['z']=='1') str += " z1";
				 str += "' maxje='"+m[i]['maxje']+"'>";
				 if(Number(m[i]['ifok'])==0){
					 m[i]['peilv1']='-';
					 m[i]['peilv2']='-';
				 }
				 if(Number(m[i]['name'])%1==0){
				     str += "<th class='f m' mname='"+m[i]['name']+"'><img src='"+globalpath+'imgs/'+m[i]['name']+".gif' /></th>"
				 }else{
				     str += "<th class='f m' mname='"+m[i]['name']+"'>"+m[i]['name']+"</th>";
				 }
				 str += "<td class='s'><label class='peilv1'>"+m[i]['peilv1']+"</label><input type='text' value='"+m[i]['peilv1']+"' class='small hide p1' /></td>";
				 str += "<td class='t' title='"+m[i]['zs']+"' ><label class='zcxx zcxx"+m[i]['pid']+"'>"+getResult(Number(m[i]['zc'])-Number(m[i]['fly']),1)+"</label>/"+m[i]['zc']+"</td>";
				 str += "<td class='fo ";
				 if(Number(m[i]['ks'])>0) str += "red";
				 else if(Number(m[i]['ks'])<0) str += "lv";
				 str += "'>"+getResult(Number(m[i]['ks']),1)+"</td>";
				 str += "<td class='fi'><label class='flyxx'>"+m[i]['fly']+"</label>/<a href='javascript:void(0)' ifok='"+m[i]['ifok']+"' bje='"+getResult(m[i]['bu'],0)+"' class='bu";
				 if(Number(m[i]['bu'])) str += " byellow";
				 str += "'>"+getResult(m[i]['bu'],0)+"</a></td>";
				 str += "</tr>";
			}
			str += "</table></td></tr>";
			$(".lib").html(libastr+str);
			//$(".tests").val(str);
			$(".lib td").attr("valign",'top');
			str = null;
			m=null;
			addfunc();
			xxclick(1);
			flyclick();
			clearTimeout(gatt);
		    gatt = setTimeout(getatt,3000);
		}
	});
}

function addfunc(){
   $("tr.z1").find("td").addClass('z1');
   $("tr.z3").find("td").addClass('z3');
   $("tr.z1").find("th").addClass('z1');
   $("tr.z3").find("th").addClass('z3');
   $("#setks").val('0');
   $(".lib label").addClass("red");
   $(".peilv1").parent().parent().mouseover(function(){
       $(this).addClass('bover');
   }).mouseout(function(){
       $(this).removeClass('bover');
   });
   
   $(".lib a.bu").click(function(){
	   if($("#fly").val()==undefined) return false;		
	   if($(this).attr('ifok')=='0') return false;
       var posi = $(this).position();
	   $(".butb").css("left",posi.left-$(".butb").width()+$(this).width());
	   $(".butb").css("top",posi.top+$(this).height());
	   $(".butb").show();
	   $(".butb label:eq(0)").html($(this).parent().parent().find("th").html());
	   $(".butb label:eq(0)").attr("pid",$(this).parent().parent().attr('pid'));
	   
	   var peilv1 = $(this).parent().parent().find("label.peilv1").html();
	   $(".butb label:eq(1)").html(peilv1);
	   $(".butb .bupeilv1").val(peilv1);
	   
	   var peilv2 = $(this).parent().parent().find("label.peilv2").html();
	   if(peilv2!=undefined){
	        $(".butb label:eq(2)").html(peilv2);
			$(".butb .bupeilv2").val(peilv2);
	   }else{
	        $(".butb label:eq(2)").html(0);
			$(".butb .bupeilv2").val(0);
	   }
	   $(".butb .buje").val($(this).attr('bje'));
	   var bname = $(".now th.bred").html();
	   if(bname=='正特'){
		   $(".butb td:eq(0)").html(bname+"-"+$("#ab option:selected").html());
	   }else{
	       $(".butb td:eq(0)").html(bname);
	   }
	   
	   if(Number($(".butb .fly").val())==1){
	             $(".butb .bupeilv1").hide();
		         $(".butb .bupeilv2").hide();
				 $(".butb .bupoints").parent().parent().hide();
	             $(".butb .bupeilv1").parent().find("label").show();
		         $(".butb .bupeilv2").parent().find("label").show();
	   }else{
	             $(".butb .bupeilv1").show();
		         $(".butb .bupeilv2").show();
				 $(".butb .bupoints").parent().parent().show();
	             $(".butb .bupeilv1").parent().find("label").hide();
		         $(".butb .bupeilv2").parent().find("label").hide();
	  }
	   
	   var maxje= Number($(this).parent().parent().attr("maxje"));
	   $(".butb .sendbu").unbind('click');
	   $(".butb .sendbu").click(function(){
	       sendbu(maxje);
	   });
   });
   $(".lib label.peilv1").click(function(){$(this).parent().parent().find("a.bu").click()});
}

function sendbu(maxje){
   var je = $(".butb .buje").val();
   var con = $(".butb td:eq(6)").html();
   var pid = $(".butb label:eq(0)").attr('pid');
   if((Number(je)*10)%1!=0 | Number(je)==0){
      alert("请输入正确的补仓金额");
	  return false;
   }
   if(Number(je)>maxje){
      alert("您的最大单注限额是："+maxje);
	  return false;
   }
   var abcd=$("#abcd").val();
   var ab=$("#ab").val();
   var bupeilv1 = $(".butb .bupeilv1").val();
   var bupeilv2 = $(".butb .bupeilv2").val();
   var bupoints = $(".butb .bupoints").val();
   var fly = $(".butb .fly").val();
   $(".butb input:button").attr("disabled",true);
   $.ajax({
      type:'POST',
	  url:mulu + 'lib.php',
	  dataType:'json',
	  cache: false,	  
	  data:'xtype=bucang&je='+je+"&pid="+pid+"&ab="+ab+"&abcd="+abcd+"&con="+con+"&bupeilv1="+bupeilv1+"&bupeilv2="+bupeilv2+"&bupoints="+bupoints+"&fly="+fly,
	  success:function(m){
		  $(".butb input:button").attr("disabled",false);
		  //$("#test").html(m);
		  //alert(Number(m[0]['cg']));
		  if(Number(m[0]['cg'])==1){
		      $(".butb").hide();
			  alert("补货成功!");
			  lib();
		  }else{
		      alert(m[0]['err']);
		  }
	  }
   });
}

function libb(){
	var bid = $(".now .bover").attr("cid");
	var abcd = $("#abcd").val();
	var ab = $("#ab").val();
	var qishu = $("#qishu").val();
	var goods = $("#goods").val();
	//alert(bid);
	var xsort=$("#xsort").val();
	var puserid=$("#userid").val();
	var setks = $("#setks").val();
	
	var sstr = "&bid="+bid+"&abcd="+abcd+"&ab="+ab+"&goods="+goods+"&qishu="+qishu+"&xsort="+xsort+"&userid="+puserid;
	var maxksval = $("#maxksvalue").val();
	sstr += "&maxksval="+maxksval+"&setks="+setks;
    $.ajax({
		type:'POST',
		url:mulu + 'lib.php',
	    dataType:'json',
		cache: false,
		data:'xtype=getlibb'+sstr,
		success:function(m){
			//$("#test").html(m);return;
		    var ml= m.length;
			var str='';
			for(i=0;i<ml;i++){				 
				 str += "<tr pid='"+m[i]['pid']+"' class='p"+m[i]['pid'];
				 if(m[i]['z']=='1') str += " z1";
				 str += "' maxje='"+m[i]['maxje']+"'>";
				 if(Number(m[i]['ifok'])==0){
					 m[i]['peilv1']='-';
					 m[i]['peilv2']='-';
				 }
				 str += "<th class='m' mname='"+m[i]['name']+"'>"+m[i]['name']+"</th>";
				 str += "<td class='pl'><label class='peilv1'>"+m[i]['peilv1']+"</label><input type='text' value='"+m[i]['peilv1']+"' class='small hide p1' /></td>";
				 str += "<td class='zs'>"+m[i]['zs']+"</td>";
				 str += "<td class='ztz'>"+m[i]['zje']+"</td>";
				 str += "<td class='zc'><label class='zcxx'>"+m[i]['zc']+"</label></td>";
				 str += "<td class='ks";
				 var nks = Number(m[i]['ks']);
				 if(nks<0){
				     str += " lv";
				 }else if(nks>0){
				     str += " red";
				 }
				 str += "'>"+getResult(nks,2)+"</td>";
				 str += "<td class='zf'><label class='flyxx'>"+m[i]['fly']+"</label></td>";
				 str += "<td class='yb'><a href='javascript:void(0)' ifok='"+m[i]['ifok']+"' bje='"+getResult(m[i]['bu'],0)+"' class='bu";
				 if(Number(m[i]['bu'])) str += " byellow";
				 str += "'>补"+getResult(m[i]['bu'],0)+"</a></td>";
				 str += "</tr>";
			}
			
			$(".lib").html(libbstr+str);
			$(".lib td").attr("valign",'top');
			str = null;
			m=null;
			$(".lib").removeClass('w1330');
			$(".lib").addClass('w1002');
			addfunc();
			xxclick(1);
			flyclick();
			clearTimeout(gatt);
		    gatt = setTimeout(getatt,3000);
		}
	});
}

function libc(){
	var bid = $(".now .bover").attr("cid");
	var abcd = $("#abcd").val();
	var ab = $("#ab").val();
	var qishu = $("#qishu").val();
	var goods = $("#goods").val();
	//alert(bid);
	var puserid=$("#userid").val();
	var ssetks = $("#setks").val();
	var sstr = "&bid="+bid+"&abcd="+abcd+"&ab="+ab+"&goods="+goods+"&qishu="+qishu+"&xsort="+xsort+"&userid="+puserid;
	var maxksval = $("#maxksvalue").val();
	sstr += "&maxksval="+maxksval+"&setks="+setks;
    $.ajax({
		type:'POST',
		url:mulu + 'lib.php',
	    dataType:'json',
		cache: false,
		data:'xtype=getlibc'+sstr,
		success:function(m){
			//$("#test").html(m);return;
		    var ml= m.length;
			var str='';
			var xpid = $(".lib th.bo").parent().attr('pid');
			var str="<tr><TD valign=top align=left><table class='tinfo wd100'  style='height:60px'>";
			for(i=0;i<ml;i++){
			     if((i+1)%1==0 & i!=0){
			         str += "</table></td><td valign='top'><table class='tinfo w200' style='height:60px'>";
				 }
				 str += "<tr pid='"+m[i]['pid']+"' maxje='"+m[i]['maxje']+"' ifok='"+m[i]['ifok']+"'>";
				 str += "<th class='m one' mname='"+m[i]['name']+"'>"+m[i]['name']+"</th>";
				 if(Number(m[i]['ifok'])==0){
					 m[i]['peilv1']='-';
					 m[i]['peilv2']='-';
				 }
				 if(m[i]['name']=='三中二'){
				     str += "<td class='pl two ext'><span>中二：</span><label class='peilv1'>"+m[i]['peilv1']+"</label><input type='text' value='"+m[i]['peilv1']+"' class='small hide p1' /><Br /><span>中三：</span><label class='peilv2'>"+m[i]['peilv2']+"</label><input type='text' value='"+m[i]['peilv2']+"' class='small hide p2' /></td>";
				 }else if(m[i]['name']=='二中特'){
				     str += "<td class='pl two ext'><span>中二：</span><label class='peilv1'>"+m[i]['peilv1']+"</label><input type='text' value='"+m[i]['peilv1']+"' class='small hide p1' /><Br /><span>中特：</span><label class='peilv2'>"+m[i]['peilv2']+"</label><input type='text' value='"+m[i]['peilv2']+"' class='small hide p2' /></td>";
				 }else{
				     str += "<td class='pl two ext'><label class='peilv1'>"+m[i]['peilv1']+"</label><input type='text' value='"+m[i]['peilv1']+"' class='small hide p1' /></td>";
				 }
				 str += "<th class='three'><label>"+m[i]['zc']+"</label><BR />"+m[i]['zje']+"<BR />"+m[i]['zs']+"</th>";
				 str += "</tr>";
			}
			str += "</table></td></tr>";
			$(".lib").html(str);
			$(".lib td").attr("valign",'top');
			str = null;
			m=null;

			addfunc();
			if(xpid!=undefined){
			    $(".lib tr").each(function(){
				    if($(this).attr('pid')==xpid){
					   $(this).find("th:eq(0)").addClass('bo');
					}
				});
			}else{
			    $(".peilv1:first").parent().parent().find("th:eq(0)").addClass("bo");
			}
			getlibs();
			$(".peilv1").each(function(){
		        $(this).parent().parent().find("th:eq(1)").click(function(){
			         $(".lib .bo").removeClass('bo');
					 $(this).addClass('bo');
					 getlibs();
				});
			});
		}
	});
}


function psizeclick(){
    $(".libs th:eq(0)").find("span").click(function(){
		 $(".libs th:eq(0)").find("span").removeClass('red');
		 $(this).addClass('red');
	     getlibs();
	});
}


function getlibs(){
    var pid = $(".lib .bo").parent().attr('pid');
	var qishu=$("#qishu").val();
	var setks=$("#setks").val();
	var maxksval = $("#maxksvalue").val();
	var page = Number($(".libs .spage").val());
	var psize = $(".libs span.red").html();
	$(".libs").show();
	var ifok=$(".lib .bo").parent().attr('ifok');
	$.ajax({
	    type:'POST',
		url:mulu + 'lib.php',
		dataType:'json',
		cache: false,
		data:'xtype=getlibs&pid='+pid+"&qishu="+qishu+"&setks="+setks+"&maxksval="+maxksval+"&page="+page+"&psize="+psize,
		success:function(m){
			//$("#test").html(m);return;
			var pcount = Number(m['page']);
			
			var str='';
			for(i=1;i<=pcount;i++){
			    str += "<a ";
				if(i==page) str += " class='red' ";
				str += " href='javascript:void(0);'>"+i+"</a>";
			}
			$(".libs th:eq(1)").html(str);
			$(".libs th:eq(1)").find('a').click(function(){
			     $(".libs .spage").val($(this).html());
			     getlibs();
			});
			
			
			var ml = m['tz'].length;
			$(".libs tr").each(function(i){
			   if(i>1) $(this).remove();
			});
			
			var str='';
			for(i=0;i<ml;i++){
			   str += "<tr pid='"+pid+"' ";
			  if(m['tz'][i]['z']=='1') str += " class='z1' ";
			   else if(m['tz'][i]['z']=='3') str += " class='z3' ";
			   str += " >";
			   str += "<td>"+m['tz'][i]['qishu']+"</td>";
			   str += "<td>"+m['tz'][i]['name']+"</td>";
			   str += "<td class='con'>"+m['tz'][i]['con']+"</td>";
			   /*str += "<td>"+getResult(Number(m['tz'][i]['peilv1']),2);
			   if(m['tz'][i]['name'].indexOf("二中特")!=-1 | m['tz'][i]['name'].indexOf("三中二")!=-1) str += "/"+m['tz'][i]['peilv2'];
			   str += "</td>";*/
			   str += "<td>"+m['tz'][i]['zs']+"</td>";
			   str += "<td>"+m['tz'][i]['zje']+"</td>";
			   str += "<td><label class='zcxx red' >"+m['tz'][i]['zc']+"</label></td>";
			   str += "<td ";
			   if(Number(m['tz'][i]['ks1'])<0) str += "class='red'";
			   else if(Number(m['tz'][i]['ks1'])>0) str += "class='lv'";
			   str += " >"+getResult(m['tz'][i]['ks1'],2);
			   if(m['tz'][i]['name'].indexOf("二中特")!=-1 | m['tz'][i]['name'].indexOf("三中二")!=-1) str += "/"+getResult(m['tz'][i]['ks2'],2);
			   str += "</td>";
			   str += "<td><label class='flyxx'>"+m['tz'][i]['fly']+"</label></td>";
			   str += "<td><a href='javascript:void(0)' class='bu";
			   if(Number(m['tz'][i]['bu'])) str += " byellow";
			   str += "' bje='"+getResult(m['tz'][i]['bu'],0)+"'>"+getResult(m['tz'][i]['bu'],0)+"</a></td>";
			   str += "</tr>";
			}

			$(".libs").append(str);
			str=null;
			m=null;
			xxclick2();
			flyclick2();
           $(".libs tr").mouseover(function(){
                $(this).addClass('bover');
           }).mouseout(function(){
                $(this).removeClass('bover');
           }).click(function(){
                $(this).toggleClass('bo');
		   });
		   $("tr.z1").find("td").addClass('z1');
           $("tr.z3").find("td").addClass('z3');
           $("tr.z1").find("th").addClass('z1');
           $("tr.z3").find("th").addClass('z3');
		   $(".libs a.bu").click(function(){
			  if($("#fly").val()==undefined) return false;							  
              var posi = $(this).position();
              $(".butb").css("left",posi.left-$(".butb").width()+$(this).width());
              $(".butb").css("top",posi.top+$(this).height());
              $(".butb").show();
			  var pid=$(this).parent().parent().attr('pid');
              $(".butb label:eq(0)").attr("pid",pid);
			  var maxje=10000;
			  $(".lib tr").each(function(){
			     if($(this).attr('pid')==pid){
				    $(".butb label:eq(0)").html($(this).find("th").html());
					var peilv1 = $(this).find("label.peilv1").html();
					$(".butb label:eq(1)").html(peilv1);
					$(".butb .bupeilv1").val(peilv1);
					var peilv2 = $(this).find("label.peilv2").html();
					if(peilv2!=undefined){
					   $(".butb label:eq(2)").html(peilv2);
					   $(".butb .bupeilv2").val(peilv2);
					}else{
					   $(".butb label:eq(2)").html(0);
					   $(".butb .bupeilv2").val(0);
					}
					maxje= Number($(this).attr("maxje"));
				 }
			  });
			  $(".butb .buje").val($(this).html());
              var bname = $(".now th.bred").html();
              $(".butb td:eq(0)").html(bname);
			  $(".butb td:eq(6)").html($(this).parent().parent().find("td:eq(2)").html());
			  
	          if(Number($(".butb .fly").val())==1){
	             $(".butb .bupeilv1").hide();
		         $(".butb .bupeilv2").hide();
				 $(".butb .bupoints").parent().parent().hide();
	             $(".butb .bupeilv1").parent().find("label").show();
		         $(".butb .bupeilv2").parent().find("label").show();
	          }else{
	             $(".butb .bupeilv1").show();
		         $(".butb .bupeilv2").show();
				 $(".butb .bupoints").parent().parent().show();
	             $(".butb .bupeilv1").parent().find("label").hide();
		         $(".butb .bupeilv2").parent().find("label").hide();
	          }
			  $(".butb .sendbu").unbind('click');
              $(".butb .sendbu").click(function(){
	              sendbu(maxje);
              });
		   });
		}
	});
}

function getclass(fid,cname){	
    $.ajax({
	   type:'POST',
	   url:mulu + 'lib.php',
	   dataType:'json',
	   data:'xtype=getclass&fid='+fid,
	   cache: false,
	   success:function(m){
		   var ml=m.length;
		   $("#ab").empty();
		   for(i=0;i<ml;i++){
		       str = "<option value='"+m[i]['cid']+"'>"+m[i]['name']+"</option>";
			   $("#ab").append(str);
		   }
		   if(Number(fid)==23378688){
		      var cid=$(".ztnow td.bover").attr('cid');
			  $("#ab").val(cid);
		   }
		   str=null;
		   m=null;
           lib();
	   }
	});
}

function getztnow(){
	var puserid=$("#userid").val();
	var qishu=$("#qishu").val();
	$.ajax({
	    type:'POST',
		url:mulu + 'lib.php',
		dataType:'json',
		cache: false,
		data:'xtype=getztnow&userid='+puserid+"&qishu="+qishu,
		success:function(m){
			//$("#test").html(m);
		    var ml=m.length;
			var jezc=0;
			var je=0;
			var flyje=0;
			for(i=0;i<ml;i++){
				$(".ztnow td.zt"+m[i]['bid']).html("<label>"+getResult(Number(m[i]['zjezc'])-Number(m[i]['flyje']),1)+"</label>/"+m[i]['zje']+"/"+m[i]['zs']+"/<label>"+Number(m[i]['flyje'])+"</label>");
			}
			$(".ztnow label").addClass('red');
		}
	});
}


function lib(){
	$(".libs").hide();
    var cname = $(".now .bred").html();
	$(".ztnow").hide();
	if(cname.indexOf("特碼")!=-1 | cname.indexOf("正")!=-1){	     
		 $("span.ks").html("亏损");
		 $("#maxksvalue").val($("#maxksvalue").attr('tm'));
		 rtime=Number($("#reloadtime").val());
		 if(cname=="正特"){
		     $(".ztnow").show();
			 var cid=$(".ztnow td.bover").attr('cid');
			 $(".ztnow td").removeClass('bover');
			 $(".ztnow th").removeClass('bred');
			 $(".ztnow td.zt"+cid).addClass('bover');
			 $(".ztnow th.zt"+cid).addClass('bred');
			 getztnow();
		 }
		 liba();
    }else if(cname=="特肖" | cname=="一肖" | cname=="一尾" | cname=="半波" | cname=="五行" ){	     
		 $("span.ks").html("吃码");
		 $("#maxksvalue").val($("#maxksvalue").attr('other'));
		 rtime=Number($("#reloadtime").val());
		 libb();
	}else{	     
		 $("span.ks").html("吃码");
		 $("#maxksvalue").val($("#maxksvalue").attr('other'));
		 rtime=Number($("#reloadtime").val());
		 libc();
	}
}

function in_array(v,a){
      for(key in a){
         if(a[key]==v) return true
      }
      return false
}



function json_encode_js(aaa){
        function je(str){
                var a=[],i=0;
                var pcs="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                for (;i<str.length;i++){
                        if(pcs.indexOf(str[i]) == -1)
                                a[i]="\\u"+("0000"+str.charCodeAt(i).toString(16)).slice(-4);
                        else
                                a[i]=str[i];
                }
                return a.join("");
        }
        var i,s,a,aa=[];
        if(typeof(aaa)!="object") {alert("ERROR json");return;}
        for(i in aaa){
                s=aaa[i];
                a='"'+je(i)+'":';
                if(typeof(s)=='object'){
                        a+=json_encode_js(s);
                }else{
                        if(typeof(s)=='string')
                                a+='"'+je(s)+'"';
                        else if(typeof(s)=='number')
                                a+=s;
                }
                aa[aa.length]=a;
        }
        return "{"+aa.join(",")+"}";
}

//四舍五入到num后面的n位
function getResult(num,n){
  return Math.round(num*Math.pow(10,n))/Math.pow(10,n);
}
//截取n位
function getresult(num,n){
  return num.toString().replace(new RegExp("^(\\-?\\d*\\.?\\d{0,"+n+"})(\\d*)$"),"$1")+0;
}

// 注:对本函数来说,1个汉字代表2单位长度;
function strlen(sString){
    var sStr,iCount,i,strTemp ; 
    iCount = 0 ;
    sStr = sString.split("");
    for (i = 0 ; i < sStr.length ; i ++){
        strTemp = escape(sStr[i]); 
        if (strTemp.indexOf("%u",0) == -1) // 表示是汉字
		{ 
            iCount = iCount + 1 ;
        } 
        else 
        {
            iCount = iCount + 2 ;
        } 
    }
    return iCount ;
}
function rhtml(str){
   return str.match(/<a\b[^>]*>[\s\S]*?<\/a>/ig);
}