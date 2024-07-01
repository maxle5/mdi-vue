
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbAuto from "../../src/components/MdiLightbulbAuto.vue";

test("MdiLightbulbAuto snapshot", () => {
  const wrapper = mount(MdiLightbulbAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
