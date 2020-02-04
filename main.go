package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
	"strings"

	gh "github.com/sethvargo/go-githubactions"
)

func main() {
	fmt.Printf("PATH: %v\n", os.Getenv("PATH"))
	td, err := ioutil.TempDir("", "")
	if err != nil {
		gh.Fatalf("Failed to create temporary directory: %v", err)
	}
	cmd := exec.Command("git", "clone", "https://github.com/vim/vim", td)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		gh.Fatalf("Failed to run %v: %v", strings.Join(cmd.Args, " "), err)
	}
	fruit := gh.GetInput("fruit")
	fmt.Printf("You gave me the fruit: %v; thank you!\n", fruit)
}
