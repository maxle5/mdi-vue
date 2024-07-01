
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneRotatePortrait from "../../src/components/MdiPhoneRotatePortrait.vue";

test("MdiPhoneRotatePortrait snapshot", () => {
  const wrapper = mount(MdiPhoneRotatePortrait, {});
  expect(wrapper.html()).toMatchSnapshot();
});
