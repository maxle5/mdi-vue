
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbFluorescentTube from "../../src/components/MdiLightbulbFluorescentTube.vue";

test("MdiLightbulbFluorescentTube snapshot", () => {
  const wrapper = mount(MdiLightbulbFluorescentTube, {});
  expect(wrapper.html()).toMatchSnapshot();
});
