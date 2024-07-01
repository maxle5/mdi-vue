
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTennisBallOutline from "../../src/components/MdiTennisBallOutline.vue";

test("MdiTennisBallOutline snapshot", () => {
  const wrapper = mount(MdiTennisBallOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
