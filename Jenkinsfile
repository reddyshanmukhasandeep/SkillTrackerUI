import groovy.json.JsonSlurper;

node{
    stage('checkout'){
        checkout scm
    }
    
    stage('Build') {
        sh 'npm install'
    }
        stage('Deliver') {
            
                sh './jenkins/scripts/deliver.sh'
            
        }
    
}