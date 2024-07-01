
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbMultipleOutline from "../../src/components/MdiLightbulbMultipleOutline.vue";

test("MdiLightbulbMultipleOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
