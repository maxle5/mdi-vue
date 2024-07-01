
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineMinus from "../../src/components/MdiTimelineMinus.vue";

test("MdiTimelineMinus snapshot", () => {
  const wrapper = mount(MdiTimelineMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
