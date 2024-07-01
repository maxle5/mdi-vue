
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYahoo from "../../src/components/MdiYahoo.vue";

test("MdiYahoo snapshot", () => {
  const wrapper = mount(MdiYahoo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
