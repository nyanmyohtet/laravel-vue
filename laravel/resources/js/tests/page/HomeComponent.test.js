import { shallowMount } from "@vue/test-utils";
import HomeComponent from "../../page/HomeComponent.vue";

test("displays Register Component", () => {
  const wrapper = shallowMount(HomeComponent);

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Home");
});

test("should match shallow mounted snapshot", () => {
  const wrapper = shallowMount(HomeComponent);

  // Assert the snapshot of the component
  expect(wrapper).toMatchSnapshot();
});
