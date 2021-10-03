import Prismic from '@prismicio/client';

const apiEndpoint = 'https://louiseportfolio.cdn.prismic.io/api/v2'
const accessToken = 'MC5ZT0hyV1JJQUFDRUFyM2Zk.GO-_vSzvv73vv73vv73vv71JZe-_vT_vv73vv71877-9fe-_ve-_vSDvv73vv73vv70DQe-_ve-_vRvvv703Le-_vWs'
const Client = Prismic.client(apiEndpoint, {accessToken});


function prismicService() {

    const getWork = ()=>{
        return Client.query(
            Prismic.Predicates.at('document.type', 'work')
          ).then(resp=> resp.results);
    }

    return {
        getWork: getWork
    }
}

export default prismicService;
