
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneRemove from "../../src/components/MdiPhoneRemove.vue";

test("MdiPhoneRemove snapshot", () => {
  const wrapper = mount(MdiPhoneRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
