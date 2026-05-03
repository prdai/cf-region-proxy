protoc \
    --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
    --ts_opt=esModuleInterop=true \
    --ts_out="./src" \
	$1
