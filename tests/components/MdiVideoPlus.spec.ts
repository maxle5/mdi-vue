
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoPlus from "../../src/components/MdiVideoPlus.vue";

test("MdiVideoPlus snapshot", () => {
  const wrapper = mount(MdiVideoPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
