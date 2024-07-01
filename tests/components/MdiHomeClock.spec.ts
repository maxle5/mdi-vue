
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeClock from "../../src/components/MdiHomeClock.vue";

test("MdiHomeClock snapshot", () => {
  const wrapper = mount(MdiHomeClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
