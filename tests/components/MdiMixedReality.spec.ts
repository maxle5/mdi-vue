
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMixedReality from "../../src/components/MdiMixedReality.vue";

test("MdiMixedReality snapshot", () => {
  const wrapper = mount(MdiMixedReality, {});
  expect(wrapper.html()).toMatchSnapshot();
});
