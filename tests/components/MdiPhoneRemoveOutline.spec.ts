
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneRemoveOutline from "../../src/components/MdiPhoneRemoveOutline.vue";

test("MdiPhoneRemoveOutline snapshot", () => {
  const wrapper = mount(MdiPhoneRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
