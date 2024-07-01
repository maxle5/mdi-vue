
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoolantTemperature from "../../src/components/MdiCoolantTemperature.vue";

test("MdiCoolantTemperature snapshot", () => {
  const wrapper = mount(MdiCoolantTemperature, {});
  expect(wrapper.html()).toMatchSnapshot();
});
