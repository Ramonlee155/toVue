<template>
<table class="tinfo longltb">
      {+if ($fenlei==101)+}
       <tr class="bt">
        <th>期数</th>
        <th>万</th>
        <th>千</th>
        <th>百</th>
        <th>十</th>
        <th>个</th>
       </tr>
       {+section name=i loop=$kj +}
       <tr class="trhm" qs='{+$kj[i].qishu+}'>
        <td  class="{+$co[0]+}" >{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1+}</td>
        <td  >{+$kj[i].m2+}</td>
        <td  >{+$kj[i].m3+}</td>
        <td  >{+$kj[i].m4+}</td>
        <td  >{+$kj[i].m5+}</td>
       </tr>
       <tr class="trds hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1ds+}</td>
        <td  >{+$kj[i].m2ds+}</td>
        <td  >{+$kj[i].m3ds+}</td>
        <td  >{+$kj[i].m4ds+}</td>
        <td  >{+$kj[i].m5ds+}</td>
       </tr>
       <tr class="trdx hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1dx+}</td>
        <td  >{+$kj[i].m2dx+}</td>
        <td  >{+$kj[i].m3dx+}</td>
        <td  >{+$kj[i].m4dx+}</td>
        <td  >{+$kj[i].m5dx+}</td>
       </tr>
       <tr class="trzh hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1zh+}</td>
        <td  >{+$kj[i].m2zh+}</td>
        <td  >{+$kj[i].m3zh+}</td>
        <td  >{+$kj[i].m4zh+}</td>
        <td  >{+$kj[i].m5zh+}</td>
       </tr>
       {+/section+}
      {+elseif ($fenlei==163)+}
       <tr class="bt">
        <th>期数</th>
        <th>百</th>
        <th>十</th>
        <th>个</th>
        <th colspan="3">总和</th>
       </tr>
       {+section name=i loop=$kj +}
       <tr class="trhm" qs='{+$kj[i].qishu+}'>
        <td  class="{+$co[0]+}" >{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1+}</td>
        <td  >{+$kj[i].m2+}</td>
        <td  >{+$kj[i].m3+}</td>
        <td  class='chu red'>{+$kj[i].zf+}</td>
        <td  >{+$kj[i].zfds+}</td>
        <td  >{+$kj[i].zfdx+}</td>
       </tr>
       <tr class="trds hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1ds+}</td>
        <td  >{+$kj[i].m2ds+}</td>
        <td  >{+$kj[i].m3ds+}</td>
        <td  class='chu red'>{+$kj[i].zf+}</td>
        <td  >{+$kj[i].zfds+}</td>
        <td  >{+$kj[i].zfdx+}</td>
       </tr>
       <tr class="trdx hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1dx+}</td>
        <td  >{+$kj[i].m2dx+}</td>
        <td  >{+$kj[i].m3dx+}</td>
        <td  class='chu red'>{+$kj[i].zf+}</td>
        <td  >{+$kj[i].zfds+}</td>
        <td  >{+$kj[i].zfdx+}</td>
       </tr>
       <tr class="trzh hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1zh+}</td>
        <td  >{+$kj[i].m2zh+}</td>
        <td  >{+$kj[i].m3zh+}</td>
        <td  class='chu red'>{+$kj[i].zf+}</td>
        <td  >{+$kj[i].zfds+}</td>
        <td  >{+$kj[i].zfdx+}</td>
       </tr>
       {+/section+}

       {+elseif ($fenlei==103)+}
       <tr class="bt">
        <th>期数</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
        <th>七</th>
        {+if $gid==103+}<th>八</th>{+else+}<th>特</th>{+/if+}
       </tr>
       {+section name=i loop=$kj +}
       <tr class="trhm"  qs='{+$kj[i].qishu+}'>
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1+}</td>
        <td  >{+$kj[i].m2+}</td>
        <td  >{+$kj[i].m3+}</td>
        <td  >{+$kj[i].m4+}</td>
        <td  >{+$kj[i].m5+}</td>
        <td  >{+$kj[i].m6+}</td>
        <td  >{+$kj[i].m7+}</td>
        <td >{+$kj[i].m8+}</td>
       </tr>
       <tr class="trds hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1ds+}</td>
        <td  >{+$kj[i].m2ds+}</td>
        <td  >{+$kj[i].m3ds+}</td>
        <td  >{+$kj[i].m4ds+}</td>
        <td  >{+$kj[i].m5ds+}</td>
        <td  >{+$kj[i].m6ds+}</td>
        <td  >{+$kj[i].m7ds+}</td>
        <td >{+$kj[i].m8ds+}</td>
       </tr>
       
       <tr class="trdx hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1dx+}</td>
        <td  >{+$kj[i].m2dx+}</td>
        <td  >{+$kj[i].m3dx+}</td>
        <td  >{+$kj[i].m4dx+}</td>
        <td  >{+$kj[i].m5dx+}</td>
        <td  >{+$kj[i].m6dx+}</td>
        <td  >{+$kj[i].m7dx+}</td>
        <td >{+$kj[i].m8dx+}</td>
       </tr>
       <tr class="trhds hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1hds+}</td>
        <td  >{+$kj[i].m2hds+}</td>
        <td  >{+$kj[i].m3hds+}</td>
        <td  >{+$kj[i].m4hds+}</td>
        <td  >{+$kj[i].m5hds+}</td>
        <td  >{+$kj[i].m6hds+}</td>
        <td  >{+$kj[i].m7hds+}</td>
        <td >{+$kj[i].m8hds+}</td>
       </tr>
       <tr class="trwdx hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1wdx+}</td>
        <td  >{+$kj[i].m2wdx+}</td>
        <td  >{+$kj[i].m3wdx+}</td>
        <td  >{+$kj[i].m4wdx+}</td>
        <td  >{+$kj[i].m5wdx+}</td>
        <td  >{+$kj[i].m6wdx+}</td>
        <td  >{+$kj[i].m7wdx+}</td>
        <td >{+$kj[i].m8wdx+}</td>
       </tr>
       <tr class="trfw hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1fw+}</td>
        <td  >{+$kj[i].m2fw+}</td>
        <td  >{+$kj[i].m3fw+}</td>
        <td  >{+$kj[i].m4fw+}</td>
        <td  >{+$kj[i].m5fw+}</td>
        <td  >{+$kj[i].m6fw+}</td>
        <td  >{+$kj[i].m7fw+}</td>
        <td >{+$kj[i].m8fw+}</td>
       </tr>
       
       <tr class="trzfb hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1zfb+}</td>
        <td  >{+$kj[i].m2zfb+}</td>
        <td  >{+$kj[i].m3zfb+}</td>
        <td  >{+$kj[i].m4zfb+}</td>
        <td  >{+$kj[i].m5zfb+}</td>
        <td  >{+$kj[i].m6zfb+}</td>
        <td  >{+$kj[i].m7zfb+}</td>
        <td >{+$kj[i].m8zfb+}</td>
       </tr>
       {+/section+}
       {+elseif ($fenlei==121)+}
       <tr class="bt">
        <th>期数</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
       </tr>
       {+section name=i loop=$kj +}
       <tr class="trhm"  qs='{+$kj[i].qishu+}'>
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1+}</td>
        <td  >{+$kj[i].m2+}</td>
        <td  >{+$kj[i].m3+}</td>
        <td  >{+$kj[i].m4+}</td>
        <td  >{+$kj[i].m5+}</td>
       </tr>
       <tr class="trds hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1ds+}</td>
        <td  >{+$kj[i].m2ds+}</td>
        <td  >{+$kj[i].m3ds+}</td>
        <td  >{+$kj[i].m4ds+}</td>
        <td  >{+$kj[i].m5ds+}</td>
       </tr>
       <tr class="trdx hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1dx+}</td>
        <td  >{+$kj[i].m2dx+}</td>
        <td  >{+$kj[i].m3dx+}</td>
        <td  >{+$kj[i].m4dx+}</td>
        <td  >{+$kj[i].m5dx+}</td>
       </tr>
       {+/section+}
       {+elseif ($fenlei==107)+}
       <tr class="pks bt">
        <th>期数</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
        <th>七</th>
        <th>八</th>
        <th>九</th>
        <th>十</th>
       </tr>
       {+section name=i loop=$kj +}
       <tr class="trhm pkss"  qs='{+$kj[i].qishu+}'>
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  m1={+$kj[i].m1+}>
          <!-- <img src='../img/pk{+$kj[i].m1+}.png' class='imgsmall' /> -->
        </td>
        <td>
          <!-- <img src='../img/pk{+$kj[i].m2+}.png' class='imgsmall' /> -->
        </td>
        <td>
          <!-- <img src='../img/pk{+$kj[i].m3+}.png' class='imgsmall' /> -->
        </td>
        <td>
          <!-- <img src='../img/pk{+$kj[i].m4+}.png' class='imgsmall' /> -->
        </td>
        <td>
          <!-- <img src='../img/pk{+$kj[i].m5+}.png' class='imgsmall' /> -->
        </td>
        <td>
          <!-- <img src='../img/pk{+$kj[i].m6+}.png' class='imgsmall' /> -->
        </td>
        <td>
          <!-- <img src='../img/pk{+$kj[i].m7+}.png' class='imgsmall' /> -->
        </td>
        <td>
          <!-- <img src='../img/pk{+$kj[i].m8+}.png' class='imgsmall' /> -->
        </td>
        <td>
          <!-- <img src='../img/pk{+$kj[i].m9+}.png' class='imgsmall' /> -->
        </td>
        <td>
          <!-- <img src='../img/pk{+$kj[i].m10+}.png' class='imgsmall' /> -->
        </td>
       </tr>
       <tr class="trds hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1ds+}</td>
        <td  >{+$kj[i].m2ds+}</td>
        <td  >{+$kj[i].m3ds+}</td>
        <td  >{+$kj[i].m4ds+}</td>
        <td  >{+$kj[i].m5ds+}</td>
        <td  >{+$kj[i].m6ds+}</td>
        <td  >{+$kj[i].m7ds+}</td>
        <td  >{+$kj[i].m8ds+}</td>
        <td  >{+$kj[i].m9ds+}</td>
        <td  >{+$kj[i].m10ds+}</td>
       </tr>
       <tr class="trdx hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1dx+}</td>
        <td  >{+$kj[i].m2dx+}</td>
        <td  >{+$kj[i].m3dx+}</td>
        <td  >{+$kj[i].m4dx+}</td>
        <td  >{+$kj[i].m5dx+}</td>
        <td  >{+$kj[i].m6dx+}</td>
        <td  >{+$kj[i].m7dx+}</td>
        <td  >{+$kj[i].m8dx+}</td>
        <td  >{+$kj[i].m9dx+}</td>
        <td  >{+$kj[i].m10dx+}</td>
       </tr>
       <tr class="trzh hide">
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  >{+$kj[i].m1zh+}</td>
        <td  >{+$kj[i].m2zh+}</td>
        <td  >{+$kj[i].m3zh+}</td>
        <td  >{+$kj[i].m4zh+}</td>
        <td  >{+$kj[i].m5zh+}</td>
        <td  >{+$kj[i].m6zh+}</td>
        <td  >{+$kj[i].m7zh+}</td>
        <td  >{+$kj[i].m8zh+}</td>
        <td  >{+$kj[i].m9zh+}</td>
        <td  >{+$kj[i].m10zh+}</td>
       </tr>
       {+/section+}
       {+elseif ($fenlei==161)+}
       <tr class="kl8 bt">
        <th>期数</th>
        <th>总分</th>
        <th>总单双</th>
         <th>总大小</th>
         <th>前后和</th>
         <th>单双和</th>
         <th>五行</th>
         </tr>
        {+section name=i loop=$kj +}
          <tr class="trhm" qs='{+$kj[i].qishu+}'>
        <td  class="{+$co[0]+}">{+$kj[i].qs+}</td>
        <td  {+foreach item=c key=k from=$kj[i].m+}m{+$k+1+}='{+$c+}'{+/foreach+}>{+$kj[i].zf+}</td>
        <td  >{+$kj[i].zds+}</td>
         
        <td  >{+$kj[i].zdx+}</td>
        <td  >{+$kj[i].qhh+}</td>
         <td  >{+$kj[i].dsh+}</td>
           <td  >{+$kj[i].wh+}</td>
         </tr>
          {+/section+}
       {+/if+}
      </table>
</template>