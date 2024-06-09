# pull official base image
FROM node:lts-bookworm

# set working directory
WORKDIR /amper_steffi_ui_garden/

# install app dependencies
COPY public/ /amper_steffi_ui_garden/public
COPY src/ /amper_steffi_ui_garden/src
COPY package.json /amper_steffi_ui_garden/
COPY . /amper_steffi_ui_garden
RUN npm install

# start app
CMD ["npm", "run", "storybook"]