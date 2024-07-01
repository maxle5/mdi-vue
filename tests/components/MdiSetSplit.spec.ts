
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetSplit from "../../src/components/MdiSetSplit.vue";

test("MdiSetSplit snapshot", () => {
  const wrapper = mount(MdiSetSplit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
