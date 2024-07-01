
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRotateRightOutline from "../../src/components/MdiFileRotateRightOutline.vue";

test("MdiFileRotateRightOutline snapshot", () => {
  const wrapper = mount(MdiFileRotateRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
