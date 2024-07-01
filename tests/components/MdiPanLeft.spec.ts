
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanLeft from "../../src/components/MdiPanLeft.vue";

test("MdiPanLeft snapshot", () => {
  const wrapper = mount(MdiPanLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
