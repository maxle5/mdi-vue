
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneIncoming from "../../src/components/MdiPhoneIncoming.vue";

test("MdiPhoneIncoming snapshot", () => {
  const wrapper = mount(MdiPhoneIncoming, {});
  expect(wrapper.html()).toMatchSnapshot();
});
