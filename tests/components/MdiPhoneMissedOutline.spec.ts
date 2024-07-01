
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneMissedOutline from "../../src/components/MdiPhoneMissedOutline.vue";

test("MdiPhoneMissedOutline snapshot", () => {
  const wrapper = mount(MdiPhoneMissedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
