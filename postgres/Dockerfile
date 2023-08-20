FROM postgres:latest

ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_USER postgres

COPY ./data /var/lib/postgresql/data

EXPOSE 5432

CMD ["postgres"]
