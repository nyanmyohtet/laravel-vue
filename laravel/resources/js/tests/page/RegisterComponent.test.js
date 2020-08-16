import { shallowMount } from "@vue/test-utils";
import RegisterComponent from "../../page/RegisterComponent.vue";

test("displays Register Component", () => {
  const wrapper = shallowMount(RegisterComponent);

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Register");
});

test("should match shallow mounted snapshot", () => {
  const wrapper = shallowMount(RegisterComponent);

  // Assert the snapshot of the component
  expect(wrapper).toMatchSnapshot();
});
