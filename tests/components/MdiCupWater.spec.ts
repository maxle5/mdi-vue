
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCupWater from "../../src/components/MdiCupWater.vue";

test("MdiCupWater snapshot", () => {
  const wrapper = mount(MdiCupWater, {});
  expect(wrapper.html()).toMatchSnapshot();
});
