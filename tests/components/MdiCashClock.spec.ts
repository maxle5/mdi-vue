
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashClock from "../../src/components/MdiCashClock.vue";

test("MdiCashClock snapshot", () => {
  const wrapper = mount(MdiCashClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
