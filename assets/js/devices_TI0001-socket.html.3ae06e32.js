"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27652],{83673:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>m,data:()=>v});var a=t(57305);const s=(0,a.Lk)("h1",{id:"livolo-ti0001-socket",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#livolo-ti0001-socket"},[(0,a.Lk)("span",null,"Livolo TI0001-socket")])],-1),i=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),o=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TI0001-socket")],-1),l=(0,a.Lk)("td",null,"Vendor",-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee socket")],-1),u=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), linkquality")],-1),d=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TI0001-socket.png",alt:"Livolo TI0001-socket"})])],-1),r=(0,a.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,a.Lk)("span",null,"Notes")])],-1),p=(0,a.Lk)("h3",{id:"important",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#important"},[(0,a.Lk)("span",null,"Important")])],-1),k=(0,a.Fv)('<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">ext_pan_id</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">117</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span></span>\n<span class="line">  <span class="token key atrule">channel</span><span class="token punctuation">:</span> <span class="token number">26</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Therefore these devices may not co-existence with other Zigbee devices. Maybe, you need to add a dedicated coordinator and create a new network for Livolo. If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">pan_id</span><span class="token punctuation">:</span> <span class="token number">6756</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),h={},m=(0,t(36920).A)(h,[["render",function(e,n){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[s,(0,a.Lk)("table",null,[i,(0,a.Lk)("tbody",null,[o,(0,a.Lk)("tr",null,[l,(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Livolo"},{default:(0,a.k6)((()=>[(0,a.eW)("Livolo")])),_:1})])]),c,u,d])]),r,(0,a.Lk)("p",null,[(0,a.eW)('After pairing device will be shown as "TI0001" device. Need to manually trigger a re-configure of the device either using web-frontend of Zigbee2MQTT or using '),(0,a.bF)(t,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestdeviceconfigure"},{default:(0,a.k6)((()=>[(0,a.eW)("MQTT message")])),_:1}),(0,a.eW)(" right after pairing. In case of problems it's recommended to remove device and than retry pairing and re-configuring device.")]),p,(0,a.Lk)("p",null,[(0,a.eW)("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file "),(0,a.bF)(t,{to:"/guide/configuration/"},{default:(0,a.k6)((()=>[(0,a.eW)("data/configuration.yaml")])),_:1}),(0,a.eW)(" must contain the following:")]),k])}]]),v=JSON.parse('{"path":"/devices/TI0001-socket.html","title":"Livolo TI0001-socket control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Livolo TI0001-socket control via MQTT","description":"Integrate your Livolo TI0001-socket via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Important","slug":"important","link":"#important","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723207000000},"filePathRelative":"devices/TI0001-socket.md"}')}}]);