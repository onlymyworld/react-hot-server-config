import doXMLRequest from './xhr.js'

export const getServer =(data)=>doXMLRequest('./server.js',data,'GET');