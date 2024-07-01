
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusThick from "../../src/components/MdiMinusThick.vue";

test("MdiMinusThick snapshot", () => {
  const wrapper = mount(MdiMinusThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
