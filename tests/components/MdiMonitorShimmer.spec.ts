
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorShimmer from "../../src/components/MdiMonitorShimmer.vue";

test("MdiMonitorShimmer snapshot", () => {
  const wrapper = mount(MdiMonitorShimmer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
