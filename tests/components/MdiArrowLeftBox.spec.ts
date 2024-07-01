
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBox from "../../src/components/MdiArrowLeftBox.vue";

test("MdiArrowLeftBox snapshot", () => {
  const wrapper = mount(MdiArrowLeftBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
