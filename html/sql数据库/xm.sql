SET NAMES UTF8;
DROP DATABASE IF EXISTS xm;
CREATE DATABASE xm CHARSET=UTF8;
USE xm;
/* 用户列表 */
CREATE TABLE xm_user(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(32) NOT NULL UNIQUE,
	gender INT
);
/* 地址 */
CREATE TABLE xm_receiver_address(
	address_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	receiving_address VARCHAR(128),
	province VARCHAR(16),
	city VARCHAR(16),
	county VARCHAR(16),
	postcode CHAR(6),
	phone VARCHAR(16),
	consignee VARCHAR(16),
	tag VARCHAR(16),
	is_default TINYINT,
	FOREIGN KEY(user_id) REFERENCES xm_user(user_id)
);
/* 商品类型 */
CREATE TABLE xm_type(
	type_id INT PRIMARY KEY AUTO_INCREMENT,
	type_name VARCHAR(32)
);

/* 商品详情表 */
CREATE TABLE xm_laptop(
	product_id INT PRIMARY KEY AUTO_INCREMENT,
	type_id INT,
	title VARCHAR(128) UNIQUE NOT NULL,
	subtitle VARCHAR(128),
	price DECIMAL(10,2) DEFAULT 0,
	spec VARCHAR(32),
	pname VARCHAR(32),
	details VARCHAR(1024),
	sold INT,
	stock INT,
	is_onsale BOOLEAN,
	shelf_time BIGINT,
	FOREIGN KEY(type_id) REFERENCES xm_type(type_id)
);
/* 订单表 */
CREATE TABLE xm_order_form(
	order_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	address_id INT,
	order_time BIGINT,
	pay_time BIGINT,
	deliver_time BIGINT,
	recetived_time BIGINT,
	status INT,
	message VARCHAR(1024),
	FOREIGN KEY(user_id) REFERENCES xm_user(user_id),
	FOREIGN KEY(address_id) REFERENCES xm_receiver_address(address_id)
);
/* 用户订单详情表 */
CREATE TABLE xm_order_detail(
	detail_id INT PRIMARY KEY AUTO_INCREMENT,
	order_id INT,
	product_id INT,
	counts INT,
	FOREIGN KEY(order_id) REFERENCES xm_order_form(order_id),
	FOREIGN KEY(product_id) REFERENCES xm_laptop(product_id)
);
/* 购物车 */
CREATE TABLE xm_shopping(
	shopping_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES xm_user(user_id)
);
/* 商品详情图标 */
CREATE TABLE xm_laptop_pic(
	pic_id INT PRIMARY KEY AUTO_INCREMENT,
	product_id INT,
	sm VARCHAR(128),
	mi VARCHAR(128),
	lg VARCHAR(128),
	FOREIGN KEY(product_id) REFERENCES xm_laptop(product_id)
);
/* 轮播图保存 */
CREATE TABLE xm_rotation_chart(
	chart_id INT PRIMARY KEY AUTO_INCREMENT,
	sm VARCHAR(128),
	mi VARCHAR(128),
	lg VARCHAR(128),
	img VARCHAR(128),
	href VARCHAR(128)
);
/* 首页商品栏目表 */
CREATE TABLE xm_index_product(
	product_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(1024),
	pic VARCHAR(128),
	price DECIMAL(10,2),
	seq TINYINT
);
/*商品类型数据*/
INSERT INTO xm_type VALUES('1','手机');
INSERT INTO xm_type VALUES('2','电脑');
INSERT INTO xm_type VALUES('3','智能机器人');
INSERT INTO xm_type VALUES('4','智能家具');
/*商品详情数据*/
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('1','小米1','骁龙820处理器 / UFS 2.0 闪存','1799.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('2','小米2','十核旗舰处理器 / 全金属一体化机身','1399.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('3','小米3','5月9日-10日，下单立减100元','1799.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('4','小米4','2.5D 玻璃，金属一体化机身','1799.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('5','小米5','多彩金属 / 4100mAh 超长续航','1799.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('6','小米6','5.16早10点开售','1799.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('7','小米7','搭载澎湃S1 八核高性能处理器','1799.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('8','小米8','5月9日-20日 小米Note 2 享花呗12期分期免息','1799.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('9','小米9','暗夜之眼”超感光相机 / 无孔式超声波','1799.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('10','小米10','5月9日-20日小米MIX 享花呗12期分期免息','1799.00','旗舰版','小米手机','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('11','小米1电脑','骁龙820处理器 / UFS 2.0 闪存','2599.00','旗舰版','小米电脑','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('12','小米2电脑','骁龙820处理器 / UFS 2.0 闪存','3599.00','旗舰版','小米电脑','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('13','小米3电脑','骁龙820处理器 / UFS 2.0 闪存','2599.00','旗舰版','小米电脑','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('14','小米4电脑','骁龙820处理器 / UFS 2.0 闪存','3599.00','旗舰版','小米电脑','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('15','小米5电脑','骁龙820处理器 / UFS 2.0 闪存','4599.00','旗舰版','小米电脑','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('16','小米6电脑','骁龙820处理器 / UFS 2.0 闪存','2599.00','旗舰版','小米电脑','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('17','小米7电脑','骁龙820处理器 / UFS 2.0 闪存','1799.00','旗舰版','小米电脑','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('18','小米1智能家具','米家互联网跨界烟灶套装','1999.00','旗舰版','小米智能家具','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('19','小米2智能家具','米家智能晾衣机','899.00','旗舰版','小米智能家具','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('20','小米1智能机器人','米家扫拖一体机器人','1599.00','旗舰版','小米智能机器人','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('21','小米2智能机器人','米家拖地机器人1c','1099.00','旗舰版','小米智能机器人','xijie','100','2000','0','2020-10-1');
INSERT INTO xm_laptop(product_id,title,subtitle,price,spec,pname,details,sold,stock,is_onsale,shelf_time) VALUES('22','小米3智能机器人','米家扫地机器人1s','1599.00','旗舰版','小米智能机器人','xijie','100','2000','0','2020-10-1');
