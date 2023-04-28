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
    <br />
    <p class="store">
      <a
        title="Open App store" 
        target="_blank"
        rel="noopener noreferrer" 
        :href="storelink"
      >
        <i class="icon" :class="group"></i>
      </a>
    </p>
  </div>
  <!--bedrocktogether-->
  <p v-if="method != ''"><small><span class="bold">Method</span>: {{method}}</small></p>
  <p v-if="method != ''"><small><span class="bold">Pros</span>: {{pros}}</small></p>
  <p v-if="method != ''"><small><span class="bold">Cons</span>: {{cons}}</small></p>
  
  <li>
    <small class="step">Step 1)</small>
    <p>Go to the store on your device > 
    <a
          title="Open App store" 
          target="_blank"
          rel="noopener noreferrer" 
          :href="storelink"
        >
          <i :class="group"></i>
        </a>
    </p>
    <!--image-->
    <img alt="Step 1" class="fit" :src="path+group+'-step1.png'" />
  </li>
  <li>
    <small class="step">Step 2)</small>
    <p>Search for the "{{method}}" App.</p>
    <!--image-->
    <img alt="Step 2" class="fit" :src="path+group+'-step2.png'" />
  </li>
  <li>
    <small class="step">Step 3)</small>
    <p>Install the Free version (ad supported)</p>
    <!--image-->
    <img alt="Step 3" class="fit" :src="path+group+'-step3.png'" />
  </li>
  <li>
    <small class="step">Step 4)</small>
    <p>Open the "{{method}}" App</p>
    <p>IP: "{{dns}}" <small>~or~</small></p>
    <p class="pad-left">"{{ip}}" </p>
    <p>Port: "19132" </p>
    <p><small>(This is the Phantom Frames Distribution BDS Server)</small></p>
    <!--image-->
    <img alt="Step 4" class="fit" :src="path+'mobile-step4.png'" />
  </li>
  <li>
    <small class="step">Step 5)</small>
    <p>Click "Watch Ad and Run" (:30 seconds)</p>
    <!--image-->
    <img alt="Step 5" class="fit" :src="path+'mobile-step5.png'" />
    <!--bedrocktogether-->
    <p v-if="method != ''">
      <small>Issues? Send {{method}} a support ticket:
        <a
          :title="method"
          target="_blank"
          rel="noopener noreferrer"
          :href="methodHelp"
          ><i :class="group"></i></a>
      </small>
    </p>
  </li>
  <li>
    <small class="step">Step 6)</small>
    <p>Leave the {{method}} App running until you complete all steps</p>
    <p>Approve any access to the local network.</p>
    <!--image-->
    <img alt="Step 6" class="fit" :src="path+'mobile-step6.png'" />
    <p><small>The {{method}} App is now a Local Network Minecraft "Friend"</small></p>
  </li>
  <li>
    <small class="step">Step 7)</small>
    <p>Open Minecraft </p>
    <p>Select "Friends" tab > Click "{{method}}"</p>
    <!--image-->
    <img alt="Step 7" class="fit" :src="path+'mobile-step7.png'" />
    <p><small> {{method}} will autoforward you to the Phantom Frames BDS Server </small></p>
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

  name: 'MobileSteps',
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