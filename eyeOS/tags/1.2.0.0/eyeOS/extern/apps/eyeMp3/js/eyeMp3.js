/*
                                  ____   _____ 
                                 / __ \ / ____|
                  ___ _   _  ___| |  | | (___  
                 / _ \ | | |/ _ \ |  | |\___ \ 
                |  __/ |_| |  __/ |__| |____) |
                 \___|\__, |\___|\____/|_____/ 
                       __/ |                   
                      |___/              1.2

                     Web Operating System
                           eyeOS.org

             eyeOS Engineering Team - eyeOS.org/whoarewe

     eyeOS is released under the GNU General Public License Version 3 (GPL3)
            provided with this release in license.txt
             or via web at gnu.org/licenses/gpl.txt

        Copyright 2005-2007 eyeOS Team (team@eyeos.org)         
*/
//Load sounds
function eyeMp3_loadSound(myPid,path){
	document.getElementById(myPid+"_flashPlayer").SetVariable("jsValue",path);
    document.getElementById(myPid+"_flashPlayer").SetVariable("jsMethod","newfile");
}
