<template>
    <div>
{+if ($fenlei==151 || $tu=='2')+}  
 <thead><tr><th colspan="6" class='table_side'>近期开奖结果</th></tr>

  {+if $tu==2+}
  <tr><td colspan="5">结果={+$ftnum+}&nbsp;&nbsp;&nbsp;<input type='button' class="ftlu" value='番路' /></td></tr>
  <tr class="tit_bg">
                    <td class="">期数</td>
                    <td class="">结果</td>

                    <td class="">番</td>
                    <td class="">单双</td>
                    <td>大小</td>
                </tr>{+/if+}
 </thead>
      
  {+if ($fenlei==151)+}  
  <tbody>
      {+section name=i loop=$kj+}
    <tr class="trhm"><td class='period'>{+$kj[i].qs+}期</td>
    <td class='name'>{+if $kj[i].m1!=''+}<span class='b{+$kj[i].m1+}'>{+$kj[i].m1+}</span>{+/if+}</td>
    <td class='name'>{+if $kj[i].m1!=''+}<span class='b{+$kj[i].m2+}'>{+$kj[i].m2+}</span>{+/if+}</td>
    <td class='name'>{+if $kj[i].m1!=''+}<span class='b{+$kj[i].m3+}'>{+$kj[i].m3+}</span>{+/if+}</td>
    <td class="other">{+$kj[i].m1+$kj[i].m2+$kj[i].m3+}</td>
    <td class="other{+if $kj[i].dx=='大'+} D{+/if+}">{+$kj[i].dx+}</td>
     </tr>
     {+/section+}
     </tbody>
     {+else+}
       <tbody id="FANTResults">
     
      {+section name=i loop=$kj+}
    <tr><td class="ins" >{+$kj[i].qishu|substr:'-3'+}期</td>
      <th>{+$kj[i].z+}</th>
      <th class="ico"><i class="b b{+$kj[i].mft+}">{+$kj[i].mft+}</i></th>
<th class="cnt ds_{+if $kj[i].ftds=='单'+}D{+else+}S{+/if+}">{+$kj[i].ftds+}</th><th class="cnt dx_{+if $kj[i].ftds=='单'+}D{+else+}X{+/if+}">{+$kj[i].ftdx+}</th> 
</tr>
     {+/section+}
    </tbody>
  {+/if+}




       
   {+else+}

     <thead><tr><th colspan="2" class='table_side'>两面长龙排行</th></tr></thead>
     <tbody>    
     <tr style='display:none;'>
     <th colspan="2" class="longrth">
       <input type="radio" name='longfs' class="ra" value="2" />
       无出&nbsp;&nbsp;
       <input type="radio" name='longfs' class="ra"   checked value="1"/>
       连出
      
    </th></tr>
    {+section name=i loop=$buz+}
    {+if ($buz[i].bname!='2字和数' & $buz[i].bname!='3字和数')+}
    <tr class="buz">
      {+if ($buz[i].bname=="冠亚军组合")+}
     <th class="l"><a href='javascript:void(0)' >{+$buz[i].pname+}</a></th>
      {+else+}
     <th class="l"><a href='javascript:void(0)' >{+$buz[i].name+}&nbsp;:&nbsp;{+$buz[i].pname+}</a></th>  
      {+/if+}
     <td class="r"><label>{+$buz[i].qishu+}</label>&nbsp;期</td>
    </tr>
    {+/if+}
    {+/section+}
    {+section name=i loop=$z+}
    {+if ($z[i].bname!='2字和数' & $z[i].bname!='3字和数')+}
    <tr class="zz">
      {+if ($z[i].bname=="冠亚军组合" || $z[i].bname=="总和龙虎")+}
     <th class="l"><a href='javascript:void(0)' >{+$z[i].pname+}</a></th>
      {+else+}
     <th class="l"><a href='javascript:void(0)' >{+$z[i].name+}&nbsp;:&nbsp;{+$z[i].pname+}</a></th>  
      {+/if+}
     <td class="r"><label>{+$z[i].qishu+}</label>
      &nbsp;期</td>
    </tr>
    {+/if+}
    {+/section+}
     </tbody>
    {+/if+}
</div>
</template>