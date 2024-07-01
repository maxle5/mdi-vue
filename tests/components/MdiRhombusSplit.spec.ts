
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRhombusSplit from "../../src/components/MdiRhombusSplit.vue";

test("MdiRhombusSplit snapshot", () => {
  const wrapper = mount(MdiRhombusSplit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
