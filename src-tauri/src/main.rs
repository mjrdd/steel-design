#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

use tauri::{ WindowBuilder, WindowUrl };

fn main() {
	tauri::Builder
		::default()
		.setup(|app| {
			let _main = WindowBuilder::new(app, "main".to_string(), WindowUrl::App("/".into()))
				.title("Steel Design")
				.maximized(true)
				.resizable(true)
				.build()
				.expect("Unable to create window");

			Ok(())
		})
		.run(tauri::generate_context!())
		.expect("error while running tauri application");
}