
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTriangleDownOutline from "../../src/components/MdiTriangleDownOutline.vue";

test("MdiTriangleDownOutline snapshot", () => {
  const wrapper = mount(MdiTriangleDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
