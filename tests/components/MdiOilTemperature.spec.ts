
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOilTemperature from "../../src/components/MdiOilTemperature.vue";

test("MdiOilTemperature snapshot", () => {
  const wrapper = mount(MdiOilTemperature, {});
  expect(wrapper.html()).toMatchSnapshot();
});
