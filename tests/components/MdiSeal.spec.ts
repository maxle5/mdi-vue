
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeal from "../../src/components/MdiSeal.vue";

test("MdiSeal snapshot", () => {
  const wrapper = mount(MdiSeal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
