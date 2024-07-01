
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneReturn from "../../src/components/MdiPhoneReturn.vue";

test("MdiPhoneReturn snapshot", () => {
  const wrapper = mount(MdiPhoneReturn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
