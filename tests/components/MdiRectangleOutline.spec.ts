
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRectangleOutline from "../../src/components/MdiRectangleOutline.vue";

test("MdiRectangleOutline snapshot", () => {
  const wrapper = mount(MdiRectangleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
