import { get, post } from '@/utils/fetch';
import * as API from './url';
import statusIntercept from './wrapper';
const _get = statusIntercept(get);
const _post = statusIntercept(post);

/**
 * 获取校园地址
 * @return {Addresses} - 地址池对象
 */
export const getAddresses = () => _get(API.ADDRESS);

/**
 * 获取地址对应打印点信息
 * @param {string} ID - 具体地址 id
 * @return {Point[]} - 打印点对象数组
 */
export const getPoints = ID => _get(API.POINTS, { ID });

/**
 * 检验通过MD5检验文档是否存在, 避免重复上传，并获取文档页数
 * @param {string} md5 - 文件 MD5 值，全大写
 * @param {string} name - 文件名
 * @return {object} - 页面信息对象
 * @property {string} state - ("EXISTED" | "NO_EXIST") 表示文件是否存在
 * @property {number} pageCount - 文件单页总数
 * @property {boolean} direction - 排版方向是否为竖版, true 表示竖版
 */
export const getPage = ({ md5, name }) => _get(API.PAGE, { md5, name });

/**
 * 获取云端空间的目标上传地址及权限
 * @param {string} md5 - 文件 MD5 值，全大写
 * @param {string} name - 文件名
 * @return {{url: string}} - 文件上传地址。地址带协议名，如 https://xxxx/xxx
 */
export const getFileURL = ({ md5, name }) => _get(API.FILEURL, { md5, name });

/**
 * 上传文件
 * @param {FILE} file - FILE 文件对象
 */
export const uploadFile = file => post(API.UPLOAD, file);

/**
 * 获取打印预览图片
 * @param {string} md5 - 文件 MD5 值，全大写
 * @param {number} page - 需要获取第多少页的打印预览图片
 * @param {string} size - 打印页面大小 'A4', 'A3' 等选项
 * @param {number} row - 多合一打印下每行几份
 * @param {number} col - 多合一打印下每列几份
 * @return {{url: string}} - 打印预览图片 url （图片总为彩色）
 */
export const getPreview = ({ md5, page, size, row, col }) => _get(API.PREVIEW, { md5, page, size, row, col });

/**
 * 用户基本信息对象
 * @typedef UserBase
 * @type {object}
 * @property {string} username - 用户账号
 * @property {string} nickname - 用户姓名昵称
 * @property {string} uid - 用户 ID
 * @property {string} access - 身份权限角色，"user" | "vendor" | "manager"，对应 个人，商家 ，管理者
 * @property {string} avatar - 用户头像图片 url
 * @property {string} address - 用户默认配送文件地址
 * @property {string[]} lastPointAddress - 最后一次下单的打印点位置
 * @property {string} lastPoint - 最后一次下单的打印点 ID
 */

/**
 * 用户详细信息对象
 * @typedef UserInfo
 * @type {object}
 * @property {string} username - 用户账号
 * @property {string} nickname - 用户姓名昵称
 * @property {string} uid - 用户 ID
 * @property {string} phone - 用户手机号，大陆区应为 3+11 位
 * @property {string} avatar - 用户头像图片 url
 * @property {string} address - 用户配送文件地址
 * @property {date} createDate - 创建时间戳，Unix timestamp，毫秒
 * @property {object} library - 文库信息对象
 * @property {number} library.illegalCount - 上传非法次数
 * @property {number} library.uploadFileCount - 上传文件次数
 * @property {number} library.acceptFileCount - 上传成功次数
 * @property {number} library.deleteFileCount - 删除文件次数
 * @property {object} school - 所在学校位置信息
 * @property {string} school.city - 城市
 * @property {string} school.name - 学校名
 * @property {string} school.campus - 校区名
 */

/**
 * 用户账号登录
 * @param {string} code - 手机号国际区号
 * @param {string} username - 用户名
 * @param {string} password - 用户密码，明文
 * @return {UserBase} - 用户基本信息对象
 */
export const login = ({ code, username, password }) => _post(API.LOGIN, { code, username, password });

/**
 * 用户注销
 */
export const signout = () => _post(API.SIGNOUT);

/**
 * 检测登录状态
 * 返回字符串时 "LOGINING" 表示未登录前的各种状态（未登录 | 正在登录 | 正在授权）
 * 已登录时返回用户基本信息对象
 * @return {(string | UserBase)}
 */
export const checkLogin = () => _get(API.LOGIN_STATE);

/**
 * 获取登录二维码图片地址
 * @return {{url: string}} - 用于获取二维码图片的 url
 */
export const getLoginQR = () => _get(API.QR_CODE);

/**
 * 判断账户名是否可注册
 * @param {string} code - 手机号国际区号
 * @param {string} username - 用户账户名
 */
export const isRegisterable = ({ code, username }) => _get(API.REGISTERABLE, { code, username });

/**
 * 请求发送用户(注册 | 登录)短信验证码
 * @param {string} code - 手机号国际区号
 * @param {string} username - 用户名（必须为手机号）
 */
export const requireSMS = ({ code, username }) => _post(API.SMS_CAPTCHA, { code, username });

/**
 * 完成用户注册
 * @param {string} code - 手机号国际区号
 * @param {string} username - 用户名
 * @param {string} password - 账户密码
 * @param {string} nickname - 用户姓名昵称
 * @param {string} captcha - 验证码
 * @return {UserBase}
 */
export const signup = ({ code, username, password, nickname, captcha }) => _post(API.SIGNUP, { code, username, password, nickname, captcha });

/**
 * 获取用户详细信息
 * @return {UserInfo} - 返回用户信息对象
 */
export const getUserInfo = () => _get(API.USER_INFO);

/**
 * 确认打印信息
 */
export const verifyOrder = ({ pointID, files, money, ...dispatching }) => _post(
  API.VERIFY, { pointID, files, money, ...dispatching }
);

/**
 * 获取订单详细信息
 * @param {string} orderID - 订单号
 * @return {OrderDetail} - 返回订单对象
 */
export const getOrder = ({ orderID }) => _get(API.ORDER_DETAIL, { orderID });

/**
 * 获取订单基本信息列表
 * @param {number} limits - 查询列表分页中限制每页的最大条数
 * @param {number} page - 表示查询第几分页，从 1 开始
 * @param {string} type - 表示限制查询某种状态类型的订单，type 有 6 种，具体状态如下
 * "ALL"     表示所有状态类型
 * "PAYING"  未支付，正在等待支付
 * "PAID"    已完成支付，但未打印，正在等待打印
 * "PRINTED" 已完成打印，但未取件，等待配送或取件
 * "FINISH"  完成取件或已取消订单
 * "REFUND"  退款中或已退款
 * @return {OrderBase[]} - 返回订单基本信息对象数组
 */
export const getOrders = ({ limits, page, type }) => _get(API.ORDERS, { limits, page, type });

/**
 * 用于获取不同状态所有订单数量的统计
 * @return {object}
 * @property {number} ALL - 该项状态中订单的数量，同 getOrders type 中类型
 * @property {number} PAYING
 * @property {number} PAID
 * @property {number} PRINTED
 * @property {number} FINISH
 * @property {number} REFUND
 */
export const amountOrders = () => _get(API.ORDERS_AMOUNT);

/**
 * 获取订单支付通道
 * @param {string} orderID - 订单号
 * @param {'WXPAY' | 'ALIPAY'} payway - 支付方式，微信为 "WXPAY"，支付宝为 "ALIPAY"
 * @return {string} QRCode - 对微信支付，返回用于获取二维码图片的地址
 * @return {string} payform - 对支付宝，返回用于提交支付宝表单的 HTML 字符串
 */
export const getPayment = ({ orderID, payway }) => _get(API.PAYMENT, { orderID, payway });

/**
 * 查询订单交易状态
 * @param {string} orderID - 订单号
 * @param {'WXPAY' | 'ALIPAY'} payway - 支付方式，微信为 "WXPAY"，支付宝为 "ALIPAY"
 * @return {string} state - 当前交易状态, "PAYING" 正在支付, "PAID" 已完成支付,
 * "CANCEL" 取消订单, "REFUNDING" 正在退款, "REFUNDED" 已退款
 */
export const getTrade = ({ orderID, payway }) => _get(API.TRADE, { orderID, payway });
