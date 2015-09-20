---
title: 'Website &#8220;Decay&#8221;'
layout: article
redirect_from: /humor/website-decay/
excerpt: "Your website might fall apart"
---
Not sure if you know this, but your website might fall apart. Thats right, if you don&#8217;t keep it maintained and serviced it might not be there one day. This issue can only be described as &#8220;website decay&#8221; in which the site in question could simply fall apart at any moment.

I&#8217;ve recently had some trouble trying to prevent such a problem but I think I&#8217;ve managed to escape it with minor issues. However I have lost some elements in the process, a div here and there. So let this be a warning to anyone neglecting their own site, keep it in check and give it a good service every so often!

Here&#8217;s a great tutorial on how to keep your website [clean and fresh][1].

Cheers, Dave

 [1]: https://www.youtube.com/watch?v=I8CTscW3dpI

 <style>
 @-webkit-keyframes falloffright {
   0% {
     -webkit-transform: translateY(0%) rotate(0deg);
     transform: translateY(0%) rotate(0deg);
   }  
   95% {
     -webkit-transform: translateY(0%) rotate(0deg);
     transform: translateY(0%) rotate(0deg);
   }
   98% {
     -webkit-transform: translateY(0%) rotate(-20deg);
     transform: translateY(0%) rotate(-20deg);
   }
   100% {
     -webkit-transform: translateY(1500px) rotate(-20deg);
     transform: translateY(1500px) rotate(-20deg);
   }
 }
 @keyframes falloffright {
   0% {
     -webkit-transform: translateY(0%) rotate(0deg);
     transform: translateY(0%) rotate(0deg);
   }
   95% {
     -webkit-transform: translateY(0%) rotate(0deg);
     transform: translateY(0%) rotate(0deg);
   }
   98% {
     -webkit-transform: translateY(0%) rotate(-20deg);
     transform: translateY(0%) rotate(-20deg);
   }
   100% {
     -webkit-transform: translateY(1500px) rotate(-20deg);
     transform: translateY(1500px) rotate(-20deg);
   }
 }
 @-webkit-keyframes falloffleft {
   0% {
     -webkit-transform: translateY(0%) rotate(0deg);
     transform: translateY(0%) rotate(0deg);
   }
   88% {
     -webkit-transform: translateY(0%) rotate(0deg);
     transform: translateY(0%) rotate(0deg);
   }
   90% {
     -webkit-transform: translateY(0%) rotate(6deg);
     transform: translateY(0%) rotate(6deg);    
   }
   96% {
     -webkit-transform: translateY(0%) rotate(6deg);
     transform: translateY(0%) rotate(6deg);
   }
   97% {
     -webkit-transform: translateY(0%) rotate(55deg);
     transform: translateY(0%) rotate(60deg);
   }
   100% {
     -webkit-transform: translateY(1500px) rotate(55deg);
     transform: translateY(1500px) rotate(55deg);
   }
 }
 @keyframes falloffleft {
   0% {
     -webkit-transform: translateY(0%) rotate(0deg);
     transform: translateY(0%) rotate(0deg);
   }
   88% {
     -webkit-transform: translateY(0%) rotate(0deg);
     transform: translateY(0%) rotate(0deg);
   }
   90% {
     -webkit-transform: translateY(0%) rotate(6deg);
     transform: translateY(0%) rotate(6deg);    
   }
   96% {
     -webkit-transform: translateY(0%) rotate(6deg);
     transform: translateY(0%) rotate(6deg);
   }
   97% {
     -webkit-transform: translateY(0%) rotate(55deg);
     transform: translateY(0%) rotate(55deg);
   }
   100% {
     -webkit-transform: translateY(1500px) rotate(55deg);
     transform: translateY(1500px) rotate(55deg);
   }
 }
 .main {
   -webkit-animation: 20s falloffleft ease;
   animation: 6s falloffleft ease;
   -webkit-transform-origin: top left;
   -ms-transform-origin: top left;
   transform-origin: top left;
   -webkit-animation-fill-mode: forwards;
 }
 .sidebar {
   -webkit-animation: 22s falloffright ease;
   animation: 7s falloffright ease;
   -webkit-transform-origin: top right;
   -ms-transform-origin: top right;
   transform-origin: top right;
   -webkit-animation-fill-mode: forwards;
 }
 </style>
