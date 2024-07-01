
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTriangleOutline from "../../src/components/MdiTriangleOutline.vue";

test("MdiTriangleOutline snapshot", () => {
  const wrapper = mount(MdiTriangleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
