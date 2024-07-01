
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbGroupOffOutline from "../../src/components/MdiLightbulbGroupOffOutline.vue";

test("MdiLightbulbGroupOffOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbGroupOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
