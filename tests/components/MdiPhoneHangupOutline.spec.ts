
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneHangupOutline from "../../src/components/MdiPhoneHangupOutline.vue";

test("MdiPhoneHangupOutline snapshot", () => {
  const wrapper = mount(MdiPhoneHangupOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
