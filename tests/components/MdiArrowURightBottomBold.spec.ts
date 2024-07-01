
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowURightBottomBold from "../../src/components/MdiArrowURightBottomBold.vue";

test("MdiArrowURightBottomBold snapshot", () => {
  const wrapper = mount(MdiArrowURightBottomBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
