
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreClock from "../../src/components/MdiStoreClock.vue";

test("MdiStoreClock snapshot", () => {
  const wrapper = mount(MdiStoreClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
