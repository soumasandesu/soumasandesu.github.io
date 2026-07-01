const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define your source and output directories
const SOURCE_DIR = path.join(__dirname, '../public/cos-img');
const OUTPUT_DIR = path.join(__dirname, '../public/cos-img-thumbnails');

/**
 * Recursively walks through directories, mirrors structure, and processes images.
 */
function processDirectory(currentSourceDir, currentOutputDir) {
    // Ensure the current output subdirectory exists
    if (fs.existsSync(currentOutputDir)) {
        fs.rmdirSync(currentOutputDir, { recursive: true });
    }
    fs.mkdirSync(currentOutputDir, { recursive: true });

    // Read all items in the current source directory
    const items = fs.readdirSync(currentSourceDir);

    items.forEach((item) => {
        const sourcePath = path.join(currentSourceDir, item);
        const outputPath = path.join(currentOutputDir, item);
        const stat = fs.statSync(sourcePath);

        if (stat.isDirectory()) {
            // If it's a folder, dive deeper recursively
            processDirectory(sourcePath, outputPath);
        } else if (stat.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(item)) {
            // If it's a supported image, generate the thumbnail
            sharp(sourcePath)
                .resize({
                    width: 400,       // Maximum allowed width
                    height: 400,      // Maximum allowed height
                    fit: 'inside',    // Fits the entire image inside the box without cropping
                    withoutEnlargement: true // Prevents small images from blurring if they are already smaller than 400x400
                })
                .toFile(outputPath)
                .then(() => {
                    // Creates a clean readable log relative to your source root
                    const relativeLogPath = path.relative(SOURCE_DIR, sourcePath);
                    console.log(`Generated thumbnail: ${relativeLogPath}`);
                })
                .catch((err) => console.error(`Error processing ${item}:`, err));
        }
    });
}

// Start the recursive execution
console.log('Starting recursive thumbnail generation...');
processDirectory(SOURCE_DIR, OUTPUT_DIR);
