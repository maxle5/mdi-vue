
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBottom from "../../src/components/MdiArrowLeftBottom.vue";

test("MdiArrowLeftBottom snapshot", () => {
  const wrapper = mount(MdiArrowLeftBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
