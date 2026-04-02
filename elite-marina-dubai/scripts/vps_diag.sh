#!/bin/bash
echo "=== NGINX SITES ==="
ls /etc/nginx/sites-enabled
echo "=== PHP POOLS ==="
ls /etc/php/*/fpm/pool.d/
echo "=== NGINX VERSION ==="
nginx -v
echo "=== PHP VERSION ==="
php -v
echo "=== MARIADB FRAGMENTATION ==="
mariadb -s -e "SELECT table_schema, table_name, data_free FROM information_schema.TABLES WHERE data_free > 5242880 ORDER BY data_free DESC LIMIT 10;"
echo "=== LARGE LOGS ==="
find /var/log -type f -size +100M -exec ls -lh {} +
echo "=== NGINX WORKER CONFIG ==="
grep -E 'worker_processes|worker_connections' /etc/nginx/nginx.conf
echo "=== PHP-FPM PM CONFIG ==="
grep -rE 'pm =|pm.max_children|pm.start_servers|pm.min_spare_servers|pm.max_spare_servers' /etc/php/*/fpm/pool.d/
echo "=== DOCKER STATS ==="
docker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}" | head -n 10
