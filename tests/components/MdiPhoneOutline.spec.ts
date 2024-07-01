
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneOutline from "../../src/components/MdiPhoneOutline.vue";

test("MdiPhoneOutline snapshot", () => {
  const wrapper = mount(MdiPhoneOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
