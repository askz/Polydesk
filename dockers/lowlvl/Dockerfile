FROM apkaz/polydesk-base:0.2

MAINTAINER Richard Cuvillier <cuvill_r@etna-alternance.net>


RUN apt-get update -y
RUN apt-get upgrade -y

RUN echo "deb http://llvm.org/apt/wheezy/ llvm-toolchain-wheezy main" >> /etc/apt/sources.list
RUN apt-get update -y

RUN echo "deb-src http://llvm.org/apt/wheezy/ llvm-toolchain-wheezy main" >> /etc/apt/sources.list
RUN apt-get update -y

RUN echo "deb http://apt.jenslody.de/stable stable main" >> /etc/apt/sources.list
RUN apt-get update -y

#RUN echo "deb-src http://apt.jenslody.de/stable stable main" >> /etc/apt/sources.list
#RUN apt-get update -y


RUN apt-get install -y gdb build-essential
RUN apt-get install -y clang-3.5 clang-3.5-doc libclang-common-3.5-dev libclang-3.5-dev libclang1-3.5 libclang1-3.5-dbg libllvm-3.5-ocaml-dev libllvm3.5 libllvm3.5-dbg lldb-3.5 llvm-3.5 llvm-3.5-dev llvm-3.5-doc llvm-3.5-examples llvm-3.5-runtime clang-modernize-3.5 clang-format-3.5 python-clang-3.5 lldb-3.5-dev

#RUN apt-get install jens-lody-debian-keyring

RUN apt-key adv --fetch-keys http://repos.codelite.org/CodeLite.asc
RUN apt-add-repository -y "deb http://repos.codelite.org/ubuntu/ $(lsb_release -sc) universe"
RUN apt-get update -y
RUN apt-get install -y codelite wxcrafter strace libsdl2-2.0 libsdl2-dev

#RUN apt-get install -y -t wheezy-backports
RUN apt-get install -y qt4-qmake

RUN apt-get install -y doxygen graphviz
#sun-java6-jdk sun-java6-bin sun-java6-jre



#RUN update-java-alternatives -s java-6-sun



