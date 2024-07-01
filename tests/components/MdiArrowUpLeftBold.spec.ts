
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpLeftBold from "../../src/components/MdiArrowUpLeftBold.vue";

test("MdiArrowUpLeftBold snapshot", () => {
  const wrapper = mount(MdiArrowUpLeftBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
