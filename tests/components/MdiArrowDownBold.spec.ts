
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownBold from "../../src/components/MdiArrowDownBold.vue";

test("MdiArrowDownBold snapshot", () => {
  const wrapper = mount(MdiArrowDownBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
