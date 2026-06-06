-- Create contacts table
CREATE TABLE IF NOT EXISTS `contacts` (
    `id` VARCHAR(50) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(50) DEFAULT NULL,
    `service` VARCHAR(100) NOT NULL,
    `message` TEXT NOT NULL,
    `date` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `idx_date` (`date` DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create email_jobs queue table
CREATE TABLE IF NOT EXISTS `email_jobs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `contact_id` VARCHAR(50) NOT NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'pending',
    `attempts` INT NOT NULL DEFAULT 0,
    `error_message` TEXT DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`contact_id`) REFERENCES `contacts`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create footfall table
CREATE TABLE IF NOT EXISTS `footfall` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `visitor_id` VARCHAR(100),
    `session_id` VARCHAR(100),
    `ip_address` VARCHAR(100),
    `country` VARCHAR(100),
    `city` VARCHAR(100),
    `browser` VARCHAR(100),
    `os` VARCHAR(100),
    `device_type` VARCHAR(100),
    `screen_resolution` VARCHAR(50),
    `page_url` TEXT,
    `referrer` TEXT,
    `user_agent` TEXT,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_created_at` (`created_at` DESC),
    INDEX `idx_visitor` (`visitor_id`),
    INDEX `idx_session` (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
