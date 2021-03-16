import request from '@/utils/request'

export default {

    getList(query, current = 1, size = 20) {

        return request({
            url: `/article/category/search`,
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })

    },
    add(data) {
        return request({

            url: '/article/category',
            method: 'post',
            data: data

        })
    },
    getById(id) {

        return request({
            url: `/article/category/${id}`, // 反单引号 ``
            method: 'get'
        })

    },
    update(data) {
        return request({
            url: `/article/category`,
            method: 'put', // put 方式提交
            data,
        })
    },

    deleteById(id) {

        return request({

            url: `/article/category/${id}`,
            method: 'delete', // delte 方式提交

        })
    }


}
