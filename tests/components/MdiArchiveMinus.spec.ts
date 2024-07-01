
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveMinus from "../../src/components/MdiArchiveMinus.vue";

test("MdiArchiveMinus snapshot", () => {
  const wrapper = mount(MdiArchiveMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
