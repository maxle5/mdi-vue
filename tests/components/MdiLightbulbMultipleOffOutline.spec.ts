
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbMultipleOffOutline from "../../src/components/MdiLightbulbMultipleOffOutline.vue";

test("MdiLightbulbMultipleOffOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbMultipleOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
