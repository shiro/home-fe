node {
    def git = checkout scm
    def COMMIT = "${git.GIT_COMMIT}"
    def BRANCH = "${git.GIT_BRANCH}"

    def IS_MASTER = "${BRANCH}" == "master"
    def IS_DEV = "${BRANCH}" == "dev"

    def devApp

    stage('Build nightly') {
        def tag = IS_DEV ? "nightly" : "nightly-${git.GIT_COMMIT}"
        devApp = docker.build("shiro/home-fe:${tag}", "--rm -f docker/fe/Dockerfile .")
    }

    try {
        stage('Test nightly') {
            devApp.inside {
                sh ''' 
                   ln -s /opt/app/node_modules .
                   yarn test:report
                   yarn lint:report
                   rm node_modules
                   '''
            }
        }
    } finally {
        if (!IS_DEV) { // only keep master builds for cache
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

        stage('Build production') {
            prodApp = docker.build("shiro/home-fe:stable", "--rm -f docker/fe/Dockerfile.prod .")
        }
    }
}
