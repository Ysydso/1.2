FROM nginx:1.25-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/templates /etc/nginx/templates
COPY ./build/ /usr/share/nginx/html
ENV TOGGLES=""
HEALTHCHECK --interval=5s --timeout=30s --start-period=5s --retries=6 \
  CMD wget --no-check-certificate -O /dev/null https://${SERVER_NAME} || exit 1
