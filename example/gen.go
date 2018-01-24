package example

//go:generate protoc -I . service.proto --twirp_out=. --go_out=. --python_out=. --twirp_python_out=. --js_out=import_style=commonjs,binary:./browser --twirp_js_out=./browser
