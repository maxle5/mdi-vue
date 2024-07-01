
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeatWave from "../../src/components/MdiHeatWave.vue";

test("MdiHeatWave snapshot", () => {
  const wrapper = mount(MdiHeatWave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
