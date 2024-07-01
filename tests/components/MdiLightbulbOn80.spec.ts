
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn80 from "../../src/components/MdiLightbulbOn80.vue";

test("MdiLightbulbOn80 snapshot", () => {
  const wrapper = mount(MdiLightbulbOn80, {});
  expect(wrapper.html()).toMatchSnapshot();
});
