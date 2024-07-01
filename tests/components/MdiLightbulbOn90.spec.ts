
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn90 from "../../src/components/MdiLightbulbOn90.vue";

test("MdiLightbulbOn90 snapshot", () => {
  const wrapper = mount(MdiLightbulbOn90, {});
  expect(wrapper.html()).toMatchSnapshot();
});
