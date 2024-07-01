
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkypeBusiness from "../../src/components/MdiSkypeBusiness.vue";

test("MdiSkypeBusiness snapshot", () => {
  const wrapper = mount(MdiSkypeBusiness, {});
  expect(wrapper.html()).toMatchSnapshot();
});
