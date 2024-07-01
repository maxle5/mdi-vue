
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneMessage from "../../src/components/MdiPhoneMessage.vue";

test("MdiPhoneMessage snapshot", () => {
  const wrapper = mount(MdiPhoneMessage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
