
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOnOutline from "../../src/components/MdiLightbulbOnOutline.vue";

test("MdiLightbulbOnOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbOnOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
