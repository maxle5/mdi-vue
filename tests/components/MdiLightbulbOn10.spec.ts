
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn10 from "../../src/components/MdiLightbulbOn10.vue";

test("MdiLightbulbOn10 snapshot", () => {
  const wrapper = mount(MdiLightbulbOn10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
