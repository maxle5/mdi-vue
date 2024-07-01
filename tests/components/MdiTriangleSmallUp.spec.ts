
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTriangleSmallUp from "../../src/components/MdiTriangleSmallUp.vue";

test("MdiTriangleSmallUp snapshot", () => {
  const wrapper = mount(MdiTriangleSmallUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
