
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanHorizontal from "../../src/components/MdiPanHorizontal.vue";

test("MdiPanHorizontal snapshot", () => {
  const wrapper = mount(MdiPanHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
