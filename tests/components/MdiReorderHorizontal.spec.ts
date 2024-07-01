
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReorderHorizontal from "../../src/components/MdiReorderHorizontal.vue";

test("MdiReorderHorizontal snapshot", () => {
  const wrapper = mount(MdiReorderHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
