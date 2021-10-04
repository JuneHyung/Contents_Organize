# 📖 Column Interface

application은 grid의 column interface를 통해 column과 상호작용한다.

column Interface는 애플리케이션이 상호작용하는 column의 모든 public 부분으로 정의됨.

그리드의 열과 상호작용하기 위한 모든 column 메소드, 속성, 이벤트에 대해 알아보자.



* **column properties** : column정의를 통해 구성됨. 
  colDef.pinned="left"
* **column API** : grid API와 유사하다. 하지만 column과 관련된 메소드를 제공한다는 점이 다름.
  columnApi.setColumnVisible('counttry', false)
* **column Object** : 그리드의 각 열은 column Object로 표시됨.
  특정 열과 상호작용하기 위한 속성, 메서드, 이벤트가 있음.



## 📘 참고

https://www.ag-grid.com/vue-data-grid/column-interface/

