
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirFilter from "../../src/components/MdiAirFilter.vue";

test("MdiAirFilter snapshot", () => {
  const wrapper = mount(MdiAirFilter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
