
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMinus from "../../src/components/MdiFileMinus.vue";

test("MdiFileMinus snapshot", () => {
  const wrapper = mount(MdiFileMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
