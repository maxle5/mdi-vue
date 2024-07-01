
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneOffOutline from "../../src/components/MdiPhoneOffOutline.vue";

test("MdiPhoneOffOutline snapshot", () => {
  const wrapper = mount(MdiPhoneOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
