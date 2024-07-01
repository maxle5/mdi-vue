
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbFluorescentTubeOutline from "../../src/components/MdiLightbulbFluorescentTubeOutline.vue";

test("MdiLightbulbFluorescentTubeOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbFluorescentTubeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
