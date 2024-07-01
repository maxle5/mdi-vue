
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailCheckOutline from "../../src/components/MdiEmailCheckOutline.vue";

test("MdiEmailCheckOutline snapshot", () => {
  const wrapper = mount(MdiEmailCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
