
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageMinus from "../../src/components/MdiMessageMinus.vue";

test("MdiMessageMinus snapshot", () => {
  const wrapper = mount(MdiMessageMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
