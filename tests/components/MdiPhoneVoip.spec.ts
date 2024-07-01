
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneVoip from "../../src/components/MdiPhoneVoip.vue";

test("MdiPhoneVoip snapshot", () => {
  const wrapper = mount(MdiPhoneVoip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
