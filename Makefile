.PHONY: serve
serve:
	@rm -rf public && hugo server

.PHONY: build
build:
	hugo
