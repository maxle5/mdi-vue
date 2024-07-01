
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneOutgoingOutline from "../../src/components/MdiPhoneOutgoingOutline.vue";

test("MdiPhoneOutgoingOutline snapshot", () => {
  const wrapper = mount(MdiPhoneOutgoingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
