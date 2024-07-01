
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleMedium from "../../src/components/MdiCircleMedium.vue";

test("MdiCircleMedium snapshot", () => {
  const wrapper = mount(MdiCircleMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
