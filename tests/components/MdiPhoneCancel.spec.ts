
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneCancel from "../../src/components/MdiPhoneCancel.vue";

test("MdiPhoneCancel snapshot", () => {
  const wrapper = mount(MdiPhoneCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
