
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCosineWave from "../../src/components/MdiCosineWave.vue";

test("MdiCosineWave snapshot", () => {
  const wrapper = mount(MdiCosineWave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
