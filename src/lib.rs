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

  pub fn decrement_timers(&mut self) {
    self.cpu.decrement_timers();
  }

  pub fn load(&mut self, data: &[u8]) {
    self.cpu.load(data);
  }

  pub fn height(&self) -> usize {
    chip8::display::HEIGHT
  }

  pub fn width(&self) -> usize {
    chip8::display::WIDTH
  }

  pub fn pixels(&self) -> *const bool {
    self.cpu.display.memory.as_ptr()
  }

  pub fn key_down(&mut self, key: u8) {
    self.cpu.keypad.key_down(key);
  }

  pub fn key_up(&mut self, key: u8) {
    self.cpu.keypad.key_up(key);
  }
}
