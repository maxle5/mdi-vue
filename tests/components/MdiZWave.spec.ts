
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZWave from "../../src/components/MdiZWave.vue";

test("MdiZWave snapshot", () => {
  const wrapper = mount(MdiZWave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
