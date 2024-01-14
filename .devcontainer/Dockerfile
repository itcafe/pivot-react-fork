# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.217.4/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT=${VARIANT}
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

RUN sudo apt-get update
RUN sudo apt install -y curl
# dockerコマンドを叩けるようにする
RUN sudo apt-get install -y docker.io
RUN sudo usermod -aG docker node

# awscliインストール
RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "aarch64" ]; then \
    curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "/tmp/awscliv2.zip"; \
    else \
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "/tmp/awscliv2.zip"; \
    fi

RUN cd /tmp && unzip awscliv2.zip && sudo ./aws/install

# # session managerインストール
RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "aarch64" ]; then \
    curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/ubuntu_arm64/session-manager-plugin.deb" -o "session-manager-plugin.deb"; \
    else \
    curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/ubuntu_64bit/session-manager-plugin.deb" -o "session-manager-plugin.deb"; \
    fi

RUN sudo dpkg -i session-manager-plugin.deb

# flexmonster-cliインストール
RUN sudo npm install -g flexmonster-cli


# # 環境変数設定
ENV AWS_DEFAULT_REGION=ap-northeast-1
# ENV CDK_DEFAULT_REGION=ap-northeast-1
