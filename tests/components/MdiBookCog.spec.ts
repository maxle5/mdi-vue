
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookCog from "../../src/components/MdiBookCog.vue";

test("MdiBookCog snapshot", () => {
  const wrapper = mount(MdiBookCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
