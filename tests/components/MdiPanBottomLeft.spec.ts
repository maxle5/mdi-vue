
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanBottomLeft from "../../src/components/MdiPanBottomLeft.vue";

test("MdiPanBottomLeft snapshot", () => {
  const wrapper = mount(MdiPanBottomLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
