import { shallowMount } from "@vue/test-utils";
import LoginComponent from "../../../resources/js/page/LoginComponent.vue";

test("displays Login Component", () => {
  const wrapper = shallowMount(LoginComponent);

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Login");
});

test("should match shallow mounted snapshot", () => {
  const wrapper = shallowMount(LoginComponent);

  // Assert the snapshot of the component
  expect(wrapper).toMatchSnapshot();
});
