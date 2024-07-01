
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirballoon from "../../src/components/MdiAirballoon.vue";

test("MdiAirballoon snapshot", () => {
  const wrapper = mount(MdiAirballoon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
