# Uses
- bugs
- vulnerabilities
- code smells
- coverage
- duplications

# SonarQube Rules


# When to Choose SonarCloud (The "Better" Way for Cloud Teams)
- SonarCloud is the "better" way if you are already using GitHub, GitLab, or Bitbucket Cloud. It is designed specifically for cloud-native DevOps.
- Ease of Integration: It provides PR Decoration (comments directly on your code) with almost zero setup.
- Automatic Analysis: For many Node.js projects, SonarCloud can scan your code automatically as soon as you push, without even needing a GitHub Actions YAML file.
- Always Up-to-Date: You get the latest Node.js security rules the moment they are released by SonarSource.

# When to Choose SonarQube Server
- A self-hosted server is only "better" in specific enterprise scenarios:
- Regulatory Compliance: If your industry (Finance, Government, Healthcare) forbids sending source code to third-party cloud providers.
- Air-Gapped Environments: If your development network is not connected to the public internet.
- Cost for Huge Codebases: If you have millions of lines of code, the fixed cost of a server might eventually be cheaper than the per-line pricing of SonarCloud.

# Sonar Scanner Properties (sonar-scanner.properties)
- sonar.host.url=http://localhost:9000
- sonar.sourceEncoding=UTF-8

# Step of Nodejs App
- create a `sonar-project.properties` in root location of node js app
    ## Metadata
    - sonar.projectKey=nodejsEcommerceApp
    - sonar.projectVersion=1.0.0
    - sonar.sourceEncoding=

    ## sonar language=js
     - sonar.eslint.eslintconfigpath=app/eslintrc.json


    ## path of source directories
    - sonar.sources=app

    ## excludes 
    - sonar.exclusions=`app/node_modules/*,app/coverage/lcov-report/*,app/test/integration/api/v1/*`

    ## coverage Reporting
    - sonar.javascript.lcov.reportPaths=< coding coverage location>

# To Run sonar scan on app
    - `directory> sonar-scanner`

# What it tells after scan in dashboard
    - bugs, vulnerabilities
    - Code smells
    - coverage of code
    - Duplications of code
