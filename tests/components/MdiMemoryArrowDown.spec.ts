
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMemoryArrowDown from "../../src/components/MdiMemoryArrowDown.vue";

test("MdiMemoryArrowDown snapshot", () => {
  const wrapper = mount(MdiMemoryArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
