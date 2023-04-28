<template>
  <div v-if="videoId != ''">
    <div class="video">
      <YouTube :channel="channel" :videoId="videoId" :start="start" />
    </div>
    <div class="fireball"></div>
  </div>
  <p class="title">{{ title }} Step-by-step</p>
  <!--description-->
  <div class="description">
    <p>{{brief}}</p>
  </div>
  <!--bedrockconnect-->
  <p v-if="method != ''"><small><span class="bold">Method</span>: {{method}}</small></p>
  <p v-if="method != ''"><small><span class="bold">Pros</span>: {{pros}}</small></p>
  <p v-if="method != ''"><small><span class="bold">Cons</span>: {{cons}}</small></p>

  <li>
    <small class="step">Step 1)</small>
    <!--switch-->
    <p v-if="title == 'Switch'">Go to "System Settings" </p>
    <p v-if="title == 'Switch'">Scroll to Internet > Internet Settings</p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">Go to "Settings" </p>
    <p v-if="title == 'Xbox'">Select Network > Network Settings > Advanced Settings</p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">Open "Settings" </p>
    <!--image-->
    <img alt="Step 1" class="fit" :src="path+group+'-step1.png'" />
    <p v-if="title == 'Playstation'">Select Network > Set Up Internet Connection ></p>
    <p v-if="title == 'Playstation'">Use Wi-Fi (if wireless), LAN (if wired)</p>
  </li>
  <li>
    <small class="step">Step 2)</small>
    <!--switch-->
    <p v-if="title == 'Switch'">Select "Change Settings" </p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">Click "DNS settings" </p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">Select "Custom"</p>
    <!--image-->
    <img alt="Step 2" class="fit" :src="path+group+'-step2.png'" />
  </li>
  <li>
    <small class="step">Step 3)</small>
    <!--switch-->
    <p v-if="title == 'Switch'">Change "DNS Settings" to "Manual" </p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">Change "IPv4 DNS Settings" to "Manual" </p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">Choose your Wi-Fi Network (or LAN)</p>
    <!--image-->
    <img alt="Step 3" class="fit" :src="path+group+'-step3.png'" />
    <p v-if="title == 'Playstation'">IP > Automatic</p>
    <p v-if="title == 'Playstation'">DHCP Host Name > Do Not Specify</p>
  </li>
  <li>
    <small class="step">Step 4)</small>
    <!--switch,xbox-->
    <p v-if="title == 'Switch' || title == 'Xbox'">
      Set the Primary <span v-if="title == 'Xbox'">IPv4 </span>DNS to "{{methoddns}}"  <small>({{method}} DNS)</small>
    </p>
    <p v-if="title == 'Switch' || title == 'Xbox'">
      Set the Secondary <span v-if="title == 'Xbox'">IPv4 </span>DNS to "8.8.8.8". <small>(Google DNS)</small>
    </p>

    <!--playstation-->
    <p v-if="title == 'Playstation'">DNS Settings > Manual</p>
    <!--image-->
    <img alt="Step 4" class="fit" :src="path+group+'-step4.png'" />
  </li>
  <li>
    <small class="step">Step 5)</small>
    <!--switch-->
    <p v-if="title == 'Switch'">Click "Save" </p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">Wait for connection > Click "Continue" </p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">
      Set the Primary DNS to "{{methoddns}}" <small>({{method}} DNS}</small> 
    </p>
    <p v-if="title == 'Playstation'">
      Set the Secondary DNS to "8.8.8.8". <small>(Google DNS)</small>
    </p>
    <!--image-->
    <img alt="Step 5" class="fit" :src="path+group+'-step5.png'" />
    <p v-if="title == 'Playstation'">MTU > Automatic</p>
    <p v-if="title == 'Playstation'">Proxy Server > Do Not Use</p>
    <p v-if="title == 'Playstation'">Test Internet Connection</p>
    <!--bedrockconnect switch xbox-->
    <p v-if="method != '' && title != 'Playstation'">
      <small>Issues? Other {{method}} DNS listings can be found here:
        <a
          :title="method"
          target="_blank"
          rel="noopener noreferrer"
          :href="methodAlt"
          >
          <i :class="group"></i>
        </a>
      </small>
    </p>
    <!--bedrockconnect playstation-->
    <p v-if="method != '' && title == 'Playstation'">
      <small>Issues? Other {{method}} DNS listings can be found here:
        <a
          :title="method"
          target="_blank"
          rel="noopener noreferrer"
          :href="methodAlt"
          >
          <i :class="group"></i>
        </a>
      </small>
    </p>
  </li>
  <li>
    <small class="step">Step 6)</small>
    <p>Open Minecraft </p>
    <!--image common-->
    <img alt="Step 6" class="fit" :src="path+group+'-step6.png'" />
  </li>
  <li>
    <small class="step">Step 7)</small>
    <p>Choose "Servers" Tab</p>
    <p>Click any "Featured Servers" listed </p>
    <p><small>(This step opens the "Servers List" screen )</small></p>
    <!--image common-->
    <img alt="Step 7" class="fit" :src="path+'console-step7.png'" />
  </li>
  <li>
    <small class="step">Step 8)</small>
    <p>Choose "Connect to a Server" in "Server List" screen </p>
    <img alt="Step 8" class="fit" :src="path+'console-step8.png'" />
    <!--bedrockconnect wiki common-->
    <p v-if="method != ''">
      <small>Issues? Read the {{method}} Wiki:
        <a 
        :title="method"
        target="_blank" 
        rel="noopener noreferrer" 
        :href="methodHelp"
        >
          <i :class="group"></i>
        </a>
      </small>
    </p>
  </li>
  <li>
    <small class="step">Step 9)</small>
    <p>Server Address: "{{dns}}" <small>~or~</small></p>
    <p style="padding-left:10rem">"{{ip}}" </p>
    <p>Server Port: "19132" </p>
    <p><small>(This is the Phantom Frames Distribution BDS Server)</small></p>
    <!--image common-->
    <img alt="Step 9" class="fit" :src="path+'console-step9.png'" />
  </li>
  <li>
    <small class="step">Step 10)</small>
    <p>Optional: Toggle "Add to server list" to "On" for update visits </p>
    <p>Click "Submit" </p>
    <!--image common-->
    <img alt="Step 10" class="fit" :src="path+'console-step10.png'" />
  </li>
  <li>
    <small class="step">Final Step)</small>
    <p>Click "Download &amp; Join"</p>
    <!--image common-->
    <img alt="Final Step" class="fit" :src="path+'common-laststep.png'" />
    <p>Congratulations! You now have Phantom Frames.</p>
    <p><small>You are logged in as "Guest". As a courtesy to others, please keep visits to under 5 minutes, so others may join this Add-On distribution Minecraft World to download/update.</small></p>
  </li>
</template>
<script>
import YouTube from './YouTube.vue';
export default {

  name: 'ConsoleSteps',
  components:{
    YouTube
  },
  props: {
    // section = 'console', but using this allows sections to be ommitted and/or replaced
    // e.g. v-if="section == 'console'" keeps that entry hides other that are being checked
    section: String,

    title: String,
    pros: String,
    cons: String,
    brief: String,

    group: String,

    channel: String, 
    videoId: String, 
    start: String,

    method: String,
    methodHelp: String,
    methodAlt: String,
    methoddns: String,

    dns: String,
    ip: String,
  },
  data() {
    // build image cdn host from vars
    const git_user = 'seeit360'
    const project = 'mc-pfaos'
    const branch = 'main'
    const dir = 'public'
    const imgDir = 'img'
    return {
      // git project cdn as path - use `path+<image_name>` to use image hosting in html
      path: 'https://cdn.jsdelivr.net/gh/'+git_user+'/'+project+'@'+branch+'/'+dir+'/'+imgDir+'/'
    }
  }
}
</script>