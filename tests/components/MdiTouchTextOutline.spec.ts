
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTouchTextOutline from "../../src/components/MdiTouchTextOutline.vue";

test("MdiTouchTextOutline snapshot", () => {
  const wrapper = mount(MdiTouchTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
