# Web Tutorial App - Next.js

Next.js로 만든 앱

## 실행 방법

### 개발 실행

```bash
# 개발 모드 실행
npm run dev
```

[http://localhost:3000/](http://localhost:3000/)에서 확인

### json-server 실행

```bash
npx json-server --port 9999 --watch db.json
```

### .env.local 파일 생성

.env.local

```
NEXT_PUBLIC_API_URL=http://localhost:9999/
```

## 빌드

```bash
# .next 폴더에 빌드 생성
npm run build

# 빌드된 파일 실행
npm run start
```
