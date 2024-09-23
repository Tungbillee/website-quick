FROM alpine:3.12

# Install packages and remove default server definition
RUN apk --no-cache add nginx supervisor curl && rm /etc/nginx/conf.d/default.conf

# Configure nginx
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./config/server.conf /etc/nginx/conf.d/server.conf
COPY ./config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Setup document root
RUN mkdir -p /var/www/html

# Make sure files/folders needed by the processes are accessable when they run under the nobody user
RUN chown -R nobody.nobody /var/www/html && \
    chown -R nobody.nobody /run && \
    chown -R nobody.nobody /var/lib/nginx && \
    chown -R nobody.nobody /var/log/nginx

# Switch to use a non-root user from here on
USER nobody

# Add application
COPY --chown=nobody ./dist /var/www/html
RUN ls -la /var/www/html

# Expose the port nginx is reachable on
EXPOSE 8080

# Let supervisord start nginx & php-fpm
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]