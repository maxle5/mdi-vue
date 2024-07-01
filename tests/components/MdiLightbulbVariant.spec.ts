
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbVariant from "../../src/components/MdiLightbulbVariant.vue";

test("MdiLightbulbVariant snapshot", () => {
  const wrapper = mount(MdiLightbulbVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
