.PHONY: development build start lint install build

DOCKER_COMPOSE_RUN_OPTIONS=--rm
ifeq (${CI},true)
    DOCKER_COMPOSE_RUN_OPTIONS=--rm --user root -T
endif

android:
	docker-compose run --service-ports $(DOCKER_COMPOSE_RUN_OPTIONS) front run android

ios:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) front run ios

start:
	docker-compose run --service-ports $(DOCKER_COMPOSE_RUN_OPTIONS) front run start

test:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) front run test

lint:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) front run lint

install:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) front install

