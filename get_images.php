<?php
header('Content-Type: application/json');

// 启用错误报告
error_reporting(E_ALL);
ini_set('display_errors', 1);

$images = array();
$dir = 'images/';

// 检查目录是否存在
if (!is_dir($dir)) {
    error_log("目录不存在: " . $dir);
    echo json_encode(array('error' => '图片目录不存在'));
    exit;
}

// 尝试打开目录
if ($dh = opendir($dir)) {
    while (($file = readdir($dh)) !== false) {
        if ($file != "." && $file != "..") {
            $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
            // 支持所有图片格式
            if (in_array($ext, array('jpg', 'jpeg', 'png', 'webp', 'gif'))) {
                // 只存储文件名，不包含目录路径
                $images[] = $file;
                error_log("添加图片: " . $file);
            }
        }
    }
    closedir($dh);
} else {
    error_log("无法打开目录: " . $dir);
    echo json_encode(array('error' => '无法打开图片目录'));
    exit;
}

// 检查是否找到图片
if (empty($images)) {
    error_log("未找到图片文件");
    echo json_encode(array('error' => '未找到图片文件'));
    exit;
}

// 按文件名排序
sort($images);

// 记录找到的图片数量
error_log("找到 " . count($images) . " 张图片");

// 输出JSON
echo json_encode($images);
?> 