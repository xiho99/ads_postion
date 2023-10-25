<template>
  <div class="bg-[#F0F0F0] h-full">
    <div class="max-w-[800px] mx-auto py-6 flex justify-center">
      <div></div>
      <div>
        <div class="title text-xl font-bold">
          <h2>自主收录</h2>
        </div>
      </div>
      <div></div>
    </div>
    <div class="bg-white w-[700px] rounded-[10px] p-[20px] mx-auto relative">
      <div class="box border-[1px] border-[#fff]">
        <div
          class="add_tips p-6 pb-[60px] list-none border-[1px] border-[#FF8080] bg-[#fdf8f8] rounded-[10px]"
        >
            <li>名称：<b style="color: #f00">色色研究所</b></li>
            <li>地址：<b style="color: #33f">提交后可得</b></li>
            <li>
              飞机：<b style="color: #000; font-size: 15px"
                >@FLB_XX &nbsp;&nbsp;（更换链接，位置）</b
              >
            </li>
            <li>1 请添加前三位置。</li>
            <li>
              2 本站完全按照来路排序，每日24：00
              更新一次，不足将放于底部观察区，来路足够恢复到栏目（20IP）。
            </li>
            <li>
              3 查询关键词 <b>sssuo</b>（谷歌统计不全，建议使用其他统计如：
              <a
                href="https://matomo.org/"
                target="_blank"
                style="font-weight: 900; color: #f00"
                >Matomo</a
              >
              &nbsp;&nbsp;&nbsp;
              <a
                href="https://statcounter.com/"
                target="_blank"
                style="font-weight: 900; color: #222"
                >Statcounter</a
              >
              ）。
            </li>
            <li>
              4 审核时间
              <b style="color: #f00">1-3天</b>，若长时间未审核，请联系客服。
            </li>
            <li style="position: relative">
              5 logo：<img src="https://www.sssuo1.xyz/favicon.ico" />
            </li>
        </div>
      </div>
     <div>
        <div class="text-[#444] text-xl indent-4 py-3 font-bold">
            <h2>第一步 录入信息</h2>
        </div>
        <form action="#">
            <div class="flex justify-between gap-2 w-full items-center">
                <div class="flex w-[80px]">
                    <label class="text-lg pr-1" for="">名称 </label>
                    <span class="text-[#f00] font-bold text-lg">*</span>
                </div>
                <input type="text" placeholder="如 汽车之家" class="w-full indent-5 rounded-lg h-[40px] border-[2px] border-[#999]">
            </div>
            <div class="flex justify-between gap-2 w-full items-center py-4">
                <div class="flex w-[80px]">
                    <label class="text-lg pr-1" for="">类型 </label>
                    <span class="text-[#f00] font-bold text-lg">*</span>
                </div>
                
                <select name="" id="" class=" w-full indent-5 rounded-lg h-[40px] border-[2px] border-[#999]">
                        <option value="">在线视频</option>
                        <option value="">福利导航</option>
                        <option value="">萝莉の二次元</option>
                        <option value="">心跳小说</option>
                        <option value="">激情美图</option>
                        <option value="">实用工具</option>
                </select>
            </div>
        </form>
     </div> 
    </div>
  </div>
</template>
<script></script>
<style scoped>
    .add_tips li {
    line-height: 36px;
}
.add_tips li img {
    border-radius: 6px;
    position: absolute;
    top: 5px;
    left: 56px;
}
</style>
