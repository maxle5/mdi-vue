
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneRingOutline from "../../src/components/MdiPhoneRingOutline.vue";

test("MdiPhoneRingOutline snapshot", () => {
  const wrapper = mount(MdiPhoneRingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
