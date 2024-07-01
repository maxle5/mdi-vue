
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReceiptClock from "../../src/components/MdiReceiptClock.vue";

test("MdiReceiptClock snapshot", () => {
  const wrapper = mount(MdiReceiptClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
