export PROTO_FILE=proto/forwardRequest.proto
export TEST_DIR=./test/
export TS_PROTO_GEN_SCRIPT=scripts/generateProtocSchema.sh

generate-proto-go:
	protoc -I=. --go_out=$(TEST_DIR) --go_opt=paths=source_relative $(PROTO_FILE)


generate-proto-ts:
	$(TS_PROTO_GEN_SCRIPT) $(PROTO_FILE)

generate:
	$(MAKE) generate-proto-go
	$(MAKE) generate-proto-ts

lint:
	bunx biome lint
	golangci-lint run ./test/

format:
	bunx biome format --fix
	golangci-lint fmt ./test/

