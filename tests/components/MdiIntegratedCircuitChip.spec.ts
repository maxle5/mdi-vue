
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIntegratedCircuitChip from "../../src/components/MdiIntegratedCircuitChip.vue";

test("MdiIntegratedCircuitChip snapshot", () => {
  const wrapper = mount(MdiIntegratedCircuitChip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
