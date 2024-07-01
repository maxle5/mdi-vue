
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneOutgoing from "../../src/components/MdiPhoneOutgoing.vue";

test("MdiPhoneOutgoing snapshot", () => {
  const wrapper = mount(MdiPhoneOutgoing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
