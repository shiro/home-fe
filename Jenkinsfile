node {
    def git = checkout scm
    def COMMIT = "${git.GIT_COMMIT}"
    def BRANCH = "${git.GIT_BRANCH}"


    def devApp

    stage('Build dev') {
        def devTag = ("${BRANCH}" == "master") ? "dev" : "${git.GIT_BRANCH}"
        devApp = docker.build("shiro/home-fe:${devTag}", "--rm -f docker/fe/Dockerfile .")
    }


    try {
        stage('Test dev') {
            devApp.inside {
                sh 'cd /opt/app && yarn lint'
                sh 'cd /opt/app && yarn test'
            }
        }
    } finally {
        echo 'Removing docker image'
        sh "docker rmi ${devApp.id}"
    }


    if ("${BRANCH}" == "master") {
        def prodApp

        stage('Build prod') {
            prodApp = docker.build("shiro/home-fe:latest", "--rm -f docker/fe/Dockerfile.prod .")
        }
    }
}
