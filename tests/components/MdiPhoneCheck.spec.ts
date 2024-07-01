
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneCheck from "../../src/components/MdiPhoneCheck.vue";

test("MdiPhoneCheck snapshot", () => {
  const wrapper = mount(MdiPhoneCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
