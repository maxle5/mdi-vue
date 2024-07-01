
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneForward from "../../src/components/MdiPhoneForward.vue";

test("MdiPhoneForward snapshot", () => {
  const wrapper = mount(MdiPhoneForward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
