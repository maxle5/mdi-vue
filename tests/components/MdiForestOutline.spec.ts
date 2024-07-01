
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForestOutline from "../../src/components/MdiForestOutline.vue";

test("MdiForestOutline snapshot", () => {
  const wrapper = mount(MdiForestOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
