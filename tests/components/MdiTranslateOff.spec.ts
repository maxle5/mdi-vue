
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTranslateOff from "../../src/components/MdiTranslateOff.vue";

test("MdiTranslateOff snapshot", () => {
  const wrapper = mount(MdiTranslateOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
