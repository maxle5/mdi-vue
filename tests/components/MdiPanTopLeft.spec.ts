
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanTopLeft from "../../src/components/MdiPanTopLeft.vue";

test("MdiPanTopLeft snapshot", () => {
  const wrapper = mount(MdiPanTopLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
