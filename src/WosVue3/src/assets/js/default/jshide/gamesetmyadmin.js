function myready() {
	changeh(document.documentElement.scrollHeight+500);
	$("label").addClass('red');
	$("select.menu").change(function(){
	   window.location.href= $(this).val();
	});
	$(".send").click(function() {
		var str = '[';
		$(".ifok").each(function(i) {
			if(i>0) str += ',';
			str += '{"gid":'+'"'+$(this).val()+'",';
			if($(this).prop("checked")){
			   str += '"ifok":'+'"1"';
			}else{
			   str += '"ifok":'+'"0"';
			}
			if($(this).parent().parent().find(".ifopen").prop("checked")){
			   str += ',"ifopen":'+'"1"';
			}else{
			   str += ',"ifopen":'+'"0"';
			}
			str += ',"px":'+'"'+$(this).parent().parent().find("input:text").val()+'"}';
		});
		str += ']';
		var pass = prompt("请输入密码:","");
		//alert(str);
		$.ajax({
			type: 'POST',
			url: mulu + 'zshui.php',
			data: 'xtype=setgame&str=' + str+"&pass="+pass,
			success: function(m) {
			 //alert(m);
				if (Number(m) == 1) {
					alert("修改成功");
					window.location.href = window.location.href
				}else if (Number(m) == 2){
					alert("密码不正确");
				}
			}
		})
	})
}