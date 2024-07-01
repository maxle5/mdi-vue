
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareWave from "../../src/components/MdiSquareWave.vue";

test("MdiSquareWave snapshot", () => {
  const wrapper = mount(MdiSquareWave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
