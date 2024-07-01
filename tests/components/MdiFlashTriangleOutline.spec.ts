
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashTriangleOutline from "../../src/components/MdiFlashTriangleOutline.vue";

test("MdiFlashTriangleOutline snapshot", () => {
  const wrapper = mount(MdiFlashTriangleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
