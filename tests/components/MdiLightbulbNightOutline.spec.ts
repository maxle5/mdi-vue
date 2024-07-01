
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbNightOutline from "../../src/components/MdiLightbulbNightOutline.vue";

test("MdiLightbulbNightOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbNightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
