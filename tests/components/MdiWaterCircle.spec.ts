
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterCircle from "../../src/components/MdiWaterCircle.vue";

test("MdiWaterCircle snapshot", () => {
  const wrapper = mount(MdiWaterCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
