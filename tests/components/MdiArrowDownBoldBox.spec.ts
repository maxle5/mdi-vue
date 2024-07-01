
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownBoldBox from "../../src/components/MdiArrowDownBoldBox.vue";

test("MdiArrowDownBoldBox snapshot", () => {
  const wrapper = mount(MdiArrowDownBoldBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
