import { get, post } from '@/utils/axios';
import * as API from './url';

/**
 * 确认打印信息
 */
export const verifyOrder = ({ pointID, files, money, ...dispatching }) => post(
  API.VERIFY, { pointID, files, money, ...dispatching }
);

/**
 * 获取订单详细信息
 * @param {string} orderID - 订单号
 * @return {OrderDetail} - 返回订单对象
 */
export const getOrder = ({ orderID }) => get(API.ORDER_DETAIL, { orderID });

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
export const getOrders = ({ limits, page, type }) => get(API.ORDERS, { limits, page, type });

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
export const amountOrders = () => get(API.ORDERS_AMOUNT);