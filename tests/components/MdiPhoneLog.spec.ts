
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneLog from "../../src/components/MdiPhoneLog.vue";

test("MdiPhoneLog snapshot", () => {
  const wrapper = mount(MdiPhoneLog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
