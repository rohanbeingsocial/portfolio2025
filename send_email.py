from PIL import Image
import pillow_heif
import os

def convert_heic_to_png(heic_filepath, png_filepath):
    try:
        heif_file = pillow_heif.open_heif(heic_filepath)
        image = Image.frombytes(
            heif_file.mode,
            heif_file.size,
            heif_file.data,
            "raw",
            heif_file.mode,
            heif_file.stride,
        )
        image.save(png_filepath, "PNG")
        print(f"Converted '{heic_filepath}' to '{png_filepath}'")
    except Exception as e:
        print(f"Error converting '{heic_filepath}': {e}")

def process_directory(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(".heic"):
            heic_filepath = os.path.join(directory, filename)
            png_filename = os.path.splitext(filename)[0] + ".png"
            png_filepath = os.path.join(directory, png_filename)
            convert_heic_to_png(heic_filepath, png_filepath)

if __name__ == "__main__":
    directory_path = "."  # Current directory
    process_directory(directory_path)