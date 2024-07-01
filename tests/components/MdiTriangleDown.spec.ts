
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTriangleDown from "../../src/components/MdiTriangleDown.vue";

test("MdiTriangleDown snapshot", () => {
  const wrapper = mount(MdiTriangleDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
