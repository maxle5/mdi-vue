
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneDialOutline from "../../src/components/MdiPhoneDialOutline.vue";

test("MdiPhoneDialOutline snapshot", () => {
  const wrapper = mount(MdiPhoneDialOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
