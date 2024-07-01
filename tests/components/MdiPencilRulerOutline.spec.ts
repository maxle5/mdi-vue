
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilRulerOutline from "../../src/components/MdiPencilRulerOutline.vue";

test("MdiPencilRulerOutline snapshot", () => {
  const wrapper = mount(MdiPencilRulerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
