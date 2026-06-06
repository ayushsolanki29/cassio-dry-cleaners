<?php
header("Content-Type: text/plain; charset=utf-8");
echo "=== Cassio Backend One-Click Installer ===\n\n";

$vendorDir = __DIR__ . '/vendor';
if (file_exists($vendorDir . '/phpmailer/PHPMailer.php')) {
    echo "Dependencies are already installed in /vendor.\n";
    exit;
}

// Create directories if they don't exist
if (!file_exists($vendorDir . '/phpmailer')) {
    mkdir($vendorDir . '/phpmailer', 0755, true);
}

// PHPMailer raw source files from GitHub
$files = [
    'Exception.php' => 'https://raw.githubusercontent.com/PHPMailer/PHPMailer/v6.9.1/src/Exception.php',
    'PHPMailer.php' => 'https://raw.githubusercontent.com/PHPMailer/PHPMailer/v6.9.1/src/PHPMailer.php',
    'SMTP.php'      => 'https://raw.githubusercontent.com/PHPMailer/PHPMailer/v6.9.1/src/SMTP.php'
];

foreach ($files as $filename => $url) {
    echo "Downloading {$filename}...\n";
    $content = @file_get_contents($url);
    if ($content === false) {
        echo "ERROR: Failed to download {$filename} from GitHub. Please check your internet connection.\n";
        exit;
    }
    
    file_put_contents($vendorDir . '/phpmailer/' . $filename, $content);
}

echo "Generating custom vendor/autoload.php loader...\n";
$autoloadContent = <<<PHP
<?php
// Custom autoloader for PHPMailer (pure PHP setup)
require_once __DIR__ . '/phpmailer/Exception.php';
require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';
PHP;
file_put_contents($vendorDir . '/autoload.php', $autoloadContent);

echo "\n=== SUCCESS ===\nDependencies installed successfully! You can now use the backend.";
