<template>
  <div>
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
                <input type="text" placeholder="如 汽车之家" class="w-full bg-[#FAFAFA] indent-5 rounded-lg h-[40px] border-[2px] border-[#999]">
            </div>
            <div class="flex justify-between gap-2 w-full items-center pt-4">
                <div class="flex w-[80px]">
                    <label class="text-lg pr-1" for="">类型 </label>
                    <span class="text-[#f00] font-bold text-lg">*</span>
                </div>                
                <select name="" id="" class=" w-full bg-[#FAFAFA] indent-5 rounded-lg h-[40px] border-[2px] border-[#999]">
                        <option value="">在线视频</option>
                        <option value="">福利导航</option>
                        <option value="">萝莉の二次元</option>
                        <option value="">心跳小说</option>
                        <option value="">激情美图</option>
                        <option value="">实用工具</option>
                </select>
            </div>
            <div class="flex justify-between gap-2 w-full items-center pt-4">
                <div class="flex w-[80px]">
                    <label class="text-lg pr-1" for="">地址</label>
                    <span class="text-[#f00] font-bold text-lg">*</span>
                </div>                
                <select name="" id="" class=" w-[23%] mr-[2%] indent-5 bg-[#FAFAFA] rounded-lg h-[40px] border-[2px] border-[#999]">
                        <option value="">https://</option>
                        <option value="">http://</option>
                </select>
                <input type="text" placeholder="如 www.baidu.com" class="w-[75%] bg-[#FAFAFA] indent-5 rounded-lg h-[40px] border-[2px] border-[#999]">
            </div>
            <div class="flex justify-between gap-2 w-full items-center pt-4">
                <div class="flex w-[80px]">
                    <label class="text-lg pr-1" for="">飞机</label>
                    <span class="text-[#f00] font-bold text-lg">*</span>
                </div>
                <input type="text" placeholder="如 ssgogo" class="w-full bg-[#FAFAFA] indent-5 rounded-lg h-[40px] border-[2px] border-[#999]">
            </div>
            <div class="flex justify-between gap-2 w-full items-start pt-4">
                <div class="flex w-[80px]">
                    <label class="text-lg pr-1" for="">留言</label>
                </div>
                <textarea placeholder="100字以内" name="" id="" class="w-full bg-[#FAFAFA]  indent-5 rounded-lg h-[100px] border-[2px] border-[#999]"></textarea>                
            </div>
            <div class="flex justify-between gap-2 w-full items-center pt-4">
              <div class="flex w-[80px]"></div>
              <input type="submit" value="提交" class="w-full rounded-lg h-[40px] bg-[#ffb000] ">
            </div>
        </form>
        <div class="pt-4">
          <div class="text-[#444] text-xl indent-4 py-3 font-bold">
            <h2 class="">第二步 添加链接</h2>
          </div>
          <div class="result hidden">
            <div class="text-center text-[#32bb05] text-2xl font-bold py-4">
              <h2>提交成功，添加以下链接，点入激活</h2>
            </div>
            <div class="border-[#ff0062] border-[1px] rounded-[6px] bg-[#fff5f5] py-[20px]">
              <div class="flex justify-between items-center px-6 ">
                <p>https://www.sssuo9.com/?from=sex.com</p>
                <span class="cursor-pointer text-[#ff0062]">复制</span>
              </div>
            </div>
          </div>
        </div>
     </div> 
    </div>
    <div >
      <div class="py-6 text-center w-full text-xl font-bold">
        <h2>最新申请</h2>
      </div>
      <div class="bg-white w-[700px] rounded-[10px] p-[20px] mx-auto relative mb-[20px]">
         <div>
          <div class="flex justify-between w-full items-start px-4">
            <div class="flex gap-4">
              <div>
                <img class="w-[60px] h-[60px] rounded-full" src="/favicon.ico" alt="">
              </div>
              <div class="flex flex-col">
                <div class="flex gap-8">
                  <h5>aaaaaa</h5>
                  <i>萝莉の二次元</i>
                </div>
                <div class="flex pt-3 gap-2 text-[#999]">
                  <h5 class="text-[15px] ">链接:</h5>
                  <a class="text-[#f00] font-bold" href="#">http://sex.com</a>
                </div>
                <div class="flex pt-3 gap-2 text-[#999]">
                  <h5 class="text-[15px] ">链接:</h5>
                  <a class="" href="#">dfafdafas</a>
                </div> 
                <div class="flex pt-3 gap-2 text-[#999]">
                  <h5 class="text-[15px] ">链接:</h5>
                  <p class="">@****fasf</p>
                </div> 
                <div class="flex pt-3 gap-2 text-[#999]">
                  <h5 class="text-[15px] ">时间：</h5>
                  <p class="date " >2023-10-26 12:24:28</p>
                </div>  
              </div>                       
            </div>
            <div class="bg-[#6cf] text-[13px] rounded-[13px] px-[10px] py-[4px] ">              
              <p>待激活</p>
            </div>            
          </div>         
         </div>        
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
