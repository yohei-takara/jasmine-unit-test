// Vue と テスト対象のコンポーネントをインポートする

// テストランナーや検証には、どのようなライブラリを用いても構いませんが
// ここでは Jasmine 2.0 を用いたテスト記述を行っています。
describe('MyComponent', function() {
  // コンポーネントの options を直接検証します。
  it('has a created hook', function() {
    expect(typeof app.$data).toBe('object')
  });
});
