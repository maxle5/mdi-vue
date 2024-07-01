
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptTextClock from "../../src/components/MdiReceiptTextClock.vue";

test("MdiReceiptTextClock snapshot", () => {
  const wrapper = mount(MdiReceiptTextClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
