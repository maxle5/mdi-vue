
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTranslateVariant from "../../src/components/MdiTranslateVariant.vue";

test("MdiTranslateVariant snapshot", () => {
  const wrapper = mount(MdiTranslateVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
