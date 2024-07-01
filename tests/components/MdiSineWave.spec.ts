
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSineWave from "../../src/components/MdiSineWave.vue";

test("MdiSineWave snapshot", () => {
  const wrapper = mount(MdiSineWave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
