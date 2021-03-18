/**
 * 测试接口
 */
import request from '@/utils/request'

/**
 * @desc 测试GET
 */
export function testget(page, limit) {
    return request({
        url: 'https://cnodejs.org/api/v1/topics',
        method: 'get',
        params: { page, limit }
    })
}

