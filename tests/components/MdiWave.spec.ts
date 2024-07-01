
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWave from "../../src/components/MdiWave.vue";

test("MdiWave snapshot", () => {
  const wrapper = mount(MdiWave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
