
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhonePlusOutline from "../../src/components/MdiPhonePlusOutline.vue";

test("MdiPhonePlusOutline snapshot", () => {
  const wrapper = mount(MdiPhonePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
