# 개발 워크플로우 가이드 (v: context7)

## 1. 개요

본 문서는 '통합 CMS 채팅 시스템'에 신규 기능을 추가하거나 기존 기능을 수정할 때 따라야 할 표준 작업 순서를 정의합니다. 이 워크플로우는 **의존성 순서(DB → 백엔드 → 프론트엔드)** 와 **재사용성 극대화** 원칙에 기반합니다.

## 2. 표준 개발 순서

### **1단계: 요구사항 분석 및 기존 기능 검토 (가장 중요)**

- **목표**: 구현할 기능이 기존 기능과 중복되는지, 혹은 재사용할 수 있는 부분이 있는지 확인합니다.
- **수행 작업**:
  - `README.md`와 모든 `.docs` 폴더의 문서를 다시 한번 정독합니다.
  - 특히, [백엔드 재사용 전략](mdc:.docs/backend.md#3-재사용-전략-어떤-기능을-재사용할-것인가)과 [프론트엔드 재사용 전략](mdc:.docs/frontend.md#3-재사용-전략-어떤-기능을-재사용할-것인가) 부분을 집중적으로 검토합니다.
  - "이 기능을 구현하기 위해 새로 만들어야 하는 것은 무엇인가?"가 아닌, **"이 기능을 위해 재사용할 수 있는 것은 무엇인가?"** 를 먼저 고민합니다.

### **2단계: 데이터베이스 설계 및 수정**

- **목표**: 기능에 필요한 데이터 모델을 정의하거나 수정합니다.
- **수행 작업**:
  - [.docs/database.md](mdc:.docs/database.md) 문서를 확인하여 신규 테이블이나 컬럼이 필요한지 분석합니다.
  - **규칙**: 모든 신규 테이블은 반드시 감사 필드를 포함하는 `BaseEntity` 개념을 상속받아야 합니다.

### **3단계: 백엔드 API 개발**

- **목표**: 데이터베이스와 상호작용하고, 프론트엔드에 데이터를 제공할 API를 구현합니다.
- **수행 작업**:
  - [.docs/backend.md](mdc:.docs/backend.md)의 패키지 구조와 컨벤션에 따라 Service, Controller 등을 구현합니다.
  - **규칙**: 파일 처리, 예외 처리 등 공통 기능은 반드시 `egovframework.com.cmm` 등 코어 모듈의 기능을 재사용합니다.

### **4. 단계: 프론트엔드 UI 및 로직 개발**

- **목표**: 백엔드 API를 사용하여 사용자에게 보여질 UI와 경험을 구현합니다.
- **수행 작업**:
  - [.docs/frontend.md](mdc:.docs/frontend.md)의 컴포넌트 구조와 Chakra UI 컨벤션에 따라 개발합니다.
  - **규칙**: 버튼, 입력창 등 기본 UI는 `/components/common`의 공통 컴포넌트를 100% 재사용하는 것을 원칙으로 합니다.

### **5. 단계: 통합 테스트 및 문서 업데이트**

- **목표**: 개발된 기능이 전체 시스템과 잘 동작하는지 검증하고, 변경사항을 문서에 반영합니다.
- **수행 작업**:
  - 기능 구현이 완료되면, 관련된 `README.md` 또는 `.docs` 문서에 변경된 내용을 반드시 업데이트합니다.
