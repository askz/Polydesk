#! /usr/bin/env bash
# thanks to kolypto @ serverfault for the idea.
# since vncserver is running as a daemon, we're creating a foreground process uppon vncserver for supervisord.

set -eu

USER=root
export USER

# Setting pidfile + command to execute
pidfile="/root/.vnc/*:1.pid"
command="/usr/bin/vncserver :1 -geometry 1366x768 -depth 24"




# Proxy signals
function kill_app(){
    kill $(cat $pidfile)
    exit 0 # exit okay
}
trap "kill_app" SIGINT SIGTERM

# Launch daemon
/usr/local/etc/start-vnc-expect-script.sh
/chvncpasswd.sh "ubuntu"
$command
sleep 2

# Loop while the pidfile and the process exist
while [ -f $pidfile ] && kill -0 $(cat $pidfile) ; do
    sleep 0.5
done
exit 1000 # exit unexpected
