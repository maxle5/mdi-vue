
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTriangleSmallDown from "../../src/components/MdiTriangleSmallDown.vue";

test("MdiTriangleSmallDown snapshot", () => {
  const wrapper = mount(MdiTriangleSmallDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
