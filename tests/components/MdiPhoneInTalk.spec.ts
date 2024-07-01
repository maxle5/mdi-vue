
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneInTalk from "../../src/components/MdiPhoneInTalk.vue";

test("MdiPhoneInTalk snapshot", () => {
  const wrapper = mount(MdiPhoneInTalk, {});
  expect(wrapper.html()).toMatchSnapshot();
});
