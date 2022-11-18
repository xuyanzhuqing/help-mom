pipeline {
  agent any
  stages {
    stage('Make a tag') {
      steps {
        sh 'git push --tags'
        sh 'git config -l'
      }
    }
    stage('Building npm package') {
      steps {
        nvm(
          'version': 'v19.1.0',
          'nvmInstallURL': 'https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh',
          'nvmNodeJsOrgMirror': 'https://npmmirror.com/mirrors/node/'
        ) {
          sh 'node -v'
          sh 'npm config ls'
          sh 'npm install --loglevel info'
          sh 'npm run build'
        }
      }
    }
    stage('Clean workspace') {
      steps {
        sh 'git clean -xdf'
      }
    }
  }
}