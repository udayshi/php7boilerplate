FROM udaysh/php7_1
MAINTAINER shiuday@gmail.com

RUN docker-php-ext-install opcache
WORKDIR /tmp

#RUN curl -L -o redis.tar.gz https://github.com/phpredis/phpredis/archive/2.2.7.tar.gz \
#    && tar xfz redis.tar.gz \
#    && rm -r redis.tar.gz \
#    && mkdir -p /usr/src/php/ext/redis \
#    && mv phpredis-2.2.7 /usr/src/php/ext/redis \
#    && docker-php-ext-install redis \
#    && cd /usr/src/php/ext/redis/phpredis-2.2.7 \
#    && /usr/local/bin/phpize


# Cleaning up
RUN rm -rf /usr/local/src /tmp/* /usr/share/man /var/cache/apk/*

# Configure nginx
COPY config/nginx.conf /etc/nginx/nginx.conf
# Configure PHP-FPM
COPY config/fpm-pool.conf /usr/local/etc/php-fpm.d/fpm-pool_custom.conf
RUN rm -rf /usr/local/etc/php/php.ini
COPY config/php.ini /usr/local/etc/php/php.ini

# Configure supervisord
COPY config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Add application
RUN mkdir -p /app
# composer create-project symfony/website-skeleton app
WORKDIR /app
#COPY src/ /app
#composer install
EXPOSE 80 443
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
