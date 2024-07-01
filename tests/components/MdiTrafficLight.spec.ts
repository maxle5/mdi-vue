
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrafficLight from "../../src/components/MdiTrafficLight.vue";

test("MdiTrafficLight snapshot", () => {
  const wrapper = mount(MdiTrafficLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
