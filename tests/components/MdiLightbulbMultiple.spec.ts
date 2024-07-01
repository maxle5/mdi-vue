
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbMultiple from "../../src/components/MdiLightbulbMultiple.vue";

test("MdiLightbulbMultiple snapshot", () => {
  const wrapper = mount(MdiLightbulbMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
