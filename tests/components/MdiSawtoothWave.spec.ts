
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSawtoothWave from "../../src/components/MdiSawtoothWave.vue";

test("MdiSawtoothWave snapshot", () => {
  const wrapper = mount(MdiSawtoothWave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
