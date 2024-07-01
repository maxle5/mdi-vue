
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendCheckOutline from "../../src/components/MdiSendCheckOutline.vue";

test("MdiSendCheckOutline snapshot", () => {
  const wrapper = mount(MdiSendCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
