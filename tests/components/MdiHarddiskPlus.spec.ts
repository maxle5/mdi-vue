
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHarddiskPlus from "../../src/components/MdiHarddiskPlus.vue";

test("MdiHarddiskPlus snapshot", () => {
  const wrapper = mount(MdiHarddiskPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
