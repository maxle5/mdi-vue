
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandWave from "../../src/components/MdiHandWave.vue";

test("MdiHandWave snapshot", () => {
  const wrapper = mount(MdiHandWave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
