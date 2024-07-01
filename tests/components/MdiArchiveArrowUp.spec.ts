
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveArrowUp from "../../src/components/MdiArchiveArrowUp.vue";

test("MdiArchiveArrowUp snapshot", () => {
  const wrapper = mount(MdiArchiveArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
