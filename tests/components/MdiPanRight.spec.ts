
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanRight from "../../src/components/MdiPanRight.vue";

test("MdiPanRight snapshot", () => {
  const wrapper = mount(MdiPanRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
