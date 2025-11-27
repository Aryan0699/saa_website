"""
Image Compression Script for Gallery Optimization
This script compresses large gallery images to reduce file sizes while maintaining quality.
Target: Reduce images over 500KB to under 300KB with 85% quality.
"""

import os
from PIL import Image
import glob

# Configuration
ASSETS_DIR = "src/assets"
TARGET_SIZE_KB = 300
QUALITY = 85
MAX_DIMENSION = 1920  # Max width or height

def get_file_size_kb(filepath):
    """Get file size in KB"""
    return os.path.getsize(filepath) / 1024

def compress_image(input_path, output_path, quality=85, max_dimension=1920):
    """
    Compress image with quality setting and max dimension
    """
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (handles RGBA, etc.)
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if image is too large
            width, height = img.size
            if width > max_dimension or height > max_dimension:
                if width > height:
                    new_width = max_dimension
                    new_height = int((max_dimension / width) * height)
                else:
                    new_height = max_dimension
                    new_width = int((max_dimension / height) * width)
                
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                print(f"  Resized from {width}x{height} to {new_width}x{new_height}")
            
            # Save with optimization
            img.save(output_path, 'JPEG', quality=quality, optimize=True, progressive=True)
            
            return True
    except Exception as e:
        print(f"  Error compressing {input_path}: {e}")
        return False

def main():
    """Main compression function"""
    # Gallery image patterns
    patterns = [
        "dashak_*.JPG",
        "dashak_*.jpg",
        "convocation_*.jpg",
        "farewell_*.jpeg",
        "alt_*.jpg"
    ]
    
    total_saved = 0
    processed = 0
    
    print("=" * 60)
    print("Gallery Image Compression Tool")
    print("=" * 60)
    print(f"Target: Reduce images over 500KB to ~{TARGET_SIZE_KB}KB")
    print(f"Quality: {QUALITY}%, Max dimension: {MAX_DIMENSION}px")
    print("=" * 60)
    
    for pattern in patterns:
        files = glob.glob(os.path.join(ASSETS_DIR, pattern))
        
        for filepath in files:
            original_size = get_file_size_kb(filepath)
            
            # Only compress files larger than 500KB
            if original_size > 500:
                print(f"\nProcessing: {os.path.basename(filepath)}")
                print(f"  Original size: {original_size:.2f} KB")
                
                # Create backup
                backup_path = filepath + ".backup"
                if not os.path.exists(backup_path):
                    os.rename(filepath, backup_path)
                    
                    # Compress
                    if compress_image(backup_path, filepath, QUALITY, MAX_DIMENSION):
                        new_size = get_file_size_kb(filepath)
                        saved = original_size - new_size
                        reduction = (saved / original_size) * 100
                        
                        print(f"  New size: {new_size:.2f} KB")
                        print(f"  Saved: {saved:.2f} KB ({reduction:.1f}% reduction)")
                        
                        total_saved += saved
                        processed += 1
                        
                        # Remove backup if compression successful
                        if new_size < original_size:
                            os.remove(backup_path)
                            print(f"  ✓ Compressed successfully!")
                        else:
                            # Restore if new file is larger
                            os.remove(filepath)
                            os.rename(backup_path, filepath)
                            print(f"  ✗ Compression ineffective, restored original")
                    else:
                        # Restore on error
                        if os.path.exists(backup_path):
                            os.rename(backup_path, filepath)
                else:
                    print(f"  Backup already exists, skipping...")
    
    print("\n" + "=" * 60)
    print("Compression Summary")
    print("=" * 60)
    print(f"Images processed: {processed}")
    print(f"Total space saved: {total_saved:.2f} KB ({total_saved/1024:.2f} MB)")
    print("=" * 60)
    print("\nNote: Original files are backed up with .backup extension")
    print("If satisfied with results, you can delete .backup files")

if __name__ == "__main__":
    main()
