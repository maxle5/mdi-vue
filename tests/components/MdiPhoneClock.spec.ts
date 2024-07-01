
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneClock from "../../src/components/MdiPhoneClock.vue";

test("MdiPhoneClock snapshot", () => {
  const wrapper = mount(MdiPhoneClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
