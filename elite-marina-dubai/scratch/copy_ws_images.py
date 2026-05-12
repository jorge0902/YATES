import os
import shutil

src_dir = r"C:\Users\HP 640 G4\Downloads\imagenes de deporte acuatico"
dest_dir = r"c:\Users\HP 640 G4\Downloads\yates\elite-marina-dubai\public\assets\watersports"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

files = [f for f in os.listdir(src_dir) if f.lower().endswith(('.jpeg', '.jpg', '.png'))]
files.sort() # Ensure consistent ordering

for i, filename in enumerate(files):
    src_path = os.path.join(src_dir, filename)
    dest_filename = f"ws-{i+1}.jpeg"
    dest_path = os.path.join(dest_dir, dest_filename)
    shutil.copy2(src_path, dest_path)
    print(f"Copied {filename} to {dest_filename}")
