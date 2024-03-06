#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
# sh /www/wwwroot/sidan/sgwin/shell/kj.sh
#彩种开奖进程监控
worker(){
  num=$(ps -ef |grep 'kjs_'$1'.php' | wc -l)

  echo $num
  if [ $num -eq 1 ];then
  commend_2="/www/server/php/80/bin/php "$(dirname "$0")"/../tools/kjs/kjs_$1.php"
  $commend_2 >/dev/null 2>&1 &
  echo "$commend_2 >/dev/null 2>&1 &"
fi
}
#====================================
# 调用函数 验证开启彩种开奖进程
worker 100
worker 108
worker 109
worker 170
worker 172
worker 175
worker 177
worker 191
worker 200
worker 300
worker 350
worker 602
#===================================


#矫正额度进程监控
#开启进程数量
jz_num=1    # 本地调试数据
#jz_num=10  # 生成数据
#获取当前已启用进程
current_jz_num=$(expr $(ps -ef |grep 'jz_working.php' | wc -l) - 1)
echo "current_jz_num:"$current_jz_num
#开启进程命令
commend1="/www/server/php/80/bin/php "$(dirname "$0")"/../tools/kjs/jz_working.php"
#计算需要开启的进程
add_jz_num=`expr $jz_num - $current_jz_num + 1`
#循环启动进程
if [ $add_jz_num>0 ];then
  for((i=0;i<$add_jz_num;i++))
  do
    $commend1 >/dev/null 2>&1 &
    echo "$commend1 >/dev/null 2>&1 &"
  done
fi

