
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandWater from "../../src/components/MdiHandWater.vue";

test("MdiHandWater snapshot", () => {
  const wrapper = mount(MdiHandWater, {});
  expect(wrapper.html()).toMatchSnapshot();
});
