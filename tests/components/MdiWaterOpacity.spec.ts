
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterOpacity from "../../src/components/MdiWaterOpacity.vue";

test("MdiWaterOpacity snapshot", () => {
  const wrapper = mount(MdiWaterOpacity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
