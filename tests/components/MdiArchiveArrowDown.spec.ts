
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveArrowDown from "../../src/components/MdiArchiveArrowDown.vue";

test("MdiArchiveArrowDown snapshot", () => {
  const wrapper = mount(MdiArchiveArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
