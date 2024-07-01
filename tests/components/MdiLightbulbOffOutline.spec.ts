
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOffOutline from "../../src/components/MdiLightbulbOffOutline.vue";

test("MdiLightbulbOffOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
