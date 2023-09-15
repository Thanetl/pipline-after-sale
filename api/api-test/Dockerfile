FROM postman/newman
COPY after-sale.postman_collection.json /etc/newman/api-test.json
CMD [ "run", "api-test.json", "-r", "cli,junit" ]