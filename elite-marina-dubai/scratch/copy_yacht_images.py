import os
import shutil

def copy_yacht_images(src_dir, dest_subdir):
    base_dest = r"c:\Users\HP 640 G4\Downloads\yates\elite-marina-dubai\public\images\yachts"
    target_dir = os.path.join(base_dest, dest_subdir)
    
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
        print(f"Created directory: {target_dir}")
    
    files = [f for f in os.listdir(src_dir) if f.lower().endswith(('.jpeg', '.jpg', '.png'))]
    files.sort()
    
    if not files:
        print(f"No images found in {src_dir}")
        return []

    # First image as principal
    principal_src = os.path.join(src_dir, files[0])
    shutil.copy2(principal_src, os.path.join(target_dir, "principal.jpeg"))
    print(f"Copied principal: {files[0]}")
    
    gallery_paths = []
    # Rest as gallery
    for i, filename in enumerate(files[1:], 1):
        src_path = os.path.join(src_dir, filename)
        dest_filename = f"gallery-{i}.jpeg"
        shutil.copy2(src_path, os.path.join(target_dir, dest_filename))
        gallery_paths.append(f"/images/yachts/{dest_subdir}/{dest_filename}")
        print(f"Copied gallery-{i}: {filename}")
        
    return gallery_paths

# 58ft Yacht
copy_yacht_images(r"C:\Users\HP 640 G4\Downloads\Highseas yacht58", "high-seas-yacht-58-ft")

# 98ft Yacht
copy_yacht_images(r"C:\Users\HP 640 G4\Downloads\Highseas yacht98feet", "high-seas-yacht-98-ft")
