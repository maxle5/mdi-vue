
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWater from "../../src/components/MdiWater.vue";

test("MdiWater snapshot", () => {
  const wrapper = mount(MdiWater, {});
  expect(wrapper.html()).toMatchSnapshot();
});
