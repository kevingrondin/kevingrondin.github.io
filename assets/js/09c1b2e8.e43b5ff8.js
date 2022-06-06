"use strict";(self.webpackChunkkevingrondin=self.webpackChunkkevingrondin||[]).push([[35],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return h},default:function(){return S},frontMatter:function(){return N},metadata:function(){return y},toc:function(){return x}});var r=n(7462),a=n(3366),l=n(7294),i=n(3905),o=n(6010),u=n(2389),s=n(7392),p=n(7094),c=n(2466),d="tabList__CuJ",m="tabItem_LNqP";function f(e){var t,n,a=e.lazy,i=e.block,u=e.defaultValue,f=e.values,k=e.groupId,v=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===u?u:null!=(t=null!=u?u:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,p.U)(),w=y.tabGroupChoices,x=y.setTabGroupChoices,O=(0,l.useState)(h),S=O[0],I=O[1],E=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var L=w[k];null!=L&&L!==S&&b.some((function(e){return e.value===L}))&&I(L)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==S&&(T(t),I(r),null!=k&&x(k,String(r)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var l,i=E.indexOf(e.currentTarget)-1;n=null!=(l=E[i])?l:E[E.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:P,onClick:P},a,{className:(0,o.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),a?(0,l.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function k(e){var t=(0,u.Z)();return l.createElement(f,(0,r.Z)({key:String(t)},e))}var v="tabItem_Ymn6";function g(e){var t=e.children,n=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",className:(0,o.Z)(v,r),hidden:n},t)}var b=["components"],N={sidebar_position:1},h=void 0,y={unversionedId:"Linux/\ud83e\udde8  Installation/\ud83e\udde8  Installation",id:"Linux/\ud83e\udde8  Installation/\ud83e\udde8  Installation",title:"\ud83e\udde8  Installation",description:"L'installation est valable pour un serveur chez OVH (kimsufi) ou un raspberry",source:"@site/docs/Linux/\ud83e\udde8  Installation/\ud83e\udde8  Installation.mdx",sourceDirName:"Linux/\ud83e\udde8  Installation",slug:"/Linux/\ud83e\udde8  Installation/",permalink:"/wiki/docs/Linux/\ud83e\udde8  Installation/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux/\ud83e\udde8  Installation/\ud83e\udde8  Installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc27 Linux",permalink:"/wiki/docs/category/-linux"},next:{title:"\ud83e\ude9b Configuration",permalink:"/wiki/docs/Linux/Config"}},w={},x=[{value:"Structure",id:"structure",level:2},{value:"Installation",id:"installation",level:2},{value:"Formatter la SD",id:"formatter-la-sd",level:3},{value:"Preparer la SD",id:"preparer-la-sd",level:3},{value:"Configurer le wifi et ssh en avance",id:"configurer-le-wifi-et-ssh-en-avance",level:3},{value:"Fixer une adresse IP",id:"fixer-une-adresse-ip",level:2},{value:"Mettre le clavier en fran\xe7ais",id:"mettre-le-clavier-en-fran\xe7ais",level:2},{value:"Redirection",id:"redirection",level:3},{value:"S\xe9curit\xe9 SSL",id:"s\xe9curit\xe9-ssl",level:3},{value:"Mettre \xe0 jour le syst\xe8me",id:"mettre-\xe0-jour-le-syst\xe8me",level:2}],O={toc:x};function S(e){var t=e.components,l=(0,a.Z)(e,b);return(0,i.kt)("wrapper",(0,r.Z)({},O,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"L'installation est valable pour un serveur chez OVH (kimsufi) ou un raspberry")),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Dossier"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/boot"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Contient le fichier qui est utilis\xe9 par le boot loader (grub.cfg)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/root"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Le repertoire de l'utilisateur root diff\xe9rent de /")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/dev"),(0,i.kt)("td",{parentName:"tr",align:"left"},"les p\xe9riph\xe9riques")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/etc"),(0,i.kt)("td",{parentName:"tr",align:"left"},"configuration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/bin -> /usr/bin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Les commandes quotidienne de l'utilisateur")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/sbin -> /usr/sbin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"commandes syst\xe8me/syt\xe8le de fichier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/opt"),(0,i.kt)("td",{parentName:"tr",align:"left"},"application compl\xe9mentaire optionnelle ( pas partie de l'OS )")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/proc"),(0,i.kt)("td",{parentName:"tr",align:"left"},"processus en cour  ( n'existe qu'en m\xe9moire )")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/lib -> /usr/lib"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fichiers de librairie du langage C dont ont besoin les commandes et les applications ",(0,i.kt)("inlineCode",{parentName:"td"},"strace -e open pwd"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/tmp"),(0,i.kt)("td",{parentName:"tr",align:"left"},"repertoire temporaires")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/home"),(0,i.kt)("td",{parentName:"tr",align:"left"},"repertoire utilisateur")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/var"),(0,i.kt)("td",{parentName:"tr",align:"left"},"log system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/run"),(0,i.kt)("td",{parentName:"tr",align:"left"},"D\xe9mons syst\xe8me qui d\xe9marrent tr\xe8s t\xf4t (systemd, udev ) pour stocker les fichiers d'ex\xe9cution temporaires comme les fichiers PID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/mnt"),(0,i.kt)("td",{parentName:"tr",align:"left"},"pour monter un syst\xe8me de fichiers externe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/media"),(0,i.kt)("td",{parentName:"tr",align:"left"},"CDROM")))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(g,{value:"Raspberry",mdxType:"TabItem"},(0,i.kt)("p",null,"T\xe9l\xe9charger l'image ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/downloads/raspbian/"},"ici")," la version light est suffisante"),(0,i.kt)("h3",{id:"formatter-la-sd"},"Formatter la SD"),(0,i.kt)("p",null,"Formater depuis un windows avec l'invite de commande"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-BATCH"},"diskpart\nlist disk\nselect disk\nclean\ncreate partition primary\nactive\nformat fs=exfat quick\nassign\nexit\nexit\n")),(0,i.kt)("h3",{id:"preparer-la-sd"},"Preparer la SD"),(0,i.kt)("p",null,"Avec rufus ou ",(0,i.kt)("a",{parentName:"p",href:"https://etcher.io"},"etcher")," "),(0,i.kt)("h3",{id:"configurer-le-wifi-et-ssh-en-avance"},"Configurer le wifi et ssh en avance"),(0,i.kt)("p",null,"cr\xe9er un fichier \xe0 la racine ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," et en m\xeame temps ",(0,i.kt)("inlineCode",{parentName:"p"},"wpa_supplicant.conf")," avec ces infos"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SHELL"},'country=fr\nupdate_config=1\nctrl_interface=/var/run/wpa_supplicant\n\nnetwork={\n scan_ssid=1\n ssid="nameofnetworknotnetwork5GHZ"\n psk="motdepasse"\n}\n')),(0,i.kt)("p",null,"Ecrire ces informations en ",(0,i.kt)("strong",{parentName:"p"},"EOL Unix")," avec Notepad++ dans le menu ",(0,i.kt)("em",{parentName:"p"},"Edit/EOL Conversion"),", les r\xe9seau 5GHZ ne fonctionneras pas.\nApr\xe9s chaque redemarrage la configuration seras supprim\xe9"),(0,i.kt)("h2",{id:"fixer-une-adresse-ip"},"Fixer une adresse IP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SHELL"},"sudo nano /etc/dhcpcd.conf\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-BASH"},"interface wlan0\nstatic ip_address=192.168.1.2/24\nstatic routers=192.168.1.1\nstatic domain_name_servers=192.168.1.1\n")),(0,i.kt)("h2",{id:"mettre-le-clavier-en-fran\xe7ais"},"Mettre le clavier en fran\xe7ais"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SHELL"},"sudo raspi-config\n")),(0,i.kt)("p",null,"changer les options de locatisations (FR UTF8)")),(0,i.kt)(g,{value:"VPS",mdxType:"TabItem"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Une fois que vous avez achet\xe9 votre ",(0,i.kt)("strong",{parentName:"p"},"VPS")," et votre ",(0,i.kt)("strong",{parentName:"p"},"Nom de domaine"))),(0,i.kt)("h3",{id:"redirection"},"Redirection"),(0,i.kt)("p",null,"Il faut faire la redirection du nome domaine vers votre adresse IP du serveur"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Installation",src:n(9962).Z,width:"840",height:"316"})),(0,i.kt)("p",null,"Sur les deux types ",(0,i.kt)("strong",{parentName:"p"},"A")," faudra remplacer par votre adresse IP du serveur"),(0,i.kt)("p",null,"Ce que je conseil aussi c'est de rajouter un DNS gratuit comme ",(0,i.kt)("strong",{parentName:"p"},"noip.com")),(0,i.kt)("p",null,"Pour avoir un nom domaine de secours gratuitement"),(0,i.kt)("h3",{id:"s\xe9curit\xe9-ssl"},"S\xe9curit\xe9 SSL"),(0,i.kt)("p",null,"Avoir un nom de domaine s\xe9curis\xe9 est plus qu'essentiel."),(0,i.kt)("p",null,"Il faut installer les paquets certbot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"apt install certbot python3-certbot-nginx\n")),(0,i.kt)("p",null,"Executer le script"),(0,i.kt)("p",null,"(Vous pouvez rajouter un sous domaine avec l'argumenet ",(0,i.kt)("strong",{parentName:"p"},"-d")," exemple ",(0,i.kt)("strong",{parentName:"p"},"-d api.kevingrondin.fr"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"certbot --nginx -d kevingrondin.fr -d www.kevingrondin.fr\n")),(0,i.kt)("p",null,"V\xe9rifier si le script est lanc\xe9 de mani\xe8re automatis\xe9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"systemctl status certbot.timer\n")),(0,i.kt)("p",null,"Voila vous n'avez plus qu'a v\xe9rifier si tout est bon"))),(0,i.kt)("p",null,"Une fois connect\xe9 en SSH"),(0,i.kt)("h2",{id:"mettre-\xe0-jour-le-syst\xe8me"},"Mettre \xe0 jour le syst\xe8me"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-batch"},"sudo su\nsudo apt update -y && apt upgrade -y && sudo apt full-upgrade -y \nsudo apt install ntpdate\nsudo apt install ntp\nsudo apt install bash-completion\nsudo apt install unattended-upgrades\nsudo dpkg-reconfigure --priority=low unattended-upgrades\ncat /etc/apt/apt.conf.d/20auto-upgrades\n")))}S.isMDXComponent=!0},9962:function(e,t,n){t.Z=n.p+"assets/images/capture-f92e290cbaf4e8ee26032b0a63eaf6b0.png"}}]);