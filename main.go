package main

import (
	"github.com/sethvargo/go-githubactions"
)

func main() {
	fruit := githubactions.GetInput("fruit")
	githubactions.Debugf("You gave me the fruit: %v", fruit)
}
