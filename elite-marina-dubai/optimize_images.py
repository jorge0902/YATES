import os
from PIL import Image

input_dir = r"c:\Users\HP 640 G4\Downloads\yates\elite-marina-dubai\public\assets\extracted_images"
output_dir = r"c:\Users\HP 640 G4\Downloads\yates\elite-marina-dubai\public\assets\yachts_optimized"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

max_width = 1600

for filename in os.listdir(input_dir):
    if filename.endswith(".png"):
        img_path = os.path.join(input_dir, filename)
        out_filename = filename.replace(".png", ".jpg")
        out_path = os.path.join(output_dir, out_filename)
        
        try:
            with Image.open(img_path) as img:
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                    
                # Resize if too large
                if img.width > max_width:
                    ratio = max_width / float(img.width)
                    new_height = int(float(img.height) * ratio)
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
                img.save(out_path, "JPEG", quality=80, optimize=True)
                print(f"Optimized {filename} -> {out_filename}")
        except Exception as e:
            print(f"Error on {filename}: {e}")

print("Optimization complete.")
