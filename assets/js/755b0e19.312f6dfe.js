"use strict";(self.webpackChunkkevingrondin=self.webpackChunkkevingrondin||[]).push([[587],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(3117),a=n(7294),l=n(4334),i=n(2466),o=n(6775),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:n,groupId:r}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var g=n(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},7332:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={sidebar_position:1},s="\ud83e\udde8 Installation",u={unversionedId:"Linux/Installation/Installation",id:"Linux/Installation/Installation",title:"\ud83e\udde8 Installation",description:"Liens utiles",source:"@site/docs/Linux/Installation/Installation.mdx",sourceDirName:"Linux/Installation",slug:"/Linux/Installation/",permalink:"/wiki/docs/Linux/Installation/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux/Installation/Installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc27 Linux",permalink:"/wiki/docs/category/-linux"},next:{title:"\ud83e\ude9b Configuration",permalink:"/wiki/docs/Linux/Config"}},c={},p=[{value:"Liens utiles",id:"liens-utiles",level:2},{value:"Structure",id:"structure",level:2},{value:"Installation",id:"installation",level:2},{value:"Formatter la SD",id:"formatter-la-sd",level:3},{value:"Preparer la SD",id:"preparer-la-sd",level:3},{value:"Configurer le wifi et ssh en avance",id:"configurer-le-wifi-et-ssh-en-avance",level:3},{value:"Fixer une adresse IP",id:"fixer-une-adresse-ip",level:2},{value:"Mettre le clavier en fran\xe7ais",id:"mettre-le-clavier-en-fran\xe7ais",level:2},{value:"Redirection",id:"redirection",level:3},{value:"S\xe9curit\xe9 SSL",id:"s\xe9curit\xe9-ssl",level:3},{value:"Mettre \xe0 jour le syst\xe8me",id:"mettre-\xe0-jour-le-syst\xe8me",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-installation"},"\ud83e\udde8 Installation"),(0,a.kt)("h2",{id:"liens-utiles"},"Liens utiles"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.ovh.com/fr/dedicated/"},"docs ovh")),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Dossier"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/boot"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contient le fichier qui est utilis\xe9 par le boot loader (grub.cfg)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/root"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Le repertoire de l'utilisateur root diff\xe9rent de /")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/dev"),(0,a.kt)("td",{parentName:"tr",align:"left"},"les p\xe9riph\xe9riques")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/etc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"configuration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/bin -> /usr/bin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Les commandes quotidienne de l'utilisateur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/sbin -> /usr/sbin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"commandes syst\xe8me/syt\xe8le de fichier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/opt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"application compl\xe9mentaire optionnelle ( pas partie de l'OS )")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/proc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"processus en cour  ( n'existe qu'en m\xe9moire )")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/lib -> /usr/lib"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Fichiers de librairie du langage C dont ont besoin les commandes et les applications ",(0,a.kt)("inlineCode",{parentName:"td"},"strace -e open pwd"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/tmp"),(0,a.kt)("td",{parentName:"tr",align:"left"},"repertoire temporaires")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/home"),(0,a.kt)("td",{parentName:"tr",align:"left"},"repertoire utilisateur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/var"),(0,a.kt)("td",{parentName:"tr",align:"left"},"log system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/run"),(0,a.kt)("td",{parentName:"tr",align:"left"},"D\xe9mons syst\xe8me qui d\xe9marrent tr\xe8s t\xf4t (systemd, udev ) pour stocker les fichiers d'ex\xe9cution temporaires comme les fichiers PID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/mnt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"pour monter un syst\xe8me de fichiers externe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/media"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CDROM")))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Raspberry",mdxType:"TabItem"},(0,a.kt)("p",null,"T\xe9l\xe9charger l'image ",(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/downloads/raspbian/"},"ici")," la version light est suffisante"),(0,a.kt)("h3",{id:"formatter-la-sd"},"Formatter la SD"),(0,a.kt)("p",null,"Formater depuis un windows avec l'invite de commande"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-BATCH"},"diskpart\nlist disk\nselect disk\nclean\ncreate partition primary\nactive\nformat fs=exfat quick\nassign\nexit\nexit\n")),(0,a.kt)("h3",{id:"preparer-la-sd"},"Preparer la SD"),(0,a.kt)("p",null,"Avec rufus ou ",(0,a.kt)("a",{parentName:"p",href:"https://etcher.io"},"etcher")," "),(0,a.kt)("h3",{id:"configurer-le-wifi-et-ssh-en-avance"},"Configurer le wifi et ssh en avance"),(0,a.kt)("p",null,"cr\xe9er un fichier \xe0 la racine ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," et en m\xeame temps ",(0,a.kt)("inlineCode",{parentName:"p"},"wpa_supplicant.conf")," avec ces infos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SHELL"},'country=fr\nupdate_config=1\nctrl_interface=/var/run/wpa_supplicant\n\nnetwork={\n scan_ssid=1\n ssid="nameofnetworknotnetwork5GHZ"\n psk="motdepasse"\n}\n')),(0,a.kt)("p",null,"Ecrire ces informations en ",(0,a.kt)("strong",{parentName:"p"},"EOL Unix")," avec Notepad++ dans le menu ",(0,a.kt)("em",{parentName:"p"},"Edit/EOL Conversion"),", les r\xe9seau 5GHZ ne fonctionneras pas.\nApr\xe9s chaque redemarrage la configuration seras supprim\xe9"),(0,a.kt)("h2",{id:"fixer-une-adresse-ip"},"Fixer une adresse IP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SHELL"},"sudo nano /etc/dhcpcd.conf\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-BASH"},"interface wlan0\nstatic ip_address=192.168.1.2/24\nstatic routers=192.168.1.1\nstatic domain_name_servers=192.168.1.1\n")),(0,a.kt)("h2",{id:"mettre-le-clavier-en-fran\xe7ais"},"Mettre le clavier en fran\xe7ais"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SHELL"},"sudo raspi-config\n")),(0,a.kt)("p",null,"changer les options de locatisations (FR UTF8)")),(0,a.kt)(i.Z,{value:"VPS",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Une fois que vous avez achet\xe9 votre ",(0,a.kt)("strong",{parentName:"p"},"VPS")," et votre ",(0,a.kt)("strong",{parentName:"p"},"Nom de domaine"))),(0,a.kt)("h3",{id:"redirection"},"Redirection"),(0,a.kt)("p",null,"Il faut faire la redirection du nome domaine vers votre adresse IP du serveur"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Installation",src:n(4819).Z,width:"840",height:"316"})),(0,a.kt)("p",null,"Sur les deux types ",(0,a.kt)("strong",{parentName:"p"},"A")," faudra remplacer par votre adresse IP du serveur.\nPareil on rajoute un types ",(0,a.kt)("strong",{parentName:"p"},"A")," pour un sous-domaine."),(0,a.kt)("p",null,"Ce que je conseil aussi c'est de rajouter un DNS gratuit comme ",(0,a.kt)("strong",{parentName:"p"},"noip.com")),(0,a.kt)("p",null,"Pour avoir un nom domaine de secours gratuitement"),(0,a.kt)("h3",{id:"s\xe9curit\xe9-ssl"},"S\xe9curit\xe9 SSL"),(0,a.kt)("p",null,"Avoir un nom de domaine s\xe9curis\xe9 est plus qu'essentiel."),(0,a.kt)("p",null,"Il faut installer les paquets certbot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"apt install certbot python3-certbot-nginx\n")),(0,a.kt)("p",null,"Executer le script"),(0,a.kt)("p",null,"(Vous pouvez rajouter un sous domaine avec l'argumenet ",(0,a.kt)("strong",{parentName:"p"},"-d")," exemple ",(0,a.kt)("strong",{parentName:"p"},"-d api.kevingrondin.fr"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"certbot --nginx -d kevingrondin.fr -d www.kevingrondin.fr\n")),(0,a.kt)("p",null,"V\xe9rifier si le script est lanc\xe9 de mani\xe8re automatis\xe9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"systemctl status certbot.timer\n")),(0,a.kt)("p",null,"Voila vous n'avez plus qu'a v\xe9rifier si tout est bon"))),(0,a.kt)("p",null,"Une fois connect\xe9 en SSH"),(0,a.kt)("h2",{id:"mettre-\xe0-jour-le-syst\xe8me"},"Mettre \xe0 jour le syst\xe8me"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},"sudo su\nsudo apt update -y && apt upgrade -y && sudo apt full-upgrade -y \nsudo apt install ntpdate\nsudo apt install ntp\nsudo apt install bash-completion\nsudo apt install unattended-upgrades\nsudo dpkg-reconfigure --priority=low unattended-upgrades\ncat /etc/apt/apt.conf.d/20auto-upgrades\n")))}f.isMDXComponent=!0},4819:function(e,t,n){t.Z=n.p+"assets/images/capture-f92e290cbaf4e8ee26032b0a63eaf6b0.png"}}]);