
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn20 from "../../src/components/MdiLightbulbOn20.vue";

test("MdiLightbulbOn20 snapshot", () => {
  const wrapper = mount(MdiLightbulbOn20, {});
  expect(wrapper.html()).toMatchSnapshot();
});
