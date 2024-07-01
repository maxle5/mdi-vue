
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleHalfFull from "../../src/components/MdiCircleHalfFull.vue";

test("MdiCircleHalfFull snapshot", () => {
  const wrapper = mount(MdiCircleHalfFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
