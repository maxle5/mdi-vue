
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn30 from "../../src/components/MdiLightbulbOn30.vue";

test("MdiLightbulbOn30 snapshot", () => {
  const wrapper = mount(MdiLightbulbOn30, {});
  expect(wrapper.html()).toMatchSnapshot();
});
