import{_ as a,c as i,a4 as t,o as n}from"./chunks/framework.BBFIYKeO.js";const c=JSON.parse('{"title":"联发科GPU调频器","titleTemplate":"Tritium_docs","description":"","frontmatter":{"title":"联发科GPU调频器","layout":"doc","titleTemplate":"Tritium_docs"},"headers":[],"relativePath":"guide/MtkGpuGovernor.md","filePath":"guide/MtkGpuGovernor.md","lastUpdated":1732558124000}'),e={name:"guide/MtkGpuGovernor.md"};function l(p,s,h,r,d,k){return n(),i("div",null,s[0]||(s[0]=[t(`<h3 id="mtkgpugovernor-联发科gpu调频器" tabindex="-1">MtkGpuGovernor - 联发科GPU调频器 <a class="header-anchor" href="#mtkgpugovernor-联发科gpu调频器" aria-label="Permalink to &quot;MtkGpuGovernor - 联发科GPU调频器&quot;">​</a></h3><blockquote><p>这个简易的GPU调频器可以满足对联发科GPU频率的基础调控</p></blockquote><h4 id="params-调频器参数" tabindex="-1">params - 调频器参数 <a class="header-anchor" href="#params-调频器参数" aria-label="Permalink to &quot;params - 调频器参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">baseRateHz</td><td style="text-align:left;">int</td><td style="text-align:left;">基准工作频率</td></tr><tr><td style="text-align:left;">burstRateHz</td><td style="text-align:left;">int</td><td style="text-align:left;">突发工作频率</td></tr></tbody></table><p>当GPU负载为0时调频器按照<code>baseRateHz</code>频率工作, 当负载非0时调频器按照<code>burstRateHz</code>频率工作.<br> 由于联发科内核提供的GPU频率数量过多, 此调频器将只会选取部分GPU频率,具体信息请查看调度日志.</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;MtkGpuGovernor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;params&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;baseRateHz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;burstRateHz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">40</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">  ...</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">//其他模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="voltadjust-电压调整" tabindex="-1">voltAdjust - 电压调整 <a class="header-anchor" href="#voltadjust-电压调整" aria-label="Permalink to &quot;voltAdjust  - 电压调整&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">minVolt</td><td style="text-align:left;">int</td><td style="text-align:left;">最低电压(单位:uV)</td></tr><tr><td style="text-align:left;">maxVolt</td><td style="text-align:left;">int</td><td style="text-align:left;">最高电压(单位:uV)</td></tr><tr><td style="text-align:left;">voltOffset</td><td style="text-align:left;">int</td><td style="text-align:left;">电压偏移值(单位:uV)</td></tr></tbody></table><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;voltAdjust&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">    ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;minVolt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;maxVolt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100000</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;voltOffset&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong><code>此功能仅用于适配某些默认电压表不可用的设备, 不建议在通用的配置文件中调整此项参数, 可能导致死机甚至烧毁硬件.</code></strong></p><h4 id="modes-模式参数" tabindex="-1">modes - 模式参数 <a class="header-anchor" href="#modes-模式参数" aria-label="Permalink to &quot;modes - 模式参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">margin</td><td style="text-align:left;">ArrayInt</td><td style="text-align:left;">GPU性能冗余(范围:0-100)</td></tr><tr><td style="text-align:left;">upRateDelay</td><td style="text-align:left;">int</td><td style="text-align:left;">GPU升频延迟(单位:ms)</td></tr><tr><td style="text-align:left;">downRateDelay</td><td style="text-align:left;">int</td><td style="text-align:left;">GPU降频延迟(单位:ms)</td></tr></tbody></table><p><code>Margin</code>被设置的越高则代表GPU性能冗余越大, 升频的几率越高.就越耗电.GPU频率提升延迟(<code>upRateDelay</code>)用于降低GPU频率被提升得过高的几率, 每次升频时调频器都会根据频率提升延迟和能耗比变化判定是否需要升频.</p><p><s>当GPU负载大于<code>upRateThres</code>时提升频率, 当GPU负载减少的差值大于<code>downRateDiff</code>时降低频率.</s><s>例如: 设置<code>upRateThres=90, downRateDiff=10</code>, 当GPU负载为<code>75</code>时降低GPU频率, 当GPU负载为<code>85</code>时GPU频率不变,当GPU负载为<code>95</code>时提升GPU频率.</s><s><code>upRateThres</code>的值越小升频越积极, <code>downRateDiff</code>的值越大降频越缓慢, <code>downRateDiff</code>的值不得大于<code>upRateThres</code>.</s></p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;MtkGpuGovernor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;params&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;voltAdjust&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;modes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;powersave&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;margin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;upRateDelay&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;downRateDelay&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">50</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;balance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;performance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;fast&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="devfreqtuner" tabindex="-1">DevfreqTuner <a class="header-anchor" href="#devfreqtuner" aria-label="Permalink to &quot;DevfreqTuner&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">节选自CuToolbox V8.2.0 Alpha更新日志</p><p>[DevfreqTuner] 新增的模块, 支持联发科/高通/麒麟/紫光展锐平台的DDR/GPU频率调整功能.</p></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;DevfreqTuner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,18)]))}const u=a(e,[["render",l]]);export{c as __pageData,u as default};
