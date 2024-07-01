
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbGroup from "../../src/components/MdiLightbulbGroup.vue";

test("MdiLightbulbGroup snapshot", () => {
  const wrapper = mount(MdiLightbulbGroup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
