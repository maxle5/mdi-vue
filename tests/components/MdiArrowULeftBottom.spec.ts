
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowULeftBottom from "../../src/components/MdiArrowULeftBottom.vue";

test("MdiArrowULeftBottom snapshot", () => {
  const wrapper = mount(MdiArrowULeftBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
