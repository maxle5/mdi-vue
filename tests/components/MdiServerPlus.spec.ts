
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerPlus from "../../src/components/MdiServerPlus.vue";

test("MdiServerPlus snapshot", () => {
  const wrapper = mount(MdiServerPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
