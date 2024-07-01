
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRead from "../../src/components/MdiRead.vue";

test("MdiRead snapshot", () => {
  const wrapper = mount(MdiRead, {});
  expect(wrapper.html()).toMatchSnapshot();
});
