# Vue data Grid : Client-Side Data - Transaction Updates

많은 행을 효율적인 방식으로 추가, 제거 또는 업데이트 할 수 있습니다.

변경사항이 적용된 후 정렬, 필터, 그룹화, 집계 및 피벗을 업데이트합니다.

처음 4개의 그리드 사이에서 1번그리드에서 추가했을때 3번그리드에서 행이 추가되야하는 작업을 할때 사용했습니다. 급하게 사용해보느라 자세하게 보지않고 지나가서 이번에 한번 정리해보자.

https://www.ag-grid.com/vue-data-grid/data-update-transactions/

위 주소의 글을 보고 사용했습니다.

## 트랜잭션 업데이트 API

트랜잭션 개체에는 추가,제거 및 업데이트 해야하는 행에 대한 세부정보가 포함되있습니다.

applyTransaction(transaction)는 이 트랜잭션 개체를 가져와 그리드의 데이터에 적용합니다.

**applyTransaction** : 행 데이터를 업데이트 합니다. add, remove및 update에 대한 목록이 있는 트랜잭션 개체를 전달합니다.



결과는 트랜잭션이기도 하지만, 추가, 제거, 업데이트된 **Row Nodes 목록**입니다.

* Row Data Transaction : 그리드에 제공하는 데이터인 행 데이터를 포함.
* Row Node Transaction : 행 데이터 항목을 래핑하는 그리드 생성객체인 행 노드를 포함.



## Example

주의할점! **Add 는 항목을 추가, Update는 있는 항목의 데이터를 수정, delete는 항목을 삭제.**

내가 해야될게 리스트에 추가하는 동작인데 나는 추가한 리스트를 다시 update를 한다 생각해서 계속 update를 시도해 제대로 동작하지 않았었다.

예제에서 사용된 메소드

- **Add Items**: 3개의 항목을 추가한다
- **Add Items addIndex=2**: index 2부터 3가지를 추가한다
- **Update Top 2**: 리스트에서 가장위 2개의 값을 Update한다.
- **Remove Selected**: 선택된 모든 행을 제거합니다.
- **Get Row Data**: console에 그리드의 모든 행 데이터를 콘솔에 인쇄합니다.
- **Clear Data**: 그리드의 데이터를 빈 목록으로 설정합니다.

주의 깊게 볼 부분은 methods부분이다.
전체코드는 공식문서에서 확인!



## 업데이트 및 제거를 위한 행 식별

두 가지의 접근 방식이 있다.

* 행 노드 ID 제공
* 개체 참조 사용

### 행 노드 ID 제공 (빠름)

그리드 콜백인 getRowNode를 사용하는 경우, 그리드는 트랜잭션에 제공된 데이터를 ID를 사용하는 그리드의 데이터와 일치시킵니다.

* 업데이트의 경우 그리드는 동일한 ID를 가진 행을 찾은다음 새로 제공된 데이터로 데이터를 교체함.

* 제거의 경우 행 제거를 위해 그리드는 동일한 ID를 가진 행을 찾아 제거함.<br/>remove배열 내에 제공된 레코드에는 ID만 있으면 됨.

```vue
<ag-grid-vue
    [getRowNodeId]="getRowNodeId"
    /* other grid options ... */>
</ag-grid-vue>

this.getRowNodeId = (data) => data.employeeId;
...

const myTransaction = {
  add: [
      // adding a row, there should be no row with ID = 4 already
      {employeeId: '4', name: 'Billy', age: 55}
  ],
  
  update: [
      // updating a row, the grid will look for the row with ID = 2 to update
      {employeeId: '2', name: 'Bob', age: 23}
  ],
  
  remove: [
      // deleting a row, only the ID is needed, other attributes (name, age) don't serve any purpose
      {employeeId: '4'}
  ]
}
```



### 개체 참조 사용 (느림)

행에 대한 ID를 제공하지 않으면 그리드가 개체 참조를 사용하여 행을 비교함.

트랜잭션에 업데이트 또는 제거항목을 제공하면 그리드는 이전에 제공한 데이터에 대한 ===연사자를 사용해 해당 행을 찾음.

주의!

행 데이터 항목은 동일한 인스턴스를 사용해야함.<br/>동일한 개체의 다른 인스턴스를 사용하면 그리드가 비교되지 않음.

그리드에는 개체 참조를 기반으로 행을 인덱싱할 방법이 없기 대문에 식별을 위해 개체 참조를 사용하면 대용량 데이터 세트의 경우 속도가 느려짐.

개체참조를 사용하면 속도가 느리다. (그러나 큰 데이터 세트(1만개 이상)로 작업하는 경우만 문제됨.)