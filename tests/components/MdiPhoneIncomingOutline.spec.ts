
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneIncomingOutline from "../../src/components/MdiPhoneIncomingOutline.vue";

test("MdiPhoneIncomingOutline snapshot", () => {
  const wrapper = mount(MdiPhoneIncomingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
