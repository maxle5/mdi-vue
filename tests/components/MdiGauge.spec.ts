
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGauge from "../../src/components/MdiGauge.vue";

test("MdiGauge snapshot", () => {
  const wrapper = mount(MdiGauge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
