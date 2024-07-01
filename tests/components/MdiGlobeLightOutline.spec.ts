
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlobeLightOutline from "../../src/components/MdiGlobeLightOutline.vue";

test("MdiGlobeLightOutline snapshot", () => {
  const wrapper = mount(MdiGlobeLightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
