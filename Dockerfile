FROM node:20
COPY .output run
EXPOSE 5031
ENTRYPOINT [ "node", "run/server/index.mjs" ]