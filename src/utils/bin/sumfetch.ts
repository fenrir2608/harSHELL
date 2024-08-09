import config from '../../../config.json';

const summary = async (args: string[]): Promise<string> => {
  if (config.ascii === 'harsh') {
    return `                       
    
**?%%%%%%%%%???********?*????????%%%%    
**?%%%%%%%%%???********?*????????%%%%     summary: 
%%??S%%%?%%%%????%%%??***??????*????%    -----------
???*?????????%#@@@@@@@#S%?**????**?%S     ABOUT
??*****???*?#@@@@@@@@@@@@S??????**?%%     ${config.name}
*********???@@@@@@@@@@@@@%??????**???    ﰩ ${config.ps1_hostname}
************%@#@@@@@@@@##***??**??%%?     <u><a href="${config.resume_url}" target="_blank">resume</a></u>
************%S%@@@@@@@@%S?****???????    爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
************SS?S%???%SS%#%********??%    -----------
***********?S%?********?#@%*******???     CONTACT
**********%@@@%*******?S@@@#?*****???     <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
?********?@@@@@#%?**??#@@@@@@S****???     <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
*********?S@@@@@@@###%#@@@@@@S*****??     <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
?%%%SSSSSSS@@@@@@@@@@@@@@@@#?********    -----------     
@@@@@@@@@@@@@@@@@@@@@@@@@@#S%????****     SPONSOR
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@S?**     <u><a href="${config.donate_urls.github}" target="_blank">${config.donate_urls.github}</a></u>
@@@@@@@@@@@@@@@@@##%###@@@@@@@@@@@@S?     
@@@@@@@@#@@#@@@@@#%???S@@@@@@@@@@@@@@
@@@@@@@@#@@S@##@@@##@#@@@@@@@@@@@@@@@

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > F  E  N  R  I  R       ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             SPONSOR
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.donate_urls.github}" target="_blank">${config.donate_urls.github}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
  }
};

export default summary;
