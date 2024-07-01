
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneIncomingOutgoing from "../../src/components/MdiPhoneIncomingOutgoing.vue";

test("MdiPhoneIncomingOutgoing snapshot", () => {
  const wrapper = mount(MdiPhoneIncomingOutgoing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
