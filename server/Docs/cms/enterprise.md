# Enterprise API Documentation

이 문서는 입주 기업 정보 관리를 위한 API를 설명합니다.

**Base URL:** `/api/v1/cms`

## 1. Enterprise Model

입주 기업 정보를 나타내는 데이터 모델입니다.

```json
{
  "id": "number (Long, read-only, generated by server)",
  "year": "number (e.g., 2025, required)",
  "name": "string (required)",
  "description": "string (required)",
  "image": "string (url or path to the company logo or representative image)",
  "representative": "string (대표자명)",
  "established": "string (date, e.g., 'YYYY-MM-DD', 설립일)",
  "businessType": "string (업종)",
  "detail": "string (HTML or plain text, 상세 사업 내용)",
  "showButton": "boolean (defaults to true, '펼쳐보기' 버튼 표시 여부)",
  "createdAt": "string (ISO 8601 datetime, read-only, 생성일시)",
  "updatedAt": "string (ISO 8601 datetime, read-only, 수정일시)",
  "createdBy": "string (read-only, 생성자)",
  "updatedBy": "string (read-only, 수정자)"
}
```

**필드 설명:**

- `id`: 시스템에서 자동 생성되는 고유 식별자입니다. (읽기 전용)
- `year`: 입주 연도 (필수)
- `name`: 기업명 (필수)
- `description`: 기업에 대한 간략한 설명 (필수)
- `image`: 기업 로고 또는 대표 이미지 URL/경로 (서버에서 처리된 이미지 경로가 저장됨)
- `representative`: 대표자명
- `established`: 설립일 (형식: `YYYY-MM-DD`)
- `businessType`: 업종 (예: "IT, 서비스", "제조업")
- `detail`: 기업 상세 소개. HTML 또는 일반 텍스트 형식일 수 있습니다.
- `showButton`: 목록에서 "펼쳐보기" 버튼 표시 여부. 기본값은 `true`입니다.
- `createdAt`: 데이터 생성 일시 (읽기 전용)
- `updatedAt`: 마지막 데이터 수정 일시 (읽기 전용)
- `createdBy`: 생성자 정보 (읽기 전용)
- `updatedBy`: 수정자 정보 (읽기 전용)

---

## 2. API Endpoints

### 2.1 입주 기업 목록 조회

- **Endpoint:** `GET /enterprises`
- **Description:** 등록된 입주 기업 목록을 조회합니다. 연도별 필터링 및 페이지네이션을 지원합니다.
- **Auth:** `PUBLIC` (일반 사용자에게 공개), `ADMIN` (관리자는 모든 정보 접근 가능)
- **Query Parameters:**
  - `year` (optional, number): 특정 연도의 기업만 필터링합니다. (예: `2024`)
  - `name` (optional, string): 기업명으로 검색 (부분 일치)
  - `representative` (optional, string): 대표자명으로 검색 (부분 일치)
  - `businessType` (optional, string): 업종으로 검색 (부분 일치)
  - `page` (optional, number): 페이지 번호 (기본값: `0`).
  - `size` (optional, number): 페이지 당 항목 수 (기본값: `10`).
  - `sort` (optional, string): 정렬 기준 및 순서 (예: `createdAt,desc`, `year,asc,name,asc`). 기본값: `createdAt,desc`.
- **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "성공적으로 기업 목록을 조회했습니다.",
    "data": {
      "content": [
        {
          "id": 1,
          "year": 2024,
          "name": "주식회사 샘플기업",
          "description": "혁신적인 기술을 선도하는 기업입니다.",
          "image": "/api/v1/cms/file/public/view/123",
          "representative": "홍길동",
          "established": "2020-01-15",
          "businessType": "IT, 인공지능",
          "detail": "<p>저희는 AI 기반 솔루션을 개발하여...</p>",
          "showButton": true,
          "createdAt": "2024-01-10T10:00:00Z",
          "updatedAt": "2024-01-10T10:00:00Z",
          "createdBy": "admin",
          "updatedBy": "admin"
        }
        // ... more enterprise objects
      ],
      "pageable": {
        "sort": {
          "sorted": true,
          "unsorted": false,
          "empty": false
        },
        "pageNumber": 0,
        "pageSize": 10,
        "offset": 0,
        "paged": true,
        "unpaged": false
      },
      "totalPages": 5,
      "totalElements": 50,
      "last": false,
      "first": true,
      "sort": {
        "sorted": true,
        "unsorted": false,
        "empty": false
      },
      "number": 0,
      "numberOfElements": 10,
      "size": 10,
      "empty": false
    }
  }
  ```
- **Error Response:**
  - `400 Bad Request`: 잘못된 쿼리 파라미터 형식.
  ```json
  {
    "success": false,
    "message": "잘못된 요청 파라미터입니다.",
    "errorCode": "INVALID_PARAMETER"
  }
  ```
  - `500 Internal Server Error`: 서버 내부 오류.

---

### 2.2 입주 기업 생성

- **Endpoint:** `POST /enterprises`
- **Description:** 새로운 입주 기업 정보와 이미지를 시스템에 등록합니다.
- **Auth:** `ADMIN`
- **Content-Type:** `multipart/form-data`
- **Request Parts:**
  - `data` (required): 입주 기업 정보가 포함된 JSON 데이터
    ```json
    {
      "year": 2025,
      "name": "새로운 혁신 기업",
      "description": "미래를 만들어갈 기업입니다.",
      "representative": "김철수",
      "established": "2025-03-01",
      "businessType": "핀테크, 빅데이터",
      "detail": "<h3>주요 사업 내용</h3><ul><li>데이터 분석 플랫폼</li><li>블록체인 기반 금융 서비스</li></ul>",
      "showButton": false
    }
    ```
  - `image` (optional): 기업 로고 또는 대표 이미지 파일 (최대 10MB 지원)
- **필수 필드:**
  - `name`, `description`, `year`
- **Success Response (201 Created):**
  ```json
  {
    "success": true,
    "message": "새로운 기업 정보가 성공적으로 등록되었습니다.",
    "data": {
      "id": 1,
      "year": 2025,
      "name": "새로운 혁신 기업",
      "description": "미래를 만들어갈 기업입니다.",
      "image": "/api/v1/cms/file/public/view/123",
      "representative": "김철수",
      "established": "2025-03-01",
      "businessType": "핀테크, 빅데이터",
      "detail": "<h3>주요 사업 내용</h3><ul><li>데이터 분석 플랫폼</li><li>블록체인 기반 금융 서비스</li></ul>",
      "showButton": false,
      "createdAt": "2025-03-10T14:30:00Z",
      "updatedAt": "2025-03-10T14:30:00Z",
      "createdBy": "admin",
      "updatedBy": "admin"
    }
  }
  ```
- **Error Response:**
  - `400 Bad Request`: 필수 필드 누락 또는 데이터 형식 오류.
  ```json
  {
    "success": false,
    "message": "필수 항목이 누락되었거나 형식이 올바르지 않습니다.",
    "errorCode": "VALIDATION_ERROR",
    "errors": [{ "field": "name", "message": "기업명은 필수입니다." }]
  }
  ```
  - `401 Unauthorized`: 인증되지 않은 사용자.
  - `403 Forbidden`: 권한 없는 사용자.
  - `500 Internal Server Error`.

---

### 2.3 입주 기업 상세 조회

- **Endpoint:** `GET /enterprises/{id}`
- **Description:** 특정 ID를 가진 입주 기업의 상세 정보를 조회합니다.
- **Auth:** `PUBLIC`, `ADMIN`
- **Path Parameters:**
  - `id` (number, required): 조회할 기업의 고유 ID.
- **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "기업 상세 정보를 성공적으로 조회했습니다.",
    "data": {
      "id": 1,
      "year": 2024,
      "name": "주식회사 샘플기업",
      "description": "혁신적인 기술을 선도하는 기업입니다.",
      "image": "/api/v1/cms/file/public/view/123",
      "representative": "홍길동",
      "established": "2020-01-15",
      "businessType": "IT, 인공지능",
      "detail": "<p>저희는 AI 기반 솔루션을 개발하여...</p>",
      "showButton": true,
      "createdAt": "2024-01-10T10:00:00Z",
      "updatedAt": "2024-01-10T10:00:00Z",
      "createdBy": "admin",
      "updatedBy": "admin"
    }
  }
  ```
- **Error Response:**
  - `404 Not Found`: 해당 ID의 기업 정보가 존재하지 않음.
  ```json
  {
    "success": false,
    "message": "요청하신 기업 정보를 찾을 수 없습니다.",
    "errorCode": "RESOURCE_NOT_FOUND"
  }
  ```
  - `500 Internal Server Error`.

---

### 2.4 입주 기업 정보 수정

- **Endpoint:** `PUT /enterprises/{id}`
- **Description:** 기존 입주 기업의 정보와 이미지를 수정합니다.
- **Auth:** `ADMIN`
- **Content-Type:** `multipart/form-data`
- **Path Parameters:**
  - `id` (number, required): 수정할 기업의 고유 ID.
- **Request Parts:**
  - `data` (required): 수정할 필드가 포함된 JSON 데이터
    ```json
    {
      "name": "수정된 (주)샘플기업",
      "description": "더욱 새로워진 기술을 선보입니다.",
      "year": 2023,
      "detail": "<p>핵심 기술이 업데이트 되었습니다.</p>",
      "showButton": false
    }
    ```
  - `image` (optional): 새로운 기업 로고 또는 대표 이미지 파일 (최대 10MB 지원)
- **참고:**
  - 수정할 필드만 포함하여 요청합니다. `id`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`는 수정할 수 없습니다.
  - 이미지를 전송하지 않으면 기존 이미지가 유지됩니다.
  - 이미지를 변경하려면 새 이미지 파일을 `image` 필드로 전송합니다. 기존 이미지는 자동으로 삭제됩니다.
- **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "기업 정보가 성공적으로 수정되었습니다.",
    "data": {
      "id": 1,
      "year": 2023,
      "name": "수정된 (주)샘플기업",
      "description": "더욱 새로워진 기술을 선보입니다.",
      "image": "/api/v1/cms/file/public/view/456",
      "representative": "홍길동",
      "established": "2020-01-15",
      "businessType": "IT, 인공지능",
      "detail": "<p>핵심 기술이 업데이트 되었습니다.</p>",
      "showButton": false,
      "createdAt": "2024-01-10T10:00:00Z",
      "updatedAt": "2025-03-11T11:00:00Z",
      "createdBy": "admin",
      "updatedBy": "admin"
    }
  }
  ```
- **Error Response:**
  - `400 Bad Request`: 데이터 형식 오류.
  - `401 Unauthorized`.
  - `403 Forbidden`.
  - `404 Not Found`: 해당 ID의 기업 정보가 존재하지 않음.
  - `500 Internal Server Error`.

---

### 2.5 입주 기업 정보 삭제

- **Endpoint:** `DELETE /enterprises/{id}`
- **Description:** 특정 ID를 가진 입주 기업 정보와 관련 이미지를 시스템에서 삭제합니다.
- **Auth:** `ADMIN`
- **Path Parameters:**
  - `id` (number, required): 삭제할 기업의 고유 ID.
- **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "기업 정보가 성공적으로 삭제되었습니다.",
    "data": null
  }
  ```
- **Error Response:**
  - `401 Unauthorized`.
  - `403 Forbidden`.
  - `404 Not Found`: 해당 ID의 기업 정보가 존재하지 않음.
  - `500 Internal Server Error`.

---
