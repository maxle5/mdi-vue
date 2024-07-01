
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowflakeThermometer from "../../src/components/MdiSnowflakeThermometer.vue";

test("MdiSnowflakeThermometer snapshot", () => {
  const wrapper = mount(MdiSnowflakeThermometer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
