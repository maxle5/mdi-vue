
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn from "../../src/components/MdiLightbulbOn.vue";

test("MdiLightbulbOn snapshot", () => {
  const wrapper = mount(MdiLightbulbOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
