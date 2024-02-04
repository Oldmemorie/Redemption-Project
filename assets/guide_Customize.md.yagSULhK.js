import{_ as t,c as e,o as l,V as d}from"./chunks/framework.YR7e4r4B.js";const x=JSON.parse('{"title":"自定义配置开发文档","titleTemplate":"Tritium_docs","description":"","frontmatter":{"title":"自定义配置开发文档","layout":"doc","titleTemplate":"Tritium_docs"},"headers":[],"relativePath":"guide/Customize.md","filePath":"guide/Customize.md","lastUpdated":1706458480000}'),a={name:"guide/Customize.md"},r=d('<h2 id="cuprumturbo-v18-自定义配置开发文档" tabindex="-1">CuprumTurbo V18 自定义配置开发文档 <a class="header-anchor" href="#cuprumturbo-v18-自定义配置开发文档" aria-label="Permalink to &quot;CuprumTurbo V18 自定义配置开发文档&quot;">​</a></h2><p>此项目使用模块化设计, 每个子Json对象对应一个<code>Module</code>, 通过设置各个模块的<code>enable</code>字段可以启用或禁用模块.<br> 当<code>enable</code>字段设置为<code>false</code>时程序将不会继续加载其余参数, 可以删除该子Json对象中的其余字段.</p><h3 id="json信息" tabindex="-1">Json信息 <a class="header-anchor" href="#json信息" aria-label="Permalink to &quot;Json信息&quot;">​</a></h3><p>在这里你可以定义配置文件的名称和作者信息, 请注意不要修改配置文件版本, 此字段将会用于验证调度与该配置是否兼容.</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;">string</td><td style="text-align:left;">配置文件的名称</td></tr><tr><td style="text-align:left;">author</td><td style="text-align:left;">string</td><td style="text-align:left;">配置文件的作者信息</td></tr><tr><td style="text-align:left;">configVersion</td><td style="text-align:left;">int</td><td style="text-align:left;">配置文件版本</td></tr></tbody></table><h3 id="cpugovernor-cpu混合调频器" tabindex="-1">CpuGovernor - CPU混合调频器 <a class="header-anchor" href="#cpugovernor-cpu混合调频器" aria-label="Permalink to &quot;CpuGovernor - CPU混合调频器&quot;">​</a></h3><blockquote><p>此模块通过在各种不同场景下选择合适的CPU频率以改善使用体验.</p></blockquote><h4 id="params-调频器参数" tabindex="-1">params - 调频器参数 <a class="header-anchor" href="#params-调频器参数" aria-label="Permalink to &quot;params - 调频器参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">activeRateHz</td><td style="text-align:left;">int</td><td style="text-align:left;">活跃时工作频率</td></tr><tr><td style="text-align:left;">idleRateHz</td><td style="text-align:left;">int</td><td style="text-align:left;">空闲时工作频率</td></tr><tr><td style="text-align:left;">minFreqStep</td><td style="text-align:left;">int</td><td style="text-align:left;">最小频率差值</td></tr></tbody></table><p>工作频率是CPU混合调频器的重要参数, 通常Linux内核频率为300HZ,即3.33ms记录一次, 活跃时间/总时间*100即为CPU负载百分比.<br> 如果工作频率过高将会导致调频器的开销增加且无法获得有效的CPU负载(例如100HZ时只能获得0% 33% 66% 100%四种负载), 过低将导致调频器无法应对瞬时负载.<br> 最小频率差值为生成CPU频率表的关键参数, 设置得过小将会导致调频速度过慢,过大将会导致调频不够精细.</p><h4 id="policies-策略组" tabindex="-1">policies - 策略组 <a class="header-anchor" href="#policies-策略组" aria-label="Permalink to &quot;policies - 策略组&quot;">​</a></h4><p>此项配置类型为<code>ArrayJson</code>, 即数组中的每个Json元素对应一个策略组.<br> 每个策略组中的CPU频率将会同步控制, 应当与内核中每个cluster中包含的CPU对应.<br> 由于是按照数组的序号来为策略组编号的, 所以策略组的排序应与cluster的排序一致.<br> 例如SDM845为4+4设计, 即<code>policy0: CPU0-3; policy1: CPU4-7</code>.</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">coreNum</td><td style="text-align:left;">int</td><td style="text-align:left;">策略组中包含的CPU核心数量</td></tr><tr><td style="text-align:left;">perfScale</td><td style="text-align:left;">int</td><td style="text-align:left;">CPU相对同频算力值</td></tr><tr><td style="text-align:left;">lowPowerFreq</td><td style="text-align:left;">int</td><td style="text-align:left;">CPU功耗最低频率(单位:MHz)</td></tr><tr><td style="text-align:left;">optimalFreq</td><td style="text-align:left;">int</td><td style="text-align:left;">CPU最优频率(单位:MHz)</td></tr><tr><td style="text-align:left;">modelFreq</td><td style="text-align:left;">int</td><td style="text-align:left;">用于生成CPU功耗模型的CPU频率(单位:MHz)</td></tr><tr><td style="text-align:left;">modelPower</td><td style="text-align:left;">int</td><td style="text-align:left;">处于modelFreq时CPU的满载功耗(单位:mW)</td></tr></tbody></table><p><code>CpuGovernor</code>模块设定中的所有频率都将会被取近似值, 例如CPU频率表中有<code>1200, 1450, 1700</code>三个频率, 设定频率为<code>1500</code>, 最终取值将为<code>1450</code>.</p><h4 id="modes-模式参数" tabindex="-1">modes - 模式参数 <a class="header-anchor" href="#modes-模式参数" aria-label="Permalink to &quot;modes - 模式参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">powerLimit</td><td style="text-align:left;">int</td><td style="text-align:left;">CPU整体功耗限制(单位:mW)</td></tr><tr><td style="text-align:left;">perfMargin</td><td style="text-align:left;">ArrayInt</td><td style="text-align:left;">CPU性能冗余(范围:0-100)</td></tr><tr><td style="text-align:left;">upRateLatency</td><td style="text-align:left;">int</td><td style="text-align:left;">CPU频率提升延迟(单位:ms)</td></tr><tr><td style="text-align:left;">overHeatTemp</td><td style="text-align:left;">int</td><td style="text-align:left;">过热温度(单位:°C)</td></tr><tr><td style="text-align:left;">burstCapacity</td><td style="text-align:left;">int</td><td style="text-align:left;">频率加速容量(单位:W·ms)</td></tr><tr><td style="text-align:left;">recoverTime</td><td style="text-align:left;">int</td><td style="text-align:left;">容量恢复时间(单位:ms)</td></tr></tbody></table><p>CPU整体功耗限制会影响CPU频率上限, 调频器计算的是满载功耗,不会随CPU负载变化而改变.<br><code>perfMargin</code>使用<code>ArrayInt</code>即整数数组方式存储参数, 数组的序号对应策略组编号.<br> CPU频率提升延迟用于降低CPU频率被提升得过高的几率, 每次升频时调频器都会根据频率提升延迟和能耗比变化判定是否需要升频.<br> 过热温度为触发调频器温度控制的阈值, 当CPU温度超过该值时将限制CPU功耗在<code>powerLimit</code>以内并忽略频率加速直到温度降低.<br> 当触发CPU频率加速时调频器将会忽略<code>powerLimit</code>, 如果实时功耗超过<code>powerLimit</code>就会消耗<code>burstCapacity</code>, 直到容量耗尽时恢复功耗限制.<br> 当实时功耗低于功耗限制值时将会逐渐恢复<code>burstCapacity</code>, <code>recoverTime</code>即为容量从耗尽到完全恢复所需的时间.</p><h5 id="freqburst-cpu频率加速" tabindex="-1">freqBurst - CPU频率加速 <a class="header-anchor" href="#freqburst-cpu频率加速" aria-label="Permalink to &quot;freqBurst - CPU频率加速&quot;">​</a></h5><p>CPU频率加速可以在特定条件触发时调高CPU频率提升积极性, 用于降低部分场景下卡顿的几率.</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">durationTime</td><td style="text-align:left;">int</td><td style="text-align:left;">频率加速持续时间(单位:ms)</td></tr><tr><td style="text-align:left;">lowLatency</td><td style="text-align:left;">bool</td><td style="text-align:left;">是否降低延迟</td></tr><tr><td style="text-align:left;">extraMargin</td><td style="text-align:left;">int</td><td style="text-align:left;">额外性能冗余(范围:0-100)</td></tr><tr><td style="text-align:left;">boost</td><td style="text-align:left;">int</td><td style="text-align:left;">频率加速值(范围:0-100)</td></tr></tbody></table><p>触发条件包含<code>tap</code> <code>swipe</code> <code>gesture</code> <code>heavyload</code> <code>jank</code> <code>bigJank</code>,分别在 点击屏幕 滑动屏幕 手势操作 重负载 掉帧 严重掉帧 时触发.<br> 触发的优先级为<code>none</code> &lt; <code>tap</code> &lt; <code>swipe</code> &lt; <code>gesture</code> &lt; <code>heavyload</code> &lt; <code>jank</code> &lt; <code>bigJank</code>, 当更高优先级的加速触发时将覆盖低优先级的加速.<br> 当要求调频器降低延迟时调频器将会以最快的速度提升CPU频率, 适用于检测到掉帧等需要迅速提升CPU频率的场景.<br><code>extraMargin</code>值用于提供额外的性能冗余, 计算公式如下: <code>acturalMargin = perfMargin + extraMargin</code>.<br><code>boost</code>值用于夸大实际的CPU负载, 计算公式如下: <code>cpuLoad = cpuLoad + (100 - cpuLoad) * boost / 100</code>.<br> 当CPU温度小于80度时将不限制最大功耗, CPU温度大于等于80度小于90度时最大功耗限制在5000mW, CPU温度大于等于90度时最大功耗限制在4000mW.</p><h3 id="threadschedopt-线程调度优化" tabindex="-1">ThreadSchedOpt - 线程调度优化 <a class="header-anchor" href="#threadschedopt-线程调度优化" aria-label="Permalink to &quot;ThreadSchedOpt - 线程调度优化&quot;">​</a></h3><blockquote><p>此模块通过智能分类线程来实现较为合理的线程调度策略</p></blockquote><p>ThreadSchedOpt模块基于线程名称和CPU占用等数据分类前台线程, 组别如下:<br><code>GameRenderThread</code>分组: 包含游戏程序中负责画面渲染的相关线程.<br><code>GameMainThread</code>分组: 包含游戏程序中的主线程.<br><code>GameProcessThread</code>分组: 包含游戏程序中负责数据处理的相关线程.<br><code>UIThread</code>分组: 包含应用程序中参与渲染用户界面的相关线程.<br><code>MediaThread</code>分组: 包含应用程序中负责媒体（例如音频/视频解码）的相关线程.<br><code>WebViewThread</code>分组: 包含应用程序中WebView组件的相关线程.<br><code>ProcessThread</code>分组: 包含应用程序中负责数据处理的相关线程.<br><code>CoProcessThread</code>分组: 包含应用程序中负责辅助处理的相关线程.<br><code>JunkThread</code>分组: 包含应用程序中负责日志记录和性能追踪等功能的垃圾线程.<br><code>Initial</code>分组: 初始状态.</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">cpus</td><td style="text-align:left;">ArrayInt</td><td style="text-align:left;">此分组的cpu亲和性设定</td></tr><tr><td style="text-align:left;">nice</td><td style="text-align:left;">int</td><td style="text-align:left;">此分组的调度优先级(范围:-20~19)</td></tr></tbody></table><p>cpu亲和性设定即为限制线程仅能在指定的CPU核心上运行, 例如<code>&quot;cpus&quot;: [0, 1]</code>将限制线程仅能运行在CPU0, CPU1上.<br> 调度优先级与系统调度nice值定义相同, 范围为-20~19,数字越小优先级越高.</p><h3 id="mtkgpugovernor-联发科gpu调频器" tabindex="-1">MtkGpuGovernor - 联发科GPU调频器 <a class="header-anchor" href="#mtkgpugovernor-联发科gpu调频器" aria-label="Permalink to &quot;MtkGpuGovernor - 联发科GPU调频器&quot;">​</a></h3><blockquote><p>这个简易的GPU调频器可以满足对联发科GPU频率的基础调控</p></blockquote><h4 id="params-调频器参数-1" tabindex="-1">params - 调频器参数 <a class="header-anchor" href="#params-调频器参数-1" aria-label="Permalink to &quot;params - 调频器参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">activeRateHz</td><td style="text-align:left;">int</td><td style="text-align:left;">活跃时工作频率</td></tr><tr><td style="text-align:left;">idleRateHz</td><td style="text-align:left;">int</td><td style="text-align:left;">空闲时工作频率</td></tr><tr><td style="text-align:left;">preferredFreq</td><td style="text-align:left;">ArrayInt</td><td style="text-align:left;">偏好GPU频率(单位:MHz)</td></tr></tbody></table><p>当GPU负载为0时调频器按照<code>idleRateHz</code>频率工作, 当负载非0时调频器按照<code>activeRateHz</code>频率工作.<br> 由于联发科内核提供的GPU频率数量过多, 此调频器将只会选取部分GPU频率,具体信息请查看调度日志.<br><code>preferredFreq</code>为偏好的GPU频率, 调度选取GPU频率时将优先考虑这些频率.</p><h4 id="modes-模式参数-1" tabindex="-1">modes - 模式参数 <a class="header-anchor" href="#modes-模式参数-1" aria-label="Permalink to &quot;modes - 模式参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">maxFreq</td><td style="text-align:left;">int</td><td style="text-align:left;">GPU频率上限(单位:MHz)</td></tr><tr><td style="text-align:left;">minFreq</td><td style="text-align:left;">int</td><td style="text-align:left;">GPU频率下限(单位:MHz)</td></tr><tr><td style="text-align:left;">upRateThres</td><td style="text-align:left;">int</td><td style="text-align:left;">GPU升频阈值(范围:0-100)</td></tr><tr><td style="text-align:left;">downRateDiff</td><td style="text-align:left;">int</td><td style="text-align:left;">GPU降频差值(范围:0-100)</td></tr></tbody></table><p>当GPU负载大于<code>upRateThres</code>时提升频率, 当GPU负载减少的差值大于<code>downRateDiff</code>时降低频率.<br> 例如: 设置<code>upRateThres=90, downRateDiff=10</code>, 当GPU负载为<code>75</code>时降低GPU频率, 当GPU负载为<code>85</code>时GPU频率不变,当GPU负载为<code>95</code>时提升GPU频率.<br><code>upRateThres</code>的值越小升频越积极, <code>downRateDiff</code>的值越大降频越缓慢, <code>downRateDiff</code>的值不得大于<code>upRateThres</code>.</p><h3 id="filewriter-文件写入器" tabindex="-1">FileWriter - 文件写入器 <a class="header-anchor" href="#filewriter-文件写入器" aria-label="Permalink to &quot;FileWriter - 文件写入器&quot;">​</a></h3><blockquote><p>此模块用于在触发某些场景时自动写入文件</p></blockquote><h4 id="scenes-场景触发器" tabindex="-1">scenes - 场景触发器 <a class="header-anchor" href="#scenes-场景触发器" aria-label="Permalink to &quot;scenes - 场景触发器&quot;">​</a></h4><p>当触发指定场景时将会自动向文件中写入预设的文本, 写入方式与<code>echo [text] &gt; [path]</code>相同且效率更高, 写入单个文件的耗时通常不超过1ms.<br> 支持的场景如下:<br><code>init</code>: 调度初始化时触发, 仅执行一次.<br><code>screenOn</code>: 屏幕点亮时触发.<br><code>screenOff</code>: 屏幕熄灭时触发.<br><code>powersaveMode</code>: 切换到powersave模式时触发.<br><code>balanceMode</code>: 切换到balance模式时触发.<br><code>performanceMode</code>: 切换到performance模式时触发.<br><code>fastMode</code>: 切换到fast模式时触发.<br> 此项配置类型为<code>ArrayJson</code>, 即数组中的每个Json元素对应一个文件写入任务.</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">path</td><td style="text-align:left;">string</td><td style="text-align:left;">写入的目标地址</td></tr><tr><td style="text-align:left;">text</td><td style="text-align:left;">string</td><td style="text-align:left;">需要写入的文本</td></tr></tbody></table>',39),o=[r];function i(n,s,c,f,h,y){return l(),e("div",null,o)}const b=t(a,[["render",i]]);export{x as __pageData,b as default};