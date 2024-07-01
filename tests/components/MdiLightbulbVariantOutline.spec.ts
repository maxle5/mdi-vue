
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbVariantOutline from "../../src/components/MdiLightbulbVariantOutline.vue";

test("MdiLightbulbVariantOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
