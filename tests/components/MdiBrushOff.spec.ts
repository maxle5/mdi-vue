
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrushOff from "../../src/components/MdiBrushOff.vue";

test("MdiBrushOff snapshot", () => {
  const wrapper = mount(MdiBrushOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
