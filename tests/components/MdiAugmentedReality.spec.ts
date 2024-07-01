
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAugmentedReality from "../../src/components/MdiAugmentedReality.vue";

test("MdiAugmentedReality snapshot", () => {
  const wrapper = mount(MdiAugmentedReality, {});
  expect(wrapper.html()).toMatchSnapshot();
});
