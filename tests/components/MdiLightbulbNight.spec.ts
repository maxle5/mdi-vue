
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbNight from "../../src/components/MdiLightbulbNight.vue";

test("MdiLightbulbNight snapshot", () => {
  const wrapper = mount(MdiLightbulbNight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
