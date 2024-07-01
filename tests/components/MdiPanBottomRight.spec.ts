
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanBottomRight from "../../src/components/MdiPanBottomRight.vue";

test("MdiPanBottomRight snapshot", () => {
  const wrapper = mount(MdiPanBottomRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
