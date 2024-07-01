
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsDiamond from "../../src/components/MdiCardsDiamond.vue";

test("MdiCardsDiamond snapshot", () => {
  const wrapper = mount(MdiCardsDiamond, {});
  expect(wrapper.html()).toMatchSnapshot();
});
