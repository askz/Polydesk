#!/bin/bash

#this sets the vnc password
/usr/local/etc/start-vnc-expect-script.sh
#fixes a warning with starting nautilus on firstboot - which we will always be doing.
mkdir -p ~/.config/nautilus
# start supervisord
exec supervisord -n