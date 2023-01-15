# web-assembly-rust-webpack
How to create a **Rust** library with **WebAssembly** and **Webpack**.

---
## Requirements

- `npm`
- `node`
- `rust`
- `cargo`
- `wasm-pack`

---
## Install the repository

1. Clone the repository
```sh
git clone https://github.com/jimj-tutorials/web-assembly-rust-webpack.git
```

2. Install `npm` dependencies
```sh
npm install
```

3. Watch `src` directory and library files
```sh
npm run start
```

4. Build `src` directory and library files for **production**
```sh
npm run build
```

---
## Directory structure
```sh
/(root)
  /src # app (JavaScript)
  /lib # lib (Rust)
  /static # static files (e.g index.html)
```

---
## Documentation and links

- [`Rust documentation`](https://doc.rust-lang.org/book/)
- [`Rust with WebAssembly documentation`](https://rustwasm.github.io/docs/wasm-pack/)
- [`WebPack documentation`](https://webpack.js.org/concepts/)
- [`@wasm-tool/wasm-pack-plugin documentation`](https://github.com/wasm-tool/wasm-pack-plugin)
