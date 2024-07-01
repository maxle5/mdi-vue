
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHarddiskRemove from "../../src/components/MdiHarddiskRemove.vue";

test("MdiHarddiskRemove snapshot", () => {
  const wrapper = mount(MdiHarddiskRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
