
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHead from "../../src/components/MdiHead.vue";

test("MdiHead snapshot", () => {
  const wrapper = mount(MdiHead, {});
  expect(wrapper.html()).toMatchSnapshot();
});
