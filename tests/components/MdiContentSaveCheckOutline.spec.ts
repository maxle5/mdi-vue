
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveCheckOutline from "../../src/components/MdiContentSaveCheckOutline.vue";

test("MdiContentSaveCheckOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
