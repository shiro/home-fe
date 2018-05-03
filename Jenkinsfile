node {
    def git = checkout scm
    def COMMIT = "${git.GIT_COMMIT}"
    def BRANCH = "${git.GIT_BRANCH}"

    def IS_MASTER = "${BRANCH}" == "master"
    def IS_DEV = "${BRANCH}" == "dev"


    def devApp

    stage('Build dev') {
        def devTag = IS_MASTER ? "dev" : "${git.GIT_BRANCH}"
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
        if (!IS_MASTER) {
            echo 'Removing docker image'
            sh "docker rmi ${devApp.id} 2>/dev/null"
        }
    }


    if (IS_DEV) {
        def stagingApp

        stage('Build staging') {
            stagingApp = docker.build("shiro/home-fe:staging", "--rm -f docker/fe/Dockerfile.prod .")
        }
    }

    if (IS_MASTER) {
        def prodApp

        stage('Build prod') {
            prodApp = docker.build("shiro/home-fe:latest", "--rm -f docker/fe/Dockerfile.prod .")
        }
    }
}
