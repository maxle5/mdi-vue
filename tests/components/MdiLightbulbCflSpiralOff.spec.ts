
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbCflSpiralOff from "../../src/components/MdiLightbulbCflSpiralOff.vue";

test("MdiLightbulbCflSpiralOff snapshot", () => {
  const wrapper = mount(MdiLightbulbCflSpiralOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
