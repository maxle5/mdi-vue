
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeCheckOutline from "../../src/components/MdiEyeCheckOutline.vue";

test("MdiEyeCheckOutline snapshot", () => {
  const wrapper = mount(MdiEyeCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
