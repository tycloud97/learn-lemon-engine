# lemoncloud-backbone-server

express 기반 레몬 백본 WEB서버

## 환경 설정

실행하는 환경 설정은 [env.yml](env.yml) 를 통해서 가능함.

* 실행시, `env.yml`에 설정된 값을 이용 (에: HOSTNAME 값이 'localhost' 일 경우.)
* 다음으로, 환경변수에 설정된 값을 적용 (예: 환경변수 HOSTNAME 이 '127.0.0.1' 일 경우.)
* express.js 실행시 환경 변수 이용 (예: 최종적으로 '127.0.0.1' 으로 사용함)

```bash
# 로컬 환경에서 기본 실행법
$ node express.js

# MySQL의 HOSTNAME 를 변경시.
$ export HOSTNAME=127.0.0.1
$ node express.js

# 서버 실행 포트 변경
$ node express.js --port 8080
```


## 개발 환경 설정

TODO: localhost 기준으로 mysql, dynamo, redis, elasticsearch 설치하여 돌리는 방법.
