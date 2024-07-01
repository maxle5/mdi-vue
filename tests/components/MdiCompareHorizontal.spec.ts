
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompareHorizontal from "../../src/components/MdiCompareHorizontal.vue";

test("MdiCompareHorizontal snapshot", () => {
  const wrapper = mount(MdiCompareHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
