
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrendingNeutral from "../../src/components/MdiTrendingNeutral.vue";

test("MdiTrendingNeutral snapshot", () => {
  const wrapper = mount(MdiTrendingNeutral, {});
  expect(wrapper.html()).toMatchSnapshot();
});
