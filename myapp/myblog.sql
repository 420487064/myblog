-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        8.0.29 - MySQL Community Server - GPL
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- 导出 myblog 的数据库结构
CREATE DATABASE IF NOT EXISTS `myblog` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `myblog`;

-- 导出  表 myblog.businesses 结构
CREATE TABLE IF NOT EXISTS `businesses` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '商家编号',
  `name` char(50) NOT NULL DEFAULT '0' COMMENT '商家名称',
  `address` char(50) NOT NULL DEFAULT '0' COMMENT '商家地址',
  `phone` char(50) NOT NULL DEFAULT '' COMMENT '联系电话',
  `password` char(50) NOT NULL DEFAULT '' COMMENT '登录密码',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商家表';

-- 正在导出表  myblog.businesses 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `businesses` DISABLE KEYS */;
INSERT INTO `businesses` (`id`, `name`, `address`, `phone`, `password`) VALUES
	(1, '茶之都', '学友楼地超', '123', '123'),
	(2, '贡茶', '五坡食堂2楼', '124', '124'),
	(3, '斑马书局', '二坡电信营业厅隔壁', '125', '125');
/*!40000 ALTER TABLE `businesses` ENABLE KEYS */;

-- 导出  表 myblog.customers 结构
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '顾客编号',
  `name` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '名称',
  `phone` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '电话',
  `password` char(50) NOT NULL DEFAULT '' COMMENT '密码',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='消费者';

-- 正在导出表  myblog.customers 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`id`, `name`, `phone`, `password`) VALUES
	(1, '白白', '123456', '123456'),
	(2, 'kk', '666', '666'),
	(3, 'cc', '111', '111');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- 导出  表 myblog.goods 结构
CREATE TABLE IF NOT EXISTS `goods` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '商品编号',
  `name` char(50) NOT NULL DEFAULT '0' COMMENT '商品名称',
  `image` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '0' COMMENT '商品图片',
  `price` char(50) NOT NULL DEFAULT '0' COMMENT '商品价格',
  `business_id` int NOT NULL COMMENT '商店编号',
  `type_id` int NOT NULL COMMENT '商品类型',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品表';

-- 正在导出表  myblog.goods 的数据：~32 rows (大约)
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` (`id`, `name`, `image`, `price`, `business_id`, `type_id`) VALUES
	(1, '黑糖珍珠绿研奶茶', '0', '7', 1, 1),
	(2, '黑糖珍珠红玉奶茶', '0', '7', 1, 1),
	(3, '黑糖珍珠乌龙奶茶', '0', '7', 1, 1),
	(4, '鲜芒果酸奶', '0', '12', 1, 3),
	(5, '芋圆芋泥红玉奶茶', '0', '8', 1, 2),
	(6, '芋圆芋泥茉莉奶绿', '0', '8', 1, 2),
	(7, '芋圆芋泥乌龙奶茶', '0', '8', 1, 2),
	(8, '草莓酸奶啵啵', '0', '13', 1, 3),
	(9, '杨枝甘露酸奶', '0', '13', 1, 3),
	(10, '火龙果酸奶', '0', '12', 1, 3),
	(11, '杨枝甘露', '0', '12', 1, 4),
	(12, '霸气橙子杯', '0', '10', 1, 4),
	(13, '爆芒百香果', '0', '10', 1, 4),
	(14, '芋泥波波奶茶', '0', '16', 2, 5),
	(15, '格雷三兄弟', '0', '16', 2, 5),
	(16, '金砖奶茶', '0', '12', 2, 5),
	(17, '大桶鲜果茶1L装', '0', '13', 2, 6),
	(18, '香柠凤梨杯', '0', '13', 2, 6),
	(19, '葡萄椰椰冻', '0', '11', 2, 6),
	(20, '芝士莓莓', '0', '16', 2, 7),
	(21, '奶盖格雷', '0', '14', 2, 7),
	(22, '白桃乌龙奶茶', '0', '8', 3, 8),
	(23, '伯爵奶茶', '0', '8', 3, 8),
	(24, '茉莉奶茶', '0', '8', 3, 8),
	(25, '乌龙奶茶', '0', '9', 3, 8),
	(26, '金桔柠檬', '0', '8', 3, 9),
	(27, '苦瓜柠檬茶', '0', '13', 3, 9),
	(28, '一杯鸭屎香', '0', '12', 3, 9),
	(29, '拿铁咖啡', '0', '12', 3, 10),
	(30, '冰美式', '0', '10', 3, 10),
	(32, '111', '0', '3', 2, 3);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

-- 导出  表 myblog.orders 结构
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '订单编号',
  `customer_id` int NOT NULL DEFAULT '0' COMMENT '顾客编号',
  `good_id` int NOT NULL DEFAULT '0' COMMENT '商品编号',
  `ice_level` char(50) NOT NULL DEFAULT '0' COMMENT '冰度',
  `sugar_level` char(50) NOT NULL DEFAULT '0' COMMENT '糖分',
  `number` char(50) NOT NULL DEFAULT '0' COMMENT '数量',
  `cost` char(50) NOT NULL DEFAULT '0' COMMENT '消费额',
  `state` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '已接单' COMMENT '订单状态',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '下单时间',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='订单表';

-- 正在导出表  myblog.orders 的数据：~5 rows (大约)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`id`, `customer_id`, `good_id`, `ice_level`, `sugar_level`, `number`, `cost`, `state`, `time`) VALUES
	(1, 1, 1, '少冰', '少糖', '2', '14', '已完成', '2022-05-16 00:02:02'),
	(4, 2, 2, '少冰', '少糖', '1', '7', '已完成', '2022-05-16 17:39:49'),
	(2, 1, 12, '少冰', '少糖', '1', '10', '已完成', '2022-05-16 17:29:58'),
	(3, 2, 1, '少冰', '少糖', '1', '7', '已完成', '2022-05-16 17:37:54'),
	(5, 1, 3, '少冰', '少糖', '1', '7', '已退款', '2022-05-16 17:43:53'),
	(6, 1, 23, '少冰', '少糖', '3', '24', '已接单', '2022-05-16 18:02:01'),
	(12, 1, 27, '少冰', '全糖', '1', '13', '已接单', '2022-05-16 18:14:34');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- 导出  视图 myblog.order_details 结构
-- 创建临时表以解决视图依赖性错误
CREATE TABLE `order_details` (
	`订单编号` INT(10) NOT NULL COMMENT '订单编号',
	`商家名称` CHAR(50) NOT NULL COMMENT '商家名称' COLLATE 'utf8mb4_0900_ai_ci',
	`商品名称` CHAR(50) NOT NULL COMMENT '商品名称' COLLATE 'utf8mb4_0900_ai_ci',
	`数量` CHAR(50) NOT NULL COMMENT '数量' COLLATE 'utf8mb4_0900_ai_ci',
	`总额` CHAR(50) NOT NULL COMMENT '消费额' COLLATE 'utf8mb4_0900_ai_ci',
	`订单状态` CHAR(50) NOT NULL COMMENT '订单状态' COLLATE 'utf8mb4_0900_ai_ci',
	`客户姓名` CHAR(50) NOT NULL COMMENT '名称' COLLATE 'utf8mb4_0900_ai_ci',
	`电话` CHAR(50) NOT NULL COMMENT '电话' COLLATE 'utf8mb4_0900_ai_ci',
	`时间` TIMESTAMP NOT NULL COMMENT '下单时间'
) ENGINE=MyISAM;

-- 导出  表 myblog.type 结构
CREATE TABLE IF NOT EXISTS `type` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '类型编号',
  `name` char(50) NOT NULL COMMENT '类型名称',
  `business_id` int NOT NULL COMMENT '商店编号',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品类型';

-- 正在导出表  myblog.type 的数据：~10 rows (大约)
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` (`id`, `name`, `business_id`) VALUES
	(1, '手抄作业', 1),
	(2, '芋你相遇', 1),
	(3, '没钱好心酸', 1),
	(4, '水果和茶', 1),
	(5, '现调奶茶', 2),
	(6, '鲜做果茶', 2),
	(7, '芝士奶盖', 2),
	(8, '奶茶车间', 3),
	(9, '柠檬茶实验室', 3),
	(10, '咖啡车间', 3);
/*!40000 ALTER TABLE `type` ENABLE KEYS */;

-- 导出  视图 myblog.order_details 结构
-- 移除临时表并创建最终视图结构
DROP TABLE IF EXISTS `order_details`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `order_details` AS select `orders`.`id` AS `订单编号`,`businesses`.`name` AS `商家名称`,`goods`.`name` AS `商品名称`,`orders`.`number` AS `数量`,`orders`.`cost` AS `总额`,`orders`.`state` AS `订单状态`,`customers`.`name` AS `客户姓名`,`customers`.`phone` AS `电话`,`orders`.`time` AS `时间` from (((`businesses` join `goods` on((`businesses`.`id` = `goods`.`business_id`))) join `orders` on((`goods`.`id` = `orders`.`good_id`))) join `customers` on((`orders`.`customer_id` = `customers`.`id`)));

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
