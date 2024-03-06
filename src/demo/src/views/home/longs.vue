<template>
<div>
    <select id="game" name="game">
    {+section name=i loop=$game+}
    <option value="{+$game[i].gid+}" {+if ($game[i].gid==$gid)+}selected{+/if+}>{+$game[i].gname+}</option>
    {+/section+}

    </select>
    {+if $fast==1+}
    日期：<input id="date" value="{+$thisday+}" />
    {+/if+}
    <div id="drawTable" class="contents">
    <table class="list table_ball table">
    <thead><tr><th>期数</th><th>开奖时间</th>
        <th colspan="{+$mnums+}">开出号码</th>
        {+if $fenlei==107+}
        <th colspan="3" class="strong">冠亚军和</th><th colspan="5" class="strong">1～5 龙虎</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>结果={+$ftnum+}</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>番</th></tr>
        {+elseif $fenlei==101+}
        <th colspan="3" class="strong">总和</th><th>龙虎</th><th>前三</th><th>中三</th><th>后三</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>结果={+$ftnum+}</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>番</th></tr>
        {+elseif $fenlei==163+}
        <th colspan="3" class="strong">总和</th><th>前三</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>结果={+$ftnum+}</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>番</th></tr>
        {+elseif $fenlei==103+}
        <th colspan="4" class="strong">总和</th><th colspan="4">1～4 龙虎</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>结果={+$ftnum+}</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>番</th></tr>
        {+elseif $fenlei==121+}
        <th colspan="4" class="strong">总和</th><th>龙虎</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>结果={+$ftnum+}</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>番</th></tr>
        {+elseif $fenlei==161+}
        <th colspan="4" class="strong">总和</th><th colspan="2" class="strong">比数量</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>结果={+$ftnum+}</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>番</th></tr>
        {+elseif $fenlei==151+}
        <th colspan="2" class="strong">总和</th>
        {+elseif $fenlei==100+}
        <th colspan="3" class="strong">总和</th><th colspan="6" class="strong">特码</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>结果={+$ftnum+}</th><th {+if ($ft!=1)+}style='display:none;'{+/if+}>番</th></tr>
        {+/if+}
    </thead>
    <tbody>
    {+section name=i loop=$list+}
    <tr>
    <td class="period">{+$list[i].qishu+}</td>
    <td class="drawTime">{+$list[i].time+}</td>
    {+foreach item=k from=$list[i].ma+}
    <td class="name ballname">{+if $k!=''+}<span class="b{+$k|substr:0:2+}">{+$k|substr:0:2+}</span>{+if ($fenlei==100)+}<label class="sxs">{+$k|substr:3+}</label>{+/if+}{+/if+}</td>
    {+/foreach+}
    {+foreach item=n from=$list[i].m+}
     <td class="other
       {+if ($n=='和')+}
         he
       {+elseif ($n=="大"  | $n=="合单" | $n=="尾大"  | $n=="家"   | $n=="单(多)" | $n=="前(多)" | $n=="龙"  | $n=="单")+}
         g1
         {+elseif ($n=="小"  | $n=="合双" | $n=="尾小"  | $n=="野"   | $n=="双(多)" | $n=="后(多)"  | $n=="虎"  | $n=="双")+}
         g2
         {+elseif ( $n=="单双(和)" |  $n=="前后(和)")+}
         g3
         {+elseif ( $n=="豹子" |  $n=="顺子" | $n=="对子" |  $n=="半顺" |  $n=="杂六")+}
          others
       {+/if+}">{+$n+}</td>
    {+/foreach+}
    </tr>
    {+/section+}
    </tbody></table>
    </div>
    </div>
</div>
</template>
<!-- <script language="javascript" src="@/assets/lhc/js/jquery-1.8.3.min.js"></script> -->
<script language="javascript" src="@/assets/lhc/js/public.js"></script>
<script language="javascript" src="@/assets/lhc/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="@/assets/lhc/js/jquery.ui.datepicker-zh-CN.js"></script>
<script id=myjs language="javascript">var mulu='{+$mulu+}';var js=1;var sss='longs';</script>
<script language="javascript" >
// var fenlei={+$fenlei+};
// var ngid = {+$gid+};
</script>

<link rel="stylesheet" type="text/css" href="@/assets/lhc/css/default/table.css" />
<link rel="stylesheet" type="text/css" href="@/assets/lhc/css/index/lhc.css"/>
<link rel="stylesheet" type="text/css" href="@/assets/lhc/css/default/jquery-ui.css" />
<!-- {+if ($gid==101)+}
<link href="../../order/css/default/hlsx.css" rel="stylesheet" type="text/css">
{+elseif ($nc==1)+}
<link href="../../order/css/default/135.css" rel="stylesheet" type="text/css">
{+else+}
<link href="../../order/css/default/{+$fenlei+}.css" rel="stylesheet" type="text/css">
{+/if+} -->
<style src="@/assets/lhc/css/index/lhc.scss" lang="scss"></style>
<style type="scss" scoped>
    .list td.he{color:blue !important;}
    .list td.g1{color:red !important}
    .list td.g2{color:black;}
    .list td.g3{color:blue !important}
    label.sxs{background: none !important;color: #000 !important;font-size:13px !important;}
</style>