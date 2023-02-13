"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(n),c=r,m=d["".concat(l,".").concat(c)]||d[c]||p[c]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>h,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(1026),i=n(3872);n(2915);const s={template:"post",draft:!1,hide_title:!0,title:"How to install a node easily with the assisted installer",slug:"how-to-install-a-node-easily-with-the-assisted-installer",image:"./assets/how-to-install-a-node-easily-with-the-assisted-installer.png?202302101751",date:new Date("2022-11-30T23:00:00.000Z"),canonical:"",description:"Get Fleek Network, is an attempt to make our software more accessible. By providing scripts to automate the installation process of our software, we believe that it can help improve the onboarding experience of our users.",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network"]},l=void 0,h={unversionedId:"Network nodes/fleek-network-how-to-install-a-node-easily-with-the-assisted-installer",id:"Network nodes/fleek-network-how-to-install-a-node-easily-with-the-assisted-installer",title:"How to install a node easily with the assisted installer",description:"Get Fleek Network, is an attempt to make our software more accessible. By providing scripts to automate the installation process of our software, we believe that it can help improve the onboarding experience of our users.",source:"@site/guides/Network nodes/fleek-network-how-to-install-a-node-easily-with-the-assisted-installer.md",sourceDirName:"Network nodes",slug:"/Network nodes/how-to-install-a-node-easily-with-the-assisted-installer",permalink:"/guides/Network nodes/how-to-install-a-node-easily-with-the-assisted-installer",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Network nodes/fleek-network-how-to-install-a-node-easily-with-the-assisted-installer.md",tags:[{label:"CDN",permalink:"/guides/tags/cdn"},{label:"Guide",permalink:"/guides/tags/guide"},{label:"Getting Started",permalink:"/guides/tags/getting-started"},{label:"Fleek Network",permalink:"/guides/tags/fleek-network"}],version:"current",lastUpdatedAt:1676316555,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"How to install a node easily with the assisted installer",slug:"how-to-install-a-node-easily-with-the-assisted-installer",image:"./assets/how-to-install-a-node-easily-with-the-assisted-installer.png?202302101751",date:"2022-11-30T23:00:00.000Z",canonical:"",description:"Get Fleek Network, is an attempt to make our software more accessible. By providing scripts to automate the installation process of our software, we believe that it can help improve the onboarding experience of our users.",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network"]},sidebar:"defaultSidebar",previous:{title:"How to get the latest updates for Ursa CLI from the source repository",permalink:"/guides/Network nodes/fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository"},next:{title:"How to install Rust and the dependencies for Ursa CLI",permalink:"/guides/Network nodes/fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli"}},u={image:n(4725).Z},d=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"TL;DR",id:"tldr",level:2},{value:"What is the assisted installer?",id:"what-is-the-assisted-installer",level:2},{value:"How does it Work?",id:"how-does-it-work",level:2},{value:"Which operating systems are supported?",id:"which-operating-systems-are-supported",level:2},{value:"Is running the assisted installer secure?",id:"is-running-the-assisted-installer-secure",level:2},{value:"How to use the assisted installer?",id:"how-to-use-the-assisted-installer",level:2},{value:"Connect to the server",id:"connect-to-the-server",level:3},{value:"Running the assisted installer",id:"running-the-assisted-installer",level:3},{value:"Health check",id:"health-check",level:3},{value:"How to help improve the onboarding experience?",id:"how-to-help-improve-the-onboarding-experience",level:2},{value:"Final Thoughts",id:"final-thoughts",level:2}],p={toc:d};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fleek Network: Getting started guide",src:n(4725).Z,width:"2400",height:"1256"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'"Get Fleek Network" is an attempt to make our software more accessible. By providing scripts to automate the installation process of our software, we believe that it can help improve the onboarding experience of our users.'),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"To follow the guide, you will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Familiarity with the command-line interface"),(0,r.kt)("li",{parentName:"ul"},"cURL installed"),(0,r.kt)("li",{parentName:"ul"},"A supported Linux Server Operating system (Ubuntu, Debian or ArchLinux)"),(0,r.kt)("li",{parentName:"ul"},"Domain name and permissions to update the DNS Record settings")),(0,r.kt)(o.ZP,{mdxType:"CheckoutCommitWarning"}),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Open your terminal, connect to your Linux server and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://get.fleek.network | bash\n")),(0,r.kt)("p",null,"Follow the steps and have your complete ready quickly! For example, during the process, you are required to provide a domain name that should respond with the server where you want the node installed, as the assisted installer will try to secure it."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-is-the-assisted-installer"},"What is the assisted installer?"),(0,r.kt)("p",null,"The assisted installer is a shell script written in Bash shell scripting language (a language used to interface with the system), that goes through the installation process instructed in our guide ",(0,r.kt)("a",{parentName:"p",href:"./fleek-network-running-a-node-in-a-docker-container"},"Running a node in a docker container"),".\nOperating systems are highly customizable and some users might much prefer to set up the Network Node required applications and dependencies themselves. Some of these users have a lot of system-level knowledge, which not all other users have. By putting down the steps programmatically, or in a sequence of commands, we help reduce the frustration that some users might feel otherwise when following guides or long descriptive processes."),(0,r.kt)("p",null,"The assisted installer is one of the many options we provide to onboard users of any shape, geographical location, and technical knowledge into the Fleek Network, an open network made for everybody."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it Work?"),(0,r.kt)("p",null,"A user has to copy or type the command provided in the guide or our website and paste it to a terminal connected to the machine or server where the Network Node will be installed and run."),(0,r.kt)("p",null,"Once the user executes the command, a process is initiated that attempts to provide the user with enough information about what's going on, or what can optionally happen, e.g., since ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git - a distributed version control system")," is a required application and if not found, the user will be informed and a request to install it will be presented as a user shell prompt. The users will be able to accept or deny the request and the installer will only execute accordingly. Most requirements are dependencies, such as libraries or packages that your system must have for our software to run. Apart from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"Ursa CLI")," we're developing, the dependencies are provided by third parties which you as a user might be interested in checking up on."),(0,r.kt)("p",null,"After the installations, there'll be a request to provide a valid custom domain name of the user control, to decorate the server's public ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IP_address"},"IP")," address](",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IP_address"},"https://en.wikipedia.org/wiki/IP_address"),"), where an attempt to ",(0,r.kt)("a",{parentName:"p",href:"./fleek-network-securing-a-node-with-ssl-tls"},"secure it")," with SSL/TLS Certificates will be handled by leveraging the ",(0,r.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," API for the matter."),(0,r.kt)("p",null,"Once the SSL/TLS certification is provided, the Stack provided by ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," (a program that helps accelerate and simplify the distribution of applications via containers) is restarted. The services in the Stack, as described in our ",(0,r.kt)("a",{parentName:"p",href:"./fleek-network-node-health-check-guide#healthchecks#processes"},"guide")," will then start with the final changes made during the certification process (mainly the reverse proxy, that's responsible to map the public port 80 to the internal 4069)."),(0,r.kt)("p",null,"If all goes successfully, the user will have a running node that is secured with SSL/TSL and the operations monitored by our suggested apps Prometheus and Grafana available to you easily in our opinionated Docker Stack."),(0,r.kt)("h2",{id:"which-operating-systems-are-supported"},"Which operating systems are supported?"),(0,r.kt)("p",null,"At present, the assisted installer is supporting the latest:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ubuntu (22.04 LTS), or earlier"),(0,r.kt)("li",{parentName:"ul"},"Debian (version 11), or earlier"),(0,r.kt)("li",{parentName:"ul"},"ArchLinux, which has rolling updates.")),(0,r.kt)("p",null,"It's also recommended to have enough disk space and memory to run our containers, which is about 8 GB of memory and a reasonable amount of space for the installation and running processes (at your consideration, as required to check Docker image containers, etc). You can find more details about it ",(0,r.kt)("a",{parentName:"p",href:"fleek-network-running-a-node-in-a-docker-container#recommended-settings"},"here")),(0,r.kt)("p",null,"\u26a0\ufe0f Unfortunately, Desktop operating systems are not supported by the installer (e.g. Docker when run on a Desktop, runs in a Linux VM). If you're curious and would like to test, you might want to do it on your own by following our ",(0,r.kt)("a",{parentName:"p",href:"/guides/Network%20nodes/fleek-network-running-a-node-in-a-docker-container"},"guide"),"."),(0,r.kt)("p",null,"If you are serious about running a Node, consider running a Ubuntu, Debian or ArchLinux server. We'll provide support for more Linux operating systems shortly."),(0,r.kt)("h2",{id:"is-running-the-assisted-installer-secure"},"Is running the assisted installer secure?"),(0,r.kt)("p",null,"While ",(0,r.kt)("inlineCode",{parentName:"p"},"Piped Installers")," are widely used on the web, e.g.; as you can find for ",(0,r.kt)("a",{parentName:"p",href:"https://get.docker.com/"},"Docker"),", ",(0,r.kt)("a",{parentName:"p",href:"https://sh.rustup.rs"},"Rust"),", the user should be aware that this is run at his own risk."),(0,r.kt)("p",null,"You are advised to read the source code of the script before accepting to use it. Also, instead of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pipeline_(Unix)"},"pipe")," or redirecting the script to your bash shell program, you could instead copy the file locally and after verifying it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://example.com > install.sh\n")),(0,r.kt)("p",null,"Instead of piping the script immediately to your bash shell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://example.com | bash\n")),(0,r.kt)("p",null,"Also, if you have a custom environment, then is best to follow the instructions provided in our guide, as otherwise risk changing or overriding your custom setup, especially if you are not aware of, or have no interest in going through the source-code logic of what the commands are executed."),(0,r.kt)("p",null,"We'll provide guides on how to help improve the security of the Network Node server, but be aware that dodgy scripts might take control of the server, which may be locating your private keys, copying them, etc.\nAt this point, you should understand that running a ",(0,r.kt)("inlineCode",{parentName:"p"},"curl | bash")," script from the internet comes with a lot of risks and the responsibility is on your side as a user!"),(0,r.kt)("h2",{id:"how-to-use-the-assisted-installer"},"How to use the assisted installer?"),(0,r.kt)("p",null,"Get a custom domain name from one domain name registrar of your liking, or create a subdomain in an existing domain you may have registered and update the DNS Record settings to answer to the server where the Ursa Network Node is going to be installed and run."),(0,r.kt)("p",null,"\ud83d\udca1 The process is illustrated in our guide ",(0,r.kt)("a",{parentName:"p",href:"./fleek-network-securing-a-node-with-ssl-tls#how-to-set-up-the-dns-settings-for-a-node-server"},"Securing a node with SSL/TLS")," and provides a bit more information about why this is required. If you have questions, start by using the guide to get answers."),(0,r.kt)("h3",{id:"connect-to-the-server"},"Connect to the server"),(0,r.kt)("p",null,"Once you have the domain prepared, launch a terminal window on your computer and connect to your server."),(0,r.kt)("p",null,"We generally authenticate with SSH (which is our recommendation), but some users like to authenticate with passwords. This should be familiar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ssh -i ~/.ssh/id_personal.pub user@ip-address\n")),(0,r.kt)("h3",{id:"running-the-assisted-installer"},"Running the assisted installer"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"#piped-installer"},"Piped installer")," also known as ",(0,r.kt)("inlineCode",{parentName:"p"},"curl | bash")," installer is available at the following address ",(0,r.kt)("a",{parentName:"p",href:"https://get.fleek.network"},"https://get.fleek.network"),". You are advised to open it on your browser or access it via the repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/get.fleek.network/blob/main/install.sh"},"here")," to read the entire it of it to understand what it does or can do!"),(0,r.kt)("p",null,"\u26a0\ufe0f Notice that you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"https://")," and not ",(0,r.kt)("inlineCode",{parentName:"p"},"http://")," to access the script in the ",(0,r.kt)("inlineCode",{parentName:"p"},"get.fleek.network")," to establish a secure connection."),(0,r.kt)("p",null,"The command to run it is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://get.fleek.network | bash\n")),(0,r.kt)("p",null,"Alternatively, which is a safer bet and as suggested in the ",(0,r.kt)("a",{parentName:"p",href:"#is-running-the-assisted-installer-secure"},"Is running the assisted installer secure"),", we have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://get.fleek.network > install-node-network.sh\n")),(0,r.kt)("p",null,"\ud83d\ude4f You can then read the content of the file in a text editor of your liking to understand the process or processes declared in the file, which will run in the user operating system, at the user's consent."),(0,r.kt)("p",null,"Which would require you to provide execution permissions to the file, only if agreed as a user decision:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"chmod +x install-node-network.sh\n")),(0,r.kt)("p",null,"The difference between the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl | bash")," and this version is that the alternative copies the file locally first and can only be run if you provide the correct permissions and type the command. Which to run you'd do:\nOnce the assisted installer is launched \ud83d\ude80 you are presented with enough information to help you complete the installation process."),(0,r.kt)("h3",{id:"health-check"},"Health check"),(0,r.kt)("p",null,"We provide a ",(0,r.kt)("a",{parentName:"p",href:"./fleek-network-node-health-check-guide"},"Node health check guide")," where you can find a more in-depth approach and detailed information about how the process work (log messages, hostnames, ports, etc)."),(0,r.kt)("p",null,"As a quick take on this during this read, you can do a quick health check to verify that the domain is indeed running and set up correctly."),(0,r.kt)("p",null,"From outside the server network where the Network Node is running or installed, do a curl request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/ping")," path, where you should get back a response ",(0,r.kt)("inlineCode",{parentName:"p"},"pong"),", as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://<YOUR-NETWORK-NODE-DOMAIN-NAME>/ping\n")),(0,r.kt)("p",null,"\ud83d\udca1 The ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR-NETWORK-NODE-DOMAIN-NAME>")," is the domain name you have provided or set during the assisted installer process."),(0,r.kt)("p",null,"If successful, you'll get a response back:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pong\n")),(0,r.kt)("p",null,"\ud83e\udd73 If you made it this far, congratulations and thank you for the support!"),(0,r.kt)("h2",{id:"how-to-help-improve-the-onboarding-experience"},"How to help improve the onboarding experience?"),(0,r.kt)("p",null,"We try our best to provide the best onboarding experience, but custom scripts to fit a whole range of computers or servers is a big chore and we expect some issues on the journey to make it better. Your feedback is of extreme importance to illustrate our end goal!"),(0,r.kt)("p",null,"For this reason, we are open for contributions, either by reporting issues, sending amends, feedback, etc in our Github repository available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/get.fleek.network"},"here"),". Alternatively, you can join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord")," or follow us on ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),"."),(0,r.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,r.kt)("p",null,"Getting started requires some technical knowledge, that some users might not afford at the time, and have the means or the energy to complete and succeed. Others simply want to have something a bit quicker to test or have a look at. It shouldn't take a university course, or the IQ of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Katherine_Johnson"},"Katherine Johson")," to run and operate a Node!"),(0,r.kt)("p",null,"For this reason and more inclusivity, we started writing the assisted installer, at the very best it'll help ease the experience but we are aware that it requires a lot of craft work to get this right for the majority of users and their systems."),(0,r.kt)("p",null,"Our guide breaks all of this down by starting to introduce the assisted installer conceptually, what it does and how, but also questioning it by sharing some ",(0,r.kt)("a",{parentName:"p",href:"#is-running-the-assisted-installer-secure"},"concerns")," about this piped installer concept."),(0,r.kt)("p",null,"Finally, we explain what you're required to do to start using it, in a quick and also safer way."),(0,r.kt)("p",null,"Discover more about the project by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"watching/contributing on Github"),", following us on ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for all the best updates!"),(0,r.kt)(i.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}c.isMDXComponent=!0},1026:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83e\udd16 As Fleek Network's repositories are in constant development and change, you should consider that the following guide was ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-checkout"},"checked in")," to commit ",(0,r.kt)("inlineCode",{parentName:"p"},"676b01d"),". While we try our best to update documentation and guides during development, there might be breaking changes that might take some time to reflect in our docs. To avoid disappointment, feel free to check into commit ",(0,r.kt)("inlineCode",{parentName:"p"},"676b01d")," or contribute by getting in touch with us, or sending a PR in the relevant context. Learn how to checkout a commit in our repository history ",(0,r.kt)("a",{parentName:"p",href:"../../reference/Git/how-to-checkout-a-commit-in-project-history"},"here")," \ud83d\ude4f.")))}i.isMDXComponent=!0},2915:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You have several ways of doing this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clone via HTTPS"),(0,r.kt)("li",{parentName:"ul"},"Clone via SSH"),(0,r.kt)("li",{parentName:"ul"},"Download via Github CLI"),(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/ursa/archive/refs/heads/main.zip"},"zip package")," from the repository")),(0,r.kt)("p",null,"We recommend HTTPS because it is the easiest to set up on the wild, and by users who are new to all this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/fleek-network/ursa.git\n")),(0,r.kt)("p",null,"Although, we strongly recommend using an SSH connection when interacting with GitHub. If you are to this and are interested read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:fleek-network/ursa.git\n")))}i.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{image:t,name:n,title:r,url:o}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:o,target:"_blank",alt:n},a.createElement("img",{src:t,alt:n}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:o,target:"_blank",alt:n},n)),a.createElement("span",{className:"title"},r),a.createElement("span",{className:"discord"},"Got questions? Find us on ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}},4725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/how-to-install-a-node-easily-with-the-assisted-installer-b0653ea0d81ef66786325570f04bd245.png"}}]);