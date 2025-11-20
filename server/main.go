package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	root := getenv("STATIC_ROOT", "/app")
	addr := getenv("ADDR", ":8996")

	// Serve static files with SPA fallback to index.html
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		p := filepath.Clean(r.URL.Path)
		candidate := filepath.Join(root, p)
		if info, err := os.Stat(candidate); err == nil && !info.IsDir() {
			http.ServeFile(w, r, candidate)
			return
		}
		// Fallback to index.html for client-side routing
		fallback := filepath.Join(root, "index.html")
		http.ServeFile(w, r, fallback)
	})

	log.Printf("Static server listening on %s, root=%s", addr, root)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatal(err)
	}
}

func getenv(k, def string) string {
	if v := os.Getenv(k); v != "" {
		return v
	}
	return def
}
