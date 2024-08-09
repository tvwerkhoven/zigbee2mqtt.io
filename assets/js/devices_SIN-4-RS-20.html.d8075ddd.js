"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82396],{50387:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>b,data:()=>v});var i=o(57305);const a=(0,i.Lk)("h1",{id:"nodon-sin-4-rs-20",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#nodon-sin-4-rs-20"},[(0,i.Lk)("span",null,"NodOn SIN-4-RS-20")])],-1),n=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),c=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"SIN-4-RS-20")],-1),l=(0,i.Lk)("td",null,"Vendor",-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Roller shutter relay switch")],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"cover (state, position, tilt), cover_mode, calibration_vertical_run_time_up, calibration_vertical_run_time_down, calibration_rotation_run_time_up, calibration_rotation_run_time_down, linkquality")],-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SIN-4-RS-20.png",alt:"NodOn SIN-4-RS-20"})])],-1),s=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1),h=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1),p=(0,i.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>. To change the tilt publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tilt&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="cover-mode-composite" tabindex="-1"><a class="header-anchor" href="#cover-mode-composite"><span>Cover mode (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cover_mode&quot;: {&quot;reversed&quot;: VALUE, &quot;calibration&quot;: VALUE, &quot;maintenance&quot;: VALUE, &quot;led&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;cover_mode&quot;: &quot;&quot;}</code>.</p><ul><li><code>reversed</code> (binary): Reversal of the motor rotating direction allowed values: <code>true</code> or <code>false</code></li><li><code>calibration</code> (binary): Set the cover calibration mode allowed values: <code>true</code> or <code>false</code></li><li><code>maintenance</code> (binary): Set the cover maintenance mode, enabling will disable the cover motor allowed values: <code>true</code> or <code>false</code></li><li><code>led</code> (binary): Set the LED allowed values: <code>true</code> or <code>false</code></li></ul><h3 id="calibration-vertical-run-time-up-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-vertical-run-time-up-numeric"><span>Calibration vertical run time up (numeric)</span></a></h3><p>Manuel calibration: Set vertical run time up of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_vertical_run_time_up</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_vertical_run_time_up&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_vertical_run_time_up&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>10 ms</code>.</p><h3 id="calibration-vertical-run-time-down-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-vertical-run-time-down-numeric"><span>Calibration vertical run time down (numeric)</span></a></h3><p>Manuel calibration: Set vertical run time down of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_vertical_run_time_down</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_vertical_run_time_down&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_vertical_run_time_down&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>10 ms</code>.</p><h3 id="calibration-rotation-run-time-up-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-rotation-run-time-up-numeric"><span>Calibration rotation run time up (numeric)</span></a></h3><p>Manuel calibration: Set rotation run time up of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_rotation_run_time_up</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_rotation_run_time_up&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_rotation_run_time_up&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>ms</code>.</p><h3 id="calibration-rotation-run-time-down-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-rotation-run-time-down-numeric"><span>Calibration rotation run time down (numeric)</span></a></h3><p>Manuel calibration: Set rotation run time down of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_rotation_run_time_down</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_rotation_run_time_down&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_rotation_run_time_down&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>ms</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),m={},b=(0,o(36920).A)(m,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[n,(0,i.Lk)("tbody",null,[c,(0,i.Lk)("tr",null,[l,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=NodOn"},{default:(0,i.k6)((()=>[(0,i.eW)("NodOn")])),_:1})])]),r,d,u])]),s,(0,i.Lk)("p",null,[(0,i.eW)("This device supports OTA updates, for more information see "),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>[(0,i.eW)("OTA updates")])),_:1}),(0,i.eW)(".")]),h,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),v=JSON.parse('{"path":"/devices/SIN-4-RS-20.html","title":"NodOn SIN-4-RS-20 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"NodOn SIN-4-RS-20 control via MQTT","description":"Integrate your NodOn SIN-4-RS-20 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Cover mode (composite)","slug":"cover-mode-composite","link":"#cover-mode-composite","children":[]},{"level":3,"title":"Calibration vertical run time up (numeric)","slug":"calibration-vertical-run-time-up-numeric","link":"#calibration-vertical-run-time-up-numeric","children":[]},{"level":3,"title":"Calibration vertical run time down (numeric)","slug":"calibration-vertical-run-time-down-numeric","link":"#calibration-vertical-run-time-down-numeric","children":[]},{"level":3,"title":"Calibration rotation run time up (numeric)","slug":"calibration-rotation-run-time-up-numeric","link":"#calibration-rotation-run-time-up-numeric","children":[]},{"level":3,"title":"Calibration rotation run time down (numeric)","slug":"calibration-rotation-run-time-down-numeric","link":"#calibration-rotation-run-time-down-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723207000000},"filePathRelative":"devices/SIN-4-RS-20.md"}')}}]);