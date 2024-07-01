
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbAutoOutline from "../../src/components/MdiLightbulbAutoOutline.vue";

test("MdiLightbulbAutoOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbAutoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
