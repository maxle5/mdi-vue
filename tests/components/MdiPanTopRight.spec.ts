
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanTopRight from "../../src/components/MdiPanTopRight.vue";

test("MdiPanTopRight snapshot", () => {
  const wrapper = mount(MdiPanTopRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
