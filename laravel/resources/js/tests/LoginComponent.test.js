import { shallowMount } from "@vue/test-utils";
import Component from "../page/LoginComponent.vue";

test("displays Login Component", () => {
  const wrapper = shallowMount(Component);

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Login");
});
