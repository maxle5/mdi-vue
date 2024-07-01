
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableClock from "../../src/components/MdiTableClock.vue";

test("MdiTableClock snapshot", () => {
  const wrapper = mount(MdiTableClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
