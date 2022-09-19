# coding:utf-8
# by 黄武 20220725
"""
规则说明：
1、所有命令使用nohup，如
 nohup /usr/local/tomcat/tomcat7.0_jdk1.7_8086/AutoUpdate/updateShell.sh >/usr/local/tomcat/tomcat7.0_jdk1.7_8086/AutoUpdate/updateShell.log 2>&1
"""
import paramiko
import time
# ----------------------变量定义start-----------------------
host = {"host": "192.168.8.35", "port": 22, "username": "tester", "pwd": "Zjport@123"}

# 服务路径，注意后面没有"/"
server_path = "/usr/local/mystatic/slc/"
#服务名称
server_name='slc-portal-web'
# 下载文件路径
application_url = 'http://192.168.8.231:18081/slc-portal-huangwu/slc-portal-web.zip'


# ----------------------变量定义end-------------------------
class SSHConnection(object):

    def __init__(self, host_dict):
        self.host = host_dict['host']
        self.port = host_dict['port']
        self.username = host_dict['username']
        self.pwd = host_dict['pwd']
        self.__k = None

    def connect(self):
        transport = paramiko.Transport((self.host, self.port))
        transport.connect(username=self.username, password=self.pwd)
        self.__transport = transport

    def close(self):
        self.__transport.close()

    def run_cmd(self, command):
        print(command)
        ssh = paramiko.SSHClient()
        ssh._transport = self.__transport
        # 执行命令
        stdin, stdout, stderr = ssh.exec_command(command)
        # 获取命令结果
        res, err = stdout.read(), stderr.read()
        result = err if err else "正常执行"
        # print(result)

    # 销毁
    def __del__(self):
        self.close()


ssh = SSHConnection(host)
ssh.connect()
# #----------------------4、删除包-------------------------
ssh.run_cmd("nohup rm -rf %s%s  %s%s.zip   \n"%(server_path,server_name,server_path,server_name))
#----------------------5、下载jenkins包-------------------------
#由于FTP目录结构存在中文，需要在window资源管理器里打开FTP并复制路径
ssh.run_cmd("nohup wget %s -P %s \n" % (application_url,server_path))
#----------------------6、解压包-------------------------
ssh.run_cmd("nohup unzip  %s%s.zip  -d  %s \n"%(server_path,server_name,server_path))
#退出登录
ssh.close()
