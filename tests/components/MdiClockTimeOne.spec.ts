
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeOne from "../../src/components/MdiClockTimeOne.vue";

test("MdiClockTimeOne snapshot", () => {
  const wrapper = mount(MdiClockTimeOne, {});
  expect(wrapper.html()).toMatchSnapshot();
});
