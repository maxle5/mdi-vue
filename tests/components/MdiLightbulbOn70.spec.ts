
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn70 from "../../src/components/MdiLightbulbOn70.vue";

test("MdiLightbulbOn70 snapshot", () => {
  const wrapper = mount(MdiLightbulbOn70, {});
  expect(wrapper.html()).toMatchSnapshot();
});
