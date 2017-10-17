import cluster from 'cluster';
import os from 'os';

const CPUs = os.cpus();
if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`)
    CPUs.forEach(() => {
        cluster.fork();
    })
    cluster.on('listening', (worker) => {
        console.log(`Cluster ${worker.process.pid} connected`);
    });
    cluster.on('disconnect', (worker) => {
        console.log(`Cluster ${worker.process.pid} disconnected`);
    });
    cluster.on('exit', (worker) => {
        console.log(`Cluster ${worker.process.pid} died`);
    })
} else {
    require('./server.js');
}