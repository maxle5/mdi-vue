
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaves from "../../src/components/MdiWaves.vue";

test("MdiWaves snapshot", () => {
  const wrapper = mount(MdiWaves, {});
  expect(wrapper.html()).toMatchSnapshot();
});
