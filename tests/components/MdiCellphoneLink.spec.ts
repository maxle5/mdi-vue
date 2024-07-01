
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneLink from "../../src/components/MdiCellphoneLink.vue";

test("MdiCellphoneLink snapshot", () => {
  const wrapper = mount(MdiCellphoneLink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
