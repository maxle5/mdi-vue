
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneSync from "../../src/components/MdiPhoneSync.vue";

test("MdiPhoneSync snapshot", () => {
  const wrapper = mount(MdiPhoneSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
