
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEvPlugType2 from "../../src/components/MdiEvPlugType2.vue";

test("MdiEvPlugType2 snapshot", () => {
  const wrapper = mount(MdiEvPlugType2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
