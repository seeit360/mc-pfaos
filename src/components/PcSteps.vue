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
  <!--bedrocktogether-->
  <p v-if="method != ''"><small><span class="bold">Method</span>: {{method}}</small></p>
  <p v-if="method != ''"><small><span class="bold">Pros</span>: {{pros}}</small></p>
  <p v-if="method != ''"><small><span class="bold">Cons</span>: {{cons}}</small></p>
  
  <li>
    <small class="step">Step 1)</small>
    <p>Open "Minecraft For Windows" on your {{title}}</p>
    <!--image-->
    <img alt="Step 1" class="fit" :src="path+group+'-step1.png'" />
  </li>
  <li>
    <small class="step">Step 2)</small>
    <p>Servers tab > Add Server</p>
    <!--image-->
    <img alt="Step 2" class="fit" :src="path+group+'-step2.png'" />
  </li>
  <li>
    <small class="step">Step 3)</small>
    <p>Server Name: "{{dns}}"</p>
    <p>Server IP: "{{ip}}" </p>
    <p>Server Port: "19132" </p>
    <p><small>(This is the Phantom Frames Distribution BDS Server)</small></p>
    <!--image-->
    <img alt="Step 3" class="fit" :src="path+group+'-step3.png'" />
  </li>
  <div class="ip-pc fireball"></div>
  <li>
    <small class="step">Step 4)</small>
    <p>Click "Download &amp; Join"</p>
    <!--image common-->
    <img alt="Step 4" class="fit" :src="path+'common-laststep.png'" />
    <p>Congratulations! You now have Phantom Frames.</p>
    <p><small>You are logged in as "Guest". As a courtesy, please keep visits to under 5 minutes, so other players may join.</small></p>
  </li>
  <br />
  <li>
    <small class="step">Optional: Step 5)</small>
    <p>Share "Phantom Frames" Add-On using LAN</p>
    <p>Create New World</p>
    <p>Multiplayer > Visible to LAN Players > On</p>
    <!--image-->
    <img alt="Step 5" class="fit" :src="path+group+'-step5.png'" />
  </li>
  <li>
    <small class="step">Optional: Step 6)</small>
    <p>Behavior Packs > Add [+] "Phantom Frames"</p>
    <!--image-->
    <img alt="Step 6" class="fit" :src="path+group+'-step6.png'" />
  </li>
    <li>
    <small class="step">Optional: Step 7)</small>
    <p>Resource Packs > Shared Packs > On</p>
    <!--image-->
    <img alt="Step 7" class="fit" :src="path+group+'-step7.png'" />
  </li>
  <li>
    <small class="step"><span class="bold">Required</span>: Step 8)</small>
    <p>Experiments > Turn On Experiments Anyway > </p>
    <p>Holiday Creator Features > On</p>
    <!--image-->
    <img alt="Step 8" class="fit" :src="path+group+'-step8.png'" />
  </li>
  <li>
    <small class="step">Optional: Step 9)</small>
    <p>Open Minecraft <small>(in the same Wifi / LAN as PC)</small></p>
    <p>Friends tab > LAN Games > "Your New World" > Join</p>
    <!--image-->
    <img alt="Step 9" class="fit" :src="path+group+'-step9.png'" />
  </li>
  <li>
    <small class="step">Final Step)</small>
    <p>Click "Download &amp; Join"</p>
    <!--image common-->
    <img alt="Final Step" class="fit" :src="path+'common-laststep.png'" />
    <p>Congratulations! You now have Phantom Frames on another device.</p>
  </li>
</template>
<script>
import YouTube from './YouTube.vue';
export default {

  name: 'PcSteps',
  components:{
    YouTube
  },
  props: {
    // section = 'console', but using this allows sections to be ommitted and/or replaced
    // e.g. v-if="section == 'console'" keeps that entry hides other that are being checked
    section: String,
    title: String,
    group: String,
    pros: String,
    cons: String,
    brief: String,
    channel: String, 
    videoId: String, 
    start: String,
    method: String,
    methodHelp: String,
    dns: String,
    ip: String
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