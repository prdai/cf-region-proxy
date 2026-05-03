export SRC_DIR=$(realpath .)/proto/
export PROTO_FILE=forwardRequest.proto
export TEST_DIR=./test/
export TS_PROTO_GEN_SCRIPT=scripts/generateProtocSchema.sh

generate-proto-go:
	protoc --proto_path=$(SRC_DIR) -I=$(SRC_DIR) --go_out=$(TEST_DIR) $(SRC_DIR)$(PROTO_FILE)

generate-proto-ts:
	$(TS_PROTO_GEN_SCRIPT) $(PROTO_FILE)

generate:
	generate-proto-go
	generate-proto-ts

lint:
	bunx biome lint
	golangci-lint run ./test/

format:
	bunx biome format --fix
	golangci-lint fmt ./test/

