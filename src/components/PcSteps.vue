<template>
  <div v-if="videoId != ''">
    <div class="video">
      <YouTube :channel="channel" :videoId="videoId" :start="start" />
    </div>
    <div class="fireball"></div>
  </div>
  <p class="title">{{ title }} Step-by-step</p>
  <!--bedrocktogether-->
  <p v-if="method != ''"><small><span class="bold">Method</span>: {{method}}</small></p>
  <p v-if="method != ''"><small><span class="bold">Pros</span>: {{pros}}</small></p>
  <p v-if="method != ''"><small><span class="bold">Cons</span>: {{cons}}</small></p>
  <!--description-->
    <!--description-->
  <div class="description">
    <p>{{brief}}</p>
  </div>
  
  <li>
    <small class="step">Step 1)</small>
    <p>Open Minecraft on your {{title}}</p>
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
  <li>
    <small class="step">4)</small>
    <p>Click "Download &amp; Join"</p>
    <!--image common-->
    <img alt="Step 4" class="fit" :src="path+'common-laststep.png'" />
    <p>Congratulations! You now have Phantom Frames.</p>
    <p><small>You are logged in as "Guest". As a courtesy to others, please keep visits to under 5 minutes, so others may join this Add-On distribution Minecraft World to download/update.</small></p>
  </li>
  <li>
    <small class="step">5)</small>
    <p>Open a new Minecraft World and activate the "Phantom Frames" Add-On</p>
    <p>Require others to download the add-on befor joining</p>
    <!--image-->
    <img alt="Step 5" class="fit" :src="path+group+'-step5.png'" />
  </li>
  <li>
    <small class="step">6)</small>
    <p>Open any other instance of Minecraft in the same network</p>
    <p>Go to the Friends tab, scroll to LAN game and click to join</p>
    <!--image-->
    <img alt="Step 6" class="fit" :src="path+group+'-step6.png'" />
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
    storelink: String,
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