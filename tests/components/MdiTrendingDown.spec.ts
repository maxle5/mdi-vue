
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrendingDown from "../../src/components/MdiTrendingDown.vue";

test("MdiTrendingDown snapshot", () => {
  const wrapper = mount(MdiTrendingDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
