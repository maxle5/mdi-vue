
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRhombusMediumOutline from "../../src/components/MdiRhombusMediumOutline.vue";

test("MdiRhombusMediumOutline snapshot", () => {
  const wrapper = mount(MdiRhombusMediumOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
