
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn50 from "../../src/components/MdiLightbulbOn50.vue";

test("MdiLightbulbOn50 snapshot", () => {
  const wrapper = mount(MdiLightbulbOn50, {});
  expect(wrapper.html()).toMatchSnapshot();
});
