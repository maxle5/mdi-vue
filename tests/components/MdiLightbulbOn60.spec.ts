
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn60 from "../../src/components/MdiLightbulbOn60.vue";

test("MdiLightbulbOn60 snapshot", () => {
  const wrapper = mount(MdiLightbulbOn60, {});
  expect(wrapper.html()).toMatchSnapshot();
});
