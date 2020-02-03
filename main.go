package main

import (
	"fmt"

	"github.com/sethvargo/go-githubactions"
)

func main() {
	fruit := githubactions.GetInput("fruit")
	fmt.Printf("You gave me the fruit: %v", fruit)
}
