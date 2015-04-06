FROM apkaz/polydesk-base:0.2

MAINTAINER Richard Cuvillier <cuvill_r@etna-alternance.net>


RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe multiverse" >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get upgrade -y

RUN  DEBIAN_FRONTEND=noninteractive apt-get -y install curl openjdk-7-jre-headless imagemagick unzip libpostgresql-jdbc-java libmysql-java python-software-properties tomcat7

# Install the LibreOffice Repository to ensure that the latest packages are retrieved
RUN apt-add-repository -y ppa:libreoffice/libreoffice-4-2
# Install swftools from the PPA
RUN apt-get update

# Install libreoffice from the extended PPAs added previously
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install libreoffice

# Install the SWF toolkit
RUN DEBIAN_FRONTEND=noninteractive apt-get -y --force-yes install swftools

# This line accepts the Microsoft End User License Agreement allowing use of
#   the MS True Type core fonts 
RUN echo ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true | debconf-set-selections

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install fonts-droid msttcorefonts


RUN apt-get update 
RUN apt-get install -qy texlive-full python-pygments gnuplot

RUN apt-get install -y gobby-infinote


RUN apt-get update -y && apt-get dist-upgrade -y

RUN apt-get install -y calibre xvfb ImageMagick
RUN apt-get -y install rsyslog

RUN apt-get clean

RUN rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/*rack*.com* && rm -rf /var/lib/apt/lists/security.ubuntu.com_ubuntu_dists_precise-security_*

# Create directory for library
RUN mkdir -p /opt/calibre/library

# Create directory to import files
RUN mkdir -p /opt/calibre/import
VOLUME        ["/opt/calibre/import“]
# Add crontab job to import books in the library
ADD crontab /etc/cron.d/calibre-update
RUN chmod 0644 /etc/cron.d/calibre-update
RUN touch /var/log/cron.log
