
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockCheck from "../../src/components/MdiClockCheck.vue";

test("MdiClockCheck snapshot", () => {
  const wrapper = mount(MdiClockCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
