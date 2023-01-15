use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> JsValue {
    JsValue::from(
        format!("Hello World from Rust {}", name)
    )
}
