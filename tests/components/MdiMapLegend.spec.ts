
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapLegend from "../../src/components/MdiMapLegend.vue";

test("MdiMapLegend snapshot", () => {
  const wrapper = mount(MdiMapLegend, {});
  expect(wrapper.html()).toMatchSnapshot();
});
