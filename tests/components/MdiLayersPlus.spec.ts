
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersPlus from "../../src/components/MdiLayersPlus.vue";

test("MdiLayersPlus snapshot", () => {
  const wrapper = mount(MdiLayersPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
