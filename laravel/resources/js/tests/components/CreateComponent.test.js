import { shallowMount } from "@vue/test-utils";
import CreateComponent from "../../components/CreateComponent.vue";

test("displays Login Component", () => {
  const wrapper = shallowMount(CreateComponent);

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Create");
});

test("should match shallow mounted snapshot", () => {
  const wrapper = shallowMount(CreateComponent);

  // Assert the snapshot of the component
  expect(wrapper).toMatchSnapshot();
});
