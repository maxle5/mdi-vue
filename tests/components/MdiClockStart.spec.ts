
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockStart from "../../src/components/MdiClockStart.vue";

test("MdiClockStart snapshot", () => {
  const wrapper = mount(MdiClockStart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
