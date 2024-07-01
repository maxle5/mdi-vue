
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOutline from "../../src/components/MdiLightbulbOutline.vue";

test("MdiLightbulbOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
