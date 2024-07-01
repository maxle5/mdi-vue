
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneIncomingOutgoingOutline from "../../src/components/MdiPhoneIncomingOutgoingOutline.vue";

test("MdiPhoneIncomingOutgoingOutline snapshot", () => {
  const wrapper = mount(MdiPhoneIncomingOutgoingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
