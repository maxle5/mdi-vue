
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirPurifier from "../../src/components/MdiAirPurifier.vue";

test("MdiAirPurifier snapshot", () => {
  const wrapper = mount(MdiAirPurifier, {});
  expect(wrapper.html()).toMatchSnapshot();
});
