extern crate cfg_if;
extern crate wasm_bindgen;
extern crate chip8;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;
use chip8::cpu::Cpu;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
pub struct Emulator {
  cpu: Cpu
}

#[wasm_bindgen]
impl Emulator {
  pub fn new() -> Emulator {
    Emulator {
      cpu: Cpu::new()
    }
  }

  pub fn tick(&mut self) {
    self.cpu.execute_cycle();
  }

  pub fn display(&mut self) -> bool {
    self.cpu.display.memory[0]
  }
}
