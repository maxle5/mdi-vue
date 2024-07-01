
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTranslate from "../../src/components/MdiTranslate.vue";

test("MdiTranslate snapshot", () => {
  const wrapper = mount(MdiTranslate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
