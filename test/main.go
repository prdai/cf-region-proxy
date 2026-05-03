package main

import (
	"log"
	"fmt"
	"google.golang.org/protobuf/proto"
	pb "github.com/prdai/cf-region-proxy/test/proto"
)

func main() {
	msg := &pb.Request{Method: pb.RequestMethod_GET, Body: []byte("test")}
	out, err := proto.Marshal(msg)
	if err != nil {
		log.Fatalln("Failed to encode:", err)
	}
	fmt.Println(out)
}
