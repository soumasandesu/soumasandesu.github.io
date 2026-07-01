const fs = require('fs');
const path = require('path');

const sharp = require('sharp');

/**
 * Recursively walks through directories, mirrors structure, and processes images.
 */
function processDirectory(currentSourceDir, currentOutputDir, maxWidth, maxHeight) {
    if (fs.existsSync(currentOutputDir)) {
        fs.rmdirSync(currentOutputDir, { recursive: true });
    }
    fs.mkdirSync(currentOutputDir, { recursive: true });

    const items = fs.readdirSync(currentSourceDir);

    items.forEach((item) => {
        const sourcePath = path.join(currentSourceDir, item);
        const outputPath = path.join(currentOutputDir, item);
        const stat = fs.statSync(sourcePath);

        if (stat.isDirectory()) {
            // If it's a folder, dive deeper recursively
            processDirectory(sourcePath, outputPath, maxWidth, maxHeight);
        } else if (stat.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(item)) {
            // If it's a supported image, generate the thumbnail
            sharp(sourcePath)
                .resize({
                    width: maxWidth,
                    height: maxHeight,
                    fit: 'inside',
                    withoutEnlargement: true,
                })
                .toFile(outputPath)
                .then(() => {
                    const relativeLogPath = path.relative(SOURCE_DIR, sourcePath);
                    console.log(`Generated ${maxWidth}px * ${maxHeight}px thumbnail: ${relativeLogPath}`);
                })
                .catch((err) => console.error(`Error processing ${item}:`, err));
        }
    });
}

// ---

const SOURCE_DIR = path.join(__dirname, '../_public/cos-img');
console.log('Starting recursive thumbnail generation...');
processDirectory(SOURCE_DIR, path.join(__dirname, '../public/cos-img-400'), 400, 400);
processDirectory(SOURCE_DIR, path.join(__dirname, '../public/cos-img-2048'), 2048, 2048);
