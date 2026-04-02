import os
import fitz  # PyMuPDF
import glob
from PIL import Image
import io

source_dir = r"C:\Users\HP 640 G4\Downloads\yates\INFORMACION DEYATES"
output_dir = r"c:\Users\HP 640 G4\Downloads\yates\elite-marina-dubai\public\assets\extracted_images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def extract_largest_image_from_pdf(pdf_path, out_path):
    try:
        doc = fitz.open(pdf_path)
        largest_area = 0
        best_image = None
        best_ext = None
        
        # Look only at the first 3 pages
        for i in range(min(3, len(doc))):
            page = doc[i]
            images = page.get_images(full=True)
            for img_info in images:
                xref = img_info[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                ext = base_image["ext"]
                
                # Check resolution / dimensions roughly based on byte size or use PIL
                try:
                    img = Image.open(io.BytesIO(image_bytes))
                    area = img.width * img.height
                    if area > largest_area and area > 100000: # AT LEAST decent size
                        largest_area = area
                        best_image = img
                        best_ext = ext
                except Exception as e:
                    pass
        
        if best_image:
            # Convert to RGB if needed, save as PNG
            if best_image.mode in ("RGBA", "P"):
               best_image = best_image.convert("RGB")
            
            # Save it
            best_image.save(out_path, format="PNG", quality=90)
            print(f"SUCCESS: Extracted image {best_image.width}x{best_image.height} for {os.path.basename(pdf_path)}")
            return True
        else:
            print(f"No suitable images found in {os.path.basename(pdf_path)}")
            return False
            
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")
        return False

# Iterate over directories
for root, dirs, files in os.walk(source_dir):
    for filename in files:
        if filename.lower().endswith('.pdf'):
            pdf_path = os.path.join(root, filename)
            # Find the yacht folder name
            folder_name = os.path.basename(root)
            # Create a slug from the folder name
            slug = folder_name.replace(' ', '-').replace('.','').lower()
            out_file = os.path.join(output_dir, f"{slug}.png")
            
            # Extract
            print(f"Analyzing {pdf_path} ...")
            extract_largest_image_from_pdf(pdf_path, out_file)

print("Done extracting images.")
