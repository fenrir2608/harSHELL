#!/bin/sh
# This script installs harSHELL.
#
# Found a bug? Report it here: https://github.com/fenrir2608/harSHELL/issues

set -e -u

eval "git clone 'https://github.com/fenrir2608/harSHELL.git'"

cd harSHELL

echo "harSHELL cloned! Installing dependencies..."

if command -v yarn >/dev/null 2>&1 ; then
  yarn install
else
  cat 1>&2 << 'EOA'
/=====================================\\
|       COMMAND NOT FOUND: 'yarn'      |
\\=====================================/

Uh oh! We couldn't find 'yarn' installed on your system.

You should first install 'yarn' on your system. 

For more information, visit yarn's installation page:

  https://classic.yarnpkg.com/lang/en/docs/install/

EOA
  exit 1
fi

cat <<-'EOM'



  _                _____ _    _ ______ _      _      
 | |              / ____| |  | |  ____| |    | |     
 | |__   __ _ _ _| (___ | |__| | |__  | |    | |     
 | '_ \ / _` | '__\___ \|  __  |  __| | |    | |     
 | | | | (_| | |  ____) | |  | | |____| |____| |____ 
 |_| |_|\__,_|_| |_____/|_|  |_|______|______|______|
                                                     
                                                                                                                                     

harSHELL has been downloaded to the current directory.
You can start developing it with:

cd harSHELL && yarn dev

This will open a local port at http://localhost:3000, 
where you can preview your website. To apply changes, edit:

config.json

And the changes should be applied upon saves!

EOM