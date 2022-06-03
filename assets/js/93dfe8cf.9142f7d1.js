"use strict";(self.webpackChunkkevingrondin=self.webpackChunkkevingrondin||[]).push([[927],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4412:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},i="\ud83d\udd2c Monitorer",u={unversionedId:"Linux/Monitorer",id:"Linux/Monitorer",title:"\ud83d\udd2c Monitorer",description:"Plusieurs outils et fa\xe7on de faire",source:"@site/docs/Linux/Monitorer.md",sourceDirName:"Linux",slug:"/Linux/Monitorer",permalink:"/wiki/docs/Linux/Monitorer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux/Monitorer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83e\ude9b Configuration",permalink:"/wiki/docs/Linux/Config"},next:{title:"\ud83e\ude9f Windows",permalink:"/wiki/docs/category/-windows"}},p={},c=[{value:"Netdata",id:"netdata",level:2},{value:"ncdu",id:"ncdu",level:2},{value:"tmpreaper",id:"tmpreaper",level:2},{value:"log monitor",id:"log-monitor",level:2},{value:"lnav",id:"lnav",level:2},{value:"logrotate",id:"logrotate",level:2},{value:"Suppression en masse",id:"suppression-en-masse",level:2},{value:"Creer en masse",id:"creer-en-masse",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-monitorer"},"\ud83d\udd2c Monitorer"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Plusieurs outils et fa\xe7on de faire")),(0,l.kt)("h2",{id:"netdata"},"Netdata"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Une communaut\xe9 grandissante")),(0,l.kt)("p",null,"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"bash <(curl -Ss https://my-netdata.io/kickstart.sh)\n")),(0,l.kt)("p",null,"Interface web htt://127.0.0.1:19999"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"bash <(curl -Ss https://my-netdata.io/kickstart.sh)\n")),(0,l.kt)("h1",{id:"espace-disque"},"Espace disque"),(0,l.kt)("h2",{id:"ncdu"},"ncdu"),(0,l.kt)("p",null,"ce placer \xe0 la racine, l'argument -x permet de ignorer les m\xe9dia"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"cd /\nsudo ncdu -x\n")),(0,l.kt)("h1",{id:"fichier-temporaire"},"Fichier temporaire"),(0,l.kt)("h2",{id:"tmpreaper"},"tmpreaper"),(0,l.kt)("p",null,"Installer tmpreaper avec apt"),(0,l.kt)("p",null,"lors de l'installation avec apt, il faut commenter la ligne showing dans le fichier etc/tmpreaper"),(0,l.kt)("h1",{id:"journal-et-log"},"Journal et Log"),(0,l.kt)("h2",{id:"log-monitor"},"log monitor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"cd var/log\n\nls -ltr\nll | more\n")),(0,l.kt)("p",null,"Voir les log de demarrage toujours dans ",(0,l.kt)("inlineCode",{parentName:"p"},"var/log")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"more boot.log\n")),(0,l.kt)("p",null,"voir quand est-ce que boot.log a \xe9t\xe9 modifi\xe9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"ls -l boot.log\n")),(0,l.kt)("p",null,"voir les log du mat\xe9riel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"dmesg\n")),(0,l.kt)("h2",{id:"lnav"},"lnav"),(0,l.kt)("p",null,"Analyser les log avec lnav installation simple avec apt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"lnav /var/log/messages*\n\njournalctl | lnav\n\njournalctl -f | lnav\n\njournalctl -o short-iso | lnav\n\njournalctl -o json | lnav\n\njournalctl -a -o json | lnav\n\njournalctl -o json --output-fields=MESSAGE,PRIORITY,_PID,SYSLOG_IDENTIFIER,_SYSTEMD_UNIT | lnav\n")),(0,l.kt)("h2",{id:"logrotate"},"logrotate"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Si on travail avec des outils qui g\xe9n\xe9rent des fichiers ",(0,l.kt)("em",{parentName:"p"},"log"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"logrotate")," est d\xe9ja pr\xe9sent sur les distribution linux, il permet d'effecctuer des actions de rotations et de compression sur les logs"),(0,l.kt)("p",null,"Assurons-nous que cette ligne n'est pas commentez"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},'cat /etc/logrotate.conf | grep "include"\n')),(0,l.kt)("p",null,"Voici un exemple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Bash"},"/var/log/mylogs/auth.log {\n     su <user> <group>\n     monthly\n     rotate 3\n     compress\n     missingok\n     create 644 <user> <group>\n}\n\n/var/log/mylogs/errors.log {\n     su <user> <group>\n     monthly\n     rotate 3\n     compress\n     missingok\n     create 644 <user> <group>\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"monthly")," : la rotation se fait mensuellement"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"rotate 3")," : le nombre de fichiers qu\u2019on souhaite conserver"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"compress")," : les anciens fichiers sont compress\xe9s"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"missingok")," : ne consid\xe8re pas l\u2019absence du fichier comme une erreur"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"create 644 root root")," : cr\xe9er le fichier de log imm\xe9diatement apr\xe8s la rotation avec les droits ad\xe9quats")),(0,l.kt)("p",null,"Petite verification"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"logrotate --force /etc/logrotate.d/mylogs\n")),(0,l.kt)("h1",{id:"supprimer-ces-traces"},"Supprimer ces traces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-BATCH"},"history\n")),(0,l.kt)("p",null,"supprimer une ligne g\xe9nante"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-BATCH"},"history -d numeroligne\n")),(0,l.kt)("p",null,"Tout nettoyer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-BATCH"},"history -c\n")),(0,l.kt)("p",null,"Si je veux l'historique sans les ligne de commande ls -l"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-BATCH"},"export HISTIGNORE='ls -l:pwd:history'\n")),(0,l.kt)("p",null,"tout l'historique sont sauvegard\xe9 ici"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/home/yourname/.bash_history")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"ctrl+r")," permet de faire une recherche dans les lignes de commande tap\xe9"),(0,l.kt)("h1",{id:"message"},"Message"),(0,l.kt)("p",null,"Pour afficher un message il faudra l'\xe9crire la dedans"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/etc/motd"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/nologin")),(0,l.kt)("h2",{id:"suppression-en-masse"},"Suppression en masse"),(0,l.kt)("p",null,"Il peux arriver qu'un dossier comporte tellement de fichier que vider le dossier deviens impossible meme avec un rm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},'find . -name "*.toto" -exec rm {} \\;\n')),(0,l.kt)("h2",{id:"creer-en-masse"},"Creer en masse"),(0,l.kt)("p",null,"Cette ligne de commande creer 9 fichiers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"touch abcd{1..9}-wyz\n")),(0,l.kt)("h1",{id:"rechercher"},"Rechercher"),(0,l.kt)("p",null,"Rechercher une chaine de caract\xe8re dans tout les fichiers du repertoire courant"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"grep -rnw './' -e 'machainearechercher'\n")),(0,l.kt)("h1",{id:"process-and-jobs"},"Process and Jobs"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Crtl-z, jobs, bg, fg, nohup &, ps, pkill, nice")),(0,l.kt)("p",null,"systemctl\nps -aux\ntop\ncrontab -e pour creer un crontab\ncrontab -l pour lister les crontab"),(0,l.kt)("p",null,"on peux definir plus facilement les cron dans /etc/"),(0,l.kt)("p",null,"ls -l | grep cron"),(0,l.kt)("h1",{id:"mot-de-passe"},"Mot de passe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"passwd\n")),(0,l.kt)("h1",{id:"commande-sed"},"Commande sed"),(0,l.kt)("p",null,"Remplacer tout les mots ",(0,l.kt)("inlineCode",{parentName:"p"},"ancien")," par les mots ",(0,l.kt)("inlineCode",{parentName:"p"},"nouveau")," du fichier ",(0,l.kt)("inlineCode",{parentName:"p"},"MonFichier")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"sed 's/ancien/nouveau/g' MonFichier\n")),(0,l.kt)("p",null,"Rajouter l'argument -i pour que cela soit actif"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"sed -i 's/ancien/nouveau/g' MonFichier\n")),(0,l.kt)("p",null,"Supprimer toutes les lignes dans le fichier contenant le mot ",(0,l.kt)("inlineCode",{parentName:"p"},"ancien")," dans ",(0,l.kt)("inlineCode",{parentName:"p"},"MonFichier")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"sed '/ancien/d' MonFichier\n")),(0,l.kt)("p",null,"Supprimer toutes les lignes vide dans ",(0,l.kt)("inlineCode",{parentName:"p"},"MonFichier")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"sed -i '/^$/d' MonFichier\n")),(0,l.kt)("h1",{id:"tester-chiffrement-tslssl-starttls"},"Tester chiffrement TSL/SSL (STARTTLS)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-BATCH"},"git clone \u2013depth 1 https://github.com/drwetter/testssl.sh.git\ncd testssl.sh\n./testssl.sh https://qwant.com\n")),(0,l.kt)("h1",{id:"detecter-le-traffic-malicieux"},"Detecter le traffic malicieux"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/stamparm/maltrail"},"https://github.com/stamparm/maltrail")),(0,l.kt)("h1",{id:"voir-quel-paquets-sont-install\xe9s"},"Voir quel paquets sont install\xe9s"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"dpkg -l | grep <paquet>\n")),(0,l.kt)("h1",{id:"gestion-utilisateurs"},"Gestion utilisateurs"),(0,l.kt)("p",null,"Creer l'utilisateur ",(0,l.kt)("inlineCode",{parentName:"p"},"toto")," et l'ajouter au group sudo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"useradd toto\nusermod -aG sudo toto\n")),(0,l.kt)("p",null,"Supprimer un utilisateur"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"userdel -r toto\n")),(0,l.kt)("p",null,"Chercher toto dans /etc/group"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"grep toto /etc/group\n")),(0,l.kt)("p",null,"Creer un groupe TEST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"groupadd TEST\n")),(0,l.kt)("p",null,"Voir la liste de tout les groupes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SHELL"},"cat /etc/group/\n")),(0,l.kt)("h1",{id:"rsync"},"rsync"),(0,l.kt)("p",null,"Synchroniser deux repertoire sur un serveur local"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-BATCH"},"rsync -zvr /var/opt/installation/inventory /root/temp\n")),(0,l.kt)("h1",{id:"r\xe9cup\xe9ration-de-disque-dur"},"R\xe9cup\xe9ration de disque dur"),(0,l.kt)("p",null,"Recup\xe9rer ",(0,l.kt)("a",{parentName:"p",href:"http://www.garloff.de/kurt/linux/ddrescue/"},"dd_rescue")),(0,l.kt)("p",null,"D\xe9compressez, puis make pour cr\xe9er le binaire"),(0,l.kt)("p",null,"Si le disque enfommag\xe9 est /dev/sdb1\nSi le disque libre est /dev/sdc1"),(0,l.kt)("p",null,"Information du disque"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-BATCH"},"fdisk -l\n")),(0,l.kt)("p",null,"Se placer dans le repertoire dd_rescue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-BATCH"},"dd_rescue -l transfert_errors.log /dev/sdb1 /dev/sdc1\n")),(0,l.kt)("p",null,"Le fichier log va \xeatre cr\xe9\xe9 et qui va lister les blocs qu'il n'a pas plus traiter"),(0,l.kt)("p",null,"Choisisser un des lignes de commande ci-dessous selon votre syst\xe8me de fichiers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-BATCH"},"fsck.ext2\nfsck.ext3\nfsck.ext4\nfsck.vfat\n")),(0,l.kt)("h1",{id:"autre"},"Autre"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"df -h\ntop\ndmesg\niostat 1\nfree\ncat /proc/cpuinfo\ncat /proc/meminfo\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"iftop\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"nethogs\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"iptraf-ng\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"apt install sysstat\n\n# Regarder la crontab\ncat /etc/cron.d/sysstat\n\n# les fichiers g\xe9n\xe9r\xe9s\nls /var/log/sa\n\n# CPU\nsar -u\n\n# Memoire\nsar -r\n\n# Swap\nsar -W\n\n# Etat des IO disque\nsar -b\n\n# Entree sortie\nsar -d\n\n# Une p\xe9riode\nsadf -s 05:00:01 -e 06:00:01 -dT /var/log/sa/sa15 -- -A\n")))}m.isMDXComponent=!0}}]);