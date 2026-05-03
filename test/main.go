package main

import (
	"fmt"
	"log"

	pb "github.com/prdai/cf-region-proxy/test/proto"
	"google.golang.org/protobuf/proto"
)

func main() {
	msg := &pb.Request{Method: pb.RequestMethod_GET, Body: []byte("test")}
	out, err := proto.Marshal(msg)
	if err != nil {
		log.Fatalln("Failed to encode:", err)
	}
	fmt.Println(out)
}
