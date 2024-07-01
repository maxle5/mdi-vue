
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockRemove from "../../src/components/MdiClockRemove.vue";

test("MdiClockRemove snapshot", () => {
  const wrapper = mount(MdiClockRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
