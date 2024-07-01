
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneInTalkOutline from "../../src/components/MdiPhoneInTalkOutline.vue";

test("MdiPhoneInTalkOutline snapshot", () => {
  const wrapper = mount(MdiPhoneInTalkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
